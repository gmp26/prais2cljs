(ns ^:figwheel-always prais2.content)

;;;
;; table structure
;;;
(defrecord Header [title sortable shown width height content])

(defrecord Row [h-name h-code n-ops n-deaths n-survivors survival-rate outer-low inner-low inner-high outer-high observed])

;;;
;; Table headers with info texts
;;;

(def table1-data
  [(Row. (Header. "Hospital"                    true       true    300   50
                  "The hospital name")
         (Header. "Hospital Code"               false      false    77   50
                  "Hospital code as used by NICOR")
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
   (Row. "Belfast, Royal Victoria Hospital"	                "RVB"	204	2	202	99.0 	95.1	96.6  100     100.0 nil)
   (Row. "London, Harley Street Clinic"	                        "HSC"	482	7	475	98.5	94.8	95.9  98.8    99.4 nil)
   (Row. "Leicester, Glenfield Hospital"	                "GRL"	582	11	571	98.1	95.4	96.2  98.8    99.3 nil)
   (Row. "Newcastle, Freeman Hospital"	                        "FRE"	678	15	663	97.8	95.1	96    98.4    99.0 nil)
   (Row. "Glasgow, Royal Hospital for Children"	                "RHS"	787	28	759	96.4	95.7	96.3  98.5    99.0 nil)
   (Row. "Bristol Royal Hospital for Children"	                "BRC"	835	19	816	97.7	96.0	96.8  98.7    99.2 nil)
   (Row. "Southampton, Wessex Cardiothoracic Centre"	        "SGH"	890	17	873	98.1	95.5	96.2  98.3    98.8 nil)
   (Row.  "Leeds General Infirmary"	                        "LGI"	976	23	953	97.6	96.5	97.1  98.9    99.2 nil)
   (Row.  "Dublin, Our Lady's Children's Hospital"	        "OLS"	1056	23	1033	97.8	96.3	96.9  98.7    99.1 nil)
   (Row.  "London, Royal Brompton Hospital"	                "NHB"	1107	12	1095	98.9	96.5	97    98.7    99.1 nil)
   (Row.  "Liverpool, Alder Hey Hospital"	                "ACH"	1146	28	1118	97.6	95.8	96.4  98.3    98.7 nil)
   (Row. "London, Evelina London Children's Hospital"	        "GUY"	1204	39	1165	96.8	95.6	96.3  98.1    98.6 nil)
   (Row.  "Birmingham Children’s Hospital"	                "BCH"	1481	30	1451	98.0	95.3	95.9  97.7    98.1 nil)
   (Row. "London, Great Ormond Street Hospital for Children"	"GOS"	1881	30	1851	98.4    96.5	97    98.4    98.7 nil)]
  )


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
   ;; theme 2
   {:low "rgba(255,255,255,0)"
    :inner "#efdf11"
    :outer-low "#fc8d59"
    :outer-high "#fc8d59"
    :high "rgba(255,255,255,0)"
    :header "#fc8d59"
    :dot "black"}
   ;; theme 3
   {:low "rgba(255,255,255,0)"
    :inner "#7fcdbb"
    :outer-low "#2c7fb8"
    :outer-high "#2c7fb8"
    :high "rgba(255,255,255,0)"
    :header "#2c7fb8"
    :dot "black"}
   ;; theme 4
   {:low "rgba(255,255,255,0)"
    :inner "#3c8fc8"
    :outer-low "#7fcdbb"
    :outer-high "#7fcdbb"
    :high "rgba(255,255,255,0)"
    :header "#3c8fc8"
    :dot "black"}
   ;; theme 5
   {:low "rgba(255,255,255,0)"
    :inner "#8FB4E1"
    :outer-low "#578FD2"
    :outer-high "#578FD2"
    :high "rgba(255,255,255,0)"
    :header "#578FD2"
    :dot "black"}
   ;; theme 6
   {:low "rgba(255,255,255,0)"
    :inner "#578FD2"
    :outer-low "#8FB4E1"
    :outer-high "#8FB4E1"
    :high "rgba(255,255,255,0)"
    :header "#578FD2"
    :dot "black"
    }])
