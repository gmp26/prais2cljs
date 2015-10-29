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
                                         [(new js/ol.layer.Tile
                                               (clj->js
                                                {:source (new js/ol.source.MapQuest
                                                              (clj->js {:layer "osm"}))}))
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
   [:.ol-overlaycontainer-stopevent

    [:.ol-zoom.ol-unselectable.ol-control
     [:button.ol-zoom-in.ol-has-tooltip {:type "button"}
      [:span {:role "tooltip"}] "Zoom in"]
     [:button.ol-zoom-out.ol-has-tooltip {:type "button"}
      [:span {:role "tooltip"}] "Zoom out"]]

    [:.ol-attribution.ol-unselectable.ol-control.ol-collapsed
     [:ul
      [:li
       [:a {:href "http://openlayers.org"
            :target "_blank"}
        [:img {:src "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"} ]
        [:img {:src "//developer.mapquest.com/content/osm/mq_logo.png"}]]]
      [:li "Tiles Courtesy of "
       [:a {:href "http://www.mapquest.com/"
            :target "_blank"} "MapQuest"]]
      [:li {:style {:display "none"}}
       "Data © "
       [:a {:href "http://www.openstreetmap.org/"} "OpenStreetMap"]
       "  contributors,"
       [:a {:href "http://www.openstreetmap.org/copyright"} "©"]]
      [:li
       [:button.ol-has-tooltip {:type "button"}
        [:span "i"]
        [:span {:role "tooltip"} "Attributions"]]]]]]])
