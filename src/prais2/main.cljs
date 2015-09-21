(ns ^:figwheel-always prais2.main
    (:require-macros [jayq.macros :refer [ready]]
                     [cljs.core.async.macros :refer [go-loop]])
    (:require [rum :as r]
              [cljs.reader :as reader]
              [clojure.set :refer (intersection)]
              [cljsjs.react]
              [cljs.core.async :refer [chan <! pub sub]]
              [prais2.core :as core]
              [prais2.routes]
              [prais2.content :as content]
              [prais2.data :as data]
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
   [:p (str (r/react core/app))]
   [:p (str "is-print-media: " (core/query-media? "print"))]
   [:p (str "is-screen-media: " (core/query-media? "screen"))]]
  )

(.addEventListener js/document "beforeprint" #(prn "beforeprint"))


;;;
;; Define an event bus carrying [topic message] data
;; publication channels are based on topic - the first part of the data
;;;
(def event-bus (chan))
(def event-bus-pub (pub event-bus first))

;;
;; Contains the app user interface in here
;;
(r/defc app-container < r/reactive []
  (let [ap (r/react core/app)]
    [:div#box
     #_[:img {:key :ap1 :src (:logo ap) :style {:float "left" :padding "8px" :padding-right "20px" }}]
     #_[:h1 {:key :ap2} (:title ap)]
     (r/with-key (data/table1 core/app content/table1-data event-bus) :ap3)

     #_(r/with-key (debug) :ap4)]))

;;
;; mount main component on html app element
;;
(r/mount (app-container) (el "app"))


;;;
;;
;;;
(defn dispatcher []
  "Listen for events and dispatch to store, log etc."
  (let [slider-chan (chan)
        sort-chan (chan)]
    (sub event-bus-pub :slider-axis-value slider-chan)
    (sub event-bus-pub :sort-toggle sort-chan)

    (go-loop []
      (let [[_ slider-value] (<! slider-chan)]
         (swap! core/app #(assoc % :slider-axis-value slider-value)))
      (recur))

    (go-loop []
      (let [[_ column-key] (<! sort-chan)]
        (data/handle-sort core/app column-key))
      (recur))
    )

  )

(dispatcher)


;;
;; optionally do something on app reload
;;
(defn on-js-reload []
  (prn "Hi")
)
