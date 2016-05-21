(ns prais2.home
  (:require [rum.core :as rum]
            [prais2.core :as core]
            [prais2.utils :as u :refer [key-with]]
            ))

(rum/defc what-why []
  [:.col-sm-4
   [:.home-nav.well.intro
    [:.active
     {:on-click       #(core/click->event-bus % :intro :top)
      :on-touch-start #(core/click->event-bus % :intro :top)}
     [:i.fa.fa-question.big]
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
     [:i.fa.fa-table.big]
     [:.chevron [:i.fa.fa-chevron-right]]
     [:.title "Data"]]
    [:p [:b "Explore published survival statistics by:"]]
    [:p "browsing hospitals individually;"]
    [:p "viewing a one page summary of all hospitals;"]
    [:p "watching our 2 minute video on how to interpret the results."]
    ]])

(rum/defc everything-else []
  [:.col-sm-4
   [:.home-nav.well.faqs
    [:.active
     {:on-click       #(core/click->event-bus % :faqs :top)
      :on-touch-start #(core/click->event-bus % :faqs :top)}
     [:i.fa.fa-info.big]
     [:.chevron [:i.fa.fa-chevron-right]]
     [:.title "Everything else"]]
    
    [:p "What happens if the data raises concerns?"]
    [:p "More detail about how survival statistics are monitored, including an explanatory video."]
    [:p "Limitations of this data."]
    [:p "Information for families."]
    [:p "About us and this website."]
    
    ]])

(rum/defc render-home < rum/reactive []
  [:.container
   [:.jumbotron.home.row
    [:section.about.col-xs-offset-1.col-sm-10
     [:p "This site is to help people make sense of the "
      (if (:show-nicor (rum/react core/app))
        [:a {:href "https://www.ucl.ac.uk/nicor/audits/congenital/documents/datasets/NCHDA2011-14Report" :target "_blank"} "published survival data"]
        "published survival data")
      " about children’s heart surgery in the UK and Ireland. "]
     [:p "Our website will help you:"]
     [:ul
      [:li "explore what survival rates can and can’t tell you"]
      [:li "understand how the NHS monitors children’s heart surgery"]
      [:li "explore published data for hospitals in the UK and Ireland"]]]
    (when (:show-nicor (rum/react core/app))
      [:a {:href "https://www.ucl.ac.uk/nicor/audits/congenital/documents/datasets/NCHDA2011-14Report" :target "_blank"}
       [:img.img-responsive.col-sm-2 {:src "assets/nicor.png"}]])]
   [:.row
    (what-why)
    (data)
    (everything-else)]])
