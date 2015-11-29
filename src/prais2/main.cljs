(ns ^:figwheel-always prais2.main
    (:require-macros [jayq.macros :refer [ready]]
                     [cljs.core.async.macros :refer [go-loop]])
    (:require [rum.core :as rum]
              [cljs.reader :as reader]
              [clojure.set :refer (intersection)]
              [cljsjs.react]
              [cljs.core.async :refer [chan <! pub sub put! close!]]
              [prais2.utils :refer [key-with]]
              [prais2.core :as core :refer [event-bus event-bus-pub bs-popover bs-tooltip]]
              [prais2.routes :as routes]
              [prais2.content :as content]
              [prais2.data :as data]
              [prais2.open-layers-map :as map]
              [prais2.chrome :as chrome]
              [prais2.intro :refer [render-intro]]
              [prais2.faqs :refer [render-faqs]]
              [prais2.logger :as logger :refer [log-bus-pub]]
              [jayq.core :refer ($)]
              [cljsjs.moment :as moment]))

(enable-console-print!)

(defn select
  "Return the first matching DOM element selected by the CSS selector. "
  [selector]
  (.querySelector js/document selector))

(defn selectAll
  "Returns a NodeList object containing all matching DOM elements."
  [selector]
  (.querySelectorAll js/document selector))


;;;
;;  "debug app-state"
;;;
(rum/defc debug < rum/reactive []
  [:div
   [:p (str (rum/react core/app))]]
  )

(rum/defc para < rum/static [text]
  [:p text])

(rum/defc render-404 []
  [:h1 "Page not found. "
   [:a {:href "/"} "Try the home page."]])

;;
;; Code snippet to remove columns from table
;;
(comment headers
         (assoc (first data')
                :n-deaths false
                :n-survivors false
                :h-code false)
         data (conj (rest data') headers))

(rum/defc render-table < rum/reactive [id]
  (let [data ((data/table-data (:datasource (rum/react core/app))))]
    [:div
     (map-indexed key-with
                  [(data/modal)
                   (data/table1 core/app data event-bus)
                   (data/option-menu event-bus)])]))

(defn close-start-modal []
  (prn "closing")
  (let [new-session-id (.val ($ "#session-id"))]
    (when new-session-id
      (logger/write-log [:start-session nil] new-session-id)
      (.modal ($ "#start-modal") "hide"))))

(defn valid-session-id []
  (#(or (nil? %) (= "" %)) (rum/react logger/session-id)))

(rum/defc start-modal < rum/reactive []
  [:#start-modal.modal.fade {:tab-index -1
                             :role "dialog"
                             :aria-labelledby "myModalLabel"}
   [:.modal-dialog {:role "document"}
    [:.modal-content
     [:.modal-header {:key 1}
      [:h4.modal-title "Starting a new session"]]
     [:.modal-body {:key 2}
      [:form.form-horizontal
       [:.form-group
        {:class (if (valid-session-id) "has-error" "")}
        [:label.col-md-3.control-label {:for "session-id" :key 1}
         "Session id"]
        [:.col-sm-3 {:key 2}
         [:input#session-id.form-control
          {:type "text"
           :placeholder "my tag"
           :value (rum/react logger/session-id)
           :on-change #(reset! logger/session-id (.val ($ "#session-id")))}]]
        ]]]
     [:.modal-footer {:key 3}
      [:button.btn.btn-primary
       {:type "button"
        :disabled (valid-session-id)
        :on-click close-start-modal
        :on-touch-start close-start-modal}
       "OK"]
      ]]]
   ])

(def bs-open-popover
  {:did-mount (fn [state]
                (if (nil? @logger/session-id)
                  (ready (.modal ($ "#start-modal") (clj->js {:show true}))))
                state)})
;;;
;; pager
;;;

(rum/defc page-choice < rum/static [page section]
  [:div
   (cond
     (= page :intro)
     (do
       (aset js/location "href" (routes/intro))
       (map-indexed key-with
                    [(chrome/header true)
                     (render-intro section)
                     (chrome/footer)]))

     (= page :data)
     (do
       (aset js/location "href" (routes/data))
       (map-indexed key-with
                    [(chrome/header)
                     (render-table section)
                     (chrome/footer)]))

     (= page :faqs)
     (do
       (aset js/location "href" (routes/faqs))
       (map-indexed key-with
                    [(chrome/header)
                     (render-faqs section)
                     (chrome/footer)]))

     :else
     (do
       (prn "Route mismatch" page)
       (render-404)))])

(rum/defc render-page < bs-open-popover rum/reactive []
  (let [{:keys [page section]} (rum/react core/app)]
    [:div
     (map-indexed key-with
                  [(start-modal)
                   (page-choice page section)
                   (debug)])
     ]))

;;
;; Contains the app user interface
;;
(rum/defc app-container < bs-popover bs-tooltip rum/reactive []
  [:div
   (render-page)]
)

;;
;; mount main component on html app element
;;
(if-let [mount-point (core/el "app")]
  (rum/mount (app-container) mount-point))

;;;
;; Read events off the event bus and handle them
;;;
(defn dispatch
  "listen on a published event feed, handling events with the given key"
  [event-feed event-key handle]
  (let [in-chan (chan)]
    (sub event-feed event-key in-chan)
    (go-loop []
      (let [[ev-key ev-data :as event] (<! in-chan)]
        (if (= ev-key :reloading)
          (do
            (prn :reloading)
            (close! in-chan))
          (do (handle event)
              (when (= event-bus-pub event-feed)
                (logger/write-log event))
              (recur)))))))

(defn zoom-to-hospital
  [[_ h-code _] ]
  (prn (str "clicked on marker " (name h-code)))
  (swap! core/app #(assoc % :map-h-code h-code))
  (map/zoom-to-feature))

(defn dispatch-central
  "centralised dispatch of all events"
  []

  (dispatch event-bus-pub :reloading
            (fn [_] (prn "really reloaded")))

  (dispatch event-bus-pub :slider-axis-value
            (fn [[_ slider-value]]
              (swap! core/app #(assoc % :slider-axis-value slider-value))))

  (dispatch event-bus-pub :detail-slider-axis-value
            (fn [[_ slider-value]]
              (swap! core/app #(assoc % :detail-slider-axis-value slider-value))))

  (dispatch event-bus-pub :sort-toggle
            (fn [[_ column-key]] (data/handle-sort core/app column-key)))

  (dispatch event-bus-pub :info-clicked
            (fn [[_ column-key]] (prn (str "clicked on info for column " column-key))))

  (dispatch event-bus-pub :change-colour-map
            (fn [[_ value]]
              (swap! core/app #(assoc % :theme (int value)))))

  (dispatch event-bus-pub :change-chart-state
            (fn [[_ value]]
              (swap! core/app #(assoc % :chart-state (int value)))))

  (dispatch event-bus-pub :open-hospital-modal
            (fn [[_ h-code]]
              (data/open-hospital-modal h-code)))

  (dispatch event-bus-pub :close-hospital-modal
            (fn [[_ h-code]]
              (data/close-hospital-modal)))

  (dispatch event-bus-pub :morph-full-range
            (fn [_]
              (prn (str "morph to full range"))
              (swap! core/app #(assoc % :slider-axis-value 0))))

  (dispatch event-bus-pub :change-datasource
            (fn [[_ new-source] ]
              (prn (str "datasource now " new-source))
              (swap! core/app #(assoc % :datasource new-source))))

  (dispatch event-bus-pub :click-on-map-marker zoom-to-hospital)

  (dispatch event-bus-pub :click-on-map-menu-item zoom-to-hospital)

  (dispatch event-bus-pub :reset-map-to-home
            (fn [_]
              (prn "reset map to home")
              (swap! core/app #(assoc % :map-h-code nil))
              (map/go-home)))

  (dispatch event-bus-pub :intro
            (fn [_]
              (prn "nav to intro")
              (swap! core/app #(assoc % :page :intro))))

  (dispatch event-bus-pub :data
            (fn [_]
              (prn "nav to data")
              (swap! core/app #(assoc % :page :data))))

  (dispatch event-bus-pub :faqs
            (fn [_]
              (prn "nav to faqs")
              (swap! core/app #(assoc % :page :faqs))))

  ;;;
  ;; log-bus handling from here
  ;;;
  (dispatch log-bus-pub :rewind
            (fn [_]
              (prn "rewind session")
              (reset! logger/log-state-index nil)))

  (dispatch log-bus-pub :undo
            (fn [_] (prn "undo")
              (swap! logger/log-state-index #(dec %))))

  (dispatch log-bus-pub :redo
            (fn [_] (prn "redo")
              (swap! logger/log-state-index #(inc %))))

  (dispatch log-bus-pub :view-session
            (fn [_] (logger/view-session)))

  (dispatch log-bus-pub :load-session
            (fn [_]
              (prn "load session")
              (logger/load-session)
              ))

  )

;; start the event dispatcher
(dispatch-central)


;;
;; optionally do something on app reload
;;
(defn on-js-reload []
  (prn "Reloaded")
  (put! event-bus [:reloading nil])
)
