(ns ^:figwheel-always prais2.map
    (:require [rum :as r]
              [cljs.core.async :refer [put!]]
              [prais2.core :as core]
              [prais2.content :as content]))


(comment
  (def google-map
    {:did-mount
     (fn [state]
       (assoc state
              :canvas (.findDOMNode js/React (:rum/react-component state))
              :options (clj->js {"center" (new js/google.maps.LatLng latitude longitude)
                                 "zoom" 8}))
       (.log js/console state)
       )})


  (r/defcs g-map < google-map r/static [state latitude longitude]
    (let [map-options (clj->js {"center" (new js/google.maps.LatLng latitude longitude)
                                "zoom" 8})]
                                        ;(.log js/console state)
      (when (:canvas state)
        (js/google.maps.Map. (:canvas state) map-options)))
    ))
