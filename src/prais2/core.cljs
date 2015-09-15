(ns ^:figwheel-always prais2.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [rum :as r]
            [cljs.core.async :refer [chan <!]]
            [goog.events :as events]
            [cljsjs.react :as react]
            [prais2.fps :refer [fps]]
            [prais2.chan :refer [scroll-chan-events]]
            ))

;;;
;; define app state once so it doesn't re-initialise on reload.
;; figwheel counter is a placeholder for any state affected by figwheel live reload events
;;;
(def app (atom {:title "Understanding Published Children's Heart Surgery Outcomes"
                :logo "assets/logo-placeholder.png"
                :page "home"
                :sort-by nil
                :sort-ascending true
                :survival-axis-minimum 0.5
                :__figwheel_counter 0}))


(def cur-scroll-y (atom 0))
(def prev-scroll-y (atom 0))


;;;
;; application events
;;;

(defn select-chan [pred chans]
  (go-loop []
    (let [[value ch] (alts! chans)]
      (if (pred value) value (recur)))))


;; controls the minimum value plotted on the survival axis  0..1 scale
;; where 0 represents the smallest minimu value and
;; 1 represents the largest minimum value.
(defn listen-survival-axis-change! []
  (go-loop [listener-chan (chan 1)]
    (<! listener-chan)
    )
  listener)



(defn listen! []
  (let [chan (scroll-chan-events)]
    (go-loop []
             (let [new-y (<! chan)]
               (reset! prev-scroll-y @cur-scroll-y)
               (reset! cur-scroll-y (max 0 new-y)))
               (recur))))
