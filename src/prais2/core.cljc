(ns ^:figwheel-always prais2.core

  (:require [rum.core :as rum]
    #?(:cljs [cljsjs.jquery])
    #?(:cljs [cljsjs.bootstrap])
    #?(:cljs [cljs.core.async.macros :refer-macros [go-loop]])
    #?(:cljs [cljs.core.async :refer [chan <! pub put!]])
    #?(:clj [clojure.core.async :refer [chan <! pub put!]])
            [prais2.utils :as u :refer [key-with]]
    #?(:cljs [goog.events :as events])
            ))

;;;
;; define app state once so it doesn't re-initialise on reload.
;; figwheel counter is a placeholder for any state affected by figwheel live reload events
;;;


(defn ready [handler]
  (.ready (js/$ js/document) handler))

;;
;; todo: configure this?
;;
(defonce app (atom {:datasource :2014
                    :page :home
                    :section :map
                    :sort-by nil
                    :sort-ascending true
                    :slider-axis-value 1.0
                    :detail-slider-axis-value 1.0
                    :chart-state 3
                    :theme 12
                    :selected-h-code nil
                    :map-h-code nil
                    :show-nicor false}))

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

;; mixin to initialise bootstrap collapse code
(def bs-collapse
  #?(:cljs {:did-mount (fn [state]
                         (ready
                           #(.collapse (js/$ "[data-toggle=\"collapse\"]")))
                         state)
            })
  #?(:clj {}))


;; mixin to initialise bootstrap tooltip code
(def bs-tooltip
  #?(:cljs {:did-mount (fn [state]
                         (ready
                           #(.tooltip (.tooltip (js/$ "[data-toggle=\"tooltip\"]"))))
                         state)
            })
  #?(:clj {}))

;; mixin to initialise bootstrap t code code
(def bs-popover
  #?(:cljs {:did-mount (fn [state]
                         (ready
                           #(.popover (js/$ "[data-toggle=\"popover\"]")))
                         state)
            })
  #?(:clj {}))

;;;
;; Define an event bus carrying [topic message]
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
  (if (and (= dispatch-key :data) (= dispatch-value :top))
    (prn "gotcha")
    (prn (str "click->event-bus " dispatch-key dispatch-value)))
  (put! event-bus [dispatch-key dispatch-value])
  (.preventDefault event)
  (.stopPropagation event)
  )

;; get element by id
(defn el [id] (.getElementById js/document id))
