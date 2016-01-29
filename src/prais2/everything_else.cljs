(ns ^:figwheel-always prais2.everything-else
    (:require [rum.core :as rum]
              [clojure.string :as str]
              [prais2.core :as core]
              [prais2.faqs :as faqs]
              [prais2.utils :refer [key-with]]
              [prais2.chrome :as chrome]
              [prais2.content :as content :refer [faq-sections]]))


(rum/defc render-everything-else [id]
  [:.container
   [:.row
    [:h1 "Everything Else"]

    ]])
