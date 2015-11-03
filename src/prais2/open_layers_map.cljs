(ns ^:figwheel-always prais2.open-layers-map
    (:require [rum.core :as rum]
              [jayq.core :refer ($)]
              [cljs.core.async :refer [<! put! timeout]]
              [prais2.core :as core]
              [prais2.content :as content]
              [ol.Feature]
              [ol.Overlay]
;              [ol.Map]
;              [ol.layer.Tile]
;              [ol.layer.Vector]
;              [ol.View]
;              [ol.proj]
;              [ol.source.OSM]
;              [ol.source.Vector]
;              [ol.style.Style]
;              [ol.style.Icon]
;              [ol.geom.Point]
;              [ol.animation]
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

(declare panHandler)

(def dt 5000)

(defn map-click-handler
  [event]
  (let [
        the-map (:map @core/app)
        the-popup (:popup @core/app)
        element ($ "#popup")
        feature (.forEachFeatureAtPixel the-map
                                         (.-pixel event)
                                         (fn [a b] a))
        ]
    (if feature
      (let [h-code (keyword (.get feature "code"))
            row (h-code content/rows-by-code)
            geometry (.getGeometry feature)
            coord (.getCoordinates geometry)]

        (prn "feature " coord )
        (panHandler (:h-lat row) (:h-lon row))
        (go (<! (timeout dt))
            (.setPosition the-popup (clj->js [(first coord) (+ 450 (second coord))]))
            (.popover element (clj->js
                               {:placement "top"
                                :html true
                                :content (str "<h4>"(.get feature "name") "</h4>" (.get feature "count") " operations")
                                }))
            (.popover element "show")
            (go (<! (timeout 2500))
                (.popover element "destroy"))))
      (.popover element "hide"))))

#_(defn map-move-handler
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
                  ;(.on the-map "pointermove" map-move-handler)
                  )
                state)

   :will-unmount (fn [state]
                   (swap! core/app #(dissoc % :map :popup))
                   state)})


(defn project [lat lon]
  (.fromLonLat js/ol.proj (clj->js [lon lat])))

(defn panHandler [lat lon & {:keys [resolution] :or {resolution 16}}]
  (let [pan (.pan ol.animation (clj->js {:duration dt
                                         :source (.getCenter mapView)
                                         :resolution 512
                                         }))
        bounce (.bounce js/ol.animation (clj->js {:duration dt
                                                  :resolution 512
                                                  }))]
    (.beforeRender (:map @core/app) pan bounce)
    (.setCenter mapView (project lat lon))
    (.setResolution mapView resolution)))

(rum/defc hospital-button [row]
  [:button.btn-primary.h-button
   {:on-click #(panHandler (:h-lat row) (:h-lon row))}
   (:h-code row)])

(rum/defc home-button []
  [:button.btn-primary
   {:on-click #(panHandler -3 54.5 512)}
   Home])

(rum/defc hospitals < map-view []
  [:div
   [:div.map-buttons {:key 1}
    (map #(hospital-button %) (rest content/table1-data))
    ]
   [:div {:key 2}
    [:#open-map {:tab-index 0
                 :style {:width "350px"
                         :height "500px"
                         :border "1px solid grey"}}]
    [:#popup]
    ]])
