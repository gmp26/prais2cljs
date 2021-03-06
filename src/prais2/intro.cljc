(ns ^:figwheel-always prais2.intro
    (:require [rum.core]
              [prais2.core :as core]
              [prais2.utils :refer [key-with]]))


(rum.core/defc section [section-id section-title section-content]
  [:section.col-sm-8.pull-left
   {:id section-id}
   [:h2 {:dangerouslySetInnerHTML {:__html section-title}}]
   (section-content)])


(declare key-points)
(declare section-1-content)
(declare section-2-content)
(declare section-3-content)
(declare section-4-content)
(declare section-5-content)
(declare section-6-content)


;; look at http://materializecss.com/
(rum.core/defc render-intro < (core/update-title "Key points")
                              (core/update-description "Explains the key points to understand when interpreting hospital child surgery survival data")
                              (core/monitor-react "INTRO>" false)  []
  [:.container.main-content
   [:.row
    [:.col-sm-8
     [:h1 "What, why, how?"]
     [:p "This site is to help people make sense of the survival statistics about children's heart surgery published by
     the National Congenital Heart Disease Audit (" [:a (core/href "http://www.ucl.ac.uk/nicor/audits/congenital" :target "_blank") "NCHDA"] ").  The "
      [:a (core/href "http://www.ucl.ac.uk/nicor/audits/congenital " :target "_blank") "NCHDA"] " is managed by the
      National Institute of Cardiovascular Outcomes Research (" [:a (core/href "https://www.ucl.ac.uk/nicor" :target "_blank") "NICOR"] ")."]

     ;     [:img.thumbnail.img-responsive {:src "assets/keypoint-slides.png"}]

     ]
    [:#intro.col-sm-12
     (key-points)
     (section 1 "<strong>What</strong> do we mean by survival statistics?" section-1-content)
     (section 2 "<strong>Why</strong> can data about survival be difficult to interpret?" section-2-content)
     (section 3 "<strong>How</strong> does the NHS monitor hospitals that do children’s heart surgery?" section-3-content)
     (section 4 "What this site cannot do" section-4-content)
     (section 5 "What this site can do" section-5-content)
     ]
    ]])

(rum.core/defc key-point [img-src alt-text text]
               [:li.key-point.row
                [:p.col-sm-6 text]
                [:img.img-responsive.col-sm-6 (core/isrc img-src :alt alt-text)]
                ]
               )

(defn kp-png [name]
  (str "assets/keypoints/" name ".png"))

(rum.core/defc key-points []
  [:section#key-points.well.danger.col-sm-8
   [:h2 "Key points"]
   [:ul
    (key-point (kp-png "kp1") "A group of hospitals with high survival rates" "The 30-day survival rate after children's heart surgery is very high for all hospitals in the UK and Ireland,
   and is among the best in the world.")
    (key-point (kp-png "kp2") "No to direct comparison of rates" "A higher survival rate does not imply a better hospital.")
    (key-point (kp-png "kp3") "Data about the children treated determnes the predicted survival range" "A hospital's predicted range of survival, calculated by a formula, depends on the particular children treated
   at that hospital. So a hospital treating children with more complex medical problems will have a lower predicted range.")
    (key-point (kp-png "kp4") "Then we compare survival rate to the predicted range." "A hospital's survival rate should only be compared to its own predicted range. It is not valid to directly
   compare survival rates between hospitals.")
    ]])

#_(rum.core/defc key-points []
  [:section.well.danger.col-sm-8
   [:h2 "Key points"]
   [:ul
    [:li "The 30-day survival rate after children's heart surgery is very high for all hospitals in the UK and Ireland,
    and is among the best in the world."]
    [:li "A higher survival rate does not imply a better hospital."]
    [:li "A hospital's predicted range of survival, calculated by a formula, depends on the particular children treated
    at that hospital. So a hospital treating children with more complex medical problems will have a lower predicted range."]
    [:li "A hospital's survival rate should only be compared to its own predicted range. It is not valid to directly
    compare survival rates between hospitals."]
    ]])



(rum.core/defc section-1-content []
  [:section.row
   [:p.col-sm-12 "The NHS monitors children’s heart surgery in the UK by reviewing each hospital’s 30-day survival
   rate. The 30-day survival rate is the percentage of operations where the child survived to at least 30 days after
   their heart surgery. Ireland also submits its data to the same audit body, "
    [:a (core/href "http://www.ucl.ac.uk/nicor/audits/congenital" :target "_blank") "NCHDA"] "."]
   [:p.col-sm-12 "Approximately 3500 children under the age of 16 have heart surgery each year in the United Kingdom
   and Republic of Ireland."]]
  )

(rum.core/defc section-2-content []
  [:section.row
   ;(animation-2)
   [:p.col-lg-12
    "Heart disease covers a wide range of disorders, from relatively minor to more severe conditions. Some hospitals
    take on more complicated conditions and tend to operate on children with a lower chance of survival. Also, every
    child is unique and may respond differently to treatment (surgery, drugs, postoperative care)."]

   [:p.col-lg-12
    "We therefore would not expect all hospitals to have the same survival rate: we should take into account how ill
    the children were that the hospitals treated. In other words, if one hospital has a higher survival rate than
    another hospital this is not necessarily evidence that one hospital is better than the other – it could
    indicate that the second hospital treated children with more severe problems. "]])

(rum.core/defc section-3-content []
  [:section.row
   [:.col-lg-12
    [:p "When reviewing the 30-day survival rate for each hospital, the NHS takes into account how ill the children were
    that each hospital treated. This is a fairer way of looking at survival rate data."]
    [:p "Risk factors that affect a child’s chance of survival include:"]
    [:ul
     [:li
      "the age and weight of the child (other things being equal, the bigger and stronger a child is, the safer the
      surgery is); "]

     [:li "what problem in the heart the surgery is trying to fix (some hearts have more complex problems than others); "]

     [:li "other health problems a child might have (e.g. a genetic syndrome); "]
     [:li "the complexity of the surgical procedure.  "]
     ]

    [:p "Knowing these factors for each child allows us to predict the percentage of children within a group that will
    survive, even though we cannot predict exactly whether individual children will survive."]

    [:p "The national audit body ("[:a (core/href "http://www.ucl.ac.uk/nicor/audits/congenital" :target "_blank") "NCHDA"] ")
    uses a statistical formula to combine data on these risk factors for all the children a hospital has treated over
    the previous three years to give a predicted range for the overall proportion of survivors for that specific
    hospital and time period. The formula is also used to calculate an extended predicted range for survival for each
    hospital. The audit body then compares the survival rate achieved by a hospital with its predicted and extended
    predicted range. Our " [:a (core/href "data/animation") [:i.fa.fa-video-camera] " two minute video"] " explains how
    we present these comparisons in this site."]

    [:p "If you'd like to know how the predicted range is actually calculated, you can watch our
    " [:a (core/href "faqs") [:i.fa.fa-video-camera] " second short video"] " in the "
     [:a (core/href "faqs") "Everything Else"] " section."]

    [:p "If a hospital’s survival rate is within its predicted range, its results are in line with what we expect.
    For more information about how the NHS monitors survival rates see the  "[:a (core/href "faqs") "Everything Else"]
     " section."]
    [:.bg-danger
     [:p
      "IMPORTANT! The predicted range depends on the types of patients treated at that hospital over that time
      period – so each hospital will have a different predicted range and its predicted range will vary from year to
      year."]
     [:p
      "That is why we only compare a hospital’s survival rate to its predicted range (from the statistical formula)
      and " [:strong "not"] " to survival rates at other hospitals."]]]])

(rum.core/defc section-4-content []
  [:section.row
   [:.col-lg-12
    [:p
     [:b "This site cannot help parents make decisions about their child’s treatment."]
     " If you are concerned about your child’s treatment plan "
     [:b "please speak with your child’s cardiologist or surgeon"]
     ". You can also access the support available from national charities such as the "
     [:a (core/href "http://www.chfed.org.uk/" :target "_blank")
      "Children’s Heart Federation"]
     ", "
     [:a (core/href "http://www.lhm.org.uk/" :target "_blank")
      "Little Hearts Matter"]
     " or local charities for your specialist children’s hospital (see "
     [:a (core/href "faq/3/2") "further charity resources"] "). These guides on "
     [:a (core/href "http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf" :target "_blank")
      "speaking to your child’s surgeon"]
     " or "
     [:a (core/href "http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf" :target "_blank")
      "seeking a second opinion"]    ", written by the Children’s Heart Federation, might also be helpful."]

    [:p
     "We know that there is much more to children’s heart surgery than survival to 30 days after surgery,
     such as much longer term survival and quality of life after surgery. Although this information is not routinely
     available at the moment, we are actively researching how to collect, interpret and publish this data.
     (See " [:a (core/href "faq/2/3") "What about longer term survival and quality of life?"]  ".) "]]]
  )

(rum.core/defc section-5-content []
  [:section.row
   [:.col-lg-12
    [:p "This site can help you interpret currently published survival data on children’s heart surgery and explore
    recent survival statistics for each hospital."]]])
