(ns ^:figwheel-always prais2.open-layers-map
    (:require [rum.core :as rum]
              [jayq.core :refer ($)]
              [cljs.core.async :refer [<! put! timeout]]
              [prais2.core :as core :refer [event-bus]]
              [prais2.content :as content]
              [prais2.data :as data]
              [ol.Feature]
              [ol.Overlay]
              [ol.source.OSM]
              ;; This lot appears to be pulled in by the above anyway
              ;;              [ol.Map]
              ;;              [ol.layer.Tile]
              ;;              [ol.layer.Vector]
              ;;              [ol.View]
              ;;              [ol.proj]
              ;;              [ol.source.Vector]
              ;;              [ol.style.Style]
              ;;              [ol.style.Icon]
              ;;              [ol.geom.Point]
              ;;              [ol.animation]
              )
    (:require-macros [cljs.core.async.macros :refer [go]]))

;;;
;; See js example in http://openlayers.org/en/v3.9.0/examples/icon.html
;;;

(def iconStyle
  (new js/ol.style.Style
       (clj->js
        {:image (new js/ol.style.Icon
                     (clj->js {:anchor (clj->js [0.5 33])
                               :anchorXUnits "fraction"
                               :anchorYUnits "pixels"
                               :opacity 0.6
                               :src "assets/icon.png"
                               }))
         })))

(defn map-point
  "Generate map coordinates given longitude and latitude in degrees"
  [lat lon]
  (.transform (.-proj js/ol)
              (clj->js [lon lat])  ; stet lon, then lat
              "EPSG:4326"
              "EPSG:3857"
              ))

(defn hospital-marker
  [row]
  (let [marker (new js/ol.Feature (clj->js
                                   {:geometry (new js/ol.geom.Point
                                                   (map-point (:h-lat row) (:h-lon row)))
                                    :code (keyword (:h-code row))
                                    :name (:h-name row)
                                    :count (:n-ops row)
                                    }))]
    (.setStyle marker iconStyle)
    marker))

(defn hospital-markers
  []
  (let [rows (rest ((data/table-data (:datasource @core/app))))]
    (clj->js
     (map hospital-marker rows))))

(defn vectorSource
  []
  (new js/ol.source.Vector
       (clj->js {:features (hospital-markers)})))

(defn vectorLayer
  []
  (new js/ol.layer.Vector
       (clj->js {:source (vectorSource)})))

(def tileLayer
  (new js/ol.layer.Tile
       (clj->js {:preload 4
                 :source (new js/ol.source.OSM)})))

(def mapView
  (new js/ol.View (clj->js {:center (map-point 54.5 -3)
                            :zoom 5.7})))
(defn hospital-map []
  (new js/ol.Map (clj->js {:target "open-map"
                           :layers [tileLayer (vectorLayer)]
                           :view mapView
                           :loadTilesWhileAnimating true})))

;;
;; Rum mixin which initialises an openlayer map on a component once the React component has mounted
;;
(defn popup []
  (new js/ol.Overlay
       (clj->js {:element (core/el "popup")
                 :positioning "bottom-center"
                 :stopEvent false
                 })))


(defn project [lat lon]
  (.fromLonLat js/ol.proj (clj->js [lon lat])))

(defn map-click-handler
  [event]
  (let [the-map (:map @core/app)
        feature (.forEachFeatureAtPixel the-map
                                         (.-pixel event)
                                         (fn [a b] a))]
    (when feature
      ;(core/click->event-bus event :click-on-map-marker (keyword (.get feature "code")))
      (put! event-bus [:click-on-map-marker (keyword (.get feature "code")) event])
      )))

; map zoom animation time
(def zoom-time 1000)

(defn zoom-to-location
  ([lat lon]
   (zoom-to-location lat lon 4))

  ([lat lon resolution]
   (prn (str "resolution = " resolution))
   (let [pan (.pan ol.animation (clj->js {:duration zoom-time
                                          :source (.getCenter mapView)
                                          :resolution (.getResolution mapView)
                                          }))
         zoom (.zoom js/ol.animation (clj->js {:duration zoom-time
                                               :source (.getCenter mapView)
                                               :resolution (.getResolution mapView)
                                               }))
         ]
     (.setCenter mapView (project lat lon))
     (.setResolution mapView resolution)
     (.beforeRender (:map @core/app) pan zoom)
     )))


(defn zoom-to-feature
  "Handle a click on a map feature.
  This should behave like a react render even though it uses open-layers map software and so
  bypasses React. We should render from map-state stored in the app atom."

  []
  (prn  "h-code = " (:map-h-code @core/app))
  (let [ap @core/app
        h-code (:map-h-code ap)
        the-popup (:popup ap)
        element ($ "#popup")
        the-datasource (:datasource ap)
        row (h-code ((data/rows-by-code the-datasource)))
        lat (:h-lat row)
        lon (:h-lon row)
        coord (map-point lat lon)
        ]

    (zoom-to-location lat lon)
    (go (<! (timeout zoom-time))

        (.setPosition the-popup (clj->js [(first coord) (+ 150 (second coord))]))
        (.popover element (clj->js
                           {:placement "top"
                            :html true
                            :content (str "<h4>"(:h-name row) "</h4>" (:n-ops row) " operations")
                            }))
        (.popover element "show")
        (go (<! (timeout 2500))
            (.popover element "destroy")))
    (.popover element "hide")))


(def map-view
  {:did-mount (fn [state]
                (let [the-map (hospital-map)
                      the-popup (popup)
                      ]
                  (swap! core/app #(assoc %
                                          :map the-map
                                          :popup the-popup))
                  (.addOverlay the-map the-popup)
                  (.on the-map "click" map-click-handler)
                  )
                state)

   :will-unmount (fn [state]
                   (swap! core/app #(dissoc % :map :popup))
                   state)})



(rum/defc hospital-button [row]
  [:button
   {:style {:color "#337AB7"
            }
    :on-click #(zoom-to-location (:h-lat row) (:h-lon row))}
   [:span.fa.fa-map-marker ]])

(rum/defc home-button []
  [:button.btn-primary.h-button
   {:on-click #(zoom-to-location 54.5 -3 4000)
    :tab-index 0}
   "Home"])

(rum/defc hospitals < map-view rum/reactive []
  [:div
   [:div {:key 2}
    [:#open-map {:tab-index 0
                 :style {:width "350px"
                         :height "500px"
                         :position "relative"
                         :border "1px solid grey"}}

     (home-button)]
    [:#popup]
    ]])
