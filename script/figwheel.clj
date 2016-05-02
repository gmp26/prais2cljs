(require
 '[figwheel-sidecar.repl-api :as ra]
 '[com.stuartsierra.component :as component])

(import 'java.lang.Runtime)

(def figwheel-config
  {:figwheel-options {
                      :css-dirs ["resources/public/css"]
                      }
   :build-ids ["dev"]
   :all-builds
   [{:id "dev"

     :source-paths ["src"]


     :figwheel {:websocket-host "localhost"
                :on-jsload "prais2.main/on-js-reload"
                :debug false}

     :compiler {:main "prais2.main"
                :externs ["externs/bootstrap.js"
                          "externs/jquery.js"
                          "externs/sliders.js"
                          ]
                :asset-path "js/compiled/out"
                :output-to "resources/public/js/compiled/prais2.js"
                :output-dir "resources/public/js/compiled/out"
                :warnings {:single-segment-namespace false}
                :source-map-timestamp true
                :optimizations :none}}]})

(def sass-config
  {:executable-path "/usr/bin/sass" ; e.g. /usr/local/bin/sass
   :input-dir "sass" ; location of the sass/scss files
   :output-dir "resources/public/css"})

(defrecord Figwheel []
  component/Lifecycle
  (start [config]
    (ra/start-figwheel! config)
    config)
  (stop [config]
    (ra/stop-figwheel!)
    config))

(defrecord SassWatcher [executable-path input-dir output-dir]
  component/Lifecycle
  (start [config]
    (if (not (:sass-watcher-process config))
      (do
        (println "Figwheel: Starting SASS watch process")
        (assoc config :sass-watcher-process
                      (.exec (Runtime/getRuntime)
                             (str executable-path " --watch " input-dir ":" output-dir))))
      config))
  (stop [config]
    (when-let [process (:sass-watcher-process config)]
      (println "Figwheel: Stopping SASS watch process")
      (.destroy process))
    config))

(def system
  (atom
   (component/system-map
    :figwheel (map->Figwheel figwheel-config)
    :sass (map->SassWatcher sass-config))))

(defn start []
  (swap! system component/start))

(defn stop []
  (swap! system component/stop))

(defn reload []
  (stop)
  (start))

(defn repl []
  (ra/cljs-repl))

;; Start the components and the repl
(start)
(repl)