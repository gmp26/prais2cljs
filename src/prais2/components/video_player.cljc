(ns prais2.components.video-player
  (:require [rum.core :as rum :include-macros true]))

(def init-player
  {
   :did-mount (fn [state]
                #?(:cljs
                   (.init js/OzPlayer.))
                state)
   })

(rum.core/defc video-js [{:keys [video-id src controls preload poster track-src]
                          :or   {controls true preload ""}}]
               (letfn [(vid [s] (str video-id "-" s))]
                 [:figure.videojs-container {:id (vid "container")}

                  [:video.video-js.vjs-default-skin
                   {:key      1
                    :id       video-id
                    :poster   poster
                    :controls controls
                    :preload  preload}
                   [:source {:key  1
                             :src  src
                             :type "video/mp4"}]
                   [:track {:key     2
                            :src     track-src
                            :kind    "captions"
                            :srclang "en"
                            :default "default"}]]
                  [:script {:key 2 :src "//vjs.zencdn.net/5.10.2/video.min.js"}]]))

(rum.core/defc oz-video < init-player [{:keys [video-id src controls preload poster track-src]
                                        :or   {controls true preload ""}}]
               (letfn [(vid [s] (str video-id "-" s))]
                 [:figure.ozplayer-container {:id (vid "container")}
                  [:.ozplayer
                   {:id              video-id
                    :key             1
                    :data-responsive (vid "container")
                    :data-controls   "stack"
                    :data-transcript (vid "transcript")}
                   [:video
                    {:poster   poster
                     :controls controls
                     :preload  preload
                     :style    {:max-width "480px"}
                     }
                    [:source {:key 1 :src src :type "video/mp4"}]
                    [:track {:key     2
                             :src     track-src
                             :kind    "captions"
                             :srclang "en"
                             :default "default"}]
                    [:track {:key       3
                             :src       track-src
                             :kind      "metadata"
                             :data-kind "transcript"
                             :srclang   "en"
                             }]
                    [:.ozplayer-fallback
                     [:ul [:li [:a {:href "http://childrensheartsurgery.info/assets/video01.mp4"} "Video for playback"]]]]]]
                  [:details.ozplayer-expander
                   {:open "open"
                    :key  2}
                   [:summary "Video Transcript"
                    [:div.ozplayer-transcript {:id (vid "transcript")}]]]
                  ]))


;;<!-- This section is per video -->
;;<figure id= "video1-container" class= "ozplayer-container" >
;;<div data-responsive= "video1-container" data-controls= "stack" class= "ozplayer" id= "video1" data-transcript= "video1-transcript" >
;;<video poster= "http://childrensheartsurgery.info/assets/video-1-thumbnail.png" width= "640" height= "360" controls= "controls" preload= "none" >
;;<source src= "http://childrensheartsurgery.info/assets/video01.mp4" type= "video/mp4" ></source>
;;<track src= "http://childrensheartsurgery.info/assets/video01.txt" kind= "captions" srclang= "en" default= "default" ></track>
;;<track src= "http://childrensheartsurgery.info/assets/video01-extras.txt" kind= "metadata" data-kind= "transcript" srclang= "en" ></track>
;;<div class= "ozplayer-fallback" ><ul><li><a href= "http://childrensheartsurgery.info/assets/video01.mp4" >Video for playback< / a></li></ul></div>
;;</video>
;;<audio data-default= "default" preload= "none" >
;;<source src= "http://childrensheartsurgery.info/assets/video01.mp3" type= "audio/mp3" ></source>
;;<source src= "http://childrensheartsurgery.info/assets/video01.ogg" type= "audio/mp3" ></source>
;;</audio>
;;</div>
;;<details class= "ozplayer-expander" open= "open" >
;;<summary>Video Transcript</summary>
;;<div id= "video1-transcript" class= "ozplayer-transcript" ></div>
;;</details>
;;</figure>

;;<!-- This section is once per page, but after all the videos -->
#_(defn oz-player-script []
    [:script
     {:dangerouslySetInnerHTML
      {:__html
       (str
         "<script type= \"text/javascript\" src= \"https://ozplayer.global.ssl.fastly.net/2.0/ozplayer-core/ozplayer.free.js\" ></script>\n
       <script type= \"text/javascript\" src= \"https://ozplayer.global.ssl.fastly.net/2.0/ozplayer-lang/en.js\" ></script>\n
       <script type= \"text/javascript\" src= \"https://ozplayer.global.ssl.fastly.net/2.0/config.js\" ></script>\n")}}])

;;<script type= "text/javascript" src= "https://ozplayer.global.ssl.fastly.net/2.0/ozplayer-core/ozplayer.free.js" ></script>
;;<script type= "text/javascript" src= "https://ozplayer.global.ssl.fastly.net/2.0/ozplayer-lang/en.js" ></script>
;;<script type= "text/javascript" src= "https://ozplayer.global.ssl.fastly.net/2.0/config.js" ></script>
