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
(defonce app (atom {:title "Understanding Published Children's Heart Surgery Outcomes"
                    :logo "assets/logo-placeholder.png"
                    :page "home"
                    :sort-by nil
                    :sort-ascending true
                    :slider-axis-value 0.9
                    :chart-state 3
                    :theme 5
                    :selected-row nil
                    }))

;;;
;; media query support
;;;
(defn query-media?
  "does a media query match on the current media query list."
  [query]
  (.-matches (.matchMedia js/window query)))
