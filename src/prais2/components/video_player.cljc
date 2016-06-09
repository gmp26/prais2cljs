(ns prais2.components.video-player
  (:require [rum.core :as rum :include-macros true]))

;(defn video-js-debug [s] (prn s))
(defn video-js-debug [s] nil)

(def init-video-js
  {:did-mount      (fn [state]
                     #?(:cljs (assoc state
                                ::player (.videojs js/window (:video-id (first (:rum/args state)))
                                                   (clj->js {})
                                                   #(video-js-debug (str (:video-id (first (:rum/args state)))
                                                                         " initialised"))))
                        :clj  state))

   :transfer-state (fn [old-state state]
                     (assoc state ::player (::player old-state)))

   :will-unmount   (fn [state]
                     ;; :todo cross-browser test this sequence
                     (.pause (::player state))
                     (.dispose (::player state))
                     (dissoc state ::player))
   })

(rum.core/defc video-js < init-video-js
  [{:keys [video-id src controls preload poster track-src]
    :or   {controls true preload "auto" poster "" track-src nil}}]
  [:video.video-js.vjs-default-skin.vjs-big-play-centered
   {:key                     1
    :id                      video-id
    :poster                  poster
    :controls                controls
    :preload                 preload
    :width                   480                            ;; :todo
    :dangerouslySetInnerHTML {:__html
                              (str "<source src=\"" src "\" type=\"video/mp4\">"
                                   (when track-src (str "<track src=\"" track-src "\"
                                        label=\"captions-on\"
                                        kind=\"captions\">")))}}
   ])


