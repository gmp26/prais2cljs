(ns ^:figwheel-always prais2.open-layers-map
    (:require [rum.core :as rum]
              [jayq.core :refer ($)]
              [cljs.core.async :refer [put!]]
              [prais2.core :as core]
              [prais2.content :as content]))


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
                                    :name (:h-name row)
                                    :population 4000
                                    :rainfall 500
                                    }))]
    (.setStyle marker iconStyle)
    marker))

(def hospital-markers
  (let [rows (rest content/table1-data)]
    (clj->js
     (map hospital-marker rows))))

(def vectorSource
  (new js/ol.source.Vector
       (clj->js {:features hospital-markers})))

(def vectorLayer
  (new js/ol.layer.Vector
       (clj->js {:source vectorSource})))

(def tileLayer
  (new js/ol.layer.Tile
       (clj->js {:preload 4
                 :source (new js/ol.source.OSM)})))

(def mapView
  (new js/ol.View (clj->js {:center (map-point 54.5 -3)
                            :zoom 5.7})))
(defn hospital-map []
  (new js/ol.Map (clj->js {:target "open-map"
                           :layers [tileLayer vectorLayer]
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

(defn map-click-handler
  [event]
  (let [nev (.-nativeEvent event)
        the-map (:map @core/app)
        the-popup (:popup @core/app)
        element ($ "#popup")
        feature (.forEachFeatureAtPixel the-map
                                         (.-pixel event)
                                         (fn [a b] a))]
    (if feature
      (do
        (.setPosition the-popup (.-coordinate event))
        (.popover element (clj->js
                           {:placement "top"
                            :html true
                            :content (.get feature "name")
                            }))
        (.popover element "show"))
      (.popover element "destroy"))))

(defn map-move-handler
  [event]
  (let [the-map (:map @core/app)
        the-popup (:popup @core/app)
        element ($ "#popup")
        pixel (.getEventPixel the-map (.-originalEvent event))
        hit (.hasFeatureAtPixel the-map pixel)]
    (when (not hit)
      (.popover element "destroy"))))

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
                  (.on the-map "pointermove" map-move-handler))
                state)

   :will-unmount (fn [state]
                   (swap! core/app #(dissoc % :map :popup))
                   state)})


(defn project [lat lon]
  (.fromLonLat js/ol.proj (clj->js [lon lat])))

(defn panHandler [event lat lon]
  (let [dt 7000
        start (new js/Date.)

        pan (.pan ol.animation (clj->js {:duration dt
                                         :source (.getCenter mapView)
                                         :resolution 512
                                         ;:start start
                                         }))
        bounce (.bounce js/ol.animation (clj->js {:duration dt
                                                  :resolution 512
                                                  ;:start start
                                                  }))]
    (prn start)
    (.beforeRender (:map @core/app) pan bounce)
    (.setCenter mapView (project lat lon))
    (.setResolution mapView 16)))


(rum/defc hospital-button [row]
  [:button.btn-primary.h-button
   {:on-click #(panHandler % (:h-lat row) (:h-lon row))}
   (:h-code row)])

(rum/defc hospitals < map-view []
  [:div
   [:div.map-buttons {:key 1}
    (map #(hospital-button %) (rest content/table1-data))
    ]
   [:div {:key 2}
    [:#open-map {:style {:width "350px"
                         :height "500px"
                         :border "1px solid red"}}]
    [:#popup]
    ]])

;;;
;; cut from Tile :source ne OSM argument: (clj->js {:layer "osm"})
;;;
