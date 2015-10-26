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
   [prais2.main :refer [render-404
                        debug
                        render-table
                        ]]
   )
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defcard tests
  "#Test suite
This is based on Bruce Hauman's devcards package so we can interleave REPL tests with visual test cards with markdown notes.")


(defcard show-404
  (render-404)
  )

(defcard show-app-state
  (debug))

(defcard render-table
  (render-table "data"))
