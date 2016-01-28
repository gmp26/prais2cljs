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


(rum/defc animation-1 []
  [:.col-sm-offset-3.col-sm-6
   {:style {
            :width "500px"
            :height "300px"
            :background-color "black"
            :color "white"}}

   [:h2.col-sm-offset-2 "Animation placeholder"]

])

(rum/defc what-why []
  [:.col-sm-4
   [:.well.home-nav.intro
    {:on-click #(core/click->event-bus % :intro :top)
     :on-touch-start #(core/click->event-bus % :intro :top)}
    [:i.fa.fa-question {:style {:zoom 10}}]
    [:h2 "What, why, how?"]
    [:p [:strong "What"] " do we mean by survival statistics?"]
    [:p [:strong "Why"] " are survival statistics after children’s heart surgery hard to interpret?"]
    [:p [:strong "How"] " does the NHS monitor them?"]]
   ])

(rum/defc data []
  [:.col-sm-4
   [:.well.home-nav.data
    {:on-click #(core/click->event-bus % :data :example)
     :on-touch-start #(core/click->event-bus % :data :example)}
    [:i.fa.fa-table {:style {:zoom 10}}]
    [:h2 "Data"]
    [:p "Explore published survival statistics!"]
    [:p "Use the illustration to see how we present the statistics."]
    [:p "Browse hospitals on a UK map"]
    [:p "Get an overview of all hospitals in a list"]]
   ])

(rum/defc everything-else []
  [:.col-sm-4
   [:.well.home-nav.faqs
    {:on-click #(core/click->event-bus % :faqs :top)
     :on-touch-start #(core/click->event-bus % :faqs :top)}
    [:i.fa.fa-info {:style {:zoom 10}}]
    [:h2 "Everything else"]
    [:p "More information about how survival statistics are monitored"]
    [:p "What happens if there are any concerns about the data?"]
    [:p "More information about us, this website and external resources."]
    [:p "Plus lots of other information!"]]
   ])

(rum/defc render-home []
  [:div
   [:.jumbotron
    {:style
     {:background-image "url(assets/logotron.png)"
      :background-size "100%"
      :color "#CCCCCC"}}
    [:.container
     [:section.about
      [:p "This site is to help people make sense of the published survival statistics about children’s heart surgery. Our website will help you:"
       [:ul
        [:li "explore what survival rates can and can’t tell you"]
        [:li "understand how the NHS monitors children’s heart surgery"]
        [:li "explore published results for UK hospitals"]]
       #_[:p "Use the tabs or watch our animations to explore this site!"]
       ]

      (animation-1)
      ]]]
   [:.container
    [:.row
     (what-why)
     (data)
     (everything-else)]]
   ])
