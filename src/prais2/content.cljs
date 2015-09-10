(ns ^:figwheel-always prais2.content)

(defrecord Header [title sortable shown])

(defrecord Row [h-name h-code n-ops n-deaths n-survivors survival-rate low-prediction high-prediction])

(def table1-data
  [(Row. (Header. "Hospital"              true       true)
         (Header. "Hospital Code"         true       true)
         (Header. "Number of Operations"  true       true)
         (Header. "Number of Deaths"      true       true)
         (Header. "Number of Survivors"   true       true)
         (Header. "Survival Rate (%)"     false      true)
         (Header. "Inner Low"             false      false)
         (Header. "Inner High"            false      false))

   (Row. "Belfast, Royal Victoria Hospital"	                "RVB"	204	2	202	99.0	96.6  100)
   (Row. "London, Harley Street Clinic"	                        "HSC"	482	7	475	98.5	95.9  98.8)
   (Row. "Leicester, Glenfield Hospital"	                "GRL"	582	11	571	98.1	96.2  98.8)
   (Row. "Newcastle, Freeman Hospital"	                        "FRE"	678	15	663	97.8	96    98.4)
   (Row. "Glasgow, Royal Hospital for Children"	                "RHS"	787	28	759	96.4	96.3  98.5)
   (Row. "Bristol Royal Hospital for Children"	                "BRC"	835	19	816	97.7	96.8  98.7)
   (Row. "Southampton, Wessex Cardiothoracic Centre"	        "SGH"	890	17	873	98.1	96.2  98.3)
   (Row.  "Leeds General Infirmary"	                        "LGI"	976	23	953	97.6	97.1  98.9)
   (Row.  "Dublin, Our Lady's Children's Hospital"	        "OLS"	1056	23	1033	97.8	96.9  98.7)
   (Row.  "London, Royal Brompton Hospital"	                "NHB"	1107	12	1095	98.9	97    98.7)
   (Row.  "Liverpool, Alder Hey Hospital"	                "ACH"	1146	28	1118	97.6	96.4  98.3)
   (Row. "London, Evelina London Children's Hospital"	        "GUY"	1204	39	1165	96.8	96.3  98.1)
   (Row.  "Birmingham Children’s Hospital"	                "BCH"	1481	30	1451	98.0	95.9  97.7)
   (Row. "London, Great Ormond Street Hospital for Children"	"GOS"	1881	30	1851	98.4    97    98.4)]
  )
