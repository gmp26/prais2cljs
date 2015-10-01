(ns ^:figwheel-always prais2.intro
    (:require [rum :as r]
              [prais2.chrome :as chrome]))

(declare section)

(declare section-1-content)
(declare section-2-content)
(declare section-3-content)
(declare section-4-content)

(r/defc render-intro [section-id]
  [:.container
   [:.row
    [:#intro

     [:h1  "UNDERSTANDING PUBLISHED CHILDREN’S HEART SURGERY OUTCOMES"]

     (section 1 "What is this site for?" section-1-content)

     (section 2 "Which hospitals perform heart surgery in children?" section-2-content)

     (section 3 "What can published survival rates tell you without extra information?" section-3-content)

     (section 4 "How do we put survival rates into context?" section-4-content)

     ]]])

(r/defc hospital-charities []
  [:.table-responsive
   [:table.table.table-striped.table-bordered

    [:thead
     [:tr.header
      [:th
       [:strong "WHERE"]]
      [:th
       [:strong "LOCAL CHARITIES"]]]]

    [:tbody
     [:tr
      [:td
       [:strong "ENGLAND"]]
      [:td
       ]]

     [:tr
      [:td
       [:a {:href "http://www.bch.nhs.uk/content/heart-unit"} "Birmingham Children’s Hospital"]]
      [:td
       [:a {:href "http://www.youngatheart.org.uk/"} "Young at Heart"]
       [:a {:href "http://www.bch.org.uk/letusplay?utm_source=Trust%20web%20ad&utm_medium=web&utm_campaign=donate"} "Birmingham Children’s Hospital Charity"]]]

     [:tr
      [:td
       [:a
        {:href "http://www.uhbristol.nhs.uk/patients-and-visitors/your-hospitals/bristol-royal-hospital-for-children/the-paediatric-cardiac-service/"}
        "Bristol Royal Hospital for Children"]]
      [:td
       [:a {:href "http://www.heartfamilies.org.uk/"} "Heart Families South West"]
       [:a {:href "http://www.heartcircle.org/"} "South West Children’s Heart Circle"]]]

     [:tr
      [:td
       [:a {:href "http://www.leedsth.nhs.uk/a-z-of-services/childrens-cardiology/"} "Leeds General Infirmary"]]
      [:td
       [:a {:href "http://chsf.org.uk/"} "The Childrens Heart Surgery Fund"]]]

     [:tr
      [:td
       [:a {:href "http://www.leicestershospitals.nhs.uk/aboutus/leicester-hospitals-charity/childrens-heart-unit/"}
        "Leicester, Glenfield Hospital"]]
      [:td
       [:a {:href "http://www.heartlink-glenfield.org.uk/"} "Heart Link"]]]

     [:tr
      [:td
       [:a {:href "http://www.alderhey.nhs.uk/departments/cardiac/"} "Liverpool, Alder Hey Hospital"]]
      [:td
       [:a {:href "http://www.alderheycharity.org/"} "Alder Hey Charity"]]]

     [:tr
      [:td
       [:a {:href "http://www.evelinalondon.nhs.uk/our-services/hospital/heart-services/overview.aspx"}
        "London, Evelina London Children&#39;s Hospital"]]
      [:td
       [:a {:href "http://www.echo-evelina.org.uk/"} "ECHO – Evelina Children’s Heart Organisation"]]]

     [:tr
      [:td
       [:a {:href "http://www.gosh.nhs.uk/medical-information/clinical-specialties/cardiothoracic-surgery-information-parents-and-visitors"}
        "London, Great Ormond Street Hospital for Children"]]
      [:td
       [:a {:href "http://www.gosh.org/"} "Great Ormond Street Hospital Charity"]]]

     [:tr
      [:td
       [:a {:href "http://theharleystreetclinic.co.uk/cardiac/congenital-heart-care"}
        "London, Harley Street Clinic"] " (Private)"]
      [:td ]]


     [:tr
      [:td
       [:a {:href "http://www.rbht.nhs.uk/about/our-work/brompton/"} "London, Royal Brompton Hospital"]]
      [:td
       [:a {:href "http://www.thebromptonfountain.org.uk/"} "The Brompton Fountain"]]]

     [:tr
      [:td
       [:a {:href "http://www.newcastle-hospitals.org.uk/services/cardiothoracic_services_childrens-heart-unit.aspx"} "Newcastle, Freeman Hospital"]]
      [:td
       [:a {:href "http://www.newcastle-hospitals.org.uk/services/cardiothoracic_services_childrens-heart-unit_childrens-heart-unit-fund-chuf.aspx"} "Newcastle Children’s Heart Unit Fund"]]]

     [:tr
      [:td
       [:a {:href "http://www.uhs.nhs.uk/OurServices/Childhealth/Childrenscongenitalcardiacservices/Childrenscongenitalcardiacservices.aspx"} "Southampton, Wessex Cardiothoracic Centre"] " (Southampton Children’s Hospital)"]
      [:td
       [:a {:href "http://www.oceanward.co.uk/"} "Families of Ocean Ward"]]]

     [:tr
      [:td [:strong "NORTHERN IRELAND"]]
      [:td]]

     [:tr
      [:td
       [:a {:href "http://belfasttrust-cardiacsurgery.hscni.net/about-cardiac-surgery/location/"} "Belfast, Royal Victoria Hospital"]]
      [:td [:a {:href "http://www.childrensheartbeattrust.org/"} "Children’s Heartbeat Trust"]]]

     [:tr
      [:td
       [:strong "SCOTLAND"]]
      [:td ]]

     [:tr
      [:td
       [:a {:href "http://www.nhsggc.org.uk/locations/hospitals/the-royal-hospital-for-children-glasgow/"}
        "Glasgow, Royal Hospital for Children"]]
      [:td
       [:a {:href "http://www.youngheart.info/"}
        [:p "The Scottish Association for Children with Heart Disorders (SACHD)"]]]]

     [:tr
      [:td
       [:strong "IRELAND"]]
      [:td ]]

     [:tr
      [:td
       [:a
        {:href "http://www.heartchildren.ie/our-lady%E2%80%99s-children%E2%80%99s-hospital-crumlin"}
        "Dublin, Our Lady&#39;s Children&#39;s Hospital"]]
      [:td
       [:a {:href "http://www.heartchildren.ie/our-lady%E2%80%99s-children%E2%80%99s-hospital-crumlin"}
        "Heart Children Ireland"]]]]]])


(r/defc section-1-content []
  [:section.two-col
   [:p
    "The main outcome measure that the NHS uses to monitor children’s heart surgery in the UK is the "
    [:em
     "30-day survival rate"]
    ". This is the percentage of operations where the child survived at least 30 days after their heart surgery (e.g. 100% would mean that every child survived). Every year or two there are some articles in the press about children’s heart surgery in the UK. Often, these articles compare one hospital to another or suggest that a hospital has more deaths than it “should have”."]

   [:ul
    [:li
     "Where do journalists get these numbers from?"]
    [:li
     "What do they mean by “should have”? "]
    [:li
     "How valid are these sorts of comparisons? "]
    [:li
     "What do survival rates actually tell you?"]]

   [:p
    "Our website will help you explore what survival rates "
    [:strong
     "can"]
    " and "
    [:strong
     "can’t"]
    " tell you: for instance, if one hospital has a higher survival rate than another it "
    [:strong
     "does not mean"]
    " that one hospital must be better than the other. We hope that this website will let everyone can see and understand how the NHS monitors children’s heart surgery."]

   [:p
    [:strong
     "This site cannot help parents make decisions about their child’s treatment."]
    " If you are concerned about your child’s treatment plan "
    [:strong
     "please speak with your child’s cardiologist or surgeon"]
    ". You can also access the support available from national charities such as the "
    [:a
     {:href "http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf"}
     [:strong
      "Children’s Heart Federation"]]
    " or "
    [:a
     {:href "http://www.lhm.org.uk/"}
     [:strong
      "Little Hearts Matter"]]
    " or local charities for your specialist children’s hospital (see below). These guides on "
    [:a
     {:href "http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf"}
     "speaking to your child’s surgeon"]
    " or "
    [:a
     {:href "http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf"}
     "seeking a second opinion"]
    ", written by the Children’s Heart Federation, might also be helpful."]

   [:p
    "We know that there is much more to children’s heart surgery than survival to 30 days after surgery, such as much longer term survival and quality of life after surgery. Although this information is not routinely available at the moment, we are actively researching how to collect, interpret and publish this data (more in the FAQs)."]])


(r/defc section-2-content []
  [:section
   [:p
    "There are fourteen hospitals in the UK and Ireland that perform heart surgery in children (here a child means someone under the age of 16)."]
   [:p
    "The hospitals are listed below alongside links to their local family charities. (CAN WE PUT IN A MAP?)"]

   (hospital-charities)])


(r/defc section-3-content []
  [:section.two-col
   [:p
    "Currently, about 3500 children under the age of 16 have heart surgery each year in the United Kingdom and Republic of Ireland. Overall, the survival rate is 97%, telling us that the UK has very high survival rates for this difficult speciality."]
   [:p
    "However, heart disease in children covers a wide range of disorders, from relatively minor to more severe conditions. The different conditions mean that different surgeries can carry very different risks for children. There are also other factors that make some surgeries riskier than others. For instance, some children also have other health problems or are very small which can make surgery more risky."]
   [:p
    "Some hospitals specialise in certain conditions, meaning that some hospitals tend to operate on children with a lower chance of survival. It would be unfair to then expect all hospitals to have the same survival rates each year. Circumstances also change from year to year, so that one year a hospital might see many more very complex cases than the year before. Therefore, we expect any hospital’s survival rate to vary over time."]
   [:p
    "This means that we "
    [:strong
     "cannot"]
    " use survival rates to compare hospitals to each other, or to look at one hospital from one year to the next, "
    [:strong
     "without"]
    " putting the survival rates into the context of how complex the cases were. In other words, if a hospital’s 30-day survival rate is lower this year that last year, it does "
    [:strong
     "not"]
    " necessarily mean that things have got worse. Likewise, as we have already stressed elsewhere, if one hospital has a higher survival rate than another hospital it does "
    [:strong
     "not"]
    " necessarily mean that one hospital is better than the other."]
   ])


(r/defc section-4-content []
  [:section.two-col
   [:p
    "Every individual is unique and may respond differently to treatment (surgery, drugs, postoperative care)."]
   [:p
    "Our research has shown that there are some consistent factors that hospitals routinely collect information about that do affect a child’s chance of survival. These things include:"]

   [:ul
    [:li
     "the age and weight of the child (other things being equal, the bigger and stronger a child is, the safer the surgery is);"]
    [:li
     "what problem in the heart the surgery is trying to fix (some hearts have more complex defects than others);"]
    [:li
     "other health problems a child might have (e.g. a genetic syndrome);"]
    [:li
     "the complexity of the surgical procedure."]]

   [:p
    "Knowing these factors for each patient, allows us to identify types of patient who are at greater or lesser risk even though we cannot predict exactly how a particular individual will respond."]

   [:p
    "We use what is called a “statistical model” to combine what we know about these aspects for the children a hospital has treated over any given time period (e.g. 3 years). This mathematical combination results in a "
    [:strong
     "predicted"]
    " overall proportion of survivors for "
    [:strong
     "that specific hospital"]
    ". We would expect the survival rate actually achieved in that hospital to be not too far away from this prediction and so we finally calculate "
    [:strong
     "a predicted range"]
    " for that specific hospital. If that hospital’s actual survival rate is within that predicted range, its results are in line with what we expect."]


   [:.bg-danger
    [:p
     "IMPORTANT! The predicted range depends on the types of patients treated at that hospital over that time period – so each hospital will have a different predicted range and its predicted range will vary from year to year!"]
    [:p
     "That is why we only compare a hospital’s survival rate to its predicted range (from the independent statistical model) and not to survival rates at other hospitals. "]]
   ])


(r/defc section [section-id section-title section-content]
  [:section {:id section-id}
   [:h2 section-title]
   (section-content)])
