(ns ^:figwheel-always prais2.content)

;;;
;; table structure
;;;
(defrecord Header [title sortable shown width height content])

(defrecord Row [h-name h-code h-lat h-lon n-ops n-deaths n-survivors survival-rate outer-low inner-low inner-high outer-high observed])

;;;
;; Table headers with info texts
;;;

(def header-row
     (Row. (Header. "Hospital"                    true       true    300   50
                  "The hospital name")
         (Header. "Hospital Code"               false      false    77   50
                  "Hospital code as used by NICOR")
         (Header. "Latitude"                    false      false    0   0
                  "")
         (Header. "Longitude"                    false      false    0   0
                  "")
         (Header. "Number of Operations"        true       true     95   50
                  "The number of heart operations carried out on under-16s at each hospital during the 3 years April 2011 to March 2014")
         (Header. "Number of Deaths"            false       true    75   50
                  "The number of operations where the child  died within 30 days of their operation, from any cause")
         (Header. "Number of Survivors"         false       true    85   50
                  "The number of operations where the child survived at least 30 days after their operation")
         (Header. "Observed Survival Rate %"    false      true     86   50
                  "The percentage of operations where the child survived at least 30 days after their operation. Some hospitals specialise in certain conditions, meaning that some hospitals tend to operate on children with a lower chance of survival. It would be unfair to then expect all hospitals to have the same survival rates each year")
         (Header. "Outer Low"                   false      false   130   50
                  "A dot within the right hand dark blue band means that there is some evidence that chances of survival in the hospital were higher than predicted")
         (Header. "Inner Low"                   false      false   130   50
                  "A dot in this area means that there is no evidence that the hospital’s survival rate is meaningfully different from what is predicted")
         (Header. "Inner High"                  false      false   130   50
                  "A dot within the right hand dark blue band means that there is some evidence that chances of survival in the hospital were higher than predicted")
         (Header. "Outer High"                  false      false   130   50
                  nil)
         (Header. "Observed survival with predicted range"  false      false   0   100
                  nil)
         ))

;;;
;; Sample hospital
;;;
(def sample-hospital
  (Row. "Sample Hospital"	"H"	52 -2     976	24	952	97.5	96.5	97.1	98.9	99.2  nil))

;;;
;; The 2014 results
;;;

(def datasources
  {:2014
   [(Row. "Belfast, Royal Victoria Hospital"	                "RVB"	54.594167 -5.953666 204	        2 	202	99.0 	95.1	96.6  100     100.0 nil)
    (Row. "London, Harley Street Clinic"	                        "HSC"	51.520348 -0.147726 482	        7 	475	98.5	94.8	95.9  98.8    99.4 nil)
    (Row. "Leicester, Glenfield Hospital"	                "GRL"	52.654229 -1.179836 582	        11	571	98.1	95.4	96.2  98.8    99.3 nil)
    (Row. "Newcastle, Freeman Hospital"	                        "FRE"	55.002386 -1.593643 678	        15	663	97.8	95.1	96    98.4    99.0 nil)
    (Row. "Glasgow, Royal Hospital for Children"	                "RHS"	55.862745 -4.342357 787	        28	759	96.4	95.7	96.3  98.5    99.0 nil)
    (Row. "Bristol Royal Hospital for Children"	                "BRC"	51.457899 -2.597014 835	        19	816	97.7	96.0	96.8  98.7    99.2 nil)
    (Row. "Southampton, Wessex Cardiothoracic Centre"	        "SGH"	50.932846 -1.432731 890	        17	873	98.1	95.5	96.2  98.3    98.8 nil)
    (Row.  "Leeds General Infirmary"	                        "LGI"	53.802109 -1.550870 976	        23	953	97.6	96.5	97.1  98.9    99.2 nil)
    (Row.  "Dublin, Our Lady's Children's Hospital"	        "OLS"	53.326005 -6.317399 1056	23	1033	97.8	96.3	96.9  98.7    99.1 nil)
    (Row.  "London, Royal Brompton Hospital"	                "NHB"	51.489012 -0.170759 1107	12	1095	98.9	96.5	97    98.7    99.1 nil)
    (Row.  "Liverpool, Alder Hey Hospital"	                "ACH"	53.419566 -2.900560 1146	28	1118	97.6	95.8	96.4  98.3    98.7 nil)
    (Row. "London, Evelina London Children's Hospital"	        "GUY"	51.498044 -0.118835 1204	39	1165	96.8	95.6	96.3  98.1    98.6 nil)
    (Row.  "Birmingham Children’s Hospital"	                "BCH"	52.484946 -1.894566 1481	30	1451	98.0	95.3	95.9  97.7    98.1 nil)
    (Row. "London, Great Ormond Street Hospital for Children"	"GOS"	51.522549 -0.120923 1881	30	1851	98.4    96.5	97    98.4    98.7 nil)]

   ;;
   ;; followed by sample datasources
   ;;

   :baseline
   [(Row. "Hospital A"	"A"	0 0     204	4	200	98.0	95.1	96.6	100.0	100.0 nil)
    (Row. "Hospital B"	"B"	0 0     482	11	471	97.7	94.8	95.9	98.8	99.4  nil)
    (Row. "Hospital C"	"C"	0 0     582	14	568	97.6	95.4	96.2	98.8	99.3  nil)
    (Row. "Hospital D"	"D"	0 0     678	18	660	97.3	95.1	96.0	98.4	99.0  nil)
    (Row. "Hospital E"	"E"	0 0     787	28	759	96.4	95.7	96.3	98.5	99.0  nil)
    (Row. "Hospital F"	"F"	0 0     835	22	813	97.4	96.0	96.8	98.7	99.2  nil)
    (Row. "Hospital G"	"G"	0 0     890	22	868	97.5	95.5	96.2	98.3	98.8  nil)
    (Row. "Hospital H"	"H"	0 0     976	24	952	97.5	96.5	97.1	98.9	99.2  nil)
    (Row. "Hospital I"	"I"	0 0     1056	26	1030	97.5	96.3	96.9	98.7	99.1  nil)
    (Row. "Hospital J"	"J"	0 0     1107	17	1090	98.5	96.5	97.0	98.7	99.1  nil)
    (Row. "Hospital K"	"K"	0 0     1146	31	1115	97.3	95.8	96.4	98.3	98.7  nil)
    (Row. "Hospital L"	"L"	0 0     1204	41	1163	96.6	95.6	96.3	98.1	98.6  nil)
    (Row. "Hospital M"	"M"	0 0     1481	36	1445	97.6	95.3	95.9	97.7	98.1  nil)
    (Row. "Hospital N"	"N"	0 0     1881	38	1843	98.0	96.5	97.0	98.4	98.7  nil)]

   :variation-1
   [(Row. "Hospital A"	"A"     0 0     204	4	200	98.04	95.10	96.57	100.00	100.0 nil)
    (Row. "Hospital B"	"B"	0 0     482	11	471	97.72	94.81	95.85	98.76	99.38 nil)
    (Row. "Hospital C"	"C"	0 0     582	14	568	97.59	95.36	96.22	98.80	99.31 nil)
    (Row. "Hospital D"	"D"	0 0     678	18	660	97.35	95.13	96.02	98.38	98.97 nil)
    (Row. "Hospital E"	"E"	0 0     787	35	752	95.55	95.68	96.32	98.48	98.98 nil)
    (Row. "Hospital F"	"F"	0 0     835	22	813	97.37	96.05	96.77	98.68	99.16 nil)
    (Row. "Hospital G"	"G"	0 0     890	22	868	97.53	95.51	96.18	98.31	98.76 nil)
    (Row. "Hospital H"	"H"	0 0     976	24	952	97.54	96.52	97.13	98.87	99.18 nil)
    (Row. "Hospital I"	"I"	0 0     1056	26	1030	97.54	96.31	96.88	98.67	99.05 nil)
    (Row. "Hospital J"	"J"	0 0     1107	17	1090	98.46	96.48	97.02	98.74	99.10 nil)
    (Row. "Hospital K"	"K"	0 0     1146	31	1115	97.29	95.81	96.42	98.25	98.69 nil)
    (Row. "Hospital L"	"L"	0 0     1204	41	1163	96.59	95.60	96.26	98.09	98.59 nil)
    (Row. "Hospital M"	"M"	0 0     1481	36	1445	97.57	95.34	95.88	97.70	98.11 nil)
    (Row. "Hospital N"	"N"	0 0     1881	38	1843	97.98	96.54	97.02	98.35	98.67 nil)]

   :variation-2a
   [(Row. "Hospital A"	"A"     0 0     204	3	201	98.5	95.1	96.6	100.0	100.0 nil)
    (Row. "Hospital B"	"B"	0 0     482	11	471	97.7	94.8	95.9	98.8	99.4  nil)
    (Row. "Hospital C"	"C"	0 0     582	14	568	97.6	95.4	96.2	98.8	99.3  nil)
    (Row. "Hospital D"	"D"	0 0     678	18	660	97.3	95.1	96.0	98.4	99.0  nil)
    (Row. "Hospital E"	"E"	0 0     787	28	759	96.4	95.7	96.3	98.5	99.0  nil)
    (Row. "Hospital F"	"F"	0 0     835	17	818	98.0	96.0	96.8	98.7	99.2  nil)
    (Row. "Hospital G"	"G"	0 0     890	22	868	97.5	95.5	96.2	98.3	98.8  nil)
    (Row. "Hospital H"	"H"	0 0     976	19	957	98.1	96.5	97.1	98.9	99.2  nil)
    (Row. "Hospital I"	"I"	0 0     1056	20	1036	98.1	96.3	96.9	98.7	99.1  nil)
    (Row. "Hospital J"	"J"	0 0     1107	17	1090	98.5	96.5	97.0	98.7	99.1  nil)
    (Row. "Hospital K"	"K"	0 0     1146	24	1122	97.9	95.8	96.4	98.3	98.7  nil)
    (Row. "Hospital L"	"L"	0 0     1204	34	1170	97.2	95.6	96.3	98.1	98.6  nil)
    (Row. "Hospital M"	"M"	0 0     1481	36	1445	97.6	95.3	95.9	97.7	98.1  nil)
    (Row. "Hospital N"	"N"	0 0     1881	38	1843	98.0	96.5	97.0	98.4	98.7  nil)]

   :variation-2b
   [(Row. "Hospital A"	"A"     0 0     204     3       201     98.5   95.1   96.6   100.0  100.0 nil)
    (Row. "Hospital B"	"B"	0 0     482     8       474     98.3   94.8   95.9   98.8   99.4  nil)
    (Row. "Hospital C"	"C"	0 0     582     11      571     98.1   95.4   96.2   98.8   99.3  nil)
    (Row. "Hospital D"	"D"	0 0     678     15      663     97.8   95.1   96.0   98.4   99.0  nil)
    (Row. "Hospital E"	"E"	0 0     787     28      759     96.4   95.7   96.3   98.5   99.0  nil)
    (Row. "Hospital F"	"F"	0 0     835     17      818     98.0   96.0   96.8   98.7   99.2  nil)
    (Row. "Hospital G"	"G"	0 0     890     17      873     98.1   95.5   96.2   98.3   98.8  nil)
    (Row. "Hospital H"	"H"	0 0     976     19      957     98.1   96.5   97.1   98.9   99.2  nil)
    (Row. "Hospital I"	"I"	0 0     1056    20      1036    98.1   96.3   96.9   98.7   99.1  nil)
    (Row. "Hospital J"	"J"	0 0     1107    10      1097    99.1   96.5   97.0   98.7   99.1  nil)
    (Row. "Hospital K"	"K"	0 0     1146    24      1122    97.9   95.8   96.4   98.3   98.7  nil)
    (Row. "Hospital L"	"L"	0 0     1204    34      1170    97.2   95.6   96.3   98.1   98.6  nil)
    (Row. "Hospital M"	"M"	0 0     1481    27      1454    98.2   95.3   95.9   97.7   98.1  nil)
    (Row. "Hospital N"	"N"	0 0     1881    27      1854    98.6   96.5   97.0   98.4   98.7  nil)]

   :variation-3
   [(Row. "Hospital A"	"A"     0 0     204	4	200	98.0	95.1	96.6	100.0	100.0 nil)
    (Row. "Hospital B"	"B"	0 0     482	11	471	97.7	94.8	95.9	98.8	99.4  nil)
    (Row. "Hospital C"	"C"	0 0     582	14	568	97.6	95.4	96.2	98.8	99.3  nil)
    (Row. "Hospital D"	"D"	0 0     678	18	660	97.3	95.1	96.0	98.4	99.0  nil)
    (Row. "Hospital E"	"E"	0 0     787	28	759	96.4	95.7	96.3	98.5	99.0  nil)
    (Row. "Hospital F"	"F"	0 0     835	22	813	97.4	96.0	96.8	98.7	99.2  nil)
    (Row. "Hospital G"	"G"	0 0     890	22	868	97.5	95.5	96.2	98.3	98.8  nil)
    (Row. "Hospital H"	"H"	0 0     976	24	952	97.5	96.5	97.1	98.9	99.2  nil)
    (Row. "Hospital I"	"I"	0 0     1056	26	1030	97.5	96.3	96.9	98.7	99.1  nil)
    (Row. "Hospital J"	"J"	0 0     1107	11	1096	99.0	96.5	97.0	98.7	99.1  nil)
    (Row. "Hospital K"	"K"	0 0     1146	31	1115	97.3	95.8	96.4	98.3	98.7  nil)
    (Row. "Hospital L"	"L"	0 0     1204	41	1163	96.6	95.6	96.3	98.1	98.6  nil)
    (Row. "Hospital M"	"M"	0 0     1481	36	1445	97.6	95.3	95.9	97.7	98.1  nil)
    (Row. "Hospital N"	"N"	0 0     1881	38	1843	98.0	96.5	97.0	98.4	98.7  nil)]

   :variation-4
   [(Row. "Hospital A"	"A"     0 0     204	4	200	98.0	95.1	96.6	100.0	100.0 nil)
    (Row. "Hospital B"	"B"	0 0     482	11	471	97.7	94.8	95.9	98.8	99.4  nil)
    (Row. "Hospital C"	"C"	0 0     582	14	568	97.6	95.4	96.2	98.8	99.3  nil)
    (Row. "Hospital D"	"D"	0 0     678	18	660	97.3	95.1	96.0	98.4	99.0  nil)
    (Row. "Hospital E"	"E"	0 0     787	35	752	95.6	95.7	96.3	98.5	99.0  nil)
    (Row. "Hospital F"	"F"	0 0     835	22	813	97.4	96.0	96.8	98.7	99.2  nil)
    (Row. "Hospital G"	"G"	0 0     890	22	868	97.5	95.5	96.2	98.3	98.8  nil)
    (Row. "Hospital H"	"H"	0 0     976	24	952	97.5	96.5	97.1	98.9	99.2  nil)
    (Row. "Hospital I"	"I"	0 0     1056	26	1030	97.5	96.3	96.9	98.7	99.1  nil)
    (Row. "Hospital J"	"J"	0 0     1107	13	1094	98.8	96.5	97.0	98.7	99.1  nil)
    (Row. "Hospital K"	"K"	0 0     1146	31	1115	97.3	95.8	96.4	98.3	98.7  nil)
    (Row. "Hospital L"	"L"	0 0     1204	47	1157	96.1	95.6	96.3	98.1	98.6  nil)
    (Row. "Hospital M"	"M"	0 0     1481	27	1454	98.2	95.3	95.9	97.7	98.1  nil)
    (Row. "Hospital N"	"N"	0 0     1881	38	1843	98.0	96.5	97.0	98.4	98.7  nil)]

   :variation-5
   [(Row. "Hospital A"	"A"     0 0     200	6	194	97.0	95.0	96.5	100.0	100.0 nil)
    (Row. "Hospital B"	"B"	0 0     482	11	471	97.7	94.8	95.9	98.8	99.4  nil)
    (Row. "Hospital C"	"C"	0 0     582	14	568	97.6	95.4	96.2	98.8	99.3  nil)
    (Row. "Hospital D"	"D"	0 0     678	18	660	97.3	95.1	96.0	98.4	99.0  nil)
    (Row. "Hospital E"	"E"	0 0     787	28	759	96.4	95.7	96.3	98.5	99.0  nil)
    (Row. "Hospital F"	"F"	0 0     835	22	813	97.4	96.0	96.8	98.7	99.2  nil)
    (Row. "Hospital G"	"G"	0 0     890	22	868	97.5	95.5	96.2	98.3	98.8  nil)
    (Row. "Hospital H"	"H"	0 0     976	24	952	97.5	96.5	97.1	98.9	99.2  nil)
    (Row. "Hospital I"	"I"	0 0     1056	26	1030	97.5	96.3	96.9	98.7	99.1  nil)
    (Row. "Hospital J"	"J"	0 0     1107	17	1090	98.5	96.5	97.0	98.7	99.1  nil)
    (Row. "Hospital K"	"K"	0 0     1146	31	1115	97.3	95.8	96.4	98.3	98.7  nil)
    (Row. "Hospital L"	"L"	0 0     1204	41	1163	96.6	95.6	96.3	98.1	98.6  nil)
    (Row. "Hospital M"	"M"	0 0     1481	36	1445	97.6	95.3	95.9	97.7	98.1  nil)
    (Row. "Hospital N"	"N"	0 0     1881	67	1814	96.4	96.5	97.0	98.4	98.7  nil)]})


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
        [:p "The Scottish Association for Children with Heart Disorders (SACHD)"]]]
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
   :NHB [[:a {:href "http://www.newcastle-hospitals.org.uk/services/cardiothoracic_services_childrens-heart-unit.aspx"} "Newcastle, Freeman Hospital"]
         [:a {:href "http://www.thebromptonfountain.org.uk/"} "The Brompton Fountain"]]
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
         [:a {:href "http://www.gosh.org/"} "Great Ormond Street Hospital Charity"]]})

;;;
;; Comment on the meaning of each range. These texts appear in bar-chart tooltips
;;;

(def bar-comments
  {:inner "A dot in this area means that there is no evidence that the hospital’s survival rate is meaningfully different from what is predicted"
   :outer-high "A dot in this area means that there is some evidence that chances of survival in the hospital were higher than predicted"; " [add link]"
   :outer-low "A dot in this area means that there is some evidence that chances of survival in the hospital were lower than predicted."; " [add link]"
   :low "A dot to the left of the bands means that there is strong evidence that chances of survival in the hospital were lower than predicted."; " [add link]"
   :high "A dot to the right of the bands means that there is strong evidence that chances of survival in the hospital were higher than predicted."; " [add link]"
   })

;;;
;; Comment on the meaning of the dot when it appears in the given range.
;; These texts appear in a concluding remark in each hospital's popup.
;;;

(def dot-comments
  {:inner "There is no evidence that the hospital’s survival rate is meaningfully different from what is predicted"
   :outer-high "There is some evidence that chances of survival in the hospital were higher than predicted"; " [add link]"
   :outer-low "There is some evidence that chances of survival in the hospital were lower than predicted."; " [add link]"
   :low "There is strong evidence that chances of survival in the hospital were lower than predicted."; " [add link]"
   :high "There is strong evidence that chances of survival in the hospital were higher than predicted."; " [add link]"
   })


(def glossary {:survival-rate {:title "Survival rate"
                               :body  "The percentage of operations where the child survived at least 30 days after their operation."}
               :chance-factors {:title "Chance factors"
                                :body "It is impossible to predict precisely what is going to happen in an individual operation. This is partly due to the inevitable inability to predict the future with certainty – all people are physically unique and will react slightly differently to medicines, anaesthetic, surgery and no heart problem is exactly the same as another. Our inability to predict precisely is also partly because there are factors that we suspect may influence the outcome but cannot be included in the statistical formula because no routine data on them is collected. Together, we call these all “chance factors”."}})

(def title "Everything else")

(def faq-sections [
           {:section "Background"
            :faqs [{:title "Why do some children need heart surgery?"
                    :glossary []
                    :body [:div
                           [:p "Each year in the UK, about 5000-6000 babies are born with a heart defect (called congenital heart disease). Congenital heart disease covers a wide range of problems from the relatively minor (such as a small hole in the heart) to more severe conditions where a child needs specialist hospital care. About half of all children born with a heart defect will need heart surgery at some stage in their childhood. Children can also develop problems with their heart as they grow up which require hospital care (called acquired heart disease). "]
                           [:p "Read more about "
                            [:a {:href "http://www.chfed.org.uk/how-we-help/information-service/heart-conditions/"} "different heart conditions"]
                            " and caring for children with heart conditions on the "
                            [:a {:href "http://www.chfed.org.uk/how-we-help/information-service/caring-for-heart-children/"} "Children’s Heart Federation’s website."]]]
                    }



                   {:title "Why are survival rates after children's heart surgery monitored and published?"
                    :glossary [:survival-rate]
                    :body [:div
                           [:p [:a {:href  "http://webarchive.nationalarchives.gov.uk/20090811143745/http:/www.bristol-inquiry.org.uk/final_report/the_report.pdf"}] [:img.thumbnail.pull-left
                                   {:style {:width "100px"
                                            :margin-right "20px"}
                                    :src "assets/bristol.png"}] "In the 1990s, problems were found with the standard of care for children having heart surgery at the Bristol Royal Infirmary. The proportion of children who died after surgery at Bristol was much higher than other UK hospitals. There was a formal inquiry into what happened (" [:a {:href "http://webarchive.nationalarchives.gov.uk/20090811143745/http:/www.bristol-inquiry.org.uk/final_report/the_report.pdf"} "The Bristol Inquiry 2001"] "), which led to a number of changes, including a new compulsory national reporting system so that the proportion of children surviving to 30 days after surgery for all hospitals have been published every year since 2001. Results where there is some evidence that survival rates are lower than expected are checked further by the hospital and the national audit body (NICOR)."]

                           [:p "The UK now has one of the strongest monitoring programmes in the world. Since reporting started, " [:a {:href "http://www.bbc.co.uk/news/health-32162803"} "survival rates have been improving"] " and now " [:strong "over 97% of children survive to at least one month after surgery."]]]
                    }

                   {:title "How are survival rates monitored?"
                    :glossary [:survival-rate]
                    :body [:div
                           [:p [:a {:href  "http://www.ucl.ac.uk/nicor/patients"}
                                [:img.thumbnail.pull-left
                                 {:style {:width "100px"
                                          :margin-right "20px"}
                                  :src "assets/nicor.png"}]]
                            "Until 2013, the national audit body " [:a {:href "http://www.ucl.ac.uk/nicor/patients"} "NICOR"] "only published survival rates for certain types of procedure because there was no clear way to put overall survival rates for each hospital into context (see "[:a {:href "?#/intro"} "What, Why and How?"] "). But " [:a {:href "https://www.ucl.ac.uk/operational-research/AnalysisTools/PRAiS"} "researchers"] "have now made this possible by creating a statistical formula. Using this, NICOR has published overall survival rates along with the predicted range (dark blue bar) and extended predicted range (light blue bar) for survival for each hospital since 2013 (see "[:a {:href "?#/intro"} "What, Why and How?"]").  The predicted range is the range in which we expect to see each hospital’s observed survival ratethe majority of the time (19 times out of 20 for the dark blue bar, 998 times out of 1000 for the light blue bar). "

                            ]
                           [:p "The predicted range is calculated using the " [:strong "same"] " statistical formula for all hospitals and this prediction is " [:strong "not"] " influenced by what the survival rate at a hospital actually was."]
                           [:p "Each year, NICOR publishes a report of survival over the previous 3 years for each hospital in the UK and Ireland. It reports the percentage of children surviving for about 40 common surgical procedures and, since 2013, has been able to also include overall survival rate for each hospital along with that hospital’s predicted range for survival."]]


                    }

                   {:title "Where is this data from?"
                    :glossary []
                    :body [:div
                           [:p [:img.thumbnail.pull-left
                                {:style {:width "150px"
                                         :margin-right "20px"}
                                 :src "assets/data-transfer.png"}]
                            "Each hospital must collect data on every surgery or intervention carried out on a child for heart problems. Every three months, hospitals must submit this data to the national audit body, "[:a {:href "http://www.ucl.ac.uk/nicorum/patients"} "NICOR "] "(The National Institute for Cardiovascular Outcomes Research). NICOR sets out exactly what data is collected and each hospital undergoes independent checks of the quality of their submitted data. NICOR also reports to the UK Department of Health, the Care Quality Commission (CQC) and other NHS regulatory bodies."]

                           [:p "NICOR tracks the survival of these children by linking to the national register of deaths using patients’ NHS number and also from hospital records. NICOR statisticians then analyse the data every year to enable hospitals and healthcare improvement bodies to monitor and improve the quality of care and outcomes of children who need heart surgery."]

                           #_[:p "If a hospital’s survival outcomes are below a certain threshold, NICOR and the hospital together examine the data and the individual cases to understand whether any further action needs to be taken. In extreme cases, a hospital might stop doing surgery while action is taken to improve the service. You can read more this process on " [:a {:href "https://nicor4.nicor.org.uk/CHD/an_paeds.nsf/vwContent/Information%20for%20Patients?Opendocument"} "NICOR’s patient information pages"] " and in our FAQ section. In this website, we explain how survival statistics are used to support this decision making."]]
                    }
                   ]}

           {:section "Understanding the predicted range"
            :faqs [{:title "Why is a survival range predicted for each individual hospital?"
                    :glossary [:chance-factors :survival-rate]
                    :body [:div
                           [:p "Heart disease in children covers a wide range of disorders, from relatively minor to more serious conditions. This affects a child's chances of survival, as do other factors such as age, weight and other health problems."]

                           [:p "Some hospitals specialise in certain conditions that are particularly complicated, meaning they tend to operate on children with a lower chance of survival. It would therefore be unfair to expect all hospitals to have the same survival rates each year. Hospitals also treat different children each year, so we expect any hospital’s survival rate to vary from year to year."]

                           [:p "The predicted range (dark blue bar) is where we expect the hospital’s observed survival rate to be 19 times out of 20."]

                           [:p "It is based on a formula that uses recorded information about each operation a hospital performed over a 3 year period. Since each hospital operated on different patients, the predicted ranges for each hospital will be different. This is why it is not valid to compare raw survival rates to each other. It is " [:i "only valid"] " to compare a hospital’s observed survival rate to its own predicted range. "]

                           (comment "*** POSSIBLE IMAGES ***** - a snapshot from animation from factors going into the formula/machine and coming out with a predicted range? ")
                           ]
                    }

                   {:title "Why does the width of the predicted range differ between hospitals?"
                    :glossary [:survival-rate]
                    :body [:div
                           [:p "The predicted range (dark blue bar) for each hospital shows the range where we expect to see the observed survival rate19 times out of 20 if the hospital is performing as predicted by the formula.  regardless of how many operations it did or what children it treated. When a hospital does fewer operations, chance factors have a bigger influence on the overall outcome, and so it has a wider predicted range than a hospital that does many operations. "]]

                    }

                   {:title "When looking at just one hospital, what does it mean if its survival is outside its predicted range?"
                    :glossary [:survival-rate]
                    :body [:div
                           [:p "This is a difficult question and so the answer is a bit long!"]

                           [:p "There are three steps that lead to a hospital being outside its prediction range:"]

                           [:h4 "Step 1"]
                           [:p "Each hospital and the Office of National Statistics supply data on each child to NICOR"]

                           [:p [:i "Although the data submitted is usually of very high quality, there will always be some mistakes in large and complex datasets. If a hospital submits data where some of the data is very wrong (for instance wrong weights are recorded) or missing, then this will result in a wrong predicted range. "]]

                           [:h4 "Step 2"]
                           [:p "The statistical formula is then applied to all operations at that hospital to calculate its overall predicted range."]

                           [:p [:i "Although the statistical formula as is as good as we can currently get it, it is not perfect. There will always be unique features about a child that affect its chance of survival that are not captured by routine data collection and so cannot be part of a formula. We will never be able to capture the whole medical picture of a child in a single formula! So, the predicted range is the best possible guess for what the predicted range should be and could be wrong."]]

                           [:h4 "Step 3"]
                           [:p "“What actually happened” for each child is then used to calculate the observed survival rate for that hospital and compared to the predicted range."]

                           [:p "If the hospital’s data contains no errors and there’s no reason to think that the formula shouldn’t apply well to that hospital, then , we consider there is some or strong evidence that the chances of survival at that hospital are not as predicted, if the observed survival rate is outside the predicted range"]
                           [:p "The strength of the evidence depends on where the observed survival is compared to the extended range. If it is outside the central predicted range (dark blue bar) but inside the extended range (light blue bar) (expected 998 out of a 1000 times) then this is considered moderate evidence. If the observed survival is outside the extended range (only expected to happen 2 times out of a 1000), then this is considered strong evidence. "]

                           [:.col-sm-8 [:img.thumbnail {:style {:width "100%"}
                                                        :src "assets/bars.png"}]]

                           ]

                    }

                   {:title "When looking at ALL hospitals simultaneously , what does it mean if any of the hospitals have an observed survival rate outside their predicted range?"
                    :glossary [:chance-factors :survival-rate]
                    :body [:div

                           [:p "If we were looking at only one hospital, we’d expect its observed survival rate to fall outside its predicted range rarely, only 1 time in 20 if chances of survival at the hospitals match the formula."]


                           [:.col-sm-8 [:img.thumbnail {:style {:width "100%"}
                                                         :src "assets/rare.png"}]]

                           [:p "BUT, if we are looking at all 14 hospitals at once, we’d actually expect that at least one hospital will fall outside its range just by chance about 8 times in 20! This is similar to the difference between flipping one coin and flipping many: if I only flip one coin there is a 50% probability that I’ll get one head whereas if I flipped, say, the four coins in a row the probability of me getting at least one head in the four throws goes up to 94%."]

                           [:p "8 times in 20 means that it is not that rare that any one of these hospitals will have an observed survival rate that falls outside their predicted range. "]
                           [:.col-sm-8 [:img.thumbnail {:style {:width "100%"}
                                                         :src "assets/not-rare.png"}]]

                           [:p "So, on average, we’d anticipate that about half of NICOR’s annual reports to have at least one centre outside its range, either above or below, by chance alone."]

                           [:p "Considering now the " [:i "extended predicted range"]" (light blue bar), if we are looking at all 14 hospitals at once we’d only expect one of them to be outside their extended range less than 1 time in 20 (actually about 1 time in 30). This is why a hospital’s observed survival rate being outside the extended predicted range is considered strong evidence that the chances of a patient surviving at that hospital are different to what is expected."]

                           [:.col-sm-8 [:img.thumbnail {:style {:width "100%"}
                                                         :src "assets/not-rare.png"}]]

                           ]}

                   {:title "What happens if a hospital’s survival is outside its predicted range?"
                    :glossary [:chance-factors]
                    :body [:div
                           [:p "For these cases, the NHS and the national audit body, NICOR, want to understand if there is a reason  why a hospital is outside of its range. "]

                           [:p "Because NICOR always looks at all 14 hospitals at once, it is not that rare for any single hospital to be outside its main predicted range but it is rare for any hospital to be outside its extended range (see also 2.4)"]

                           [:p "If a hospital’s survival rate is " [:strong "below"] " its predicted range (either the main or extended), everyone wants to be sure that there is not a potential problem in the pathway of care. It is important to either rule this out or start to improve care if the national audit body decides that this is the reason."]

                           [:p "If a hospital actual survival is below the predicted range, the "
                            [:a {:href "https://www.ucl.ac.uk/nicor/audits/congenital/governance"} "National Congenital Heart Disease Audit Steering Committee "]
                            " is notified. The Committee in turn notifies the Medical Director and the lead doctor for congenital heart disease at that hospital and a detailed examination of the hospital’s results takes place. There are established and "[:a {:href "https://www.gov.uk/government/publications/detection-and-management-of-outliers-guidance-prepared-by-national-clinical-audit-advisory-group"} "published procedures"] " involving the Royal College of Surgeons and/or the Care Quality Commission which can be put into action if the detailed assessment raises concerns about care."]

                           [:p "There are three main steps (see also 2.3)"]

                           [:h4 "Step 1"]
                           [:p "The hospital is asked to recheck the data it submitted for any errors."]

                           [:h4 "Step 2"]
                           [:p "If corrected data still leads to the hospital being outside its range, analysts check to see whether the hospital treated some children that are unlikely to have had their survival chances accurately predicted by the formula. For instance, if the hospital treated children with particularly complex health problems that are not captured by the formula."]

                           [:h4 "Step 3"]
                           [:p "If the risk adjustment is considered adequate, then the hospital’s process of care are examined. For instance, how are care decisions made? What are the surgical protocols? How is intensive care managed?"]

                           [:p "The report on individual instances like this would then be published online by NICOR at the same time as the Annual Report."]
                           [:.col-sm-8 [:img.thumbnail {:style {:width "100%"}
                                                        :src "assets/outside-range.png"}]]

                           [:p "If a hospital’s survival rate is above its predicted range, we want to see if there is anything we can learn about best practice form that hospital so that it can be shared with other hospitals. "]
                           ]}

                  {:title "What is the risk adjustment method used by National Audit?"
                    :glossary []
                    :body [:div
                           [:p "The National Audit body uses a risk adjustment method developed by researchers at Great Ormond Street Hospital and University College London called PRAiS (Partial Risk Adjustment in Surgery) (See also the " [:a {:href "?#/intro"} "What, why, how"] " section). The underlying methodology of this method is published in the " [:a {:href "https://www.ucl.ac.uk/operational-research/AnalysisTools/PRAiS"} "academic literature"] " if you are interested in learning more "]

                           (comment "*** picture of formula churning away at PRAIS risk factors?***")
                           (comment
                             {:title "Why do the hospitals that do more operations have narrower ranges?"
                              :glossary [:chance-factors :survival-rate]
                              :body [:div
                                     [:p "If a hospital does not carry out many operations, then chance factors can have a large impact on their overall survival rate, and so we need to allow more leeway between observed and predicted survival in order to rule out the influence of chance factors. The ranges get narrower as the hospitals do more operations."]]
                              })
                           ]}]}


           {:section "Limitations of these results and the data"
            :faqs [

                   {:title "Are there any limitations to risk adjustment?"
                    :glossary []
                    :body [:div
                           [:p "Yes there are. Risk adjustment allows for fairer assessment of a hospital’s observed survival rate by putting into context (see also the " [:a {:href "?#/intro"} "What, why, how?"] " section),  but it still cannot make it completely fair. It is always ‘partial’ and there will always be information about important risk factors that are not routinely collected and so cannot be captured by risk adjustment methods (see also 2.3). Any statistical formula has to be developed on existing data and so the data will be typically at least a year out of date. So risk adjustment cannot adjust or account for future changes to the way data is collected (for instance more complete data) or new methods of surgical or medical management. Often, these statistical formulas are updated every few years with more up to date (in 2016, we updated PRAiS for the third time). "]]}

                   {:title "How reliable are the data?"
                    :glossary []
                    :body [:div
                           [:p "The data come from the National Institute for Cardiovascular Outcomes Research (UCL NICOR) which collects national data for the National Heart Disease Audits. All hospitals performing heart surgery in children have to submit their data in a standard format to NICOR. All hospitals are independently audited each year as part of a data validation process (to check the quality of the data submitted)."]

                           [:p "So, the data are of high quality. While no large dataset is perfect (e.g., it is inevitable that a few records will not be 100% accurate), this dataset is among the most detailed and complete in the world for children’s heart surgery."]]
                    }

                   {:title "What are the limitations of the data?"
                    :glossary [:chance-factors]
                    :body [:div
                           [:p "Apart from occasional inaccuracies in the data, there are other limits to what the data can tell us about surgery outcomes. There are risk factors not routinely collected (for instance the size or relative severity of a child’s heart defect), which means these cannot be accounted for in our statistical prediction method. Different hospitals might also record the same heart condition slightly differently and this might affect the survival percentage predicted for these hospitals."]

                           [:p "These data are also snapshots in time of what happened at each specialist hospital. A number of particularly challenging patients one year (in ways not accounted for in our prediction) or a run of chance factors could cause a very good hospital to have worse outcomes than predicted. So we need to be careful about reading too much into any single time period."]]
                    }

                   {:title "What about longer term survival and quality of life?"
                    :glossary []
                    :body [:div
                           [:p "National audit data at the moment (as of 2016) only looks at what happens shortly after surgery. These data cannot tell us about longer term (e.g. 90 day, 1 year or 5 year) survival, or other outcomes such as post-surgery complication rates or the impact of surgery on the child or their family. There is a lot of " [:a {:href "http://www.gosh.nhs.uk/medical-information/clinical-specialties/cardiothoracic-surgery-information-parents-and-visitors/research/complications-after-heart-surgery-children"} "active research"] " going right now (due to finish around 2018) investigating how to capture, interpret and publish longer term survival and complication rates so hopefully this information will be available in the next 5 years."]

                           [:p "The data also can’t tell us about how or why a hospital achieved the recorded results, so it cannot, by itself, tell us whether one hospital offers better or worse quality care than any other. These data cannot tell you what the results are likely to be next year. It also cannot tell us anything about what happens to children who never get operated on for whatever reason, since data on these children is not currently submitted to national audit. "]]
                    }]
            }

           {:section "My family or child"
            :faqs [{:title "Which hospital should I go to?"
                    :glossary []
                    :body [:div
                           [:p "You can use the national audit data to see how the different hospitals are doing compared to what is predicted from the statistical model for a particular time period. You can also use the " [:a {:href "https://nicor4.nicor.org.uk/CHD/an_paeds.nsf/vwContent/home"} "national audit website"] " to explore how many operations of each type a hospital does and survival outcomes for each of these. However, this cannot, in itself, tell you which hospital you should go to and does not provide proof that one hospital is “better” than any other. The safety or otherwise of a hospital " [:strong "cannot"] " be determined from survival data alone."]

                           [:p "When considering which hospital, there are many factors to take into account, including how well the clinical team know your child and his or her medical history, any particular medical issues that your child has (for instance, some hospitals specialise in treating children with a particular problem) and how far the hospital is from your home."]

                           [:p "You should discuss your child’s care with their specialist cardiologist to determine what the best treatment option is for your child."]
                           [:p "You can also access the support available from national charities such as the " [:a {:href "http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf"} "Children’s Heart Federation"] " or " [:a {:href "http://www.lhm.org.uk/"} "Little Hearts Matter"] " or local charities for your specialist children’s hospital (hospital map tab for individual hospital charities). These guides on " [:a {:href "http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf"} "speaking to your child’s surgeon"] " or " [:a {:href "http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf"} "seeking a second opinion"] ", written by the Children’s Heart Federation, might also be helpful."]
                           ]
                    }

                   {:title "Can the published data tell me about the risks for my child?"
                    :glossary []
                    :body [:div
                           [:p "No, the published data cannot tell you about the risk for your child specifically – this will depend on other factors that are not necessarily captured in the national data. Your child’s specialist cardiologist and/or cardiac surgeon will be able to discuss this with you. These guides on " [:a {:href "http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf"} "speaking to your child’s surgeon"] " or " [:a {:href "http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf"} "seeking a second opinion"] ", written by the Children’s Heart Federation, might also be helpful."]

                           [:.col-sm-8 [:img.thumbnail {:style {:width "100%"}
                                                        :src "assets/my-child-risks.png"}]]

                           ]}]}

           {:section "Who developed this site and how"
            :faqs [{:title "About us"
                    :glossary []
                    :body [:div
                           [:p [:img.thumbnail.pull-left
                                   {:style {:width "150px"
                                            :margin-right "20px"}
                                    :src "assets/ucl-logo.png"}] [:strong "University College London: Dr Christina Pagel"] " is a Reader in Operational Research (a branch of applied mathematics) at University College London, applying maths to problems in the NHS. She works very closely with doctors and other clinical staff, mainly at Great Ormond Street Hospital, to help them use routinely collected data to improve NHS services. Her work currently focuses on two areas: 1) care for children requiring heart surgery and 2) how specialist intensive care is organised for children who need it (for whatever reason). "]

                           [:p "Christina helped developed a statistical method called PRAiS to let specialist hospitals and the national audit body easily monitor survival outcomes after heart surgery in children. The UK National Audit Body that monitors paediatric congenital outcomes now uses this method in publishing their outcomes. In this project, Christina worked with Sense about Science, the University of Cambridge and the Children’s Heart Federation to develop these online resources to help people interpret the audit body’s published results. "]

                           [:p [:img.thumbnail.pull-left
                                   {:style {:width "150px"
                                            :margin-right "20px"}
                                    :src "assets/camlogo.png"}][:strong "University of Cambridge: Professor David Spiegelhalter"] " is a statistician from Cambridge University.   He has worked for many years with doctors from Great Ormond Street Hospital on monitoring outcomes following surgery for congenital heart disease, and led the statistical team at the Bristol Royal Infirmary Inquiry.  He is particularly interested in transparent communication, and was part of the team that drew up the new patient information leaflets for breast screening. Mike Pearson… "]

                           [:p [:img.thumbnail.pull-left
                                   {:style {:width "100px"
                                            :margin-right "20px"}
                                    :src "assets/kings-logo.png"}][:strong "King’s College London: Dr Tim Rakow… Dr Emily Blackshaw…. "]]


                           [:p {:style {:clear "both" }}
                            [:img.thumbnail.pull-left
                                   {:style {:width "150px"
                                            :margin-right "20px"}
                                    :src "assets/sas-logo.png"}] [:strong "Sense About Science"] ", a U.K.-based charity, works to put science and evidence in the hands of the public. They are a source of information, challenge misinformation, and champion sound science and evidence with the help of scientists, academics, and experts in various fields. They facilitated the workshops with parents, other interested users and members of the public who helped to co-develop the website. "]
                           [:p [:img.thumbnail.pull-left
                                   {:style {:width "60px"
                                            :margin-right "20px"}
                                    :src "assets/chf-logo.png"}][:strong "The Children’s Heart Federation"] " is the leading UK children’s heart charity and the main umbrella body for British CHD charities and voluntary organisations. They publicised this project among their members and coordinated the involvement of parents in our workshops. "]
                           ]}

                   {:title "How we developed this site"
                    :glossary []
                    :body [:div
                           [:p "Yet to be written"]]}
                   ]}

           {:section "Further resources about understanding clinical data"
            :faqs [{:title "Suggestions welcome"
                    :glossary []
                    :body [:div
                           [:p "Yet to be written."]
                           ]}
                   ]}

           {:section "Glossary of terms used"
            :is-glossary true
            :faqs [{:glossary-entry :survival-rate
                    :title "Survival rate"
                    :body  "The percentage of operations where the child survived at least 30 days after their operation."}
                   {:glossary-entry :chance-factors
                    :title "Chance factors"
                    :body "It is impossible to predict precisely what is going to happen in an individual operation. This is partly due to the inevitable inability to predict the future with certainty – all people are physically unique and will react slightly differently to medicines, anaesthetic, surgery and no heart problem is exactly the same as another. Our inability to predict precisely is also partly because there are factors that we suspect may influence the outcome but cannot be included in the statistical method either because these factors are difficult to define or no routine data on them is collected. Together, we call these all “chance factors”."}]}
           ])
;;;
  ;; These theme colours are selectable in the footer (at least till we decide on one)
  ;;
  ;; keep :low and :high invisible - anything else looks wrong.
;;;
(def colour-map-options
  [;; theme 0
   {:low "rgba(255,255,255,0)"
    :inner "#fc8d59"
    :outer-low "#efdf11"
    :outer-high "#efdf11"
    :high "rgba(255,255,255,0)"
    :header "#91bfdb"
    :dot "black"
    }
   ;; theme 1
   {:low "rgba(255,255,255,0)"
    :inner "#efdf11"
    :outer-low "#fc8d59"
    :outer-high "#fc8d59"
    :high "rgba(255,255,255,0)"
    :header "#fc8d59"
    :dot "black"}
   ;; theme 2
   {:low "rgba(255,255,255,0)"
    :inner "#7fcdbb"
    :outer-low "#2c7fb8"
    :outer-high "#2c7fb8"
    :high "rgba(255,255,255,0)"
    :header "#2c7fb8"
    :dot "black"}
   ;; theme 3
   {:low "rgba(255,255,255,0)"
    :inner "#3c8fc8"
    :outer-low "#7fcdbb"
    :outer-high "#7fcdbb"
    :high "rgba(255,255,255,0)"
    :header "#3c8fc8"
    :dot "black"}
   ;; theme 4
   {:low "rgba(255,255,255,0)"
    :inner "#8FB4E1"
    :outer-low "#578FD2"
    :outer-high "#578FD2"
    :high "rgba(255,255,255,0)"
    :header "#578FD2"
    :dot "black"}
   ;; theme 5
   {:low "rgba(255,255,255,0)"
    :inner "#578FD2"
    :outer-low "#8FB4E1"
    :outer-high "#8FB4E1"
    :high "rgba(255,255,255,0)"
    :header "#578FD2"
    :dot "black"
    }
   ;; theme 6
   {:low "rgba(255,255,255,0)"
    :inner "#fc8d59"
    :outer-low "#efdf11"
    :outer-high "#92DEDB"
    :high "rgba(255,255,255,0)"
    :header "#91bfdb"
    :dot "black"
   }
   ;; theme 7
   {:low "rgba(255,255,255,0)"
    :inner "#efdf11"
    :outer-low "#fc8d59"
    :outer-high "#7FCDBB"
    :high "rgba(255,255,255,0)"
    :header "#fc8d59"
    :dot "black"}
   ;; theme 8
   {:low "rgba(255,255,255,0)"
    :inner "#7fcdbb"
    :outer-low "#2c7fb8"
    :outer-high "#319470"
    :high "rgba(255,255,255,0)"
    :header "#2c7fb8"
    :dot "black"}
   ;; theme 9ra
   {:low "rgba(255,255,255,0)"
    :inner "#8FB4E1"
    :outer-low "#578FD2"
    :outer-high "#599464"
    :high "rgba(255,255,255,0)"
    :header "#578FD2"
    :dot "black"}
   ;; theme 10
   {:low "rgba(255,255,255,0)"
    :inner "#3c8fc8"
    :outer-low "#7fcdbb"
    :outer-high "#9BE45C"
    :high "rgba(255,255,255,0)"
    :header "#3c8fc8"
    :dot "black"}
   ;; theme 11
   {:low "rgba(255,255,255,0)"
    :inner "#578FD2"
    :outer-low "#8FB4E1"
    :outer-high "#9AE1A7"
    :high "rgba(255,255,255,0)"
    :header "#578FD2"
    :dot "black"
    }
   ;; theme 12
   {:low "#f0f0f0"
    :inner "#566AF9"
    :outer-low "#C9CDFC"
    :outer-high "#C9CDFC"
    :high "#f0f0f0"
    :header "#4F4763"
    :dot "black"
    }
])
