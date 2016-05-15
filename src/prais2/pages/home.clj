(ns prais2.pages.home
  (require [rum.core :as rum]
           [prais2.components.head :refer [head]]
           [prais2.components.body :refer [body]]
           [prais2.pages.static-home :refer [static-home]]))

(def page
  (str "<!doctype html>"
       (rum/render-static-markup (head "prais2 home page"))
       (rum/render-static-markup (body))
))

(defn -main [& args]
  (println " Writing \"resources/public/home.html\" ")
  (spit "resources/public/home.html" page)
  )
