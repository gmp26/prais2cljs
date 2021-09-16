(ns prais2.components.data-selector
  (:require [rum.core :as rum]
            [prais2.core :as core]
            [prais2.content :as content]
            ))


(rum/defc data-selector < rum.core/reactive []
  (let [app (rum.core/react core/app)]
    [:.data-selector
     [:p

      [:h1 [:i.fa.fa-chevron-left]
       (str " " (:label ((:datasource app) content/datasource-tab)))]]]))
