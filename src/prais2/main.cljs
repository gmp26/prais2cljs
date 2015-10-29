(ns ^:figwheel-always prais2.main
    (:require-macros [jayq.macros :refer [ready]]
                     [cljs.core.async.macros :refer [go-loop]])
    (:require [rum.core :as rum]
              [cljs.reader :as reader]
              [clojure.set :refer (intersection)]
              [cljsjs.react]
              [cljs.core.async :refer [chan <! pub sub put!]]
              [prais2.utils :refer [key-with]]
              [prais2.core :as core :refer [event-bus event-bus-pub]]
              [prais2.routes :as routes]
              [prais2.content :as content]
              [prais2.data :as data]
              [prais2.chrome :as chrome]
              [prais2.intro :refer [render-intro]]
              [prais2.faqs :refer [render-faqs]]
              [jayq.core :refer ($)])
    )



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

;; mixin to initialise bootstrap popover code code
(def bs-popover
  {:did-mount (fn [state]
                (ready
                 (.popover ($ "[data-toggle=\"popover\"]")))
                state)})

;; mixin to initialise bootstrap tooltip code code
(def bs-tooltip
  {:did-mount (fn [state]
                (ready
                 (.tooltip ($ "[data-toggle=\"tooltip\"]")))
                state)})

(rum/defc render-404 []
  [:h1 "Page not found"])

;;
;; Code snippet to remove columns from table
;;
(comment headers
         (assoc (first data')
                                :n-deaths false
                                :n-survivors false
                                :h-code false)
         data (conj (rest data') headers))

(rum/defc render-table [id]
  (let [data content/table1-data
        ]
    [:div
     (map-indexed key-with
                  [(data/modal)
                   (data/table1 core/app data event-bus)
                   (data/option-menu event-bus)])]))


(rum/defc render-data [id]
  [:div {:style {:width "100%"}}
   [:p]
   [:iframe {:src "#/table"
             :style {:width "80%"
                     :display "block"
                     :margin "auto auto"
                     :min-width "885px"
                     :height "885px"
                     }}]])


;;;
;; pager
;;;
(rum/defc render-page < rum/reactive []
  (let [{:keys [page section]} (rum/react core/app)]
    [:div
     (cond

       (= page :intro)
       (do
         (aset js/location "href" (routes/intro))
         (map-indexed key-with
                      [(chrome/header true)
                       (render-intro section)
                       (chrome/footer)])
)

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
         (render-404 nil)))]

    ))

;;
;; Contains the app user interface in here
;;
(rum/defc app-container < bs-popover bs-tooltip rum/reactive []
  [:div
   (map-indexed key-with [(render-page) (debug)])]
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
      (let [event (<! in-chan)]
        (handle event))
      (recur)))
  )

(defn dispatch-central
  "centralised dispatch of all events"
  []

  (dispatch event-bus-pub :slider-axis-value
            (fn [[_ slider-value]]
              (swap! core/app #(assoc % :slider-axis-value slider-value))))

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
            (fn [[_ row]]
              (prn "dispatching")
              (data/open-hospital-modal row)))

  (dispatch event-bus-pub :close-hospital-modal
            (fn [_]
              (data/close-hospital-modal)))


  (dispatch event-bus-pub :morph-full-range
            (fn [_]
              (prn (str "morph to full range"))
              (swap! core/app #(assoc % :slider-axis-value 0))))


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
              (swap! core/app #(assoc % :page :faqs)))))




(dispatch-central)

;;
;; optionally do something on app reload
;;
(defn on-js-reload []
  (prn "Hi")
)
