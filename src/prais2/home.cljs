(ns prais2.home
   (:require [rum.core :as rum]
              [prais2.core :as core]
              [prais2.content :as content]
              [prais2.data :as data]
              [prais2.chrome :as chrome]
              [prais2.utils :as u :refer [key-with]]
              [prais2.open-layers-map :as map]
              [cljsjs.jquery
               ]))

(rum/defc render-home []
  [:.container
   [:.row
    [:#home
     [:h1 "Home"]
     [:section.about
      [:p "This site is to help people make sense of the published survival statistics about children’s heart surgery. Our website will help you:
      • explore what survival rates can and can’t tell you
      • understand how the NHS monitors children’s heart surgery
      • explore published results for UK hospitals
      Use the tabs or watch our animations to explore this site!"]]]]])
