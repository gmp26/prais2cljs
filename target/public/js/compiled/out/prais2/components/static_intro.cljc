(ns prais2.components.static-intro
  (:require [rum.core]
            [prais2.intro :refer [render-intro]]
            [prais2.chrome :as chrome]))


(rum.core/defc static-intro []
  [:div
   (chrome/header)
   (render-intro)
   (chrome/footer)])