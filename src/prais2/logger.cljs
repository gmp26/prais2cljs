(ns ^:figwheel-always prais2.logger
    (:require [rum.core :as rum]
              [cljs.core.async :refer [chan <! pub put!]]
              [prais2.core :as core]
              [cognitect.transit :as sit]
              [cljsjs.moment :as moment]
              [ajax.core :refer [POST GET ajax-request url-request-format json-request-format json-response-format]]
              [jayq.core :refer [$]]
              ))

;;;
;; The session id is ideally unique for this user
;;;
(defonce session-id (atom nil))

;;;
;; We need to serialise/deserialise the log and also convert it to CSV
;;;


;;;
;; Use cljs/transit for serialisation
;;;
(defonce j-w (sit/writer :json))
(defonce j-r (sit/reader :json))

(defonce j-wv (sit/writer :json-verbose))
(defonce j-rv (sit/reader :json-verbose))

(defonce log-w (sit/writer :json))

(defonce log-wv (sit/writer :json-verbose))

(defonce log-r (sit/reader :json))

(defonce log-rv (sit/reader :json-verbose))

;;;
;; state of the logger
;;;
(defonce log-state (atom []))

(defonce log-state-index (atom nil))

(def ip-address (atom nil))

(defn get-ip-address
  "get the ip address of this machine"

  []
  (GET "http://ipinfo.io/json" {:handler (fn [response] (reset! ip-address (:ip response)))
                                :error-handler (fn [status status-text] (prn "get-ip-error: " status status-text))
                                :keywords? true
                                :response-format :json})
  )

;; get ip address for this session
(get-ip-address)


(def store-session-app "https://script.google.com/macros/s/AKfycbx1wfGXBMVImgmiyOY9JvcnV5tBNS8YyAlIiv73q4gjvkbRiis/exec"
  )

(def sheets-logger-app "https://script.google.com/macros/s/AKfycbwg81jLTtCY_cU3qOVv6A93GePfnpAj-HxBM_7_nF8B-DkfyLp5/exec")




(defn sheets-success-handler
  [response]
  (.log js/console (str response)))

(defn sheets-write-error
  [status status-text]
  (.log js/console (str "spreadsheet write error " status " " status-text)))

(defn sheets-read-error
  [status status-text]
  (.log js/console (str "spreadsheet read error " status " " status-text)))

(defn view-session
  "No-op - the hyperlink should do it all."
  []
)

(defn load-session
  []
  (prn "load-session not yet implemented")
  (GET store-session-app
       :handler sheets-success-handler
       :error-handler sheets-read-error
       :response-format :json
       :keywords? true))

(defn write-sheet-log
  "Write a log-event to the google sheet url."
  [log-entry]
  (let [app-state (log-entry 4)
        params (str "ip=" @ip-address
                       "&session-id=" (log-entry 0)
                       "&timestamp=" (log-entry 1)
                       "&eventkey=" (log-entry 2)
                       "&eventdata=" (log-entry 3)
                       "&datasource=" (:datasource app-state)
                       "&page=" (:page app-state)
                       "&sort-by=" (:sort-by app-state)
                       "&sort-asc=" (:sort-ascending app-state)
                       "&table-slider=" (:slider-axis-value app-state)
                       "&popup-slider=" (:detail-slider-axis-value app-state)
                       "&chart-state=" (:chart-state app-state)
                       "&theme=" (:theme app-state)
                       "&table-selection=" (:selected-h-code app-state)
                       "&map-selection=" (:map-h-code app-state)
                       )]
    (prn "params = " params)
    (POST sheets-logger-app
          :params params
          :handler sheets-success-handler
          :error-handler sheets-write-error
          :format {:write identity
                   :content-type "application/x-www-form-urlencoded"}
          :response-format :json
          :keywords? true)))

(defn write-log
  "write an event to the log"

  ([[event-key event-data] new-session-id]
   (prn "event-key " event-key " event-data " event-data " session-id " new-session-id)
   (let [log-entry [new-session-id (js/Date.) event-key event-data @core/app]]
     (prn log-entry)
     (write-sheet-log log-entry)
     (reset! session-id new-session-id)
     (swap! log-state #(conj % log-entry))
     (swap! log-state-index #(if (nil? %) 0 (inc %)))
     ))

  ([event-key-data]
   (prn "one parameter log " event-key-data)
   (write-log event-key-data @session-id)))

(def log-sheet-url "https://docs.google.com/spreadsheets/d/1bLxk8unegtsoBr9TysVDVA0jECmr5D4a3WQvyT69iuE")

;;;
;; Define a log bus carrying data about event-bus traffic (a meta-event-bus)
;;;
(defonce log-bus (chan))
(defonce log-bus-pub (pub log-bus first))

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
    (do
      (prn "log->csv " log-entry)
      #_(apply str (interpose "," (concat [(core/format-time-stamp (:time-stamp log-entry))
                                         (name (:event-key log-entry))
                                         (:event-data log-entry)]
                                          (into [] (map second (:app-state log-entry))))))

      (apply str (interpose "," (concat [(core/format-time-stamp (log-entry 0))
                                         (name (log-entry 1))
                                         (log-entry 2)]
                                        (into [] (map second (log-entry 3)))))
             ))))

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

(rum/defc view-control []
  (icon-control "eye" :view-session "view session log"))

(rum/defc load-control []
  [:a#load-ctl.btn.btn-default
   {:href log-sheet-url
    :target "_blank"
    :title "load session from spreadsheet"
    :data-toggle "collapse"
    :data-target "#paste-box"
    :aria-controls "paste-box"
    :aria-expanded false
    :tab-index 0
    }
   [:i.fa.fa-sign-in.fa-rotate-90]])

(rum/defc paste-box < rum/static [to-address session-log]
  [:div#paste-box.paste-class.collapse
   "To import a session, "
   [:a.btn.btn-default {:href log-sheet-url} "copy rows"]
   " from this spreadsheet and paste into the textbox."
   [:form
    [:textarea {:placeholder "Paste rows here."
                :name "foo"
                :id "foob"
                :rows 10
                :cols 100
                :form "email"
                :title "paste-session"
                }
     ]
    [:input.btn.btn-default
     {:type "Read session"
      :value "Read session"
      }]]]
)
;

(rum/defc playback-controls < rum/reactive [id]

  [:div {:id id}
    (reset-control)
   " "
   [:.btn-group
    (undo-control)
    (redo-control)]
   " "
   [:.btn-group
    (view-control)
    (load-control)]

   (paste-box)
   ])


(defn edit-session-log []
  (core/el ""))


;;;
;; Following experimented with catching page unloads. Not worth it here...
;;;

#_(defn unload-handler [event]
  (.submit (core/el "email"))
  )

#_(defn before-unload-handler [event]
  (.log js/console event)
  (set! (.-returnValue event) "Unload me?")
  (.submit (core/el "email"))
  "boo2"
)

#_(defn catch-app-unload
  []
  (.addEventListener js/window "beforeunload" before-unload-handler)
  (.addEventListener js/window "unload" unload-handler)
)

;; deploy here
;; https://script.google.com/macros/s/AKfycbw7mvaOsWkGyP0z_DXLstWML7cdh2wCGuPcJ1hmlmKJ1prN1adi/exec


#_(catch-app-unload)
