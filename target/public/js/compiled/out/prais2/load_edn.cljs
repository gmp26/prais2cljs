(ns ^:figwheel-always prais2.load-edn
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<! take!]]
            [prais2.content]))

(enable-console-print!)

(defn decorate
  "Adds tagged literals depending on the presence of certain keys"
  [m]
  (let [ks (vec (keys m))]
    (cond
      (some #(= :h-name %) ks) (str "#prais2.content/Row" m)
      :else (throw (js/Error. "The entry is not a row.")))))

(defn decoder
  "Translates data into defrecords implementations for a suitable datasource"
  [data]
  (into {} (for [[k v] data] 
             (do (let [decorated (mapv #(decorate %) v)]
                   [k (mapv #(cljs.reader/read-string {:readers prais2.content/edn-readers} %) decorated)])))))

(defn make-remote-call [endpoint]
  (js/console.log "start of make-remote-call")
  (go (let [response (<! (http/get endpoint {:as :auto})) #_{:body "{:2019 [{:h-name \"FRE\"}]}"}]
        (js/console.log "before printing response in make-remote-call")
        (js/console.log (:body response))
        (:body response))))

;; This content is served by figwheel, configured in project.clj
;; (go (let [data (<! (make-remote-call "http://localhost:3449/data.edn"))]
;;       (pr (decoder data))))

#_(let [res (take!
           (make-remote-call "http://localhost:3449/data.edn")
           #(do (reset! datasource %)
                (pr @datasource)))])
