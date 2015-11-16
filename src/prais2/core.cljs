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


(defrecord App-state [datasource page sort-by sort-ascending slider-axis-value detail-slider-axis-value chart-state theme selected-h-code map-h-code])

(defonce app (atom (App-state. :2014 :intro nil true 1.0 1.0 3 1 nil nil)))


(deftype App-state-handler []
  Object
  (tag [this v] "app-state")
  (rep [this v] #js [
                     (:datasource v)
                     (:page v)
                     (:sort-by v)
                     (:sort-ascending v)
                     (:slider-axis-value v)
                     (:detail-slider-axis-value v)
                     (:chart-state v)
                     (:theme v)
                     (:selected-h-code v)
                     (:map-h-code v)
                     ]))

(defn json->app-state
  "take transit encoded json vector of app-state and recreate an App-state"
  [as]
  (apply ->App-state. as))


(defn format-time-stamp [ts]
  (str (.format ts "HH:mm:SS")))

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

;;;
;; Define an event bus carrying [topic message] data
;; publication channels are based on topic - the first part of the data
;;;
(defonce event-bus (chan))
(defonce event-bus-pub (pub event-bus first))

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
