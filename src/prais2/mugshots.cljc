(ns ^:figwheel-always prais2.mugshots
  (:require [rum.core]
            [prais2.core :as core]
            [prais2.content :as content]
            [clojure.string :as str]))

(rum.core/defc
  mug < rum.core/static [name]
  [:.col-xs-3
   [:img.img-responsive (core/isrc (str "assets/mugshots/" name "-med.jpg") :key 1)]
   [:p.text-center {:key 2} (str/capitalize name)]
   ])

(rum.core/defc
  mugshots []
  [:.row
   (map-indexed #(rum.core/with-key (mug %2) %1) (content/get-mugshots))
   ])



