(ns ^:figwheel-always prais2.faqs
    (:require [rum.core :as rum]
              [clojure.string :as str]
              [prais2.chrome :as chrome]
              [prais2.content :as content :refer [faqs]]))


(defn faq-content [faq-key]
  (let [faq (faq-key faqs)
        faq-name (name faq-key)
        faq-number (str/replace faq-name #"\D" "")]
    [:.no-break {:id faq-name}
     [:h2
      (str "Q" faq-number ": " (:title faq))]
     [:.well
      (:body faq)
      ]]))

(rum/defc faq-item [faq]
  (faq-content faq)
)


(rum/defc render-faqs [section-id]
  [:.container
   [:.row
    [:#faqs

     [:h1
       "Generic FAQs about the chart"]

     [:.well.faqs
      [:h3 "Terminology"]
      [:dl
       [:dt "Survival rate"]
       [:dd "The percentage of operations where the child survived at least 30 days after their operation."]]
      [:dt "Chance factors"]
      [:dd "It is impossible to predict precisely what is going to happen in an individual operation. This is partly due to the inevitable inability to predict the future with certainty – all people are physically unique and will react slightly differently to medicines, anaesthetic, surgery and no heart problem is exactly the same as another. Our inability to predict precisely is also partly because there are factors that we suspect may influence the outcome but cannot be included in the statistical method either because these factors are difficult to define or no routine data on them is collected. Together, we call these all “chance factors”."]]

     [:div
      [:h2#section]
      (faq-content :faq1)
      (faq-content :faq2)
      (faq-content :faq3)
      (faq-content :faq4)
      (faq-content :faq5)
      (faq-content :faq6)
      (faq-content :faq7)
      (faq-content :faq8)
      (faq-content :faq9)
      (faq-content :faq10)
      (faq-content :faq11)
      (faq-content :faq12)
      (faq-content :faq13)

      ]]]])
