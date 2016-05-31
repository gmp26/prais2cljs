(ns prais2.components.static-faqs
  (:require [rum.core]
            [prais2.faqs :refer [render-faqs]]
            [prais2.chrome :as chrome]))


(rum.core/defc static-faqs [section]
  [:div
   (chrome/header)
   (render-faqs section)
   (chrome/footer)])

