(ns prais2.components.static-home
  (:require [rum.core]
            [prais2.home :refer [render-home]]
            [prais2.chrome :as chrome]))

(rum.core/defc static-home []
  [:div
   (chrome/header)
   (render-home)
   (chrome/footer)])