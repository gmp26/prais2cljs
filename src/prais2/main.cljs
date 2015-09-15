(ns ^:figwheel-always prais2.main
    (:require [rum :as r]
              [cljs.reader :as reader]
              [clojure.set :refer (intersection)]
              [cljsjs.react]
              [prais2.core :as core]
              [prais2.routes]
              [prais2.content :as content]
              [prais2.data :as data]
              [jayq.core :refer ($)])
    (:require-macros [jayq.macros :refer [ready]])
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

;;
;; Put the app in here
;;
(r/defc app-container < r/reactive []
  (let [ap (r/react core/app)]
    [:div#box
     [:img {:key :ap1 :src (:logo ap) :style {:float "left" :padding "8px" :padding-right "20px" }}]
     [:h1 {:key :ap2} (:title ap)]
     (r/with-key (data/table1 core/app content/table1-data (:sort-by ap) (:sort-ascending ap)
) :ap3)]))

;;
;; mount main component on html app element
;;
(r/mount (app-container) (el "app"))

;;
;; optionally do something on app reload
;;
(defn on-js-reload []
  (swap! core/app update-in [:__figwheel_counter] inc))
