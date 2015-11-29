(ns ^:figwheel-always prais2.core
    (:require-macros [cljs.core.async.macros :refer [go-loop]]
                     [jayq.macros :refer [ready]])
    (:require [rum.core :as rum]
              [jayq.core :refer ($ on)]
              [cljs.core.async :refer [chan <! pub put!]]
              [prais2.utils :as u :refer [key-with]]
              [goog.events :as events]
              [prais2.chan :refer [scroll-chan-events]]
            ))

;;;
;; define app state once so it doesn't re-initialise on reload.
;; figwheel counter is a placeholder for any state affected by figwheel live reload events
;;;


(defonce app (atom {:datasource :2014
                    :page :intro
                    :sort-by nil
                    :sort-ascending true
                    :slider-axis-value 1.0
                    :detail-slider-axis-value 1.0
                    :chart-state 3
                    :theme 1
                    :selected-h-code nil
                    :map-h-code nil}))

(defn format-time-stamp [ts]
  (str (.format (js/moment ts) "DD-MMM-YYYY HH:mm:SS")))

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

;; mixin to initialise bootstrap tooltip code code
(def bs-tooltip
  {:did-mount (fn [state]
                (ready
                 (.tooltip  (.tooltip ($ "[data-toggle=\"tooltip\"]"))) "show")
                state)
   })

;; mixin to initialise bootstrap t code code
(def bs-popover
  {:did-mount (fn [state]
                (ready
                 (.popover ($ "[data-toggle=\"popover\"]")))
                state)
   })


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
  (put! event-bus [dispatch-key dispatch-value])
  (.preventDefault event)
  (.stopPropagation event)
  )

;; get element by id
(defn el [id] (.getElementById js/document id))
