(ns ^:figwheel-always prais2.mugshots
  (:require [rum.core :as rum]
            [prais2.core :as core]
            [prais2.content :as content]
            [clojure.string :as str]))

(rum/defc mugshot [key]
  (let [data (key content/mugshot-data)]
    [:div {:style {:max-width "200px"}}
     [:img.img-responsive
      (core/isrc (str "assets/mugshots/" (:id data) "-med.jpg"))]
     [:p.text-center {:key 2} (:name data)]])
  )

(rum/defc reformatted-mugshots []
  [:div
   [:.row [:.col-xs-3 (mugshot :christina)] [:.col-xs-3 (mugshot :david)] [:.col-xs-3 (mugshot :mike)] ]
   [:.row  [:.col-xs-3 (mugshot :tim)] [:.col-xs-3 (mugshot :emily-b)]]
   [:.row  [:.col-xs-3 (mugshot :emily-j)] [:.col-xs-3 (mugshot :joanne)]]]
  )


