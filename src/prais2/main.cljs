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
              [prais2.map-data :refer [render-map-data]]
              [prais2.faqs :refer [render-faqs]]
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
   [:a (core/href "home") "Try the home page."]])

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

  [:.row

   [:.col-sm-offset-1.col-sm-10
    [:h1 "Explore the data"]

    [:p "The " [:b "two minute guide"] " explains how we present the results. Parents who helped us develop the web site found the guide useful in interpreting the data."]

    [:ul.nav.nav-pills {:role "tablist"}

     [:li {:class (active? :map)
           :role "presentation"}
      [:a#map-tab {:href "#"
                   :aria-controls "mapped-data"
                   :role "tab"
                   :on-click #(core/click->event-bus % :data :map)}
       [:i.fa.fa-map-marker] " Choose a hospital"]]

     [:li {:class (active? :table)
           :role "presentation"}
      [:a#table-tab {:href "#"
                     :aria-controls "data-table"
                     :role "tab"
                     :on-click #(core/click->event-bus % :data :table)}
       [:i.fa.fa-table] " List all data"]]

     [:li {:class (active? :animation)
           :role "presentation"}
      [:a#map-tab {:href "#"
                   :aria-controls "mapped-data"
                   :role "tab"
                   :on-click #(core/click->event-bus % :data :animation)}
       [:i.fa.fa-video-camera] " Two minute guide"]]

     ]]])



(rum/defc render-data-tab-panes < rum/reactive [data section]
  [:row.tab-content

   [:.tab-pane.col-sm-12 {:class (active? :map)
                          :id "mapped-data"}
    (when (active? :map)
      (render-map-data))]

   [:.tab-pane.col-sm-12 {:class (active? :table)
                :id "data-table"}
    (data/modal)
    (when (active? :table)
      (data/list-tab core/app data event-bus))]

   [:.tab-pane.col-sm-12 {:class (active? :animation)
                          :id    "mapped-data"}
    (when (active? :animation)
      [:section.col-sm-offset-1.col-sm-10
       [:h2 "A two minute guide to how we present the results"]
       [:video
        (core/isrc "assets/how-animatic6.mp4" :controls "true" :preload "true" :style {:max-width "600px"})]
       ;todo " Add thumbnail"
       [:p "If you'd like to know how the predicted range is calculated, you can watch our 3 minute video in
       the " [:a (core/href "faqs") "Everything Else section"] "."]
       ])]

   [:.tab-pane.col-sm-12 {:class (active? :animation2)
                          :id    "mapped-data"}
    (when (active? :animation2)
      [:section.col-sm-offset-1.col-sm-10
       ;[:h2 "How is the predicted range calculated?"]
       [:video
        (core/isrc "assets/pr-animatic5.mp4" :controls true :preload true
                   :style {:max-width "480px"})]
       ;[:video {:src      "assets/pr-animatic1.mp4" :controls "true"}]
       ;[:video {:src      "assets/pr-animatic2.mp4" :controls "true"}]
       ])]
   ]
)

(rum/defc render-data < rum/reactive (core/monitor-react "DATA>" false)
  [section]
  (let [app (rum/react core/app)
        data ((data/table-data (:datasource app)))
        section (:section app)]
    [:div.container-fluid
     (map-indexed key-with
                  [
                   (render-data-tabs section)
                   (render-data-tab-panes data section)
                   ])]))

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


(defn deselect-all []
  (swap! app assoc :map-h-code nil :selected-h-code nil))

(def scroll-to-top
  {:did-update (fn [state]
                 (js/window.scrollTo 0 0)
                 state)})

(rum/defc page-choice < rum/static scroll-to-top [page section push]
  [:div {:on-click close-start-modal
         :on-touch-start close-start-modal}
   (cond
     (= page :home)
     (do
       (prn "routes/homes = " (routes/homes))
       (if push
         (.pushState js/history [] "" (routes/homes))
         (.replaceState js/history [] "" (routes/homes)))
       (deselect-all)
       (map-indexed key-with
                    [(chrome/header true)
                     (render-home)
                     (chrome/footer)]))

     (= page :intro)
     (do
       (prn "routes/intros = " (routes/intros))
       (if push
         (.pushState js/history [] "" (routes/intros))
         (.replaceState js/history [] "" (routes/intros)))
       (deselect-all)
       (map-indexed key-with
                    [(chrome/header)
                     (render-intro)
                     (chrome/footer)]))

     (= page :data)
     (do
       (prn "routes/datas = " (routes/datas))
       (if push
         (.pushState js/history [] "" (routes/datas))
         (.replaceState js/history [] "" (routes/datas)))

       (deselect-all)
       (map-indexed key-with
                    [(chrome/header)
                     (render-data section)
                     (chrome/footer)]))

     (= page :faqs)
     (do
       (prn "section = " section)
       (deselect-all)
       (when (or (= section :top) (= section nil))
         (prn "routes/faqs = " (routes/faqs))
         (if push
           (.pushState js/history [] "" (routes/faqs {:section :top}))
           (.replaceState js/history [] "" (routes/faqs {:section :top}))))
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
  (let [{:keys [page section need-a-push]} (rum/react core/app)]
    (swap! core/app assoc :need-a-push false)
    (page-choice page section need-a-push)))


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
                                      :detail-slider-axis-value 1))))

  (dispatch event-bus-pub :faqs
            (fn [[_ section]]
              (prn "nav to faqs " section)
              (swap! core/app #(assoc % :page :faqs :section section))))

  (dispatch event-bus-pub :show-faq
            (fn [[_ faq-ref]]
              (prn faq-ref)
              (let [[sec id] faq-ref]
                (do (prn "nav to faq " faq-ref " = " sec "," id)
                    (prn "routes/faq/x/y " (routes/faq {:section sec :id id}))
                    (.pushState js/history [] "" (routes/faq {:section sec :id id}))
                    ;(.replaceState js/history [] "" (routes/faq {:section sec :id id}))
                    (swap! core/app #(assoc % :page :faqs :section faq-ref))))))

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
  (enable-console-print!)
  (.log js/console "reloading")
  (prn "Reloaded")
  (put! event-bus [:reloading nil]))
