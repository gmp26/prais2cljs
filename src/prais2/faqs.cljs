(ns ^:figwheel-always prais2.faqs
    (:require [rum.core :as rum]
              [clojure.string :as str]
              [prais2.chrome :as chrome]
              [prais2.content :as content :refer [terminology
                                                  faqs]]))


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
    [:#faqs terminology

     [:h1 (:title faqs)]

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
