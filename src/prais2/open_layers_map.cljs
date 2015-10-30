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

(def map-view
  {:did-mount (fn [state]
                ;; (swap! map-state (assoc % :map-element (.findDOMNode js/React (:rum/react-component state))))
                (assoc state :map (new js/ol.Map
                                       (clj->js
                                        {:target "open-map"
                                         :layers
                                         [
                                          (new js/ol.layer.Tile
                                               (clj->js
                                                {:source (new js/ol.source.OSM
                                                              )}))
                                          ]
                                         :view (new js/ol.View (clj->js
                                                                {:center (.transform (.-proj js/ol)
                                                                                     (clj->js [-3 54.5])
                                                                                     "EPSG:4326"
                                                                                     "EPSG:3857"
                                                                                     )
                                                                 :zoom 5.7}))})))
                state)})

(rum/defcs hospitals < map-view [state]
  [:#open-map {:style {:width "400px" :height "600px" :border "1px solid red"}}
   ])

;;;
;; cut from Tile :source ne OSM argument: (clj->js {:layer "osm"})
;;;
