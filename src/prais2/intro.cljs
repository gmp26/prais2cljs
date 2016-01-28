(ns ^:figwheel-always prais2.intro
    (:require [rum.core :as rum]
              [prais2.core :as core]
              [prais2.content :as content]
              [prais2.data :as data]
              [prais2.chrome :as chrome]
              [prais2.utils :as u :refer [key-with]]
              [prais2.open-layers-map :as map]
              [cljsjs.jquery
               ]))


(rum/defc section [section-id section-title section-content]
  [:section.col-sm-12
   {:id section-id}
   [:h2 section-title]
   (section-content)])

(rum/defc panel [parent-id header-id header body-id body]
  [:section.panel.panel-default.clearfix
   [:.panel-heading {:id header-id
                     :on-click #(.collapse (js/$ (str "#" body-id)) "toggle")
                     :role "tab"
                     :style {:background-color "rgba(127, 205, 187, 0.41)"
                             :cursor "pointer"}}
    [:h2.panel-title {:style {:font-size "22px"}}
     [:a {:role "button"
          :data-toggle "collapse"
          :data-parent (str "#" parent-id)
          :href (str "#" body-id)
          :aria-expanded false
          :aria-controls body-id}
      header]]]
   [:.panel-collapse.collapse
    {:id body-id
     :role "tabpanel"
     :aria-labelledby header-id}
    [:.panel-body (body)]]
   ])

(rum/defc accordion [id & panels]
  [:.panel-group {:id id :role "tablist" :aria-multiselectable "true"}
   #_(prn (count panels))
   (map-indexed key-with panels)])

(rum/defc collapsible-section [parent-id section-id section-title section-content]
  (panel parent-id
         (str parent-id "-sec-" section-id)
         section-title
         (str parent-id "-body-" section-id)
         section-content))

(declare key-points)
(declare section-1-content)
(declare section-2-content)
(declare section-3-content)
(declare section-4-content)
(declare section-5-content)
(declare section-6-content)

;; look at http://materializecss.com/

(rum/defc render-intro < (core/monitor-react "INTRO>" false)  [section-id]
  [:.container
   [:.row
    [:#intro
     [:h1 "What, why, how?"]

     (key-points)
     (section 4 "WHAT do we mean by survival statistics?" section-4-content)
     (section 5 "WHY can survival rate data be difficult to interpret?" section-5-content)
     (section 6 "HOW the NHS monitors survival rates: A fairer way of looking at survival rate data" section-6-content)
     (section 3 "What this site cannot do" section-3-content)
     ]]])

(rum/defc key-points []
  [:section.well.danger.col-sm-offset-2.col-sm-8
   [:h2 "Key points!"]
   [:ul
    [:li "If one hospital has a higher survival rate than another hospital it does not mean that it is better than the other!"]
    [:li "The predicted range is calculated by a formula and does not depend on any judgements of a hospital’s quality!"]
    [:li "The survival rate for all UK hospitals is very high!"]]])


(rum/defc section-3-content []
  [:section
   [:p
    [:b "This site cannot help parents make decisions about their child’s treatment."]
    " If you are concerned about your child’s treatment plan "
    [:b "please speak with your child’s cardiologist or surgeon"]
    ". You can also access the support available from national charities such as the "
    [:a {:href "http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf"}
     "Children’s Heart Federation"]
    " or "
    [:a {:href "http://www.lhm.org.uk/"}
     "Little Hearts Matter"]
    " or local charities for your specialist children’s hospital (hospital map tab for individual hospital charities). These guides on "
    [:a {:href "http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf"}
     "speaking to your child’s surgeon"]
    " or "
    [:a {:href "http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf"}
     "seeking a second opinion"]
    ", written by the Children’s Heart Federation, might also be helpful."]

   [:p
    "We know that there is much more to children’s heart surgery than survival to 30 days after surgery, such as much longer term survival and quality of life after surgery. Although this information is not routinely available at the moment, we are actively researching how to collect, interpret and publish this data [link to relevant FAQ]. "]])


(rum/defc section-4-content []
  [:section
   [:p "The main measure that the NHS uses to monitor children’s heart surgery in the UK is the 30-day survival rate. This is the percentage of operations where the child survived at least 30 days after their heart surgery (e.g. 100% would mean that every child survived). Currently, about 3500 children under the age of 16 have heart surgery each year in the United Kingdom and Republic of Ireland."
    ]]
  )

(rum/defc section-5-content []
  [:section
   [:p
    "Overall, the UK survival rate is between 97% and 98%, telling us that the UK has very high survival rates for this difficult speciality. "]

   [:p
    "However, heart disease in children covers a wide range of disorders, from relatively minor to more severe conditions. Also, every individual is unique and may respond differently to treatment (surgery, drugs, postoperative care)."]
   [:p
    "Some hospitals specialise in certain conditions, meaning that some hospitals tend to operate on children with a lower chance of survival. It would be unfair to then expect all hospitals to have the same survival rates each year. Circumstances also change from year to year, so we expect any hospital’s survival rate to vary a bit over time."]
   [:p
    "This means that we " [:b "should not"] " use survival rates to assess how a hospital is doing " [:b
                                                                                                      "without"] " putting the survival rates into the context of how complex the cases were. "
    "In other words, if a hospital’s 30-day survival rate is lower this year that last year, it does " [:b "not"] " necessarily mean that things have got worse. Likewise, if one hospital has a higher survival rate than another hospital it does " [:b "not"] " necessarily mean that one hospital is better than the other."]]

)

(rum/defc section-6-content []
  [:section
   [:p
    "Our research has shown that there are some consistent factors that hospitals routinely collect information about that do affect a child’s chance of survival. These things include: "]
   [:ul
    [:li
     "the age and weight of the child (other things being equal, the bigger and stronger a child is, the safer the surgery is); "]

    [:li "what problem in the heart the surgery is trying to fix (some hearts have more complex defects than others); "]

    [:li "other health problems a child might have (e.g. a genetic syndrome); "]
    [:li "the complexity of the surgical procedure.  "]
    ]

   [:p "Knowing these factors for each patient, allows us to identify types of patient who are at greater or lesser risk even though we cannot predict exactly how a particular individual will respond."]

   [:p "The national audit body use what is called a “statistical model” to combine what we know about these aspects for all the children a hospital has treated over the last three years. This mathematical combination results in a " [:b "predicted "] "overall proportion of survivors for " [:b "that specific hospital for that specific time period"] ". We would expect the survival rate actually achieved in that hospital to be not too far away from this prediction and so we finally calculate " [:b "a predicted range"] " for that specific hospital. If that hospital’s actual survival rate is anywhere within that predicted range, its results are in line with what we expect. "]

   [:.bg-danger {:style {:border-radius "3px" :border "1px solid #DDD"}
                 }
    [:p
     "IMPORTANT! The predicted range depends on the types of patients treated at that hospital over that time period – so each hospital will have a different predicted range and its predicted range will vary from year to year!"]
    [:p
     "That is why we only compare a hospital’s survival rate to its predicted range (from the independent statistical model) and not to survival rates at other hospitals. "]]])
