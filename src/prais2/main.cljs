(ns ^:figwheel-always prais2.main
    (:require-macros ;[jayq.macros :refer [ready]]
                     [cljs.core.async.macros :refer [go-loop]])
    (:require [rum.core :as rum]
              [cljs.reader :as reader]
              [clojure.set :refer (intersection)]
              [cljsjs.react]
              [cljs.core.async :refer [chan <! pub sub put! close!]]
              [prais2.utils :refer [key-with]]
              [prais2.core :as core :refer [app event-bus event-bus-pub bs-popover bs-tooltip]]
              [prais2.routes :as routes]
              [prais2.content :as content]
              [prais2.data :as data]
              [prais2.open-layers-map :as map]
              [prais2.chrome :as chrome]
              [prais2.intro :refer [render-intro]]
              [prais2.home :refer [render-home]]
              [prais2.map-data :refer [render-map-data render-sample-data]]
              [prais2.faqs :refer [render-faqs]]
              [prais2.everything-else :refer [render-everything-else]]
              [prais2.logger :as logger :refer [log-bus-pub]]
              [cljsjs.jquery]
              ;;[jayq.core :refer [$]]

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

(defn active? [section]
  (if (= (:section @core/app) section) "active" nil))

(rum/defc render-data-tabs [section]
  [:.container
   [:.row
    [:h1 "Explore the data"]
    [:h4 {:clear "both"} "View an illustrative example or the data presented in a map or a list"]
    [:ul.nav.nav-pills {:role "tablist"
                       :style {:clear "both"}}
     [:li {:class (active? :example)
                  :role "presentation"}
      [:a#example-tab {:href "#"
                       :aria-controls "example-data"
                       :role "tab"
                       :on-click #(core/click->event-bus % :data :example)} "Example"]]

     [:li {:class (active? :map)
           :role "presentation"}
      [:a#map-tab {:href "#"
                   :aria-controls "mapped-data"
                   :role "tab"
                   :on-click #(core/click->event-bus % :data :map)} "Map"]]

     [:li {:class (active? :table)
           :role "presentation"}
      [:a#table-tab {:href "#"
           :aria-controls "data-table"
           :role "tab"
           :on-click #(core/click->event-bus % :data :table)} "List"]]]]])



(rum/defc render-data-tab-panes < rum/reactive [data section]
  [:.tab-content
   [:.tab-pane {:class (active? :example)
                :id "example-data"}
    (when (active? :example) (render-sample-data ))]

   [:.tab-pane {:class (active? :map)
                :id "mapped-data"}
    (when (active? :map) (render-map-data ))]

   [:.tab-pane {:class (active? :table)
                :id "data-table"}
    (when (active? :table) (data/modal))
    (data/list-tab core/app data event-bus)]]
)

(rum/defc render-data < rum/reactive (core/monitor-react "DATA>" false)
  [section]
  (let [app (rum/react core/app)
        data ((data/table-data (:datasource app)))
        section (:section app)]
    [:div
     (map-indexed key-with
                  [
                   (render-data-tabs section)
                   (render-data-tab-panes data section)
                   (data/option-menu event-bus)])])
)

(defn valid-session-id
  ([session-id]
   (#(not (or (nil? %) (= "" %))) session-id))
  ([]
   (valid-session-id @logger/session-id)))

(defn close-start-modal [event]
  (if (.hasClass (js/$ "#start-modal") "in")
    (let [new-session-id (.val (js/$ "#session-id"))]
      (when (valid-session-id new-session-id)
        (do
          (logger/write-log [:start-session nil] new-session-id)
          (.modal (js/$ "#start-modal") "hide"))))))

(rum/defc start-modal < rum/reactive []
  [:#start-modal.modal.fade {:tab-index -1
                             :role "dialog"
                             :aria-labelledby "myModalLabel"
                             :on-click close-start-modal
                             :on-touch-start close-start-modal
}
   [:.modal-dialog {:role "document"}
    [:.modal-content
     [:.modal-header {:key 1}
      [:h4.modal-title "Starting a new session"]]
     [:.modal-body {:key 2}
      [:form.form-horizontal
       [:.form-group
        {:class (if (valid-session-id) "" "has-error")}
        [:label.col-md-3.control-label {:for "session-id" :key 1}
         "Session id"]
        [:.col-sm-3 {:key 2}
         [:input#session-id.form-control
          {:type "text"
           :placeholder "my tag"
           :value (rum/react logger/session-id)
           :on-key-press #(if (= 13 (.-keyCode (.-nativeEvent %)))
                            (close-start-modal %))
           :on-change #(reset! logger/session-id (.val (js/$ "#session-id")))}]]
        ]]]
     [:.modal-footer {:key 3}
      [:button.btn.btn-primary
       {:type "button"
        :disabled (not (valid-session-id))
        :on-click close-start-modal
        :on-touch-start close-start-modal}
       "OK"]
      ]]]
   ])

(def bs-open-popover
  {:did-mount (fn [state]
                (if (nil? @logger/session-id)
                  (core/ready #(.modal (js/$ "#start-modal") (clj->js {:show true :backdrop :static}))))
                state)})
;;;
;; pager
;;;

(rum/defc page-choice < rum/static [page section]
  [:div {:on-click close-start-modal
         :on-touch-start close-start-modal}
   (cond
     (= page :home)
     (do
       (.pushState js/history [] "" (routes/homes))
       (map-indexed key-with
                    [(chrome/header true)
                     (render-home)
                     (chrome/footer)]))

     (= page :intro)
     (do
       (.pushState js/history [] "" (routes/intros))
       (map-indexed key-with
                    [(chrome/header)
                     (render-intro section)
                     (chrome/footer)]))

     (= page :data)
     (do
       (.pushState js/history [] "" (routes/datas))
       (map-indexed key-with
                    [(chrome/header)
                     (render-data section)
                     (chrome/footer)]))

     (= page :faqs)
     (do
       (prn "section = " section)
       (when (or (= section :top) (= section nil))
         (.pushState js/history [] "" (routes/faqs {:section :top})))
       (map-indexed key-with
                    [(chrome/header)
                     #_(render-everything-else section)
                     (render-faqs section)
                     (chrome/footer)]))

     :else
     (do
       (prn "Route mismatch" page)
       (render-404)))])

; add < bs-open-popover when start-modal is enabled
(rum/defc render-page < rum/reactive []
  (let [{:keys [page section]} (rum/react core/app)]
    [:div
     (map-indexed key-with
                  [;(start-modal)
                   (page-choice page section)
                   (debug)])
     ]))


;;
;; Contains the app user interface
;;
(rum/defc app-container < bs-popover bs-tooltip []
  (render-page app)
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
            (close! in-chan))
          (do (handle event)
              (when (= event-bus-pub event-feed)
                #_(prn "dispatched " event)
                (logger/write-log event))
              (recur)))))))

(defn zoom-to-hospital
  [[_ h-code _] ]
  (swap! core/app #(assoc % :map-h-code h-code))
  (map/zoom-to-feature))

(defn dispatch-central
  "centralised dispatch of all events"
  []

  (dispatch event-bus-pub :reloading
            (fn [_] (prn ":reloading event - no-op")))

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
              (swap! core/app #(assoc % :slider-axis-value 0))))

  (dispatch event-bus-pub :change-datasource
            (fn [[_ new-source] ]
              (swap! core/app #(assoc % :datasource new-source))))

  (dispatch event-bus-pub :click-on-map-marker zoom-to-hospital)

  (dispatch event-bus-pub :click-on-map-menu-item zoom-to-hospital)

  (dispatch event-bus-pub :just-london
            (fn [_]
              (swap! core/app #(assoc % :map-h-code nil))
              (map/go-london)))

  (dispatch event-bus-pub :reset-map-to-home
            (fn [_]
              (swap! core/app #(assoc % :map-h-code nil))
              (map/go-home)))

  (dispatch event-bus-pub :home
            (fn [[_ section]]
              (prn "nav to home " section)
              (let [ap @app]
                (swap! core/app #(assoc % :page :home :section section)))))

  (dispatch event-bus-pub :intro
            (fn [[_ section]]
              (prn "nav to intro " section)
              (let [ap @app]
                (swap! core/app #(assoc % :page :intro :section section)))))

  (dispatch event-bus-pub :data
            (fn [[_ section]]
              (prn "nav to data " section)
              (swap! core/app #(assoc % :page :data
                                      :section section
                                      :detail-slider-axis-value (if (= section :example) 0.9 1)))))

  (dispatch event-bus-pub :faqs
            (fn [[_ section]]
              (prn "nav to faqs " section)
              (swap! core/app #(assoc % :page :faqs :section section))))

  (dispatch event-bus-pub :show-faq
            (fn [[_ faq-ref]]
              (let [[sec id] faq-ref]
                (prn "nav to faq " faq-ref " = " sec "," id)
                (.pushState js/history [] "" (routes/faq {:section sec :id id}))
                (swap! core/app #(assoc % :page :faqs :section faq-ref)))))

  ;;;
  ;; log-bus handling from here
  ;;;
  (dispatch log-bus-pub :rewind
            (fn [_]
              (prn "rewind session: not yet")
              #_(reset! logger/log-state-index nil)))

  (dispatch log-bus-pub :undo
            (fn [_] #_(prn "undoing: not yet")
              #_(swap! logger/log-state-index #(if (zero? %) 0 (dec %)))))

  (dispatch log-bus-pub :redo
            (fn [_] (prn "redoing: not yet")
              #_(swap! logger/log-state-index #(if (< % (dec (count @logger/log-states))) (inc %) %))))



  (dispatch log-bus-pub :parse-session
            (fn [_]
              (prn "parse-session: not yet")
              #_(logger/parse-session)
              )))

;; start the event dispatcher
(dispatch-central)


;;
;; optionally do something on app reload
;;
(defn on-js-reload []
  (prn "Reloaded")
  (put! event-bus [:reloading nil]))
