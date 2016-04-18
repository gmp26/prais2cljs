(ns prais2.home
  (:require [rum.core :as rum]
            [prais2.core :as core]
            [prais2.content :as content]
            [prais2.data :as data]
            [prais2.chrome :as chrome]
            [prais2.utils :as u :refer [key-with]]
            [prais2.open-layers-map :as map]
            [cljsjs.jquery]))

(rum/defc animation-1 []
  [:.col-sm-offset-3.col-sm-6
   {:style {
            :width "500px"
            :height "300px"
            :background-color "black"
            :color "white"}}
   [:h2.col-sm-offset-2 "Animation 1"]])

(rum/defc what-why []
  [:.col-sm-4
   [:.home-nav.well.intro
    [:.active
     {:on-click       #(core/click->event-bus % :intro :top)
      :on-touch-start #(core/click->event-bus % :intro :top)}
     [:i.fa.fa-question {:style {:font-size "140px"}}]
     [:.chevron [:i.fa.fa-chevron-right]]
     [:.title "What, why, how?"]]
    [:p [:strong "What"] " do we mean by survival rates?"]
    [:p [:strong "Why"] " are survival rates after children’s heart surgery hard to interpret?"]
    [:p [:strong "How"] " does the NHS monitor them?"]
    [:p [:strong "What"] " this site can and cannot do."]]])

(rum/defc data []
  [:.col-sm-4
   [:.home-nav.well.data
    [:.active
     {:on-click       #(core/click->event-bus % :data :map)
      :on-touch-start #(core/click->event-bus % :data :map)}
     [:i.fa.fa-table {:style {:font-size "140px"}}]
     [:.chevron [:i.fa.fa-chevron-right]]
     [:.title "Data"]]
    [:p "Explore published survival statistics"]
    [:p "Browse hospitals on a UK & Ireland map"]
    [:p "View hospitals in a list"]]])

(rum/defc everything-else []
  [:.col-sm-4
   [:.home-nav.well.faqs
    [:.active
     {:on-click       #(core/click->event-bus % :faqs :top)
      :on-touch-start #(core/click->event-bus % :faqs :top)}
     [:i.fa.fa-info {:style {:font-size "140px"}}]
     [:.chevron [:i.fa.fa-chevron-right]]
     [:.title "Everything else"]]
    [:p "How are survival statistics monitored"]
    [:p "What happens if the data raises concerns?"]
    [:p "Information for families?"]
    [:p "More detail"]
    ]])

(rum/defc render-home < rum/reactive[]
  [:div
   [:.jumbotron.home

    [:.container
     [:.row
      [:section.about.col-sm-offset-2.col-sm-8
       [:p "This site is to help people make sense of the "
        (if (:show-nicor (rum/react core/app))
          [:a {:href "https://www.ucl.ac.uk/nicor/audits/congenital/documents/datasets/NCHDA2011-14Report" :target "_blank"} "published survival data"]
          "published survival data")

        " about children’s heart surgery in the UK and Ireland. "]
       [:p "Our website will help you:"]
       [:ul {:style {:font-size "16px"
                     :font-weight 200}}
        [:li "explore what survival rates can and can’t tell you"]
        [:li "understand how the NHS monitors children’s heart surgery"]
        [:li "explore published data for hospitals in the UK and Ireland"]]]
      (when (:show-nicor (rum/react core/app))
        [:a {:href "https://www.ucl.ac.uk/nicor/audits/congenital/documents/datasets/NCHDA2011-14Report" :target "_blank"}
         [:img.img-responsive.col-sm-2 {:src "assets/nicor.png"}]])]]]
   [:.container
    [:.row {:style {:margin-bottom "100px"}}
     (what-why)
     (data)
     (everything-else)]]
   ])
