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

   [:h2.col-sm-offset-2 "Animation 1"]

])

(rum/defc what-why []
  [:.col-sm-4
   [:.well.home-nav.intro
    {:on-click #(core/click->event-bus % :intro :top)
     :on-touch-start #(core/click->event-bus % :intro :top)}
    [:i.fa.fa-question {:style {:font-size "140px"}}]
    [:h2 "What, why, how?"]
    [:p [:strong "What"] " do we mean by survival rates?"]
    [:p [:strong "Why"] " are survival rates after children’s heart surgery hard to interpret?"]
    [:p [:strong "How"] " does the NHS monitor them?"]]
   [:p [:strong "What"] " this site can and cannot do."]]
   ])

(rum/defc data []
  [:.col-sm-4
   [:.well.home-nav.data
    {:on-click #(core/click->event-bus % :data :map)
     :on-touch-start #(core/click->event-bus % :data :map)}
    [:i.fa.fa-table {:style {:font-size "140px"}}]
    [:h2 "Data"]
    [:p "Explore published survival data!"]
    [:p "Use the illustration to see how we present the data."]
    [:p "Browse hospitals on a UK map"]
    [:p "Get an overview of all hospitals in a list"]]
   ])

(rum/defc everything-else []
  [:.col-sm-4
   [:.well.home-nav.faqs
    {:on-click #(core/click->event-bus % :faqs :top)
     :on-touch-start #(core/click->event-bus % :faqs :top)}
    [:i.fa.fa-info {:style {:font-size "140px"}}]
    [:h2 "Everything else"]
    [:p "More information about how survival rates are monitored"]
    [:p "What happens if there are any concerns about the data?"]
    [:p "More information about us, this website and external resources."]
    [:p "Plus lots of other information!"]]
   ])

(rum/defc render-home < rum/reactive[]
  [:div
   [:.jumbotron
    {:style
     {;:background-image "url(assets/logotron.png)"
      :background-size "100%"
      :color "#555555"
      :margin 0}}
    [:.container
     [:.row
      [:section.about.col-sm-offset-2.col-sm-8
       [:p "This site is to help people make sense of the "
        (if (:show-nicor (rum/react core/app))
          [:a {:href "https://www.ucl.ac.uk/nicor/audits/congenital/documents/datasets/NCHDA2011-14Report"} "published survival data"]
          "published survival data")

        " about children’s heart surgery. "]
       [:p "Our website will help you:"]
       [:ul {:style {:font-size "16px"
                     :font-weight 200
                     }}
        [:li "explore what survival rates can and can’t tell you"]
        [:li "understand how the NHS monitors children’s heart surgery"]
        [:li "explore published results for UK hospitals"]]
       ]
      (when (:show-nicor (rum/react core/app))
        [:a {:href "https://www.ucl.ac.uk/nicor/audits/congenital/documents/datasets/NCHDA2011-14Report"} [:img.img-responsive.col-sm-2 {:src "assets/nicor.png"}]])]
     ]
    #_[:button.btn-primary.btn-lg.center-block.highlight
       {:role "button"
        :style
        {:position "relative"
         :margin-top "20px"
         :right "0px"
         :bottom "0px"
         :width "200px"
         :height "80px"
         :background-color "#FC867A"
         :border "none"}
        :on-click #(core/click->event-bus % :intro :top)
        :on-touch-start #(core/click->event-bus % :intro :top)}
       "Next "
       [:i.fa.fa-chevron-right]
       ]]
   [:.container
    [:.row {:style {:margin-bottom "100px"}}
     (what-why)
     (data)
     (everything-else)]]
   ])
