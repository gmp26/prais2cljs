(ns ^:figwheel-always prais2.main
  (:require-macros                                          ;[jayq.macros :refer [ready]]
    [cljs.core.async.macros :refer [go-loop]])
  (:require [rum.core]
            [clojure.set :refer (intersection)]
            [cljsjs.react]
            [cljs.core.async :refer [chan <! pub sub put! close!]]
            [prais2.utils :refer [key-with]]
            [prais2.core :as core :refer [app event-bus event-bus-pub bs-popover bs-tooltip]]
            [prais2.routes :as routes]
            [prais2.data :as data]
            [prais2.open-layers-map :as map]
            [prais2.chrome :as chrome]
            [prais2.intro :refer [render-intro]]
            [prais2.home :refer [render-home]]
            [prais2.map-data :refer [render-map-data]]
            [prais2.faqs :refer [render-faqs]]
            [prais2.components.video-player :refer [video-js]]
            [cljsjs.jquery]
            ))

(enable-console-print!)

(defn select
  "Return the first matching DOM element selected by the CSS selector. "
  [selector]
  (.querySelector js/document selector))

;;;
;;  "debug app-state"
;;;
(rum.core/defc debug < rum.core/reactive []
  [:div
   [:p (str (rum.core/react core/app))]]
  )

(rum.core/defc para < rum.core/static [text]
  [:p text])

(rum.core/defc render-404 []
  [:h1 "Page not found. "
   [:a (core/href "home") "Try the home page."]])

;;
;; Code snippet to remove columns from table
;;
(comment headers
         (assoc (first data')
           :n-deaths false
           :n-survivors false
           :h-code false)
         data (conj (rest data') headers))

(defn active? [section]
  (if (= (:section @core/app) section) "active" nil))

(rum.core/defc render-data-tabs < rum.core/reactive
                                  (core/update-title "Choose a hospital")
                                  (core/update-description "View all hospital child heart surgery survival data") []

  [:.row

   [:.col-sm-offset-1.col-sm-10
    [:h1 "Explore the data"]

    [:p "In this section you can explore the overall hospital survival statistics published by the National
                 Congenital Heart Disease Audit (" [:a (core/href "http://www.ucl.ac.uk/nicor/audits/congenital" :target "_blank") "NCHDA"] ").
                 The data covers all hospitals in the UK and Ireland that performed heart surgery in children
                 (0-16 years old). NCHDA update the data annually and each report covers a 3 year period."]

    [:p "Data on this site comes from the NCHDA annual reports, all of which can be "
     [:a (core/href "https://nicor4.nicor.org.uk/chd/an_paeds.nsf/vwContent/Analysis Documents?Opendocument" :target "_blank")
      "downloaded from the NCHDA website."]]

    [:ul.nav.nav-pills {:role "tablist"}

     [:li {:class (active? :map)
           :role  "presentation"}
      [:a#map-tab (core/href "data/map"
                             :aria-controls "mapped-data"
                             :role "tab"
                             :on-click #(core/click->event-bus % :data :map "data/map"))
       [:i.fa.fa-map-marker] " Choose a hospital"]]

     [:li {:class (active? :table)
           :role  "presentation"}
      [:a#table-tab (core/href "data/table"
                               :aria-controls "data-table"
                               :role "tab"
                               :on-click #(core/click->event-bus % :data :table "data/table"))
       [:i.fa.fa-table] " All hospitals"]]

     [:li {:class (active? :animation)
           :role  "presentation"}
      [:a#map-tab (core/href "data/animation"
                             :aria-controls "mapped-data"
                             :role "tab"
                             :on-click #(core/click->event-bus % :data :animation "data/animation"))
       [:i.fa.fa-video-camera] " Two minute video"]]

     ]

    (when (not= :animation (:section (rum.core/react core/app)))
      [:p.post-tab "Use the drop down box to change reporting periods. You can watch our "
       [:a (core/href "data/animation"
                      :on-click
                      #(core/click->event-bus % :data :animation "data/animation")) [:i.fa.fa-video-camera] " two minute video"]
       " which explains how we present the statistics and how to interpret them. Parents who helped us
       develop the website found it a useful guide to interpreting the data. "])

    ]])


(rum.core/defc render-video1 < (core/update-title "Two minute video")
  (core/update-description "View a 2 minute video guide to how we present the results") []
  [:section.col-sm-offset-1.col-sm-10.col-md-offset-1.col-md-6
   (video-js {:video-id  "video1"
              :src       "/assets/video01.mp4"
              :controls  true
              :preload   ""
              :poster    "/assets/video-1-thumbnail.png"
              :track-src "/assets/video01.vtt"})])


(rum.core/defc render-data-tab-panes < rum.core/reactive [data]
  [:row.tab-content

   [:.tab-pane.col-sm-12 {:key   1
                          :class (active? :map)
                          :id    "mapped-data"}
    (when (active? :map)
      (render-map-data))]

   [:.tab-pane.col-sm-12 {:key   2
                          :class (active? :table)
                          :id    "data-table"}
    (data/modal)
    (when (active? :table)
      (data/list-tab core/app data event-bus))]

   [:.tab-pane.col-sm-12 {:key   3
                          :class (active? :animation)
                          :id    "mapped-data"}
    (when (active? :animation)
      [:section.col-sm-offset-1.col-sm-10
       [:p {:key 1}]
       [:p {:key 2} "Parents who helped us develop the website found this video useful for interpreting the data.
                    If you want to know more about how the predicted range of survival is actually calculated, please
                    watch our " [:a (core/href "faqs") [:i.fa.fa-video-camera] " second video"] " in the "
        [:a (core/href "faqs" {:key 3}) "Everything Else"] " section. "]])

    (when (active? :animation)
      (render-video1))]])


(rum.core/defc render-data < rum.core/reactive (core/monitor-react "DATA>" false)
  []
  (let [app (rum.core/react core/app)
        data ((data/table-data (:datasource app)))]
    [:div.container-fluid.main-content
     (map-indexed key-with
                  [
                   (render-data-tabs)
                   (render-data-tab-panes data)
                   ])]))

;;;
;; pager
;;;

(defn deselect-all []
  (swap! app assoc :map-h-code nil :selected-h-code nil))

(def scroll-to-top
  {:did-update (fn [state]
                 (js/scrollTo 0 0)
                 state)})

(rum.core/defc page-choice < rum.core/static scroll-to-top [page section]
  [:div #_{:on-click       close-start-modal
           :on-touch-start close-start-modal}
   (cond
     (= page :home)
     (do
       ;(prn "routes/homes = " (routes/home))
       (deselect-all)
       (map-indexed key-with
                    [(chrome/header)
                     (render-home)
                     (chrome/footer)]))

     (= page :intro)
     (do
       (deselect-all)
       (map-indexed key-with
                    [(chrome/header)
                     (render-intro)
                     (chrome/footer)]))

     (= page :data)
     (do
       (deselect-all)
       (map-indexed key-with
                    [(chrome/header)
                     (render-data)
                     (chrome/footer)]))

     (= page :faqs)
     (do
       (prn "section = " section)
       (deselect-all)
       (map-indexed key-with
                    [(chrome/header)
                     (render-faqs section)
                     (chrome/footer)]))

     (= page :faq)
     (do
       (prn "section = " section)
       (deselect-all)
       (map-indexed key-with
                    [(chrome/header)
                     (render-faqs [3 0])                    ;:todo replace with real params
                     (chrome/footer)]))

     :else
     (do
       (prn "Route mismatch" page)
       (chrome/header)
       (render-404)
       (chrome/footer)))])


(rum.core/defc render-page < rum.core/reactive []
  (let [{:keys [page section]} (rum.core/react core/app)]
    (prn "render page " page section)
    (page-choice page section)))


;;
;; Contains the app user interface
;;
(rum.core/defc app-container < bs-popover bs-tooltip []
  (render-page)
  )

;;
;; mount main component on html app element
;;
(if-let [mount-point (core/el "app")]
  (rum.core/mount (app-container) mount-point))

;;;
;; Read events off the event bus and handle them
;;;
(defn dispatch
  "listen on a published event feed, handling events with the given key"
  [event-feed event-key handle]
  (let [in-chan (chan)]
    (sub event-feed event-key in-chan)
    (go-loop []
             (let [[ev-key _ :as event] (<! in-chan)]
               (if (= ev-key :reloading)
                 (do
                   (close! in-chan))
                 (do (handle event)
                     (when (= event-bus-pub event-feed)

                       ;(logger/write-log event)
                       )
                     (recur)))))))

(defn zoom-to-hospital
  [[_ h-code _]]
  (swap! core/app #(assoc % :map-h-code h-code))
  (map/zoom-to-feature))

(defn dispatch-central
  "centralised dispatch of all events"
  []

  (dispatch event-bus-pub :reloading
            (fn [_] (prn ":reloading event - no-op")))

  (dispatch event-bus-pub :slider-axis-value
            (fn [[_ slider-value]]
              (swap! core/app #(assoc % :slider-axis-value slider-value))))

  (dispatch event-bus-pub :detail-slider-axis-value
            (fn [[_ slider-value]]
              (swap! core/app #(assoc % :detail-slider-axis-value slider-value))))

  (dispatch event-bus-pub :sort-toggle
            (fn [[_ column-key]] (data/handle-sort core/app column-key)))

  (dispatch event-bus-pub :info-clicked
            (fn [[_ column-key]] (prn (str "clicked on info for column " column-key))))

  (dispatch event-bus-pub :change-colour-map
            (fn [[_ value]]
              (swap! core/app #(assoc % :theme (int value)))))

  (dispatch event-bus-pub :change-chart-state
            (fn [[_ value]]
              (swap! core/app #(assoc % :chart-state (int value)))))

  (dispatch event-bus-pub :open-hospital-modal
            (fn [[_ h-code]]
              (data/open-hospital-modal h-code)))

  (dispatch event-bus-pub :close-hospital-modal
            (fn [_]
              (data/close-hospital-modal)))

  (dispatch event-bus-pub :morph-full-range
            (fn [_]
              (swap! core/app #(assoc % :slider-axis-value 0))))

  (dispatch event-bus-pub :change-datasource
            (fn [[_ new-source]]
              (swap! core/app #(assoc % :datasource new-source))))

  (dispatch event-bus-pub :click-on-map-marker zoom-to-hospital)

  (dispatch event-bus-pub :click-on-map-menu-item zoom-to-hospital)

  (dispatch event-bus-pub :just-london
            (fn [_]
              (swap! core/app #(assoc % :map-h-code nil))
              (map/go-london)))

  (dispatch event-bus-pub :reset-map-to-home
            (fn [_]
              (swap! core/app #(assoc % :map-h-code nil))
              (map/go-home)))

  (dispatch event-bus-pub :home
            (fn [[_ section]]
              (prn "nav to home " section)
              (swap! core/app #(assoc % :page :home :section section))))

  (dispatch event-bus-pub :intro
            (fn [[_ section]]
              (prn "nav to intro " section)
              (swap! core/app #(assoc % :page :intro :section section))))

  (dispatch event-bus-pub :data
            (fn [[_ section]]
              (prn "nav to data " section)
              (swap! core/app #(assoc % :page :data
                                        :section section
                                        :detail-slider-axis-value 1))))

  (dispatch event-bus-pub :faqs
            (fn [[_ section]]
              (prn "nav to faqs " section)
              (swap! core/app #(assoc % :page :faqs :section section))))

  (dispatch event-bus-pub :faq
            (fn [[_ faq-ref]]
              (prn faq-ref)
              (let [[sec id] faq-ref]
                (do (prn "nav to faq " faq-ref " = " sec "," id)
                    (prn "routes/faq/x/y " (routes/faq {:section sec :id id}))
                    (swap! core/app #(assoc % :page :faqs :section faq-ref))))))

  (comment
    ;;;
    ;; log-bus handling from here
    ;;;
    (dispatch log-bus-pub :rewind
              (fn [_]
                (prn "rewind session: not yet")
                #_(reset! logger/log-state-index nil)))

    (dispatch log-bus-pub :undo
              (fn [_] #_(prn "undoing: not yet")
                #_(swap! logger/log-state-index #(if (zero? %) 0 (dec %)))))

    (dispatch log-bus-pub :redo
              (fn [_] (prn "redoing: not yet")
                #_(swap! logger/log-state-index #(if (< % (dec (count @logger/log-states))) (inc %) %))))



    (dispatch log-bus-pub :parse-session
              (fn [_]
                (prn "parse-session: not yet")
                #_(logger/parse-session)
                ))))

;; start the event dispatcher
(dispatch-central)


;;
;; optionally do something on app reload
;;
(defn on-js-reload []
  (enable-console-print!)
  (.log js/console "reloading")
  (prn "Reloaded")
  (put! event-bus [:reloading nil]))
