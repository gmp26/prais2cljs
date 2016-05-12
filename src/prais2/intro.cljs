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
  [:section.col-sm-8.pull-left
   {:id section-id}
   [:h2 section-title]
   (section-content)])


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
    [:.col-sm-8
     [:h1 "What, why, how?"]
     [:p "This site is to help people make sense of the "
      [:a {:href "https://www.ucl.ac.uk/nicor/audits/congenital/documents/datasets/NCHDA2011-14Report" :target "_blank"}
       "published survival statistics"] " about children’s heart surgery. "]
     ;     [:img.thumbnail.img-responsive {:src "assets/keypoint-slides.png"}]
     ]
    [:#intro.col-sm-12

     (key-points)
     (section 1 "WHAT do we mean by survival statistics?" section-1-content)
     (section 2 "WHY can data about survival be difficult to interpret?" section-2-content)
     (section 3 "HOW does the NHS monitor hospitals that do children’s heart surgery?" section-3-content)
     (section 4 "What this site cannot do" section-4-content)
     (section 5 "What this site can do" section-5-content)
     ]]])

(rum/defc key-points []
  [:section.well.danger.col-sm-8
   [:h2 "Key points"]
   [:ul
    [:li "A higher survival rate does not imply a better hospital."]
    [:li "The predicted range, calculated by a formula, depends on the particular children treated at that hospital. So a hospital treating children with more complex medical problems would have a lower predicted range."]
    [:li "A hospital's survival rate should only be compared to its predicted range. It is not valid to compare survival rates between hospitals."]
    [:li "The 30-day survival rate is very high for all hospitals in the UK and Ireland."]]])



(rum/defc section-1-content []
  [:section.row
   [:p.col-sm-12 "The 30-day survival rate is the percentage of operations where the child survived to at least 30 days after their heart surgery. The NHS monitors children’s heart surgery in the UK by reviewing each hospital’s 30-day survival rate. Ireland also submits its data to the same audit body."]
   [:p.col-sm-12 "Approximately 3500 children under the age of 16 have heart surgery each year in the United Kingdom and Republic of Ireland."]]
  )

(rum/defc section-2-content []
  [:section.row
   ;(animation-2)
   [:p.col-lg-12
    "Heart disease covers a wide range of disorders, from relatively minor to more severe conditions. Some hospitals specialise in severe conditions and tend to operate on children with a lower chance of survival. Also, every child is unique and may respond differently to treatment (surgery, drugs, postoperative care)."]

   [:p.col-lg-12
    "It would therefore be unfair to expect all hospitals to have directly comparable survival rates: we should take into account how ill the children were that the hospitals treated. In other words, if one hospital has a higher survival rate than another hospital this is not necessarily evidence that one hospital is better than the other – it could indicate that the second hospital treated children with more severe problems. "]])

(rum/defc section-3-content []
  [:section.row
   [:.col-lg-12
    [:p "The NHS monitors hospitals that perform children’s heart surgery by reviewing the 30-day survival rate for each hospital, taking into account how ill the children were that each hospital treated. This is a fairer way of looking at survival rate data."]
    [:p "Risk factors that affect a child’s chance of survival include:"]
    [:ul
     [:li
      "the age and weight of the child (other things being equal, the bigger and stronger a child is, the safer the surgery is); "]

     [:li "what problem in the heart the surgery is trying to fix (some hearts have more complex problems than others); "]

     [:li "other health problems a child might have (e.g. a genetic syndrome); "]
     [:li "the complexity of the surgical procedure.  "]
     ]

    [:p "Knowing these factors for each child allows us to predict the percentage of children within a group that will survive, even though we cannot predict exactly whether individual children will survive."]

    [:p "The national audit body (NICOR) uses a statistical formula to combine data on these risk factors for all the children a hospital has treated over the previous three years giving a " [:b "predicted range"] " for the overall proportion of survivors for that specific hospital and time period. The audit body then compares the survival rate achieved by a hospital with its predicted range."]

    [:p "If that hospital’s survival rate is within the ‘predicted range’, its results are in line with what we expect. For more information about how the NHS monitors survival rates see the 'Everything Else' section."]
    [:.bg-danger
     [:p
      "IMPORTANT! The predicted range depends on the types of patients treated at that hospital over that time period – so each hospital will have a different predicted range and its predicted range will vary from year to year."]
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
     [:a {:href "http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf" :target "_blank"}
      "Children’s Heart Federation"]
     " or "
     [:a {:href "http://www.lhm.org.uk/" :target "_blank"}
      "Little Hearts Matter"]
     " or local charities for your specialist children’s hospital (hospital map tab for individual hospital charities). These guides on "
     [:a {:href "http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf" :target "_blank"}
      "speaking to your child’s surgeon"]
     " or "
     [:a {:href "http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf" :target "_blank"}
      "seeking a second opinion"]    ", written by the Children’s Heart Federation, might also be helpful."]

    [:p
     "We know that there is much more to children’s heart surgery than survival to 30 days after surgery, such as much longer term survival and quality of life after surgery. Although this information is not routinely available at the moment, we are actively researching how to collect, interpret and publish this data. (See " [:a {:href "#/faq/2/3"} "What about longer term survival and quality of life?"]  ".) "]]]
  )

(rum/defc section-5-content []
  [:section.row
   [:.col-lg-12
    [:p "This site can help you interpret currently published survival data on children’s heart surgery and explore recent results by hospital."]]])
