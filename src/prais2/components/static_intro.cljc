(ns prais2.components.static-intro
  (:require [rum.core :as rum]
            [prais2.intro :refer [render-intro]]
            [prais2.chrome :as chrome]))


(rum/defc static-intro []
  [:div
   (chrome/header)
   (render-intro)
   (chrome/footer)])