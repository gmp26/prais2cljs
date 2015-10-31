(ns ^:figwheel-always prais2.open-layers-map
    (:require [rum.core :as rum]
              [jayq.core :refer ($)]
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



;; popup processing



;; var element = document.getElementById('popup');

;; var popup = new ol.Overlay({
;;   element: element,
;;   positioning: 'bottom-center',
;;   stopEvent: false
;; });
;; map.addOverlay(popup);

;; // display popup on click
;; map.on('click', function(evt) {
;;   var feature = map.forEachFeatureAtPixel(evt.pixel,
;;       function(feature, layer) {
;;         return feature;
;;       });
;;   if (feature) {
;;     popup.setPosition(evt.coordinate);
;;     $(element).popover({
;;       'placement': 'top',
;;       'html': true,
;;       'content': feature.get('name')
;;     });
;;     $(element).popover('show');
;;   } else {
;;     $(element).popover('destroy');
;;   }
;; });

;; // change mouse cursor when over marker
;; map.on('pointermove', function(e) {
;;   if (e.dragging) {
;;     $(element).popover('destroy');
;;     return;
;;   }
;;   var pixel = map.getEventPixel(e.originalEvent);
;;   var hit = map.hasFeatureAtPixel(pixel);
;;   map.getTarget().style.cursor = hit ? 'pointer' : '';
;; });



;;
;; Rum mixin which initialises an openlayer map on a component once the React component has mounted
;;
(defn popup []
  (new js/ol.Overlay
       (clj->js {:element (core/el "popup")
                 :positioning "bottom-center"
                 :stopEvent false
                 }) ))

(defn map-click-handler
  [event]
  (let [nev (.-nativeEvent event)
        map (:map @core/app)
        popup (:popup @core/app)
        element ($ "#popup")
        feature (.forEachFeatureAtPixel map
                                         (.-pixel event)
                                         (fn [a b] b)
                                         )
        ]
    (.log js/console event)
    (if feature
      (do
        (.setPosition popup (.-coordinate event))
        (.popover element
                  {:placement "top"
                   :html true
                   :content "hello";(.get feature "name")
                   })
        (.popover element "show")
        )
      (.popover element "destroy"))
    )
  )

;   var feature = map.forEachFeatureAtPixel(evt.pixel,
;;       function(feature, layer) {
;;         return feature;
;;       });
;;   if (feature) {
;;     popup.setPosition(evt.coordinate);
;;     $(element).popover({
;;       'placement': 'top',
;;       'html': true,
;;       'content': feature.get('name')
;;     });
;;     $(element).popover('show');
;;   } else {
;;     $(element).popover('destroy');
;;   }


(defn map-move-handler
  [event]
  (let [map (:map @core/app)
        popup (:popup @core/app)]
    )
)

(def map-view
  {:did-mount (fn [state]
                (swap! core/app #(assoc %
                                         :map (hospital-map)
                                         :popup (popup)))
                (.on (:map @core/app) "click" map-click-handler)
                state)

   :will-unmount (fn [state]
                   (swap! core/app #(dissoc % :map :popup))
                   state)})

(rum/defc hospitals < map-view []
  [:div

   [:#open-map {:style {:width "400px"
                        :height "600px"
                        :border "1px solid red"}}]
   [:#popup]])

;;;
;; cut from Tile :source ne OSM argument: (clj->js {:layer "osm"})
;;;
