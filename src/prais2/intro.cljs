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
  [:section.col-sm-12.pull-left
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

(rum/defc animation-2 []
  [:.col-lg-6
   {:style {
            :margin-left "10px"
            :margin-right "10px"
            :padding-right "10px"
            :width "500px"
            :height "300px"
            :background-color "black"
            :color "white"
            }}

   [:h2.col-md-offset-2  "Animation"]

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
    [:#intro.col-sm-12

     [:h1 "What, why, how?"]

     [:p "This site is to help people make sense of the " [:a {:href "https://www.ucl.ac.uk/nicor/audits/congenital/documents/datasets/NCHDA2011-14Report"} "published survival statistics"] " about children’s heart surgery. "]
     #_[:p.col-lg-12 "This site is to help people make sense of the published survival statistics about children’s heart surgery."]

     (key-points)
     (section 1 "WHAT do we mean by survival statistics?" section-1-content)
     (section 2 "WHY can survival rate data be difficult to interpret?" section-2-content)
     (section 3 "HOW does the NHS monitor survival rates?" section-3-content)
     (section 4 "What this site cannot do" section-4-content)
     (section 5 "What this site can do" section-5-content)
     ]]])

(rum/defc key-points []
  [:section.well.danger.col-sm-8
   [:h2 "Key points"]
   [:ul
    [:li "If one hospital has a higher survival rate than another hospital it does not mean that it is better than the other"]
    [:li "The predicted range is calculated by a formula and depends " [:b "only"] " on the children treated at that hospital. A " [:b "lower"] " predicted range means a hospital treated children with " [:b "more"] " complex medical problems." ]
    [:li "The survival rate for all UK hospitals is very high."]]])



(rum/defc section-1-content []
  [:section.row
   [:p.col-sm-12 "The NHS monitors children’s heart surgery in the UK by reviewing each hospital’s 30-day survival rate. This is the percentage of operations where the child survived at least 30 days after their heart surgery."]
   [:p.col-sm-12 "Approximately 3500 children under the age of 16 have heart surgery each year in the United Kingdom and Republic of Ireland."]]
  )

(rum/defc section-2-content []
  [:section.row
   (animation-2)
   [:p.col-lg-6
    "Heart disease covers a wide range of disorders, from relatively minor to more severe conditions. Some hospitals specialise in severe conditions and tend to operate on children with a lower chance of survival. Also, every child is unique and may respond differently to treatment (surgery, drugs, postoperative care)."]

   [:p.col-lg-6
    "It would therefore be unfair to expect all hospitals to have directly comparable survival rates: we should take into account how ill the children were that the hospitals treated. In other words, if one hospital has a higher survival rate than another hospital this is not necessarily evidence that one hospital is better than the other – it could indicate that the second hospital treated children with more severe problems. "]])

(rum/defc section-3-content []
  [:section.row
   [:.col-lg-12
    [:p "The NHS monitors survival rates by taking into account how ill the children were that the hospital treated. This is a fairer way of looking at survival rate data."]
    [:p "Risk factors that affect a child’s chance of survival include:"]
    [:ul
     [:li
      "the age and weight of the child (other things being equal, the bigger and stronger a child is, the safer the surgery is); "]

     [:li "what problem in the heart the surgery is trying to fix (some hearts have more complex defects than others); "]

     [:li "other health problems a child might have (e.g. a genetic syndrome); "]
     [:li "the complexity of the surgical procedure.  "]
     ]

    [:p "Knowing these factors for each patient, allows us to identify types of patient who are at greater or lesser risk even though we cannot predict exactly how a particular individual will respond."]

    [:p "The national audit body (NICOR) uses a statistical formula to combine data on these risk factors for all the children a hospital has treated over the previous three years giving a " [:b "predicted range"] " for the overall proportion of survivors for that specific hospital and time period. The audit body then compares the survival rate achieved by a hospital (the " [:strong "observed survival rate"] ") with its predicted range."]

    [:p "If that hospital’s observed survival rate is within the ‘predicted range’, its results are in line with what we expect."]
    [:.bg-danger {:style {:border-radius "3px" :border "1px solid #DDD"}}
     [:p
      "IMPORTANT! The predicted range depends on the types of patients treated at that hospital over that time period – so each hospital will have a different predicted range and its predicted range will vary from year to year!"]
     [:p
      "That is why we only compare a hospital’s survival rate to its predicted range (from the statistical formula) and not to survival rates at other hospitals."]]]])

(rum/defc section-4-content []
  [:section.row
   [:.col-lg-12
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
      "seeking a second opinion"]    ", written by the Children’s Heart Federation, might also be helpful."]

    [:p
     "We know that there is much more to children’s heart surgery than survival to 30 days after surgery, such as much longer term survival and quality of life after surgery. Although this information is not routinely available at the moment, we are actively researching how to collect, interpret and publish this data. (See " [:a {:href "#/faq/2/3"} "What about longer term survival and quality of life?"]  ". "]]]
  )

(rum/defc section-5-content []
  [:section.row
   [:.col-lg-12
    [:p "This site can help you interpret currently published survival data on children’s heart surgery and explore recent results by hospital."]]])
