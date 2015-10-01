(ns ^:figwheel-always prais2.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [rum :as r]
            [cljs.core.async :refer [chan <! pub]]
            [goog.events :as events]
            [cljsjs.react :as react]
            [prais2.fps :refer [fps]]
            [prais2.chan :refer [scroll-chan-events]]
            ))

;;;
;; define app state once so it doesn't re-initialise on reload.
;; figwheel counter is a placeholder for any state affected by figwheel live reload events
;;;
(defonce app (atom {:title "Understanding Published Children's Heart Surgery Outcomes"
                    :logo "assets/logo-placeholder.png"
                    :page "home"
                    :sort-by nil
                    :sort-ascending true
                    :slider-axis-value 1.0
                    :chart-state 3
                    :theme 4
                    :selected-row nil
                    }))

;;;
;; media query support
;;;
(defn query-media?
  "does a media query match on the current media query list."
  [query]
  (.-matches (.matchMedia js/window query)))


;;;
;; Define an event bus carrying [topic message] data
;; publication channels are based on topic - the first part of the data
;;;
(def event-bus (chan))
(def event-bus-pub (pub event-bus first))
