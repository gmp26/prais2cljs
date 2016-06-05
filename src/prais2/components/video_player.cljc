(ns prais2.components.video-player
  (:require [rum.core :as rum :include-macros true]))

(def init-video-js
  {
   :did-mount (fn [state]
                #?(:cljs (do (.videojs js/window "video1"
                                       (clj->js {:playbackRates [1 1.5 2]})
                                       #(prn "video-1 initialised"))
                             (.videojs js/window "video2"
                                       (clj->js {:playbackRates [1 1.5 2]})
                                       #(prn "video-2 initialised"))))
                state)
   })

(rum.core/defc video-js                                     ;< init-video-js
               [{:keys [video-id src controls preload poster track-src]
                          :or   {controls true preload ""}}]
               (letfn [(vid [s] (str video-id "-" s))]
                 [:figure.videojs-container {:id (vid "container")}

                  [:video.video-js.vjs-default-skin
                   {:key      1
                    :id       video-id
                    :poster   poster
                    :controls controls
                    :preload  preload
                    :style    {;:padding-bottom   "30px"
                               ;:padding-left "30px"
                               ;:padding-right "30px"
                               :background-color "rgba(255,255, 255, 0)"
                               :max-width "600px"
                               :width "100%"
                               :height "100%"}}
                   [:source {:key  1
                             :src  src
                             :type "video/mp4"}]
                   [:track {:key     2
                            :src     track-src
                            :label   "subtitles on"
                            :kind    "captions"
                            :srclang "en"}]]]))


