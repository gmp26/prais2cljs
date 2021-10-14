(ns prais2.components.static-faqs
  (:require [rum.core :as rum]
            [prais2.faqs :refer [render-faqs]]
            [prais2.chrome :as chrome]))


(rum/defc static-faqs < rum/reactive [section]
  [:div
   (chrome/header)
   (render-faqs section)
   (chrome/footer)])

