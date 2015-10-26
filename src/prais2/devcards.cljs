(ns prais2.devcards
  (:require
   [rum.core :as rum]
   [prais2.core :as core :refer [event-bus event-bus-pub]]
   [prais2.routes :as routes]
   [prais2.content :as content]
   [prais2.data :as data]
   [prais2.chrome :as chrome]
   [prais2.intro :refer [render-intro]]
   [prais2.faqs :refer [render-faqs]]
   )
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)


(rum/defc rum-test []
  [:div
   [:h1 "This is your first devcard!"]])



(defcard test-rum
  (rum-test)
  )
