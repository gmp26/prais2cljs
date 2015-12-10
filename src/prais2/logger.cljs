(ns ^:figwheel-always prais2.logger
    (:require [rum.core :as rum]
              [clojure.string :as str]
              [cljsjs.papaparse]
              [cljs.core.async :refer [chan <! pub put!]]
              [prais2.core :as core]
              [cognitect.transit :as sit]
              [cljsjs.moment :as moment]
              [cljsjs.jquery]
              [ajax.core :refer [POST GET ajax-request url-request-format json-request-format json-response-format]]
              [cljs.reader :as r]
              ))

;;;
;; The session id is ideally unique for this user
;;;
(defonce session-id (atom nil))

;;;
;; state of the logger
;;;
(defonce log-states (atom []))

(defonce log-state-index (atom nil))

(defn log-state
  "The current state indicated by log-state-index"
  []
  (if (integer? @log-state-index) (@log-states @log-state-index) nil))


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
   #_(prn "event-key " event-key " event-data " event-data " session-id " new-session-id)
   (let [log-entry [new-session-id (js/Date.) event-key event-data @core/app]]
     #_(prn log-entry)
     (write-sheet-log log-entry)
     (reset! session-id new-session-id)
     (swap! log-states #(conj % log-entry))
     (swap! log-state-index #(if (nil? %) 0 (inc %)))
     ))

  ([event-key-data]
   #_(prn "one parameter log " event-key-data)
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
                                        (into [] (map second (log-entry 3)))))))))

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

(rum/defc load-control []
  [:button#load-ctl.btn.btn-default
   {:title "load session from spreadsheet"
    :data-toggle "collapse"
    :data-target "#paste-box"
    :aria-controls "paste-box"
    :aria-expanded false
    :tab-index 0
    }
   [:i.fa.fa-sign-in.fa-rotate-90]])

(def tsv-log (atom "Paste rows from session log here"))

(def tsv-header "ip	session-id	timestamp	eventkey	eventdata	datasource	page	sort-by	sort-asc	table-slider	popup-slider	chart-state	theme	table-selection	map-selection\n")

(defn add-header
  "add header to s if not already present"
  [header s]
  (if (= 0 (.indexOf s "ip")) s (str header s)))

(defn tsv-parse
  "parse pasted tab separated values into maps of field value pairs, using first row
of headers for field names and then discarding the first header row from the result set."
  [tsv]
  (rest
   ((js->clj (.parse js/Papa (add-header tsv-header tsv) (clj->js {:header true :delimiter "\t"})))
    "data")))

(defn pair->kv
  "convert one pair from string/value form to internal key/value transforming as necessary."
  [[key str-value]]
  (prn "pair->kv" key str-value)
  (let [renamed-key (keyword (condp = key
                               "table-slider" "slider-axis-value"
                               "popup-slider" "detail-slider-axis-value"
                               "table-selection" "selected-h-code"
                               "map-selection" "map-h-code"
                               "sort-asc" "sort-ascending"
                               key))]
    [renamed-key (condp = renamed-key
                   :timestamp (js/Date. str-value)
                   :ip str-value
                   (condp = str-value
                     ":2014" :2014
                     "TRUE" true
                     "FALSE" false
                     "" nil
                     (if (#(or (keyword? %) (number? %)) (r/read-string str-value))
                       (r/read-string str-value)
                       str-value)))]))

(defn row-of-kvs [f row-of-pairs]
  (into {} (map f row-of-pairs)))

(defn rows-of-kvs [rows-of-pairs]
  (map #(row-of-kvs pair->kv %) rows-of-pairs) )

(defn row-map->log-entry
  "split row map into log fields and state fields to make a log-entry"
  [rm]
  [(:session-id rm) (:timestamp rm) (:eventkey rm) (:eventdata rm)
   (dissoc rm :session-id :timestamp :eventkey :eventdata)])

(defn tsv->log
  [tsv]
  (mapv row-map->log-entry (rows-of-kvs (tsv-parse tsv))))

(defn parse-session
  "No-op - JSON or JSONP GET appears to have restrictive permissions - using textbox paste instead."
  []
  (prn "really pasting")
  (let [parsed-tsv (tsv->log (.val (js/$ "#pasted-session")))]
    (when parsed-tsv
      (let [ix (count parsed-tsv)]
        (when (not (zero? ix))
          (reset! log-state-index (dec ix))
          (reset! log-states parsed-tsv))))))

(rum/defc paste-box < rum/reactive []
  (let [handler #(click->log-bus % :parse-session nil)]
    [:#paste-box.paste-class.collapse
     [:br]
     [:p "To load a recorded session, copy rows from"
      [:a.btn.btn-link {:href log-sheet-url :target "_blank" :style {:font-size "16px" :padding "0 4px 4px 4px" }} "the session log"]
      "using a filtered view and paste them into the textbox here."]
     [:.alert.alert-info "To create or view the spreadsheet using a session filter, go to 'Data > Filter views...' in the sheet menu."
      [:br]
      "Set the filter range to include the ip address and/or session-id columns and use the cell buttons at the top of those to filter for a single user's session."]
     [:form
      [:.form-group
       [:textarea {:placeholder "Paste rows from the session log here."
                   :name "pasted-session"
                   :id "pasted-session"
                   :rows 10
                   :cols 50
                   :title "paste-session"
                   ;:on-change #(reset! tsv-log (.. % -nativeEvent -target -value))
                   ;:value (rum/react tsv-log)
                   }
        ]]
      [:button.btn.btn-primary
       {:on-click handler
        :on-touch-start handler}
       "Load pasted session"]]]))


(rum/defc playback-controls < rum/reactive [id]

  [:div {:id id}
    (reset-control)
   " "
   [:.btn-group
    (undo-control)
    (redo-control)]
   " "
   [:.btn-group
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
