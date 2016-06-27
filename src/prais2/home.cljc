(ns prais2.home
  (:require [rum.core]
            [prais2.core :as core]
            [prais2.utils :refer [key-with]]
            ))

(rum.core/defc what-why []
  [:.col-sm-4
   [:.home-nav.well.intro
    [:a.active #?(:cljs (core/href "intro")
                  :clj {:href "#"})
     [:i.fa.fa-question.big]
     [:.chevron [:i.fa.fa-chevron-right]]
     [:.title {:dangerouslySetInnerHTML {:__html "What, why, how?&nbsp;&nbsp;&nbsp;&nbsp;"}}]]
    [:p [:strong "What"] " do we mean by survival rates?"]
    [:p [:strong "Why"] " are survival rates after children’s heart surgery hard to interpret?"]
    [:p [:strong "How"] " does the NHS monitor them?"]
    [:p [:strong "What"] " this site can and cannot do."]]])

(rum.core/defc data []
  [:.col-sm-4
   [:.home-nav.well.data
    [:a.active #?(:cljs (core/href "data/map")
                  :clj {:href "#"})
     [:i.fa.fa-table.big]
     [:.chevron [:i.fa.fa-chevron-right]]
     [:.title "Explore the data"]]
    [:p [:b "Explore published survival statistics by:"]]
    [:p "browsing hospitals individually;"]
    [:p "viewing a one page summary of all hospitals;"]
    [:p "watching our 2 minute video on how to interpret the results."]
    ]])

(rum.core/defc everything-else []
  [:.col-sm-4
   [:.home-nav.well.faqs
    [:a.active #?(:cljs (core/href "faqs")
                  :clj  {:href "#"})
     [:i.fa.fa-info.big]
     [:.chevron [:i.fa.fa-chevron-right]]
     [:.title {:dangerouslySetInnerHTML {:__html "Everything else&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}}]]

    [:p "What happens if the data raises concerns?"]
    [:p "More detail about how survival statistics are monitored, including an explanatory video."]
    [:p "Limitations of this data."]
    [:p "Information for families."]]])


(rum.core/defc render-home < rum.core/reactive
                             (core/update-title "Home page")
                             (core/update-description "Makes sense of published survival data about children’s heart surgery in the UK and Ireland") []
  [:div.main-content
   [:.container
    [:.jumbotron.home.row
     [:section.about.col-xs-offset-1.col-sm-10
      [:p "This site is to help people make sense of published survival data about children’s heart surgery in the
      UK and Ireland. "]

      #?(:cljs [:div
                [:h1 {:style {:display "none"}} "Children's Heart Surgery Info"]
                [:p "Our website will help you:"]
                [:ul
                 [:li "understand how the NHS monitors children’s heart surgery"]
                 [:li "explore what survival rates can and can’t tell you"]
                 [:li "explore published data for hospitals in the UK and Ireland"]]
                (when (:show-nicor (rum.core/react core/app))
                  [:a (core/href "https://www.ucl.ac.uk/nicor/audits/congenital/documents/datasets/NCHDA2011-14Report" :target "_blank")
                   [:img.img-responsive.col-sm-2 {:src "assets/nicor.png"}]])]
         :clj  [:div
                [:p [:i.fa.fa-spinner.fa-pulse] " Loading"]
                [:p.ie8 " If the site fails to load in a few seconds, please note that it requires a modern browser which supports HTML5. "
                 "In particular, we need  Internet Explorer version 10 or later.
                         If you are unable to upgrade your browser for any reason,
                         please consider using
                         " [:a (core/href "https://www.google.com/chrome/") "Google Chrome"] "
                or " [:a (core/href "https://www.mozilla.org/en-GB/") "Mozilla Firefox"] " instead.
                For further help, please contact "
                 [:a {:mailto "technical@childrensheartsurgey.info"} "technical@childrensheartsurgey.info"]]]

         )]]
    [:.row
     (what-why)
     (data)
     (everything-else)]]])
