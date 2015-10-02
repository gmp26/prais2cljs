(ns ^:figwheel-always prais2.main
    (:require-macros [jayq.macros :refer [ready]]
                     [cljs.core.async.macros :refer [go-loop]])
    (:require [rum :as r]
              [cljs.reader :as reader]
              [clojure.set :refer (intersection)]
              [cljsjs.react]
              [cljs.core.async :refer [chan <! pub sub put!]]
              [prais2.core :as core :refer [event-bus event-bus-pub]]
              [prais2.routes]
              [prais2.content :as content]
              [prais2.data :as data]
              [prais2.chrome :as chrome]
              [prais2.intro :refer [render-intro]]
              [prais2.faqs :refer [render-faqs]]
              [jayq.core :refer ($)])
    )



(enable-console-print!)

(defn el [id] (.getElementById js/document id))


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
(r/defc debug < r/reactive []
  [:div
   [:p (str (r/react core/app))]]
  )

(r/defc para < r/static [text]
  [:p text])

;; mixin to initialise bootstrap popover code code
(def bs-popover
  {:did-mount (fn [state]
                (ready
                 (.popover ($ "[data-toggle=\"popover\"]")))
                state)
   })

;; mixin to initialise bootstrap tooltip code code
(def bs-tooltip
  {:did-mount (fn [state]
                (ready
                 (.tooltip ($ "[data-toggle=\"tooltip\"]")))
                state)
   })


(r/defc render-home []
  [:h1 "Home"])

(r/defc render-table [id]
  [:div
   (map-indexed data/key-with
                  [(data/modal)
                   (data/table1 core/app content/table1-data event-bus)
                   (data/option-menu event-bus)])])


(r/defc render-data [id]
  [:iframe {:src "#table"
            :style {:width "100%"
                    :height "885px"
                    }}])


#_(r/defc render-faqs [id]
  [:div "dummy"])

;;;
;; pager
;;;
(r/defc render-page < r/reactive []
  (let [{:keys [page section]} (r/react core/app)]
    (cond

      (= page :intro)
      (render-intro section)

      (= page :data)
      (render-data section)

      (= page :table)
      (render-table section)

      (= page :faqs)
      (render-faqs section)

      :else
      (render-intro nil))

    ))

;;
;; Contains the app user interface in here
;;
(r/defc app-container < bs-popover bs-tooltip r/reactive []
  [:div
   (map-indexed data/key-with
                (if (= (:page (r/react core/app)) :table)
                  [(render-page)]
                  [(chrome/header)
                   (render-page)
                   (chrome/footer)]
                  ))

   #_(map-indexed
    #(r/with-key %2 %1)
    [(data/modal)
     (data/table1 core/app content/table1-data event-bus)
     (data/option-menu event-bus)
     #_(data/option-controls event-bus)
     #_(para "")
     #_(debug)])
])

;;
;; mount main component on html app element
;;
(r/mount (app-container) (el "app"))


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
            (fn [[_ slider-value]] (swap! core/app #(assoc % :slider-axis-value slider-value))))

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

  (dispatch event-bus-pub :row-clicked
            (fn [[_ row]]
              (swap! core/app #(assoc % :selected-row row))))

  (dispatch event-bus-pub :pudding
            (fn [[_ key-code]] (prn (str "you pressed " key-code))))


  (dispatch event-bus-pub :nav-intro
            (fn [_]
              (prn "nav to intro")
              (swap! core/app #(assoc % :page :intro))))

  (dispatch event-bus-pub :nav-data
            (fn [_]
              (prn "nav to data")
              (swap! core/app #(assoc % :page :data))))

  (dispatch event-bus-pub :nav-faqs
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
