(ns ^:figwheel-always prais2.intro
    (:require [rum :as r]
              [cljs.reader :as reader]
              [clojure.set :refer (intersection)]
              [cljsjs.react]
              [prais2.routes]
              [prais2.content]
              [jayq.core :refer ($)])
    (:require-macros [jayq.macros :refer [ready]])
)


#_(r/defc intro-body [data]
  [:section
   [:p (p1 data)]
   [:ul
    (for [item (:ul1 data)]
      [:li item])]
   ])

#_(r/defc intro [data]
  [:div {:class "jumbotron"}
   [:h1 {:key :intro1
         :title data}]
   [:h2 {:key :intro2
         :sub-title data}]
   (r/with-key
     (intro-body (:body data))
     :intro3)])
