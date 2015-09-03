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

;;;
;;; MOVE TO data.cljs
;;;

(comment
;;;
  ;; Sample jQuery usage:
  ;;  Attach the jQuery plugin only after React has mounted the selected element and jQuery has loaded.
;;;
  (defn home-did-mount
    "attach DataTable plugin to the example table. Adds search, filter, sorts, and pagination."
    [state]
    (ready
     (.DataTable ($ :#example)))
    state)

  ;; data-table mixin - adds jQuery DataTable code on jQuery ready
  (def data-table {:did-mount home-did-mount})

  (r/defc home < r/reactive data-table []
    [:div.row
     [:div.col-md-6
      [:table#example.table.table-striped.table-bordered {:cell-spacing "0" :width "100%"}
       [:thead
        [:tr [:th "Name"]
         [:th "Age"]]]
       [:tbody
        [:tr [:td "Matthew"]
         [:td "26"]]
        [:tr [:td "Anna"]
         [:td "24"]]
        [:tr [:td "Michelle"]
         [:td "42"]]
        [:tr [:td "Frank"]
         [:td "46"]]]]]]))
