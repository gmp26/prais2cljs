(ns ^:figwheel-always prais2.content)

;;;
;; table structure
;;;
(defrecord Header [title sortable shown width height content])

(defrecord Row [h-name h-code h-lat h-lon n-ops n-deaths n-survivors survival-rate outer-low inner-low inner-high outer-high observed])

;;;
;; Table headers with info texts
;;;

(def table1-data
  [(Row. (Header. "Hospital"                    true       true    300   50
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
         )

;;;
;; The results
;;;
   (Row. "Belfast, Royal Victoria Hospital"	                "RVB"	54.594167 -5.953666 204	        2 	202	99.0 	95.1	96.6  100     100.0 nil)
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
  )

(def baseline
  [(Row. "Hospital A"	"A"	204	4	200	98.0	95.1	96.6	100.0	100.0 nil)
   (Row. "Hospital B"	"B"	482	11	471	97.7	94.8	95.9	98.8	99.4  nil)
   (Row. "Hospital C"	"C"	582	14	568	97.6	95.4	96.2	98.8	99.3  nil)
   (Row. "Hospital D"	"D"	678	18	660	97.3	95.1	96.0	98.4	99.0  nil)
   (Row. "Hospital E"	"E"	787	28	759	96.4	95.7	96.3	98.5	99.0  nil)
   (Row. "Hospital F"	"F"	835	22	813	97.4	96.0	96.8	98.7	99.2  nil)
   (Row. "Hospital G"	"G"	890	22	868	97.5	95.5	96.2	98.3	98.8  nil)
   (Row. "Hospital H"	"H"	976	24	952	97.5	96.5	97.1	98.9	99.2  nil)
   (Row. "Hospital I"	"I"	1056	26	1030	97.5	96.3	96.9	98.7	99.1  nil)
   (Row. "Hospital J"	"J"	1107	17	1090	98.5	96.5	97.0	98.7	99.1  nil)
   (Row. "Hospital K"	"K"	1146	31	1115	97.3	95.8	96.4	98.3	98.7  nil)
   (Row. "Hospital L"	"L"	1204	41	1163	96.6	95.6	96.3	98.1	98.6  nil)
   (Row. "Hospital M"	"M"	1481	36	1445	97.6	95.3	95.9	97.7	98.1  nil)
   (Row. "Hospital N"	"N"	1881	38	1843	98.0	96.5	97.0	98.4	98.7  nil)])

(def variation-1
  [(Row. "Hospital A"	"A"     204	4	200	98.04	95.10	96.57	100.00	100.0 nil)
   (Row. "Hospital B"	"B"	482	11	471	97.72	94.81	95.85	98.76	99.38 nil)
   (Row. "Hospital C"	"C"	582	14	568	97.59	95.36	96.22	98.80	99.31 nil)
   (Row. "Hospital D"	"D"	678	18	660	97.35	95.13	96.02	98.38	98.97 nil)
   (Row. "Hospital E"	"E"	787	35	752	95.55	95.68	96.32	98.48	98.98 nil)
   (Row. "Hospital F"	"F"	835	22	813	97.37	96.05	96.77	98.68	99.16 nil)
   (Row. "Hospital G"	"G"	890	22	868	97.53	95.51	96.18	98.31	98.76 nil)
   (Row. "Hospital H"	"H"	976	24	952	97.54	96.52	97.13	98.87	99.18 nil)
   (Row. "Hospital I"	"I"	1056	26	1030	97.54	96.31	96.88	98.67	99.05 nil)
   (Row. "Hospital J"	"J"	1107	17	1090	98.46	96.48	97.02	98.74	99.10 nil)
   (Row. "Hospital K"	"K"	1146	31	1115	97.29	95.81	96.42	98.25	98.69 nil)
   (Row. "Hospital L"	"L"	1204	41	1163	96.59	95.60	96.26	98.09	98.59 nil)
   (Row. "Hospital M"	"M"	1481	36	1445	97.57	95.34	95.88	97.70	98.11 nil)
   (Row. "Hospital N"	"N"	1881	38	1843	97.98	96.54	97.02	98.35	98.67 nil)])

(def variation-2a
  [(Row. "Hospital A"	"A"     204	3	201	98.5	95.1	96.6	100.0	100.0 nil)
   (Row. "Hospital B"	"B"	482	11	471	97.7	94.8	95.9	98.8	99.4  nil)
   (Row. "Hospital C"	"C"	582	14	568	97.6	95.4	96.2	98.8	99.3  nil)
   (Row. "Hospital D"	"D"	678	18	660	97.3	95.1	96.0	98.4	99.0  nil)
   (Row. "Hospital E"	"E"	787	28	759	96.4	95.7	96.3	98.5	99.0  nil)
   (Row. "Hospital F"	"F"	835	17	818	98.0	96.0	96.8	98.7	99.2  nil)
   (Row. "Hospital G"	"G"	890	22	868	97.5	95.5	96.2	98.3	98.8  nil)
   (Row. "Hospital H"	"H"	976	19	957	98.1	96.5	97.1	98.9	99.2  nil)
   (Row. "Hospital I"	"I"	1056	20	1036	98.1	96.3	96.9	98.7	99.1  nil)
   (Row. "Hospital J"	"J"	1107	17	1090	98.5	96.5	97.0	98.7	99.1  nil)
   (Row. "Hospital K"	"K"	1146	24	1122	97.9	95.8	96.4	98.3	98.7  nil)
   (Row. "Hospital L"	"L"	1204	34	1170	97.2	95.6	96.3	98.1	98.6  nil)
   (Row. "Hospital M"	"M"	1481	36	1445	97.6	95.3	95.9	97.7	98.1  nil)
   (Row. "Hospital N"	"N"	1881	38	1843	98.0	96.5	97.0	98.4	98.7  nil)])

(def variation-2b
  [(Row. "Hospital A"	"A"     204     3       201     98.5   95.1   96.6   100.0  100.0 nil)
   (Row. "Hospital B"	"B"	482     8       474     98.3   94.8   95.9   98.8   99.4  nil)
   (Row. "Hospital C"	"C"	582     11      571     98.1   95.4   96.2   98.8   99.3  nil)
   (Row. "Hospital D"	"D"	678     15      663     97.8   95.1   96.0   98.4   99.0  nil)
   (Row. "Hospital E"	"E"	787     28      759     96.4   95.7   96.3   98.5   99.0  nil)
   (Row. "Hospital F"	"F"	835     17      818     98.0   96.0   96.8   98.7   99.2  nil)
   (Row. "Hospital G"	"G"	890     17      873     98.1   95.5   96.2   98.3   98.8  nil)
   (Row. "Hospital H"	"H"	976     19      957     98.1   96.5   97.1   98.9   99.2  nil)
   (Row. "Hospital I"	"I"	1056    20      1036    98.1   96.3   96.9   98.7   99.1  nil)
   (Row. "Hospital J"	"J"	1107    10      1097    99.1   96.5   97.0   98.7   99.1  nil)
   (Row. "Hospital K"	"K"	1146    24      1122    97.9   95.8   96.4   98.3   98.7  nil)
   (Row. "Hospital L"	"L"	1204    34      1170    97.2   95.6   96.3   98.1   98.6  nil)
   (Row. "Hospital M"	"M"	1481    27      1454    98.2   95.3   95.9   97.7   98.1  nil)
   (Row. "Hospital N"	"N"	1881    27      1854    98.6   96.5   97.0   98.4   98.7  nil)])

(def variation-3
  [(Row. "Hospital A"	"A"     204	4	200	98.0	95.1	96.6	100.0	100.0 nil)
   (Row. "Hospital B"	"B"	482	11	471	97.7	94.8	95.9	98.8	99.4  nil)
   (Row. "Hospital C"	"C"	582	14	568	97.6	95.4	96.2	98.8	99.3  nil)
   (Row. "Hospital D"	"D"	678	18	660	97.3	95.1	96.0	98.4	99.0  nil)
   (Row. "Hospital E"	"E"	787	28	759	96.4	95.7	96.3	98.5	99.0  nil)
   (Row. "Hospital F"	"F"	835	22	813	97.4	96.0	96.8	98.7	99.2  nil)
   (Row. "Hospital G"	"G"	890	22	868	97.5	95.5	96.2	98.3	98.8  nil)
   (Row. "Hospital H"	"H"	976	24	952	97.5	96.5	97.1	98.9	99.2  nil)
   (Row. "Hospital I"	"I"	1056	26	1030	97.5	96.3	96.9	98.7	99.1  nil)
   (Row. "Hospital J"	"J"	1107	11	1096	99.0	96.5	97.0	98.7	99.1  nil)
   (Row. "Hospital K"	"K"	1146	31	1115	97.3	95.8	96.4	98.3	98.7  nil)
   (Row. "Hospital L"	"L"	1204	41	1163	96.6	95.6	96.3	98.1	98.6  nil)
   (Row. "Hospital M"	"M"	1481	36	1445	97.6	95.3	95.9	97.7	98.1  nil)
   (Row. "Hospital N"	"N"	1881	38	1843	98.0	96.5	97.0	98.4	98.7  nil)])

(def variation-4
  [(Row. "Hospital A"	"A"     204	4	200	98.0	95.1	96.6	100.0	100.0 nil)
   (Row. "Hospital B"	"B"	482	11	471	97.7	94.8	95.9	98.8	99.4  nil)
   (Row. "Hospital C"	"C"	582	14	568	97.6	95.4	96.2	98.8	99.3  nil)
   (Row. "Hospital D"	"D"	678	18	660	97.3	95.1	96.0	98.4	99.0  nil)
   (Row. "Hospital E"	"E"	787	35	752	95.6	95.7	96.3	98.5	99.0  nil)
   (Row. "Hospital F"	"F"	835	22	813	97.4	96.0	96.8	98.7	99.2  nil)
   (Row. "Hospital G"	"G"	890	22	868	97.5	95.5	96.2	98.3	98.8  nil)
   (Row. "Hospital H"	"H"	976	24	952	97.5	96.5	97.1	98.9	99.2  nil)
   (Row. "Hospital I"	"I"	1056	26	1030	97.5	96.3	96.9	98.7	99.1  nil)
   (Row. "Hospital J"	"J"	1107	13	1094	98.8	96.5	97.0	98.7	99.1  nil)
   (Row. "Hospital K"	"K"	1146	31	1115	97.3	95.8	96.4	98.3	98.7  nil)
   (Row. "Hospital L"	"L"	1204	47	1157	96.1	95.6	96.3	98.1	98.6  nil)
   (Row. "Hospital M"	"M"	1481	27	1454	98.2	95.3	95.9	97.7	98.1  nil)
   (Row. "Hospital N"	"N"	1881	38	1843	98.0	96.5	97.0	98.4	98.7  nil)])

(def variation-5
  [(Row. "Hospital A"	"A"     200	6	194	97.0	95.0	96.5	100.0	100.0 nil)
   (Row. "Hospital B"	"B"	482	11	471	97.7	94.8	95.9	98.8	99.4  nil)
   (Row. "Hospital C"	"C"	582	14	568	97.6	95.4	96.2	98.8	99.3  nil)
   (Row. "Hospital D"	"D"	678	18	660	97.3	95.1	96.0	98.4	99.0  nil)
   (Row. "Hospital E"	"E"	787	28	759	96.4	95.7	96.3	98.5	99.0  nil)
   (Row. "Hospital F"	"F"	835	22	813	97.4	96.0	96.8	98.7	99.2  nil)
   (Row. "Hospital G"	"G"	890	22	868	97.5	95.5	96.2	98.3	98.8  nil)
   (Row. "Hospital H"	"H"	976	24	952	97.5	96.5	97.1	98.9	99.2  nil)
   (Row. "Hospital I"	"I"	1056	26	1030	97.5	96.3	96.9	98.7	99.1  nil)
   (Row. "Hospital J"	"J"	1107	17	1090	98.5	96.5	97.0	98.7	99.1  nil)
   (Row. "Hospital K"	"K"	1146	31	1115	97.3	95.8	96.4	98.3	98.7  nil)
   (Row. "Hospital L"	"L"	1204	41	1163	96.6	95.6	96.3	98.1	98.6  nil)
   (Row. "Hospital M"	"M"	1481	36	1445	97.6	95.3	95.9	97.7	98.1  nil)
   (Row. "Hospital N"	"N"	1881	67	1814	96.4	96.5	97.0	98.4	98.7  nil)])

(defn index-by
  "create an index on a table"
  [table key-fn]
    (into {} (map (juxt key-fn identity) table)))

;;;
;; hospital results  indexed by by hospital code
;;;
(def rows-by-code (index-by table1-data #(keyword (:h-code %))))

;;;
;; Comment on the meaning of each range. These texts appear in bar-chart tooltips
;;;

(def bar-comments
  {:inner "A dot in this area means that there is no evidence that the hospital’s survival rate is meaningfully different from what is predicted"
   :outer-high "A dot in this area means that there is some evidence that chances of survival in the hospital were higher than predicted [add link]"
   :outer-low "A dot in this area means that there is some evidence that chances of survival in the hospital were lower than predicted. [add link]"
   :low "A dot to the left of the bands means that there is strong evidence that chances of survival in the hospital were lower than predicted. [add link]"
   :high "A dot to the right of the bands means that there is strong evidence that chances of survival in the hospital were higher than predicted. [add link]"
   })

;;;
;; Comment on the meaning of the dot when it appears in the given range.
;; These texts appear in a concluding remark in each hospital's popup.
;;;

(def dot-comments
  {:inner "There is no evidence that the hospital’s survival rate is meaningfully different from what is predicted"
   :outer-high "There is some evidence that chances of survival in the hospital were higher than predicted [add link]"
   :outer-low "There is some evidence that chances of survival in the hospital were lower than predicted. [add link]"
   :low "There is strong evidence that chances of survival in the hospital were lower than predicted. [add link]"
   :high "There is strong evidence that chances of survival in the hospital were higher than predicted. [add link]"
   })

(def terminology
  ;;
  ;; Appears at the top of the FAQs page in v0.5
  ;;
  [:.well.faqs
      [:h3 "Terminology"]
      [:dl
       [:dt "Survival rate"]
       [:dd "The percentage of operations where the child survived at least 30 days after their operation."]]
      [:dt "Chance factors"]
      [:dd "It is impossible to predict precisely what is going to happen in an individual operation. This is partly due to the inevitable inability to predict the future with certainty – all people are physically unique and will react slightly differently to medicines, anaesthetic, surgery and no heart problem is exactly the same as another. Our inability to predict precisely is also partly because there are factors that we suspect may influence the outcome but cannot be included in the statistical method either because these factors are difficult to define or no routine data on them is collected. Together, we call these all “chance factors”."]])

(def faqs
  {:title "Understanding the Data"
   :faq1 {:title "Why do some children need heart surgery?"
          :body [:div
                 [:p
                  "Each year in the UK, about 7000 babies are born with a heart defect (called congenital heart disease). Congenital heart disease covers a wide range of problems from the relatively minor (such as a small hole in the heart) to more severe conditions where a child needs specialist hospital care. About half of all children born with a heart defect will need heart surgery at some stage in their childhood. Children can also develop problems with their heart as they grow up (for instance, through an infection) and also require hospital care (called acquired heart disease)."
                  ]
                 ]
          }

   :faq2 {:title "Why are survival rates monitored and published?"
          :body [:div
                 [:p
                  "In the 1990s, there were found to be problems with the standard of care for children having heart surgery at the Bristol Royal Infirmary with the proportion of children who died after surgery at Bristol being much higher than in other UK hospitals. The formal inquiry into the what happened ("
                  [:a
                   {:href "http://webarchive.nationalarchives.gov.uk/20090811143745/http:/www.bristol-inquiry.org.uk/final_report/the_report.pdf"}
                   "The Bristol Inquiry 2001"]
                  ") led to a number of changes, including a new compulsory national reporting system so that the proportion of children surviving to 30 days after surgery for all hospitals were published every year. Results that appear unusual compared to the rest of the UK are then checked further by the national audit body (NICOR)."]
                 [:p
                  "Until 2013, NICOR only published survival rates for certain types of procedure because there was not a good way of putting overall survival rates into context (see above). But recent "
                  [:a
                   {:href "https://www.ucl.ac.uk/operational-research/AnalysisTools/PRAiS"}
                   "research "]
                  "has made this possible, and since 2013 NICOR has been publishing overall survival rates along with the “predicted range” for survival using the statistical model (see above). The calculation of the predicted range uses the same statistical method for all hospitals and is calculated without knowing what the survival rate at a hospital actually was."]
                 [:p
                  "The UK now has one of the strongest monitoring programmes in the world. Also,since reporting started, "
                  [:a
                   {:href "http://www.bbc.co.uk/news/health-32162803"}
                   "survival rates have been improving"]
                  " and now "
                  [:strong
                   "over"]
                  [:strong
                   "97% of children survive to at least one month after surgery"]
                  "."]]
          }

   :faq3 {:title "Where is this data from?"
          :body [:div
                 [:p
                  [:a
                   {:href "http://www.ucl.ac.uk/nicorum/patients"}
                   "NICOR "]
                  "(The National Institute for Cardiovascular Outcomes Research) collects data and produces analysis to enable hospitals and healthcare improvement bodies to monitor and improve the quality of care and outcomes of children who need heart surgery. Data on every surgery or intervention performed on a child for heart problems is submitted to NICOR every 3 months, and each hospital undergoes independent checks of the quality of their submitted data."]
                 [:p
                  "NICOR tracks the survival of these children by linking to the national register of deaths using NHS number and also from hospital records. Each year, NICOR publishes a report of survival over the previous 3 years for each hospital in the UK and Ireland. It reports the proportion of children surviving for about 40 common surgical procedures and, since 2013, also overall survival for each hospital."]
                 [:p
                  "If a hospital’s survival outcomes are below a certain threshold, NICOR and the hospital together examine the data and the individual cases to understand whether any further action needs to be taken. In extreme cases, a hospital might stop doing surgery while action is taken to improve the service. You can read more this process on "
                  [:a
                   {:href "https://nicor4.nicor.org.uk/CHD/an_paeds.nsf/vwContent/Information%20for%20Patients?Opendocument"}
                   "NICOR’s patient information pages"]
                  " and in our FAQ section. In this website, we explain how survival statistics are used to support this decision making."]]
          }

   :faq4 {:title "Why is a different survival range predicted for each hospital?"
          :body [:div
                 [:p
                  "The outcomes of surgery can vary from one hospital to another for a number of reasons. One important reason is chance factors that affect outcomes that have nothing to do with the standard of care that is offered by a hospital and cause a hospital to have more or fewer survivors than predicted from the statistical method. This does NOT mean that we have observed a genuine difference. For example, we might observe that Hospital A has more survivors than predicted this year. If this is due to chance factors, then, next year, it is just as likely that A has fewer survivors than predicted."
                  [:p
                   "If a hospital’s results are inside its range then this means that the actual survival is in line with what is predicted, given the complexity and number of surgeries that the hospital performed in that time period. Comparing only to each hospital’s predicted range helps to ensure that we do not draw unjustified conclusions about small differences between observe and predicted survival or between one hospital’s survival rate and another hospital’s survival rate."]]]
          }

   :faq5 {:title "Why do the hospitals that do more operations have narrower ranges?"
          :body [:div
                 [:p
                  "If a hospital does not carry out many operations, then chance factors can have a large impact on their overall survival rate, and so we need to allow more leeway between observed and predicted survival in order to rule out the influence of chance factors. The ranges get narrower as the hospitals do more operations."]]
          }

   :faq6 {:title "What does it mean if a hospital falls"
          :body [:div
                 [:p
                  "This is a difficult question and so the answer is a bit long!"]
                 [:p
                  "Firstly, the size of the range and the position of each hospital’s dot depends on assuming that the statistical method and the data used to apply it are both perfect. They are in fact not perfect (but as good as we can currently get them) and so, in a way, the predicted range is just our best estimate of where each hospital’s survival rate would be."]
                 [:p
                  "So, a single hospital falling outside its range is “unexpected” and the national audit body want to understand what has happened. However, a hospital can still fall outside the white area just through chance factors (see Q1 above)."]
                 [:p
                  "If we were looking only at one hospital, there is a 5% (1 in 20) probability that it will fall out of its range just by chance (with a 1 in 40 probability of being on a particular side)."]
                 [:p
                  "However, if we are looking at all 14 hospitals at once there’s actually a 50% probability (10 in 20) that at least one hospital will fall outside its range just by chance! This is similar to the difference between flipping one coin and flipping many: if I only flip one coin there is a 50% probability that I’ll get one head whereas if I flipped, say, the four coins in a row the probability of me getting at least one head in the four throws goes up to 94%."]
                 [:p
                  "So, on average, we’d anticipate half of NICOR’s annual reports to have at least one centre outside its range, either above or below, by chance alone."]
                 [:p
                  "Considering now the “extended predicted range”, if we were looking only at one hospital, there is a 1 in 500 probability that it will fall in the dark area just by chance (with a 1 in 1000 probability of being in the dark grey area and a 1 in 1000 probability of being in the dark blue area). If we are looking at all 14 hospitals at once there’s still a low probability (1 in 30) that at least one hospital will fall in the dark area just by chance. This is why a hospital’s observed survival rate falling outside the extended predicted range is considered strong evidence that the chances of a patient surviving at that hospital are different to what is predicted."]
                 [:p
                  "We do want to know whether there could be a reason for a hospital to have fallen out of its range. One reason could be that the data submitted is of poor quality. The first step undertaken by NICOR is to check whether this is the case and published results have been through a quality control process with the hospital in question to ensure, as far as possible, that this is not the case. A further reason may be that some of the patients are unusual with more complex or rarer health problems, and that are not well accounted for by the statistical model. It could also just be due to chance factors. The final reason NICOR considers is that there is a potential problem in the pathway of care and it is important to either rule this out or start to improve care if the national audit body decides that this is the reason. This is why, particularly "
                  [:strong
                   "when a hospital falls outside its range"]
                  ", the hospital and the national audit body examine the data and their clinical processes in more detail to try see if there’s anything to worry about or if there’s something the other hospitals can learn."]
                 [:p
                  "The safety or otherwise of a hospital "
                  [:strong
                   "cannot"]
                  " be determined from survival data alone. If a hospital actual survival is below the predicted range, the "
                  [:a
                   {:href "https://www.ucl.ac.uk/nicor/audits/congenital/governance"}
                   "National Congenital Heart Disease Audit Steering Committee "]
                  " is notified. The Committee in turn notifies the Medical Director and the lead doctor for congenital heart disease at that hospital and a detailed examination of the hospital’s results takes place. There are established and "
                  [:a
                   {:href "https://www.gov.uk/government/publications/detection-and-management-of-outliers-guidance-prepared-by-national-clinical-audit-advisory-group"}
                   "published procedures"]
                  " involving the Royal College of Surgeons and/or the Care Quality Commission which can be put into action if the detailed assessment raises concerns about care."]
                 [:p
                  "The report on individual instances like this would then be published online by the national audit body, alongside the relevant NHCDA Annual Report. "
                  [:strong
                   "[link to a hospital-specific report if relevant]"]
                  " . Such reports for previous years can be found on the NICOR publications website."]]
          }

   :faq7 {:title "Which hospital should I go to?"
          :body [:div
                 [:p
                  "You can use the national audit data to see how the different hospitals are doing compared to what is predicted from the statistical model for a particular time period. You can also use the national audit website to explore how many operations of each type a hospital does and survival outcomes for each of these. However, this cannot, in itself, tell you which hospital you should go to and does not provide proof that one hospital is “better” than any other, and remember that outcomes will vary from year to year through chance factors."]
                 [:p
                  "When considering which hospital, there are many factors to take into account, including how well the clinical team know your child and his or her medical history, any particular medical issues that your child has (for instance, some hospitals specialise in treating children with a particular problem) and how far the hospital is from your home."]
                 [:p
                  "You should discuss your child’s care with their specialist cardiologist to determine what the best treatment option is for your child."]]
          }

   :faq8 {:title "Can the published data tell me about the risks for my child?"
          :body [:div
                 [:p
                  "No, the published data cannot tell you about the risk for your child specifically – this will depend on other factors that are not necessarily captured in the national data. Your child’s specialist cardiologist and/or cardiac surgeon will be able to discuss this with you."]]
          }

   :faq9 {:title "How reliable are the data?"
          :body [:div
                 [:p
                  "The data come from the National Institute for Cardiovascular Outcomes Research (UCL NICOR) which collects national data for the National Heart Disease Audits. All hospitals performing heart surgery in children have to submit their data in a standard format to NICOR. All hospitals are independently audited each year as part of a data validation process (to check the quality of the data submitted)."]
                 [:p
                  "So, the data are of high quality. While no large dataset is perfect (e.g., it is inevitable that a few records will not be 100% accurate), this dataset is among the most detailed and complete in the world for children’s heart surgery."]]
          }

   :faq10 {:title "What are the limitations of the data?"
           :body [:div
                  [:p
                   "Apart from occasional inaccuracies in the data, there are other limits to what the data can tell us about surgery outcomes. There are risk factors not routinely collected (for instance the size or relative severity of a child’s heart defect) which means these cannot be accounted for in our statistical prediction method. Different hospitals might also record the same heart condition slightly differently and this might affect the survival percentage predicted for these hospitals."]
                  [:p
                   "These data are also snapshots in time of what happened at each specialist hospital. A number of particularly challenging patients one year (in ways not accounted for in our prediction) or a run of chance factors could cause a very good hospital to have worse outcomes than predicted. So we need to be careful about reading too much into any single time period."]]
           }

   :faq11 {:title "What about survival after 30 days? And quality of life?"
           :body [:div
                  [:p
                   "This data set only looks at what happens shortly after surgery. These data cannot tell us about longer term (e.g. 90 day, 1 year or 5 year) survival, or other outcomes such as post-surgery complication rates or the impact of surgery on the child or their family. There is a lot of "
                   [:a
                    {:href "http://www.gosh.nhs.uk/medical-information/clinical-specialties/cardiothoracic-surgery-information-parents-and-visitors/research/complications-after-heart-surgery-children"}
                    "active research"]
                   " going right now (due to finish around 2018) investigating how to capture, interpret and publish longer term survival and complication rates so hopefully this information will be available in the next 5 years."]
                  [:p
                   "Neither can it tell us about how or why a hospital achieved the recorded results, so it cannot, by itself, tell us whether one hospital offers better or worse quality care than any other. These data cannot tell you what the results are likely to be next year. It also cannot tell us anything about what happens to children who never get operated on for whatever reason, since data on these children is not currently submitted to national audit."]]
           }
   :faq12 {:title "What is the risk adjustment method used by National Audit?"
           :body [:div
                  [:p
                   "The National Audit body uses a risk adjustment method developed by researchers at Great Ormond Street Hospital and University College London called PRAiS (Partial Risk Adjustment in Surgery). The underlying methodology of this method is published in the "
                   [:a
                    {:href "https://www.ucl.ac.uk/operational-research/AnalysisTools/PRAiS"}
                    "academic literature"]
                   " if you are interested in learning more details."]]
           }
   :faq13 {:title "Are there any limitations to risk adjustment?"
           :body [:div
                  [:p
                   "Yes there are. Risk adjustment allows for fairer comparisons to be made between hospitals but it still cannot make it completely fair. It is always ‘partial’ and there will always be important risk factors that are not routinely recorded and so cannot be captured by risk adjustment methods. Risk adjustment methods are developed on historical data (typically at least a year out of date) and cannot necessarily adjust or account for future changes to the way data is collected (for instance more complete data) or new methods of surgical or medical management."]]
           }}
 )




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
   {:low "rgba(255,255,255,0)"
    :inner "#fc8d59"
    :outer-low "#efdf11"
    :outer-high "#92DEDB"
    :high "rgba(255,255,255,0)"
    :header "#91bfdb"
    :dot "black"
   }
   ;; theme 6
   {:low "rgba(255,255,255,0)"
    :inner "#efdf11"
    :outer-low "#fc8d59"
    :outer-high "#7FCDBB"
    :high "rgba(255,255,255,0)"
    :header "#fc8d59"
    :dot "black"}
   ;; theme 7
   {:low "rgba(255,255,255,0)"
    :inner "#7fcdbb"
    :outer-low "#2c7fb8"
    :outer-high "#319470"
    :high "rgba(255,255,255,0)"
    :header "#2c7fb8"
    :dot "black"}
   ;; theme 8
   {:low "rgba(255,255,255,0)"
    :inner "#8FB4E1"
    :outer-low "#578FD2"
    :outer-high "#599464"
    :high "rgba(255,255,255,0)"
    :header "#578FD2"
    :dot "black"}
   ;; theme 3
   {:low "rgba(255,255,255,0)"
    :inner "#3c8fc8"
    :outer-low "#7fcdbb"
    :outer-high "#9BE45C"
    :high "rgba(255,255,255,0)"
    :header "#3c8fc8"
    :dot "black"}
      ;; theme 5
   {:low "rgba(255,255,255,0)"
    :inner "#578FD2"
    :outer-low "#8FB4E1"
    :outer-high "#9AE1A7"
    :high "rgba(255,255,255,0)"
    :header "#578FD2"
    :dot "black"
    }
])
