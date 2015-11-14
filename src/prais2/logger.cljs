(ns ^:figwheel-always prais2.logger
    (:require [rum.core :as rum]
              [cljs.core.async :refer [chan <! pub put!]]
              [prais2.core :as core]
              [cognitect.transit :as sit]
              [cljsjs.moment :as moment]
              ))

;;;
;; We need to serialise/deserialise the log and also convert it to CSV
;;;

;;;
;; Use cljs/transit for serialisation
;;;
(def j-w (sit/writer :json))
(def j-r (sit/reader :json))

(def j-wv (sit/writer :json-verbose))
(def j-rv (sit/reader :json-verbose))

(defrecord Log-entry [time-stamp event-key event-data app-state])

(deftype Log-entry-handler []
  Object
  (tag [this v] "log-entry")
  (rep [this v] #js [(.format (:time-stamp v)) (:event-key v) (:event-data v) (:app-state v)]))

(def log-w (sit/writer :json
                        {:handlers {Log-entry (Log-entry-handler.)
                                    core/App-state (core/App-state-handler.)}}))

(def log-wv (sit/writer :json-verbose
                        {:handlers {Log-entry (Log-entry-handler.)
                                    core/App-state (core/App-state-handler.)}}))


;;;
;; state of the logger
;;;
(defonce log-state (atom []))

(defn write-log
  "write an event to the log"
  [[event-key event-data]]
    (let [log-entry (Log-entry. (js/moment) event-key event-data @core/app)]
      (swap! log-state #(conj % log-entry))))

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

(defn log->csv
  "convert the log to a lazy seq of comma separated values"
  [log]
  (for [log-entry log]
    (apply str (interpose "," (concat [(core/format-time-stamp (:time-stamp log-entry))
                                       (name (:event-key log-entry))
                                       (:event-data log-entry)]
                                      (into [] (map second (:app-state log-entry)))))
          )))


(defn prn-log [log]
  (.log js/console (log->csv log)))

(rum/defc icon-control [icon event-key tooltip]
  [:button.btn.btn-default
   {:title tooltip
    :tab-index 0
    :on-click #(click->log-bus % event-key nil)}
   [:i.fa {:class (str "fa-" icon)}]])


(rum/defc reset-control []
  (icon-control "step-backward" :rewind "rewind"))

(rum/defc undo-control []
  (icon-control "chevron-left" :undo "undo"))

(rum/defc redo-control []
  (icon-control "chevron-right" :redo "redo"))

(rum/defc stop-control []
  (icon-control "circle" :stop-session "stop recording session"))

(rum/defc edit-control []
  (icon-control "pencil" :edit-session-log "show-hide-session-log"))

(rum/defc share-control []
  (icon-control "sign-out fa-rotate-270" :share-session "mail out session"))

(rum/defc load-control []
  (icon-control "sign-in fa-rotate-90" :load-session "read in session"))

(rum/defc email-form < rum/static [to-address session-log]
  ;(prn (interpose \newline session-log))
  [:form#email {:action (str "mailto:" to-address
                             "?subject=" "prais2-session-start " (new js/Date.))
                :method "post"
                :enc-type "text/plain"
     }
   [:textarea {:value

               (apply str (interpose \newline (log->csv session-log)))
               :rows 10
               :cols 100}
    ]

    ])


(rum/defc playback-controls < rum/reactive [id]
  [:div {:id id}
    (reset-control)
   " "
   [:.btn-group
    (undo-control)
    (redo-control)]
   " "
   [:.btn-group
    (edit-control)
    (share-control)
    (load-control)]

   (email-form "gmp26@cam.ac.uk" (rum/react log-state))
   ])


(defn edit-session-log []
  (core/el ""))
