(ns ^:figwheel-always prais2.main
    (:require [rum :as r]
              [cljs.reader :as reader]
              [clojure.set :refer (intersection)]
              [cljsjs.react]
              [prais2.routes]
              [prais2.content :as content]
              [prais2.data :as data]
              [jayq.core :refer ($)])
    (:require-macros [jayq.macros :refer [ready]])
)

(enable-console-print!)

;;;
;; define app state once so it doesn't re-initialise on reload.
;; figwheel counter is a placeholder for any state affected by figwheel live reload events
;;;
(defonce app (atom {:title "Understanding Published Children's Heart Surgery Outcomes"
                    :logo "assets/logo-placeholder.png"
                    :page "home"
                    :__figwheel_counter 0}))

(defn el [id] (.getElementById js/document id))

(defn select
  "Return the first matching DOM element selected by the CSS selector. "
  [selector]
  (.querySelector js/document selector)
  )

(defn selectAll
  "Returns a NodeList object containing all matching DOM elements."
  [selector]
  (.querySelectorAll js/document selector)
  )

;;
;; Put the app in here
;;
(r/defc app-container < r/reactive []
  (let [appl (r/react app)]
    [:div#box
     [:img {:src (:logo appl) :style {:float "left" :padding "8px" :padding-right "20px" }}]
     [:h1 (:title appl)]

     #_(data/sample-data-table)
     (data/table1 content/table1-data :h-name true)
     ]))

;;
;; mount main component on html app element
;;
(r/mount (app-container) (el "app"))

;;
;; optionally do something on app reload
;;
(defn on-js-reload []
  (swap! app update-in [:__figwheel_counter] inc))
