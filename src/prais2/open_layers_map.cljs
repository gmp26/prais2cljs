(ns ^:figwheel-always prais2.open-layers-map
    (:require [rum.core :as rum]
              [cljs.core.async :refer [put!]]
              [prais2.core :as core]
              [prais2.content :as content]))


;;;
;; Open layers map of hospitals
    ;; <script type="text/javascript">
    ;;   var map = new ol.Map({
    ;;     target: 'map',
    ;;     layers: [
    ;;       new ol.layer.Tile({
    ;;         source: new ol.source.MapQuest({layer: 'sat'})
    ;;       })
    ;;     ],
    ;;     view: new ol.View({
    ;;       center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
    ;;       zoom: 4
    ;;     })
    ;;   });
    ;; </script>
;;;

;;;
;; See js version in http://openlayers.org/en/v3.9.0/examples/icon.html
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
  [lat lon]
  (let [marker (new js/ol.Feature (clj->js
                                   {:geometry (new js/ol.geom.Point (map-point lat lon))
                                    :name "Null Island"
                                    :population 4000
                                    :rainfall 500
                                    }))]
    (.setStyle marker iconStyle)
    marker))

(def hospital-markers
  (let [rows (rest content/table1-data)]
    (clj->js
     (map (fn [row] (hospital-marker (:h-lat row) (:h-lon row))) rows))))

(def vectorSource
  (new js/ol.source.Vector
       (clj->js {:features hospital-markers})))

(def vectorLayer
  (new js/ol.layer.Vector
       (clj->js {:source vectorSource})))

(def tileLayer
  (new js/ol.layer.Tile
       (clj->js {:source (new js/ol.source.OSM)})))

(def mapView
  (new js/ol.View (clj->js {:center (map-point 54.5 -3)
                            :zoom 5.7})))
(defn hospital-map []
  (new js/ol.Map (clj->js {:target "open-map"
                           :layers [tileLayer vectorLayer]
                           :view mapView})))

;;
;; Rum mixin which initialises an openlayer map on a component once the React component has mounted
;;
(def map-view
  {:did-mount #(assoc % :map (hospital-map))
   :will-unmount #(dissoc % :map)})

(rum/defcs hospitals < map-view [state]
  [:div
   [:#open-map {:style {:width "400px" :height "600px" :border "1px solid red"}}]
   [:#popup]])

;;;
;; cut from Tile :source ne OSM argument: (clj->js {:layer "osm"})
;;;
