(ns ^:figwheel-always prais2.mugshots
  (:require [rum.core]
            [prais2.core :as core]
            [prais2.content :as content]
            [clojure.string :as str]))

(rum.core/defc mugshot [key]
  (let [data (key content/mugshot-data)]
    [:div {:style {:max-width "100px"}}
     [:img.img-responsive
      (core/isrc (str "assets/mugshots/" (:id data) "-med.jpg"))]
     [:p.text-center {:key 2} (:name data)]])
  )

(rum.core/defc reformatted-mugshots []
  [:div
   [:.row [:.col-xs-2 (mugshot :christina)]]
   [:.row [:.col-xs-2 (mugshot :david)] [:.col-xs-2 (mugshot :tim)] [:.col-xs-2 (mugshot :emily-j)]]
   [:.row [:.col-xs-2 (mugshot :mike)] [:.col-xs-2 (mugshot :emily-b)] [:.col-xs-2 (mugshot :joanne)]]]
  )


