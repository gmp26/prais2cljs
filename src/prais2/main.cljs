(ns ^:figwheel-always prais2.main
    (:require [rum :as r]
              [cljs.reader :as reader]
              [clojure.set :refer (intersection)]
              [cljsjs.react]
              [prais2.routes]
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
  "Return the first matching DOM element selected by the CSS selector. "
  [selector]
  (.querySelectorAll js/document selector)
  )

;;
;; Put the app/app in here
;;
(r/defc app-container < r/reactive []
  [:div#box
   [:h1 (:title (r/react app))]

   #_(data/sample-data-table)
   (data/table1 data/table1-data)
   ])

;;
;; mount main component on html app element
;;
(r/mount (app-container) (el "app"))

;;
;; optionally do something on app reload
;;
(defn on-js-reload []
  (swap! app update-in [:__figwheel_counter] inc))
