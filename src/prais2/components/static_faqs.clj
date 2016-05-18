(ns prais2.components.static-faqs
  (:require [rum.core :as rum]
            [prais2.faqs :refer [render-faq-section]]
            [prais2.chrome :as chrome]))


(rum.core/defc static-faqs [section]
  [:div
   (chrome/header)
   (render-faq-section section)
   (chrome/footer)])

