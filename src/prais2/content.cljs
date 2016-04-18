(ns ^:figwheel-always prais2.content
  (:require [rum.core :as rum]))

;;;
;; table structure
;;;
(defrecord Header [title sortable shown width height content])

(defrecord Row [h-name h-code h-lat h-lon n-ops n-deaths n-survivors survival-rate outer-low inner-low inner-high outer-high observed])

;;;
;; Table headers with info texts
;;;

(def header-row
  (Row. (Header. "Hospital" true true 300 50
                 "The hospital name")
        (Header. "Hospital Code" false false 77 50
                 "Hospital code as used by NICOR")
        (Header. "Latitude" false false 0 0
                 "")
        (Header. "Longitude" false false 0 0
                 "")
        (Header. "Number of Operations" true true 95 50
                 "The number of heart operations carried out on under-16s at each hospital during the 3 years April 2011 to March 2014. Operations that occur within 30 days of each other are treated as a single operation.")
        (Header. "Number of Deaths" false true 75 50
                 "The number of operations where the child  died within 30 days of their operation, from any cause")
        (Header. "Number of Survivors" false true 85 50
                 "The number of operations where the child survived at least 30 days after their operation")
        (Header. "Survival Rate %" false true 86 50
                 "The percentage of operations where the child survived at least 30 days after their operation. Some hospitals specialise in certain conditions, meaning that some hospitals tend to operate on children with a lower chance of survival. It would be unfair to then expect all hospitals to have the same survival rates each year")
        (Header. "Outer Low" false false 130 50
                 "A dot within the left hand light blue band means that there is some evidence that chances of survival in the hospital were lower than predicted")
        (Header. "Inner Low" false false 130 50
                 "A dot in this area means that there is no evidence that the hospital’s survival rate is different from what is predicted")
        (Header. "Inner High" false false 130 50
                 "A dot within the right hand light blue band means that there is some evidence that chances of survival in the hospital were higher than predicted")
        (Header. "Outer High" false false 130 50
                 nil)
        (Header. "Survival with predicted range" false false 0 100
                 nil)
        ))

;;;
;; Sample hospital
;;;
(def sample-hospital
  (Row. "Sample Hospital" "H" 52 -2 976 24 952 97.5 96.5 97.1 98.9 99.2 nil))

;;;
;; The 2015 results
;; todo: derive all numbers that are derivative
;; todo: read data from file
;; todo: Add Title into dataset
;;;
;;(Row. "Belfast, Royal Victoria Hospital"	                "RVB"	54.594167 -5.953666 204	        2 	202	99.0 	95.1	96.6  100     100.0 nil)
(def datasources
  {:2015
   [
    (Row. "London, Harley Street Clinic" "HSC" 51.520348 -0.147726 418 5 413 98.8 94.5	95.7	98.8	99.3 nil)
    (Row. "Leicester, Glenfield Hospital" "GRL" 52.654229 -1.179836 607 14 593 97.7 95.2	96.0	98.5	99.2 nil)
    (Row. "Newcastle, Freeman Hospital" "FRE" 55.002386 -1.593643 668 14.7 653.3 97.8 95.4	96.1	98.5	99.1 nil)
    (Row. "Glasgow, Royal Hospital for Children" "RHS" 55.862745 -4.342357 760 28.1 731.9 96.3 95.5	96.3	98.6	99.1 nil)
    (Row. "Bristol Royal Hospital for Children" "BRC" 51.457899 -2.597014 835 14.2 820.8 98.3 95.8	96.5	98.6	99.0 nil)
    (Row. "Southampton, Wessex Cardiothoracic Centre" "SGH" 50.932846 -1.432731 829 14.1 814.9 98.3 95.1	95.8	98.1	98.7 nil)
    (Row. "Leeds General Infirmary" "LGI" 53.802109 -1.550870 1038 21.8 1016.2 97.9 96.4	97.0	98.7	99.1 nil)
    (Row. "Dublin, Our Lady's Children's Hospital" "OLS" 53.326005 -6.317399 983 20.6 962.4 97.9 95.5	96.2	98.3	98.8 nil)
    (Row. "London, Royal Brompton Hospital" "NHB" 51.489012 -0.170759 1094 18.6 1075.4 98.3 96.2	96.8	98.5	99.0 nil)
    (Row. "Liverpool, Alder Hey Hospital" "ACH" 53.419566 -2.900560 1132 20.4 1111.6 98.2 95.4	96.1	98.1	98.5 nil)
    (Row. "London, Evelina London Children's Hospital" "GUY" 51.498044 -0.118835 1220 25.4 1194.6 97.1 95.4	96.0	98.0	98.4 nil)
    (Row. "Birmingham Children’s Hospital" "BCH" 52.484946 -1.894566 1457 36.4 1420.6 97.5 94.9	95.5	97.4	97.9 nil)
    (Row. "London, Great Ormond Street Hospital for Children" "GOS" 51.522549 -0.120923 1892 18.9 1873.1 99.0 96.6	97.0	98.4	98.7 nil)]

   :2014
   [(Row. "Belfast, Royal Victoria Hospital" "RVB" 54.594167 -5.953666 204 2 202 99.0 95.1 96.6 100 100.0 nil)
    (Row. "London, Harley Street Clinic" "HSC" 51.520348 -0.147726 482 7 475 98.5 94.8 95.9 98.8 99.4 nil)
    (Row. "Leicester, Glenfield Hospital" "GRL" 52.654229 -1.179836 582 11 571 98.1 95.4 96.2 98.8 99.3 nil)
    (Row. "Newcastle, Freeman Hospital" "FRE" 55.002386 -1.593643 678 15 663 97.8 95.1 96 98.4 99.0 nil)
    (Row. "Glasgow, Royal Hospital for Children" "RHS" 55.862745 -4.342357 787 28 759 96.4 95.7 96.3 98.5 99.0 nil)
    (Row. "Bristol Royal Hospital for Children" "BRC" 51.457899 -2.597014 835 19 816 97.7 96.0 96.8 98.7 99.2 nil)
    (Row. "Southampton, Wessex Cardiothoracic Centre" "SGH" 50.932846 -1.432731 890 17 873 98.1 95.5 96.2 98.3 98.8 nil)
    (Row. "Leeds General Infirmary" "LGI" 53.802109 -1.550870 976 23 953 97.6 96.5 97.1 98.9 99.2 nil)
    (Row. "Dublin, Our Lady's Children's Hospital" "OLS" 53.326005 -6.317399 1056 23 1033 97.8 96.3 96.9 98.7 99.1 nil)
    (Row. "London, Royal Brompton Hospital" "NHB" 51.489012 -0.170759 1107 12 1095 98.9 96.5 97 98.7 99.1 nil)
    (Row. "Liverpool, Alder Hey Hospital" "ACH" 53.419566 -2.900560 1146 28 1118 97.6 95.8 96.4 98.3 98.7 nil)
    (Row. "London, Evelina London Children's Hospital" "GUY" 51.498044 -0.118835 1204 39 1165 96.8 95.6 96.3 98.1 98.6 nil)
    (Row. "Birmingham Children’s Hospital" "BCH" 52.484946 -1.894566 1481 30 1451 98.0 95.3 95.9 97.7 98.1 nil)
    (Row. "London, Great Ormond Street Hospital for Children" "GOS" 51.522549 -0.120923 1881 30 1851 98.4 96.5 97 98.4 98.7 nil)]

   ;;
   ;; followed by sample datasources
   ;;

   :baseline
   [(Row. "Hospital A" "A" 0 0 204 4 200 98.0 95.1 96.6 100.0 100.0 nil)
    (Row. "Hospital B" "B" 0 0 482 11 471 97.7 94.8 95.9 98.8 99.4 nil)
    (Row. "Hospital C" "C" 0 0 582 14 568 97.6 95.4 96.2 98.8 99.3 nil)
    (Row. "Hospital D" "D" 0 0 678 18 660 97.3 95.1 96.0 98.4 99.0 nil)
    (Row. "Hospital E" "E" 0 0 787 28 759 96.4 95.7 96.3 98.5 99.0 nil)
    (Row. "Hospital F" "F" 0 0 835 22 813 97.4 96.0 96.8 98.7 99.2 nil)
    (Row. "Hospital G" "G" 0 0 890 22 868 97.5 95.5 96.2 98.3 98.8 nil)
    (Row. "Hospital H" "H" 0 0 976 24 952 97.5 96.5 97.1 98.9 99.2 nil)
    (Row. "Hospital I" "I" 0 0 1056 26 1030 97.5 96.3 96.9 98.7 99.1 nil)
    (Row. "Hospital J" "J" 0 0 1107 17 1090 98.5 96.5 97.0 98.7 99.1 nil)
    (Row. "Hospital K" "K" 0 0 1146 31 1115 97.3 95.8 96.4 98.3 98.7 nil)
    (Row. "Hospital L" "L" 0 0 1204 41 1163 96.6 95.6 96.3 98.1 98.6 nil)
    (Row. "Hospital M" "M" 0 0 1481 36 1445 97.6 95.3 95.9 97.7 98.1 nil)
    (Row. "Hospital N" "N" 0 0 1881 38 1843 98.0 96.5 97.0 98.4 98.7 nil)]

   :variation-1
   [(Row. "Hospital A" "A" 0 0 204 4 200 98.04 95.10 96.57 100.00 100.0 nil)
    (Row. "Hospital B" "B" 0 0 482 11 471 97.72 94.81 95.85 98.76 99.38 nil)
    (Row. "Hospital C" "C" 0 0 582 14 568 97.59 95.36 96.22 98.80 99.31 nil)
    (Row. "Hospital D" "D" 0 0 678 18 660 97.35 95.13 96.02 98.38 98.97 nil)
    (Row. "Hospital E" "E" 0 0 787 35 752 95.55 95.68 96.32 98.48 98.98 nil)
    (Row. "Hospital F" "F" 0 0 835 22 813 97.37 96.05 96.77 98.68 99.16 nil)
    (Row. "Hospital G" "G" 0 0 890 22 868 97.53 95.51 96.18 98.31 98.76 nil)
    (Row. "Hospital H" "H" 0 0 976 24 952 97.54 96.52 97.13 98.87 99.18 nil)
    (Row. "Hospital I" "I" 0 0 1056 26 1030 97.54 96.31 96.88 98.67 99.05 nil)
    (Row. "Hospital J" "J" 0 0 1107 17 1090 98.46 96.48 97.02 98.74 99.10 nil)
    (Row. "Hospital K" "K" 0 0 1146 31 1115 97.29 95.81 96.42 98.25 98.69 nil)
    (Row. "Hospital L" "L" 0 0 1204 41 1163 96.59 95.60 96.26 98.09 98.59 nil)
    (Row. "Hospital M" "M" 0 0 1481 36 1445 97.57 95.34 95.88 97.70 98.11 nil)
    (Row. "Hospital N" "N" 0 0 1881 38 1843 97.98 96.54 97.02 98.35 98.67 nil)]

   :variation-2a
   [(Row. "Hospital A" "A" 0 0 204 3 201 98.5 95.1 96.6 100.0 100.0 nil)
    (Row. "Hospital B" "B" 0 0 482 11 471 97.7 94.8 95.9 98.8 99.4 nil)
    (Row. "Hospital C" "C" 0 0 582 14 568 97.6 95.4 96.2 98.8 99.3 nil)
    (Row. "Hospital D" "D" 0 0 678 18 660 97.3 95.1 96.0 98.4 99.0 nil)
    (Row. "Hospital E" "E" 0 0 787 28 759 96.4 95.7 96.3 98.5 99.0 nil)
    (Row. "Hospital F" "F" 0 0 835 17 818 98.0 96.0 96.8 98.7 99.2 nil)
    (Row. "Hospital G" "G" 0 0 890 22 868 97.5 95.5 96.2 98.3 98.8 nil)
    (Row. "Hospital H" "H" 0 0 976 19 957 98.1 96.5 97.1 98.9 99.2 nil)
    (Row. "Hospital I" "I" 0 0 1056 20 1036 98.1 96.3 96.9 98.7 99.1 nil)
    (Row. "Hospital J" "J" 0 0 1107 17 1090 98.5 96.5 97.0 98.7 99.1 nil)
    (Row. "Hospital K" "K" 0 0 1146 24 1122 97.9 95.8 96.4 98.3 98.7 nil)
    (Row. "Hospital L" "L" 0 0 1204 34 1170 97.2 95.6 96.3 98.1 98.6 nil)
    (Row. "Hospital M" "M" 0 0 1481 36 1445 97.6 95.3 95.9 97.7 98.1 nil)
    (Row. "Hospital N" "N" 0 0 1881 38 1843 98.0 96.5 97.0 98.4 98.7 nil)]

   :variation-2b
   [(Row. "Hospital A" "A" 0 0 204 3 201 98.5 95.1 96.6 100.0 100.0 nil)
    (Row. "Hospital B" "B" 0 0 482 8 474 98.3 94.8 95.9 98.8 99.4 nil)
    (Row. "Hospital C" "C" 0 0 582 11 571 98.1 95.4 96.2 98.8 99.3 nil)
    (Row. "Hospital D" "D" 0 0 678 15 663 97.8 95.1 96.0 98.4 99.0 nil)
    (Row. "Hospital E" "E" 0 0 787 28 759 96.4 95.7 96.3 98.5 99.0 nil)
    (Row. "Hospital F" "F" 0 0 835 17 818 98.0 96.0 96.8 98.7 99.2 nil)
    (Row. "Hospital G" "G" 0 0 890 17 873 98.1 95.5 96.2 98.3 98.8 nil)
    (Row. "Hospital H" "H" 0 0 976 19 957 98.1 96.5 97.1 98.9 99.2 nil)
    (Row. "Hospital I" "I" 0 0 1056 20 1036 98.1 96.3 96.9 98.7 99.1 nil)
    (Row. "Hospital J" "J" 0 0 1107 10 1097 99.1 96.5 97.0 98.7 99.1 nil)
    (Row. "Hospital K" "K" 0 0 1146 24 1122 97.9 95.8 96.4 98.3 98.7 nil)
    (Row. "Hospital L" "L" 0 0 1204 34 1170 97.2 95.6 96.3 98.1 98.6 nil)
    (Row. "Hospital M" "M" 0 0 1481 27 1454 98.2 95.3 95.9 97.7 98.1 nil)
    (Row. "Hospital N" "N" 0 0 1881 27 1854 98.6 96.5 97.0 98.4 98.7 nil)]

   :variation-3
   [(Row. "Hospital A" "A" 0 0 204 4 200 98.0 95.1 96.6 100.0 100.0 nil)
    (Row. "Hospital B" "B" 0 0 482 11 471 97.7 94.8 95.9 98.8 99.4 nil)
    (Row. "Hospital C" "C" 0 0 582 14 568 97.6 95.4 96.2 98.8 99.3 nil)
    (Row. "Hospital D" "D" 0 0 678 18 660 97.3 95.1 96.0 98.4 99.0 nil)
    (Row. "Hospital E" "E" 0 0 787 28 759 96.4 95.7 96.3 98.5 99.0 nil)
    (Row. "Hospital F" "F" 0 0 835 22 813 97.4 96.0 96.8 98.7 99.2 nil)
    (Row. "Hospital G" "G" 0 0 890 22 868 97.5 95.5 96.2 98.3 98.8 nil)
    (Row. "Hospital H" "H" 0 0 976 24 952 97.5 96.5 97.1 98.9 99.2 nil)
    (Row. "Hospital I" "I" 0 0 1056 26 1030 97.5 96.3 96.9 98.7 99.1 nil)
    (Row. "Hospital J" "J" 0 0 1107 11 1096 99.0 96.5 97.0 98.7 99.1 nil)
    (Row. "Hospital K" "K" 0 0 1146 31 1115 97.3 95.8 96.4 98.3 98.7 nil)
    (Row. "Hospital L" "L" 0 0 1204 41 1163 96.6 95.6 96.3 98.1 98.6 nil)
    (Row. "Hospital M" "M" 0 0 1481 36 1445 97.6 95.3 95.9 97.7 98.1 nil)
    (Row. "Hospital N" "N" 0 0 1881 38 1843 98.0 96.5 97.0 98.4 98.7 nil)]

   :variation-4
   [(Row. "Hospital A" "A" 0 0 204 4 200 98.0 95.1 96.6 100.0 100.0 nil)
    (Row. "Hospital B" "B" 0 0 482 11 471 97.7 94.8 95.9 98.8 99.4 nil)
    (Row. "Hospital C" "C" 0 0 582 14 568 97.6 95.4 96.2 98.8 99.3 nil)
    (Row. "Hospital D" "D" 0 0 678 18 660 97.3 95.1 96.0 98.4 99.0 nil)
    (Row. "Hospital E" "E" 0 0 787 35 752 95.6 95.7 96.3 98.5 99.0 nil)
    (Row. "Hospital F" "F" 0 0 835 22 813 97.4 96.0 96.8 98.7 99.2 nil)
    (Row. "Hospital G" "G" 0 0 890 22 868 97.5 95.5 96.2 98.3 98.8 nil)
    (Row. "Hospital H" "H" 0 0 976 24 952 97.5 96.5 97.1 98.9 99.2 nil)
    (Row. "Hospital I" "I" 0 0 1056 26 1030 97.5 96.3 96.9 98.7 99.1 nil)
    (Row. "Hospital J" "J" 0 0 1107 13 1094 98.8 96.5 97.0 98.7 99.1 nil)
    (Row. "Hospital K" "K" 0 0 1146 31 1115 97.3 95.8 96.4 98.3 98.7 nil)
    (Row. "Hospital L" "L" 0 0 1204 47 1157 96.1 95.6 96.3 98.1 98.6 nil)
    (Row. "Hospital M" "M" 0 0 1481 27 1454 98.2 95.3 95.9 97.7 98.1 nil)
    (Row. "Hospital N" "N" 0 0 1881 38 1843 98.0 96.5 97.0 98.4 98.7 nil)]

   :variation-5
   [(Row. "Hospital A" "A" 0 0 200 6 194 97.0 95.0 96.5 100.0 100.0 nil)
    (Row. "Hospital B" "B" 0 0 482 11 471 97.7 94.8 95.9 98.8 99.4 nil)
    (Row. "Hospital C" "C" 0 0 582 14 568 97.6 95.4 96.2 98.8 99.3 nil)
    (Row. "Hospital D" "D" 0 0 678 18 660 97.3 95.1 96.0 98.4 99.0 nil)
    (Row. "Hospital E" "E" 0 0 787 28 759 96.4 95.7 96.3 98.5 99.0 nil)
    (Row. "Hospital F" "F" 0 0 835 22 813 97.4 96.0 96.8 98.7 99.2 nil)
    (Row. "Hospital G" "G" 0 0 890 22 868 97.5 95.5 96.2 98.3 98.8 nil)
    (Row. "Hospital H" "H" 0 0 976 24 952 97.5 96.5 97.1 98.9 99.2 nil)
    (Row. "Hospital I" "I" 0 0 1056 26 1030 97.5 96.3 96.9 98.7 99.1 nil)
    (Row. "Hospital J" "J" 0 0 1107 17 1090 98.5 96.5 97.0 98.7 99.1 nil)
    (Row. "Hospital K" "K" 0 0 1146 31 1115 97.3 95.8 96.4 98.3 98.7 nil)
    (Row. "Hospital L" "L" 0 0 1204 41 1163 96.6 95.6 96.3 98.1 98.6 nil)
    (Row. "Hospital M" "M" 0 0 1481 36 1445 97.6 95.3 95.9 97.7 98.1 nil)
    (Row. "Hospital N" "N" 0 0 1881 67 1814 96.4 96.5 97.0 98.4 98.7 nil)]})


(def hospital-metadata
  {:RVB [[:a {:href "http://belfasttrust-cardiacsurgery.hscni.net/about-cardiac-surgery/location/"} "Belfast, Royal Victoria Hospital"]
         [:a {:href "http://www.childrensheartbeattrust.org/"} "Children’s Heartbeat Trust"]]
   :HSC [[:a {:href "http://theharleystreetclinic.co.uk/cardiac/congenital-heart-care"}
          "London, Harley Street Clinic"]]
   :GRL [[:a {:href "http://www.leicestershospitals.nhs.uk/aboutus/leicester-hospitals-charity/childrens-heart-unit/"}
          "Leicester, Glenfield Hospital"]
         [:a {:href "http://www.heartlink-glenfield.org.uk/"} "Heart Link"]]
   :FRE [[:a {:href "http://www.newcastle-hospitals.org.uk/services/cardiothoracic_services_childrens-heart-unit.aspx"} "Newcastle, Freeman Hospital"]
         [:a {:href "http://www.newcastle-hospitals.org.uk/services/cardiothoracic_services_childrens-heart-unit_childrens-heart-unit-fund-chuf.aspx"} "Newcastle Children’s Heart Unit Fund"]]
   :RHS [[:a {:href "http://www.nhsggc.org.uk/locations/hospitals/the-royal-hospital-for-children-glasgow/"}
          "Glasgow, Royal Hospital for Children"]
         [:a {:href "http://www.youngheart.info/"}
          "The Scottish Association for Children with Heart Disorders (SACHD)"]]
   :BRC [[:a
          {:href "http://www.uhbristol.nhs.uk/patients-and-visitors/your-hospitals/bristol-royal-hospital-for-children/the-paediatric-cardiac-service/"}
          "Bristol Royal Hospital for Children"]
         [:a {:href "http://www.heartfamilies.org.uk/"} "Heart Families South West"]
         [:a {:href "http://www.heartcircle.org/"} "South West Children’s Heart Circle"]]
   :SGH [[:a {:href "http://www.uhs.nhs.uk/OurServices/Childhealth/Childrenscongenitalcardiacservices/Childrenscongenitalcardiacservices.aspx"} "Southampton, Wessex Cardiothoracic Centre (Southampton Children’s Hospital)"]
         [:a {:href "http://www.oceanward.co.uk/"} "Families of Ocean Ward"]]
   :LGI [[:a {:href "http://www.leedsth.nhs.uk/a-z-of-services/childrens-cardiology/"} "Leeds General Infirmary"]
         [:a {:href "http://chsf.org.uk/"} "The Childrens Heart Surgery Fund"]]
   :OLS [[:a
          {:href "http://www.heartchildren.ie/our-lady%E2%80%99s-children%E2%80%99s-hospital-crumlin"}
          "Dublin, Our Lady's Children's Hospital"]
         [:a {:href "http://www.heartchildren.ie/our-lady%E2%80%99s-children%E2%80%99s-hospital-crumlin"}
          "Heart Children Ireland"]]
   :NHB [[:a {:href "http://www.thebromptonfountain.org.uk/"} "The Brompton Fountain"]]
   :ACH [[:a {:href "http://www.alderhey.nhs.uk/departments/cardiac/"} "Liverpool, Alder Hey Hospital"]
         [:a {:href "http://www.alderheycharity.org/"} "Alder Hey Charity"]]
   :GUY [[:a {:href "http://www.evelinalondon.nhs.uk/our-services/hospital/heart-services/overview.aspx"}
          "London, Evelina London Children's Hospital"]
         [:a {:href "http://www.echo-evelina.org.uk/"} "ECHO – Evelina Children’s Heart Organisation"]]
   :BCH [[:a {:href "http://www.bch.nhs.uk/content/heart-unit"} "Birmingham Children’s Hospital"]
         [:a {:href "http://www.youngatheart.org.uk/"} "Young at Heart"]
         [:a {:href "http://www.bch.org.uk"} "Birmingham Children’s Hospital Charity"]]
   :GOS [[:a {:href "http://www.gosh.nhs.uk/medical-information/clinical-specialties/cardiothoracic-surgery-information-parents-and-visitors"}
          "London, Great Ormond Street Hospital for Children"]
         [:a {:href "http://www.gosh.org/"} "Great Ormond Street Hospital Charity GOSHCC"]]})


(def unassoc-charity-list
  [
   [:a {:href "www.amelia-matters.org.uk"} "Amelia Matters: supporting children born with congenital heart disease."]
   [:a {:href "www.arc-uk.org"} "Antenatal Results and Choices (ARC): helping parents and healthcare professionals through antenatal screening and its consequences"]
   [:a {:href "www.heartrhythmcharity.org.uk"} "Arrhythmia Alliance: improving the diagnosis, treatment and quality of life for all those affected by arrhythmias."]
   [:a {:href "www.benwilliamstrust.org.uk"} "Ben Williams Trust: supports children with abnormal heart rhythms (arrhythmias) and their families "]
   [:a {:href "www.bhf.org.uk"} "British Heart Foundation: working to fight against cardiovascular disease."]
   [:a {:href "www.c-r-y.org.uk"} "Cardiac Risk in the Young (CRY): preventing young sudden cardiac deaths through awareness, screening and research, and supporting affected families."]
   [:a {:href "www.cardiomyopathy.org"} "Cardiomyopathy UK: providing support to patients and families and promoting research for the disease cardiomyopathy"]
   [:a {:href "www.heartchild.info"} "Children’s Heart Association: supporting families of children with a heart condition."]
   [:a {:href "www.chfed.org.uk"} "Children’s Heart Federation: the main umbrella body for British congenital heart disease charities and voluntary organisations."]
   [:a {:href "www.chd-uk.co.uk"} "Congenital Heart Defects UK: educating and raising awareness of congenital heart defects and supporting patients and families."]
   [:a {:href "www.cafamily.org.uk"} "Contact a family: a national charity for families with disabled children, providing information, advice and support."]
   [:a {:href "www.dhg.org.uk"} "Down’s Heart Group: a charity offering support and information relating to heart conditions associated with Down's Syndrome."]
   [:a {:href "www.heartline.org.uk"} "Heartline: supports children with heart disorders and their families, whatever the condition wherever it is treated"]
    [:a {:href "www.lagans.org.uk"} "Lagan’s Foundation: offers home respite and support services for young children with heart defects or feeding issues."]
   [:a {:href "www.lhm.org.uk"} "Little Hearts Matter: offers support and information, and raises awareness of those affected when a child has only half a heart."]
    [:a {:href "www.maxappeal.org.uk"} "Max Appeal: Supports families affected by DiGeorge syndrome, VCFS and 22q11.2 deletion."]
    [:a {:href "www.younghearts.org.uk"} "Oxford Young Hearts:  support children with heart conditions and their families in the counties served by the Oxford University Hospitals NHS Trust. "]
   [:a {:href "www.patchesheartgroup.org"} "Patches Heart Group: a support group for children with congenital heart defects / aquired heart conditions and their families in the community."]
    [:a {:href "www.youngheart.info"} "The Scottish Association for Children with Heart Disorders (SACHD): supports children and young adults with congenital heart disorders, and the families in Scotland."]
   [:a {:href "www.thesf.org.uk"} "Somerville Foundation: supports young people and adults born with a heart condition."]
    [:a {:href "www.22crew.org"} "The 22 Crew:  A charity providing resources for patients with 22q deletion and their families."]
   [:a {:href "www.tinytickers.org"} "Tiny tickers: improving the detection, care and treatment of babies with serious heart conditions"]
   ])

(rum/defc render-charity-list []
          [:div
           [:h3 "Charities"]
           [:ul
            (for [charity unassoc-charity-list]
              [:li charity])]

           [:h3 "Hospital Charities"]
           [:ul
            (for [h-code (keys hospital-metadata)]
              [:li [:b (first (h-code hospital-metadata))]
               [:ul
                (for [charity (rest (h-code hospital-metadata))]
                  [:li charity])]])]])

;;;
;; Comment on the meaning of each range. These texts appear in bar-chart tooltips
;;;

(def bar-comments
  {:inner      "If the black dot is in this area then there is no evidence that the hospital’s survival rate is different from what is predicted"
   :outer-high "If the black dot is in this area then there is some evidence that chances of survival in the hospital were higher than predicted" ; " [add link]"
   :outer-low  "If the black dot is in this area then there is some evidence that chances of survival in the hospital were lower than predicted." ; " [add link]"
   :low        "If the black dot is in this area then there is strong evidence that chances of survival in the hospital were lower than predicted." ; " [add link]"
   :high       "If the black dot is in this area then there is strong evidence that chances of survival in the hospital were higher than predicted." ; " [add link]"
   })

;;;
;; Comment on the meaning of the dot when it appears in the given range.
;; These texts appear in a concluding remark in each hospital's popup.
;;;

(def dot-comments
  {:inner      "There is no evidence that chances of survival in the hospital are different from predicted."
   :outer-high "There is some evidence that chances of survival in the hospital were higher than predicted." ; " [add link]"
   :outer-low  "There is some evidence that chances of survival in the hospital were lower than predicted." ; " [add link]"
   :low        "There is strong evidence that chances of survival in the hospital were lower than predicted." ; " [add link]"
   :high       "There is strong evidence that chances of survival in the hospital were higher than predicted." ; " [add link]"
   })


(def glossary {:risk-adjustment {:title "Risk Adjustment"
                                 :body  "Since hospitals treat different children and different children have different chances of survival, we cannot not expect hospitals to have the same survival rate. To understand a hospital’s survival rate we need to put its rate into the context of what children that hospital treated. Combining different risk factors (such as age, weight, complexity of heart disease) into a single formula to calculate the predicted range means we can put a hospital’s survival rate into context. This overall process is called “risk adjustment” and the formula is a “risk adjustment method”. "}
               :survival-rate   {:title "Survival rate"
                                 :body  "The percentage of operations where the child survived at least 30 days after their operation."}
               :unforeseen-factors  {:title "Unforeseen factors"
                                 :body  "It is impossible to predict precisely what is going to happen in an individual operation. This is partly due to the inevitable inability to predict the future with certainty – all people are physically unique and will react slightly differently to medicines, anaesthetic, surgery and no heart problem is exactly the same as another. Our inability to predict precisely is also partly because there are factors that we suspect may influence the outcome but cannot be included in the statistical formula because no routine data on them is collected. Together, we call these all “unforeseen factors”."}})

(def title "Everything else")

(def faq-sections [
                   {:section "Background"
                    :faqs    [{:title    "Why do some children need heart surgery?"
                               :glossary []
                               :body     [:div
                                          [:p "About 6500 to 7500 babies are born with a heart defect (called congenital heart disease) in the UK and Ireland every year. Congenital heart disease covers a wide range of problems from the relatively minor (such as a small hole in the heart) to more severe conditions where a child needs specialist hospital care. About half of all children born with a heart defect will need heart surgery at some stage in their childhood. Children can also develop problems with their heart as they grow up which require hospital care (called acquired heart disease). "]
                                          [:p "Read more about "
                                           [:a {:href "http://www.chfed.org.uk/how-we-help/information-service/heart-conditions/"} "different heart conditions"]
                                           " and caring for children with heart conditions on the "
                                           [:a {:href "http://www.chfed.org.uk/how-we-help/information-service/caring-for-heart-children/"} "Children’s Heart Federation’s website."]]]
                               }



                              {:title        "Why are survival rates after children's heart surgery monitored and published?"
                               :glossary     [:survival-rate]
                               :short-answer "The NHS monitors survival rates after children’s heart surgery to check if recent survival rates at any hospital are much lower than predicted."

                               :body         [:div
                                              [:p [:a {:href "http://webarchive.nationalarchives.gov.uk/20090811143745/http:/www.bristol-inquiry.org.uk/final_report/the_report.pdf"}] [:img.thumbnail.pull-left
                                                                                                                                                                                        {:style {:width        "100px"
                                                                                                                                                                                                 :margin-right "20px"}
                                                                                                                                                                                         :src   "assets/bristol.png"}] "In the 1990s, problems were found with the standard of care for children having heart surgery at the Bristol Royal Infirmary. The proportion of children who died after surgery at Bristol was much higher than other UK hospitals. There was a formal inquiry into what happened (" [:a {:href "http://webarchive.nationalarchives.gov.uk/20090811143745/http:/www.bristol-inquiry.org.uk/final_report/the_report.pdf"} "The Bristol Inquiry 2001"] "), which led to a number of changes, including a new compulsory national reporting system so that the proportion of children surviving to 30 days after surgery for all hospitals have been published every year since 2001. Results where there is some evidence that survival rates are lower than expected are checked further by the hospital and the national audit body (NICOR)."]

                                              [:p "The UK and Ireland now have one of the strongest monitoring programmes in the world. Since reporting started, " [:a {:href "http://www.bbc.co.uk/news/health-32162803"} "survival rates have been improving"] " and now " [:strong "over 97% of children survive to at least one month after surgery."]]]
                               }

                              {:title        "How are survival rates monitored?"
                               :short-answer "Every year the national audit body publishes overall survival rates for each hospital for the previous 3 years. Each hospital’s survival rates are compared to what is predicted for that hospital by a statistical formula."
                               :glossary     [:survival-rate]
                               :body         [:div
                                              [:p [:a {:href "http://www.ucl.ac.uk/nicor/patients"}
                                                   [:img.thumbnail.pull-left
                                                    {:style {:width        "100px"
                                                             :margin-right "20px"}
                                                     :src   "assets/nicor.png"}]]
                                               "Until 2013, the national audit body " [:a {:href "http://www.ucl.ac.uk/nicor/patients"} "NICOR"] " only published survival rates for certain types of procedure (MIKE LINK EXTERNAL - SEE WORD DOC) because there was no clear way to put overall survival rates for each hospital into context (see " [:a {:href "?#/intro"} "What, Why and How?"] "). But " [:a {:href "https://www.ucl.ac.uk/operational-research/AnalysisTools/PRAiS"} "researchers"] " have now made this possible by creating a statistical formula. Using this formula, NICOR has published overall survival rates along with the predicted range and extended predicted range for survival over the previous 3 years for each hospital since 2013 (see " [:a {:href "?#/intro"} "What, Why and How?"] ").  The predicted range is the range in which we expect to see each hospital’s survival rate the majority of the time (19 times out of 20 for the dark blue bar, 998 times out of 1000 for the light blue bar). "

                                               ]
                                              [:p "The predicted range is calculated using the " [:strong "same"] " statistical formula for all hospitals and this prediction is " [:strong "not"] " influenced by what the survival rate at a hospital actually was."]
                                              [:p "Operations that occur within 30 days of each other are treated as a single operation when reporting overall survival."]]

                               }

                              {:title        "Where is this data from?"
                               :short-answer "The data on each child’s operation and what was wrong with their heart comes from the hospital’s records. The data on whether a child survived to 30 days after their operation comes from both the hospital and the Office of National Statistics."
                               :glossary     []
                               :body         [:div
                                              [:p "Each hospital in the UK and Ireland must collect data on every surgery or intervention carried out on a child for heart problems. Every three months, hospitals must submit this data to the national audit body, " [:a {:href "http://www.ucl.ac.uk/nicorum/patients"} "NICOR "] "(The National Institute for Cardiovascular Outcomes Research). NICOR sets out exactly what data is collected and each hospital undergoes independent checks of the quality of their submitted data. NICOR also reports to the UK Department of Health, the Care Quality Commission (CQC) and other NHS regulatory bodies."]

                                              [:p "NICOR tracks the survival of these children by linking to the national register of deaths using patients’ NHS number (in England and Wales) and also from hospital records."]

                                              #_[:p "If a hospital’s survival outcomes are below a certain threshold, NICOR and the hospital together examine the data and the individual cases to understand whether any further action needs to be taken. In extreme cases, a hospital might stop doing surgery while action is taken to improve the service. You can read more this process on " [:a {:href "https://nicor4.nicor.org.uk/CHD/an_paeds.nsf/vwContent/Information%20for%20Patients?Opendocument"} "NICOR’s patient information pages"] " and in our FAQ section. In this website, we explain how survival statistics are used to support this decision making."]]
                               }
                              ]}

                   {:section "Understanding the predicted range"
                    :faqs    [{:title        "Why is a different survival range predicted for each hospital?"
                               :short-answer "The predicted range depends on the complexity of the medical problems of the children who had operations. Each hospital treats different children and so each hospital will have a different predicted range."
                               :glossary     [:survival-rate]
                               :body         [:div
                                              [:p "Heart disease in children covers a wide range of disorders, from relatively minor to more serious conditions. This affects a child's chances of survival, as do other factors such as age, weight and other health problems."]

                                              [:p "Some hospitals take on more cases that are particularly complicated, meaning they tend to operate on children with a lower chance of survival. Each hospital will also treat different children from year to year, so we expect any hospital’s survival rate to vary from year to year. It would therefore be unfair to expect all hospitals to have the same survival rates and it is not valid to simply compare hospitals' survival rates. It is " [:i "only valid"] " to compare a hospital’s survival rate to its own predicted range."]



                                              (comment "*** POSSIBLE IMAGES ***** - a snapshot from animation from factors going into the formula/machine and coming out with a predicted range? ")
                                              ]
                               }

                              {:title        "Why does the width of the predicted range differ between hospitals?"
                               :glossary     [:unforeseen-factors :survival-rate]
                               :short-answer "If a hospital does fewer operations, unforeseen factors have a bigger influence on its overall survival rate. This is why the predicted range is wider for hospitals that do fewer operations."
                               
                               :body         [:div
                                              [:p "The predicted range for each hospital shows the range where we expect to see the observed survival rate if the hospital is performing as predicted by the formula, regardless of how many operations it did or what children it treated. When a hospital does fewer operations, unforeseen factors have a bigger influence on the overall outcome, and so it has a wider predicted range than a hospital that does many operations."]]

                               }

                              {:title        "When looking at just one hospital, what does it mean if its survival is outside its predicted range?"
                               :short-answer "There are four possible reasons for being outside the predicted range: inaccurate data, a formula that for some reason doesn’t work well for that hospital, just by chance (1 time in 20), or the chances of survival at that hospital are different to what is predicted. "
                               :glossary     [:survival-rate]
                               :body         [:div
                                              
                                              [:p "Possible reasons for a hospital’s survival rate being outside its predicted range of survival:"]

                                              [:h4 "1. Inaccurate data"]
                                              [:p "Each hospital and the Office of National Statistics supply data on each child to the national audit body. Although the data submitted is of very high quality (MIKE LINK TO FAQ on DATA QUAL), there will always be some inaccuracies is such large datasets. If a hospital submits data where some of the data is very wrong (for instance wrong weights are recorded) or missing, then this will result in a wrong predicted range."]

                                              

                                              [:h4 "2. The formula doesn’t work well for that hospital"]
                                              [:p "The statistical formula is applied to all operations at that hospital to calculate its overall predicted range of survival. Although the formula as is as good as we can currently get it, it is not perfect (MIKE LINK TO FAQ on FORM QUAL (1st one)). There will always be unique features about a child that affect their chance of survival that are not captured by national data collection and so cannot be part of a formula (e.g. the size of a hole in the heart). We will never be able to capture the whole medical picture of a child in a single formula! That means that the predicted range is the best possible guess for what the predicted range should be. If a hospital happens to have operated on a lot of children with unique features that affect their chances of survival but are not captured by the formula, the predicted range might be unfairly high for that hospital."]

                                              
                                              [:h4 "3. Chance"]
                                              [:p "If the hospital’s data contains no errors and there’s no reason to think that the formula shouldn’t apply well to that hospital, then in 19 times out of 20, we’d expect to see a hospital’s overall survival range within the predicted range. The means that the hospital’s survival rate could be outside its predicted range just by chance (1 time in 20)."]

                                              [:h4 "4. The chances of survival at that hospital are different to what are predicted by the formula."]
                                              [:p "The chances of survival for children at the hospital could genuinely be much higher or lower than what is predicted, which would make it more likely that the hospital’s survival rate would lie outside its predicted range. The national audit process is intended to check that no hospital in the UK and Ireland has chances of survival much lower than predicted. See “What happens if a hospital’s survival is below its predicted range” to find out what happens in such situations. (MIKE LINK TO FAQ what happens if outside range) "]

                                              

                                              

                                              ]

                               }

                              {:title        "When looking at ALL hospitals simultaneously, what does it mean if any of the hospitals have a survival rate outside their predicted range?"
                               :short-answer "When looking at all 13 hospitals at once, we expect at least one hospital’s survival rate to be outside its predicted range about half the time."
                               :glossary     [:survival-rate]
                               :body         [:div

                                              [:p "If we were looking at only one hospital, we’d expect its survival rate to fall outside its predicted range rarely if chances of survival at the hospitals match the formula: just 1 time in 20. BUT, if we are looking at all 14 hospitals at once, we’d actually expect that at least one hospital will fall outside its range just by chance about 8 times in 20!"]


                                             

                                              [:p "This is similar to the situation where you hear a friend won a good prize in a raffle. This may be surprising, but it becomes a lot less surprising when you hear they bought 100 tickets. Just as this gave them more chances of winning, the more hospitals we look at, the more likely it becomes that at least one will fall outside its range, even if survival at all the hospitals matches the formula."]

                                              [:p "So, on average, we’d anticipate about half of NICOR’s annual reports to have at least one hospital outside its range, either above or below, by chance alone."]

                                              [:p "Considering now the " [:i "extended predicted range"] ", if we look at all 13 hospitals at once, we’d only expect " [:i "any"] " one of them to be outside their extended range very rarely, just 1 time in 40. This is why a hospital’s survival rate being outside the extended predicted range is considered strong evidence that the chances of a patient surviving at that hospital are different to what is expected."]

                                              [:p "NOTE: As of 2016, Royal Victoria Hospital in Belfast no longer operates on children with congenital heart disease, so there are now 13 hospitals in the UK and Ireland that perform these operations."]
                                              
                                              ]}

                              {:title        "What actually happens if a hospital’s survival rate is below its predicted range?"
                               :short-answer "The national audit body works with the hospital to check the quality of the data. If this is fine, the hospital and the relevant national health service explore the processes of care at that hospital. If these bring to light any concerns, the health service and the hospital work together to improve care, which might include temporarily suspending heart surgery at that centre. "
                               :glossary     [:survival-rate]
                               :body         [:div
                                              [:p " If a hospital’s survival rate is below its predicted range (either the main or extended), everyone wants to be sure that there is not a potential problem in the pathway of care. It is important to either rule this out or start to improve care if it’s decided that this is the reason."]

                                              [:p "If a hospital's survival rate is below the predicted range, the "
                                               [:a {:href "https://www.ucl.ac.uk/nicor/audits/congenital/governance"} "National Congenital Heart Disease Audit Steering Committee "]
                                               " is notified. The Committee in turn notifies the relevant national health service’s Medical Director and the lead doctor for congenital heart disease at that hospital and a detailed examination of the hospital’s results takes place. There are established and published procedures which can be put into action if the detailed assessment raises concerns about care. In England, for instance, this would involve the Royal College of Surgeons and/or the Care Quality Commission."]

                                              [:p "There are two main steps: ]

                                              [:h4 "Step 1"]
                                              [:p "The hospital is asked to recheck the data it submitted for any errors."]

                                              [:h4 "Step 2"]
                                              [:p "With the corrected data:"]
                                              [:p "If the hospital’s survival rate is still below its predicted range but within the extended predicted range (i.e. in the light blue area), then an internal hospital review is conducted to understand whether there is cause for concern. "]
                                              [:p "If the hospital’s survival rate is below the extended predicted range (to the left of the light blue bar), then an external review of the hospital’s processes and results would be instigated."]
                                              

                                              [:p "In all such cases, the reviews (whether internal or external) would be published online by NICOR at the same time as the Annual Report."]

                                              [:p "NOTE: Because the national audit body always reports on all 13 hospitals at once, it is not that rare for any single hospital to be outside its predicted range but it is rare for any hospital to be outside its extended range (see also: " [:a {:href "#/faq/1/3"} "looking at ALL hospitals"] ")"]

                                              ]}

                              {:title        "Where did the formula used to calculate the predicted range come from?"
                               :short-answer "The statistical formula comes from a method called “Partial Risk Adjustment in Surgery” or PRAiS for short, developed by researchers at Great Ormond Street Hospital and University College London. "
                               :glossary     []
                               :body         [:div
                                              [:p "The national audit body uses a formula developed by researchers at Great Ormond Street Hospital and University College London called PRAiS (Partial Risk Adjustment in Surgery - see also the " [:a {:href "?#/intro"} "What, why, how?"] " section). The underlying methodology of this method is published in the " [:a {:href "https://www.ucl.ac.uk/operational-research/AnalysisTools/PRAiS"} "academic literature"] " if you are interested in learning more details."]

                                              (comment "*** picture of formula churning away at PRAIS risk factors?***")

                                              ]}]}


                   {:section "Limitations of these results and the data"
                    :faqs    [

                              {:title        "Are there any limitations to using a formula?"
                               :short-answer "Yes – a child’s chances of survival can never be completely captured in a single formula. "
                               :glossary     []
                               :body         [:div
                                              [:p "Yes there are. While taking into account the complexity of each child’s medical problems in a formula allows for fairer assessment of a hospital’s survival rate, it still cannot make it completely fair. There will always be information about important factors that affect a child’s chances of survival that are not routinely collected for national bodies and so cannot be captured by a formula that was developed using national data. "]
                                              [:p "Any statistical formula has to be developed on existing data and so the data will be typically at least a year out of date. So risk adjustment cannot adjust or account for future changes to the way data is collected (for instance more complete data) or new methods of surgical or medical management. Often, these statistical formulas are updated every few years with more up to date (in 2016, we updated PRAiS for the third time). "]]}
                                            

                              {:title        "How reliable are the data?"
                               :short-answer "The data are of very high quality and some of the best in the world."
                               :glossary     []
                               :body         [:div
                                              [:p "The data come from the National Institute for Cardiovascular Outcomes Research (NICOR) which collects national data for the UK National Heart Disease Audits. All hospitals in the UK and Ireland performing heart surgery in children have to submit their data in a standard format to NICOR. All hospitals are independently audited each year as part of a data validation process (to check the quality of the data submitted) to ensure that the data are of high quality."]

                                              [:p "While no large dataset is perfect (it is inevitable that a few records will not be 100% accurate), this dataset is among the most detailed and complete in the world for children’s heart surgery."]]
                               }

                              {:title        "What are the limitations of the data?"
                               :short-answer "These data do not capture all the potential medical problems a child has and only represent a snapshot of survival outcomes. They cannot capture the full picture of the quality of care provided by a hospital."
                               :glossary     [:unforeseen-factors]
                               :body         [:div
                                              

                                              [:p "Apart from occasional inaccuracies in the data, there are other limits to what the data can tell us about surgery outcomes. There are factors that affect a child’s chances of survival that are not routinely collected for national bodies and so cannot be captured by a formula that was developed using national data. These data are also snapshots in time of what happened at each hospital. A run of unforeseen factors could cause a very good hospital to have worse outcomes than predicted, so we need to be careful about reading too much into results from any single time period."]]
                               }

                              {:title        "What about longer term survival and quality of life?"
                               :short-answer "At the moment these are not reported. There is active research underway to work out how to report long term survival and quality of life for children after heart surgery but it will be some years before this becomes part of routine national audit."
                               :glossary     []
                               :body         [:div
                                              [:p "Currently (as of 2016), National audit only monitors what happens shortly after surgery. These data cannot tell us about longer term (e.g. 5 year) survival, or other outcomes such as post-surgery complication rates or the impact of surgery on the child or their family. There is a lot of " [:a {:href "http://www.gosh.nhs.uk/medical-information/clinical-specialties/cardiothoracic-surgery-information-parents-and-visitors/research/complications-after-heart-surgery-children"} "active research"] " going right now (due to finish around 2018) investigating how to capture, interpret and publish longer term survival and complication rates so hopefully this information will be available in the next 5 years."]

                                              [:p "The data also can’t tell us about how or why a hospital achieved the recorded results, so it cannot, by itself, tell us whether one hospital offers better or worse quality care than any other. These data cannot tell you what the results are likely to be next year. It also cannot tell us anything about what happens to children who never get operated on for whatever reason, since data on these children is not currently submitted to national audit. "]]
                               }

                              {:title        "Why is survival to 30 days after surgery used as the main survival measure?"
                               :short-answer "Survival to 30 days after surgery is a more objective measure than survival to hospital discharge, since different types of hospital have different treatment pathways for very sick patients (for instance some will transfer patients to another hospital or some to local palliative care). "
                               :glossary     []
                               :body         [:div
                                              [:p "Two very common measures used for looking at a hospital’s outcomes are “survival at discharge from hospital” and “30 day survival” after an operation. Survival at discharge is often used in other contexts as it’s the easiest to obtain – it is included within standard hospital records. However, survival to discharge does depend on the discharge procedures at that hospital. For instance, some hospitals will transfer very sick patients to other, more specialised hospitals, meaning that more patients will be alive at discharge from that hospital than the specialised hospital. Some hospitals might have close links with local palliative care services and so might discharge patients to these services if further treatment is considered unavailing. Again, such hospitals with have more patients alive at discharge compared to a hospital that look after the sickest patients until they die. "]
                                              [:p "Therefore, if it is available, “30 day survival” after surgery is considered a more objective and preferable statistic than “survival to hospital discharge”, since it does not depend on the hospital’s discharge procedures."]
                                              [:p "While longer term survival is extremely important (see (MIKE LINK to longer term survival FAQ)), 30-day survival post surgery was initially chosen as it is more straightforward to link this outcome to a child’s surgery and post-operative care than a longer range survival  period which might, for instance, incorporate further treatment at different hospitals. The other important aspect of monitoring 30-day survival, particularly within hospitals, is that any worrying outcomes can be investigated very quickly since the survival outcomes are available (locally) within 30 days of a child’s operation."]]}
                              ]
                    }

                   {:section "My family or child"
                    :faqs    [{:title        "Which hospital should I go to?"
                               :short-answer "This website cannot tell you which hospital to go to. Please discuss this with your child’s clinical team or access the support offered by specialist charities such as the Children’s Heart Federation. "
                               :glossary     []
                               :body         [:div
                                              [:p "You can use the national audit data to see how the different hospitals are doing compared to their predicted range calculated for the last 3 years (MIKE LINK TO EXPLORE THE DATA). You can also use the (MIKE LINK change - see word doc) " [:a {:href "https://nicor4.nicor.org.uk/CHD/an_paeds.nsf/vwContent/home"} "national audit website"] " to explore how many operations of each type a hospital does and survival outcomes for each of these. However, this cannot, in itself, tell you which hospital you should go to and does not provide proof that one hospital is “better” than any other. The safety or otherwise of a hospital " [:strong "cannot"] " be determined from survival data alone."]

                                              [:p "When considering which hospital, there are many factors to take into account, including how well the clinical team know your child and his or her medical history, any particular medical issues that your child has (for instance, some hospitals specialise in treating children  with particularly complex medical problems) and how far the hospital is from your home."]

                                              [:p "You should discuss your child’s care with their specialist cardiologist to determine the best treatment option for your child."]
                                              [:p "You can also access the support available from national charities such as the " [:a {:href "http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf"} "Children’s Heart Federation"] " or " [:a {:href "http://www.lhm.org.uk/"} "Little Hearts Matter"] " or local charities for your specialist children’s hospital (MIKE LINK TO CHARITY FAQ). These guides on " [:a {:href "http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf"} "speaking to your child’s surgeon"] " or " [:a {:href "http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf"} "seeking a second opinion"] ", written by the Children’s Heart Federation, might also be helpful."]
                                              ]
                               }

                              {:title        "Can the published data tell me about the risks for my child?"
                               :short-answer "No. Your child’s clinical team will always know more about your child than the statistical formula can."
                               :glossary     []
                               :body         [:div
                                              [:p "No, the published data cannot tell you about the risk for your child specifically – this will depend on other factors that are not necessarily captured in the national data. Your child’s specialist cardiologist and/or cardiac surgeon will be able to discuss this with you. These guides on " [:a {:href "http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf"} "speaking to your child’s surgeon"] " or " [:a {:href "http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf"} "seeking a second opinion"] ", written by the Children’s Heart Federation, might also be helpful."]
                                              ]}

                              {:title    "Charities and support groups for families of children with heart problems"
                               ;                    :short-answer ""
                               :glossary []
                               :body     [:div
                                          [:p "We have collated a list of charities and support groups for families of children with heart problems (all active as of 2016). Some of them specialise in certain heart conditions while others are only active in certain places."]
                                          (render-charity-list)
                                          
                                          [:p "NOTE: As of 2016, Royal Victoria Hospital in Belfast no longer operates on children with congenital heart disease."]
                                          ]}
                              ]}

                   {:section "Who developed this site and how"
                    :faqs    [{:title    "About us (MIKE LINK to all organisations: UCL CORU for UCL; DS stats lab (?), KCL Tim’s group; Sense about Science, CHF)…. "
                               :glossary []
                               :body     [:div
                                          [:.image-para [:p [:img.pull-left
                                                             {:style {:width        "150px"
                                                                      :margin-right "20px"}
                                                              :src   "assets/ucl-logo.png"}] [:strong "University College London: Dr Christina Pagel"] " is a Reader in Operational Research (a branch of applied mathematics) at University College London, applying maths to problems in the NHS. She works very closely with doctors and other clinical staff, mainly at Great Ormond Street Hospital, to help them use routinely collected data to improve NHS services. Her work currently focuses on two areas: 1) care for children requiring heart surgery and 2) how specialist intensive care is organised for children who need it (for whatever reason). "]

                                           [:p "Christina helped developed a statistical method called PRAiS to let hospitals and the national audit body easily monitor survival outcomes after heart surgery in children. In this project, Christina worked with Sense about Science, the University of Cambridge, King’s College London and the Children’s Heart Federation to develop these online resources to help people interpret the audit body’s published results. In particular, she wrote a lot of the content, helped enormously by feedback from the team and the user workshops. Thanks to " [:strong "Dr Andrew Wilshere"] " for designing our logo! "]]
                                          [:.image-para
                                           [:p [:img.pull-left
                                                {:style {:width        "150px"
                                                         :margin-right "20px"}
                                                 :src   "assets/camlogo.png"}] [:strong "University of Cambridge: Professor David Spiegelhalter"] " is a statistician from Cambridge University.   He has worked for many years with doctors from Great Ormond Street Hospital on monitoring outcomes following surgery for congenital heart disease, and led the statistical team at the Bristol Royal Infirmary Inquiry.  He is particularly interested in transparent communication, and was part of the team that drew up the new national patient information leaflets for breast cancer screening. For this project, David helped write the content, especially the language around the statistical formula and predicted range.  " [:strong "Mike Pearson"] ", University of Cambridge ,  is the brains behind the website development, setting up the site, the data visuals and working closely with the animation team, Qudos. (MIKE LINK to Qudos)."]]

                                          [:.image-para
                                           [:p [:img.pull-left
                                                {:style {:width        "100px"
                                                         :margin-right "20px"}
                                                 :src   "assets/KCLlogo.gif"}] [:strong "King’s College London: Dr Tim Rakow… Dr Emily Blackshaw…. "]]]


                                          [:.image-para
                                           [:p {:style {:clear "both"}}
                                            [:img.pull-left
                                             {:style {:width        "150px"
                                                      :margin-right "20px"}
                                              :src   "assets/sas-logo.png"}] [:strong "Sense About Science"] " is a UK-based charity that works to put science and evidence in the hands of the public. They are a source of information, challenge misinformation, and champion sound science and evidence with the help of scientists, academics, and experts in various fields. For this project, they facilitated the workshops with parents, other interested users and members of the public who helped to co-develop the website over four sets of two workshops and stopped the academics going into too much mathematical detail! "]]

                                          [:.image-para
                                           [:p [:img.pull-left
                                                {:style {:width        "60px"
                                                         :margin-right "20px"}
                                                 :src   "assets/chf-logo.png"}] [:strong "The Children’s Heart Federation"] " is the main umbrella body for British CHD charities and voluntary organisations. They publicised this project among their members and coordinated the involvement of parents of children who had heart surgery in our workshops."]]
                                          [:p "If you have any comments about the website please email: (MIKE: Generic email)"]
                                          
                                          ]}
                                        
                                        

                              {:title    "How we developed this site"
                               :glossary []
                               :body     [:div
                                          [:p "We developed this site in just over a year from April 2015 to launch in May 2016. "]
                                          
                                          [:p "The academic mathematicians and statisticians wrote first drafts of the content in May 2015, with feedback from communication experts at Sense about Science and the academic psychologists at King’s College London. Over the next 10 months, Sense about Science held four sets of two workshops each to test the web content: each time one workshop was with interested potential users (e.g. press officers; health journalists; policy people) and the other workshop was with parents of children who had heart surgery. At each stage, we asked new people to come to the workshop so we could get fresh impressions. "]
                                          
                                          [:p "As the website took shape in the autumn of 2015, the academic psychologists at King’s College London did formal tests of specific sentences and concepts discussed in the website to see if one way of explaining the concepts worked better than the other and to pinpoint where there was possibility for confusions. We also shared the evolving website with the clinical community including surgeons, intensive care doctors, data experts and cardiologists, to incorporate their feedback too. "]
                                          
                                          [:p "Over time, the website took shape, changing massively over the year in response to the workshops, the psychology experiments and other feedback. We asked about everything from layout to colours to language to page navigation and very little remains from the original draft content! "]
                                          
                                          [:p "Looking back, we cannot thank all those who gave feedback enough – this website is immeasurably better with their input than it would otherwise have been. Any niggles that remain are our responsibility alone.  "]
                                          
                                          [:p "We would also like to thank our funder, the UK National Institute of Health Research, for encouraging us to think ambitiously about how to develop this site and gave us the time and money to do it! "]
                                          ]}
                              ]}

                   {:section "Further resources about understanding clinical data"
                    :faqs    [{:title    "Suggestions welcome"
                               :glossary []
                               :body     [:div
                                          [:p "Yet to be written."]
                                          ]}
                              ]}

                   {:section     "Glossary of terms used"
                    :is-glossary true
                    :faqs        [{:glossary-entry :survival-rate
                                   :title          "Survival rate"
                                   :body           "The percentage of operations where the child survived at least 30 days after their operation."}
                                  {:glossary-entry :unforeseen-factors
                                   :title          "Unforeseen factors"
                                   :body           "It is impossible to predict precisely what is going to happen in an individual operation. This is partly due to the inevitable inability to predict the future with certainty – all people are physically unique and will react slightly differently to medicines, anaesthetic, surgery and no heart problem is exactly the same as another. Our inability to predict precisely is also partly because there are factors that we suspect may influence the outcome but cannot be included in the statistical method either because these factors are difficult to define or no routine data on them is collected. Together, we call these all “unforeseen factors”."}]}
                   ])
;;;
;; These theme colours are selectable in the footer (at least till we decide on one)
;;
;; keep :low and :high invisible - anything else looks wrong.
;;;
(def colour-map-options
  [;; theme 0
   {:low        "rgba(255,255,255,0)"
    :inner      "#fc8d59"
    :outer-low  "#efdf11"
    :outer-high "#efdf11"
    :high       "rgba(255,255,255,0)"
    :header     "#91bfdb"
    :dot        "black"
    }
   ;; theme 1
   {:low        "rgba(255,255,255,0)"
    :inner      "#efdf11"
    :outer-low  "#fc8d59"
    :outer-high "#fc8d59"
    :high       "rgba(255,255,255,0)"
    :header     "#fc8d59"
    :dot        "black"}
   ;; theme 2
   {:low        "rgba(255,255,255,0)"
    :inner      "#7fcdbb"
    :outer-low  "#2c7fb8"
    :outer-high "#2c7fb8"
    :high       "rgba(255,255,255,0)"
    :header     "#2c7fb8"
    :dot        "black"}
   ;; theme 3
   {:low        "rgba(255,255,255,0)"
    :inner      "#3c8fc8"
    :outer-low  "#7fcdbb"
    :outer-high "#7fcdbb"
    :high       "rgba(255,255,255,0)"
    :header     "#3c8fc8"
    :dot        "black"}
   ;; theme 4
   {:low        "rgba(255,255,255,0)"
    :inner      "#8FB4E1"
    :outer-low  "#578FD2"
    :outer-high "#578FD2"
    :high       "rgba(255,255,255,0)"
    :header     "#578FD2"
    :dot        "black"}
   ;; theme 5
   {:low        "rgba(255,255,255,0)"
    :inner      "#578FD2"
    :outer-low  "#8FB4E1"
    :outer-high "#8FB4E1"
    :high       "rgba(255,255,255,0)"
    :header     "#578FD2"
    :dot        "black"
    }
   ;; theme 6
   {:low        "rgba(255,255,255,0)"
    :inner      "#fc8d59"
    :outer-low  "#efdf11"
    :outer-high "#92DEDB"
    :high       "rgba(255,255,255,0)"
    :header     "#91bfdb"
    :dot        "black"
    }
   ;; theme 7
   {:low        "rgba(255,255,255,0)"
    :inner      "#efdf11"
    :outer-low  "#fc8d59"
    :outer-high "#7FCDBB"
    :high       "rgba(255,255,255,0)"
    :header     "#fc8d59"
    :dot        "black"}
   ;; theme 8
   {:low        "rgba(255,255,255,0)"
    :inner      "#7fcdbb"
    :outer-low  "#2c7fb8"
    :outer-high "#319470"
    :high       "rgba(255,255,255,0)"
    :header     "#2c7fb8"
    :dot        "black"}
   ;; theme 9ra
   {:low        "rgba(255,255,255,0)"
    :inner      "#8FB4E1"
    :outer-low  "#578FD2"
    :outer-high "#599464"
    :high       "rgba(255,255,255,0)"
    :header     "#578FD2"
    :dot        "black"}
   ;; theme 10
   {:low        "rgba(255,255,255,0)"
    :inner      "#3c8fc8"
    :outer-low  "#7fcdbb"
    :outer-high "#9BE45C"
    :high       "rgba(255,255,255,0)"
    :header     "#3c8fc8"
    :dot        "black"}
   ;; theme 11
   {:low        "rgba(255,255,255,0)"
    :inner      "#578FD2"
    :outer-low  "#8FB4E1"
    :outer-high "#9AE1A7"
    :high       "rgba(255,255,255,0)"
    :header     "#578FD2"
    :dot        "black"
    }
   ;; theme 12
   {:low        "#f0f0f0"
    :inner      "#566AF9"
    :outer-low  "#C9CDFC"
    :outer-high "#C9CDFC"
    :high       "#f0f0f0"
    :header     "#4F4763"
    :dot        "black"
    }
   ])
