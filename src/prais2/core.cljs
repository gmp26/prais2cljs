(ns ^:figwheel-always prais2.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [rum.core :as rum]
            [cljs.core.async :refer [chan <! pub put!]]
            [prais2.utils :as u :refer [key-with]]
            [goog.events :as events]
            [cljsjs.react :as react]
            [prais2.fps :refer [fps]]
            [prais2.chan :refer [scroll-chan-events]]
            ))

;;;
;; define app state once so it doesn't re-initialise on reload.
;; figwheel counter is a placeholder for any state affected by figwheel live reload events
;;;
(defonce app (atom {;:title "Understanding Published Children's Heart Surgery Outcomes"
                    ;:logo "assets/logo-placeholder.png"
                    :page :intro
                    :sort-by nil
                    :sort-ascending true
                    :slider-axis-value 1.0
                    :detail-slider-axis-value 1.0
                    :chart-state 3
                    :theme 1
                    :selected-row nil
                    :datasource :2014
                    :map-h-code nil
                    }))

;;;
;; state of the logger
;;;
(defonce monitor (atom {:log []
                        :states []
                        :recording false
                        }))

;;;
;; media query support
;;;
(defn query-media?
  "does a media query match on the current media query list."
  [query]
  (.-matches (.matchMedia js/window query)))


;;;
;; wraps raw content in a div and returns a rum react element
;;;
(rum/defc rum-wrap [& content]
  (apply conj [:div] content)
  )

#_(rum/defc rum-wrap [& content]
  (prn "wrapping " content)
  (let [wrapped (apply conj [:div {:key :rw}] (map-indexed key-with content))]
    (prn "wrapped " wrapped)
    wrapped)
  )

;;;
;; Define an event bus carrying [topic message] data
;; publication channels are based on topic - the first part of the data
;;;
(def event-bus (chan))
(def event-bus-pub (pub event-bus first))

;;;
;; generic click handler
;; we may need to add some touch handling here too. Probably enough to stopPropagation from touch-start to click
;;;
(defn click->event-bus
  [event dispatch-key dispatch-value]
  (prn "dispatch" dispatch-key)
  (put! event-bus [dispatch-key dispatch-value event])
  (.preventDefault event)
  (.stopPropagation event)
  )

;;;
;; Define a log bus carrying data about event-bus traffic (a meta-event-bus)
;;;
(def log-bus (chan))
(def log-bus-pub (pub log-bus first))

;;;
;; generic click handler
;; we may need to add some touch handling here too. Probably enough to stopPropagation from touch-start to click
;;;
(defn click->log-bus
  [event dispatch-key dispatch-value]
  (prn "logger" dispatch-key)
  (put! log-bus [dispatch-key dispatch-value event])
  (.preventDefault event)
  (.stopPropagation event)
  )



;; get element by id
(defn el [id] (.getElementById js/document id))
