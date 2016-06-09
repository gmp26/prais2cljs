(ns prais2.components.video-player
  (:require [rum.core :as rum :include-macros true]))

(def init-video-js
  {
   :did-mount (fn [state]
                #?(:cljs (do (.videojs js/window "video1"
                                       (clj->js {} #_{:playbackRates [1 1.5 2]})
                                       #(prn "video-1 initialised"))))
                state)
   :should-update  (fn [_ _] false)
   })

(rum.core/defc video-js < init-video-js
               [{:keys [video-id src controls preload poster track-src]
                          :or   {controls true preload "auto"}}]
               (letfn [(vid [s] (str video-id "-" s))]
                 [:figure.videojs-container {:id (vid "container")}

                  [:video.video-js.vjs-default-skin.vjs-big-play-centered
                   {:key      1
                    :id       video-id
                    :poster   poster
                    :controls controls
                    :preload  preload
                    :style    {:background-color "rgba(255,255, 255, 0)"
                               :max-width "600px"
                               :width "480px"
                               :height "272px"}}
                   [:source {:key  1
                             :src  src
                             :type "video/mp4"}]
                   #_[:track {:key     2
                            :src     track-src
                            :label   "captions-on"
                            :kind    "captions"
                            :srclang "en"}]]]))

