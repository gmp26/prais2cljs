(ns prais2.pages.generator
  #?(:clj
     (:require [rum.core :as rum]
               [prais2.components.head :refer [head]]
               [prais2.components.body :refer [body]]
               [prais2.components.static-home :refer [static-home]]
               [prais2.components.static-intro :refer [static-intro]]
               )))

#?(:clj
   (do

     (def home-page
       (str "<!doctype html>"
            (rum/render-static-markup (head "prais2 home page"))
            (rum/render-static-markup (body static-home))
            ))

     (def intro-page
       (str "<!doctype html>"
            (rum/render-static-markup (head "prais2 home page"))
            (rum/render-static-markup (body static-intro))
            ))

     (defn write-html [path html]
       (println " Writing " path)
       (spit path html))

     (defn -main [& args]
       (write-html "resources/public/index.html" home-page)
       (write-html "resources/public/intro.html" intro-page)
       )

     #_(defn -main [& args]
       (println " Writing \"resources/public/index.html\" ")
       (spit "resources/public/index.html" home-page)
       (spit "resources/public/intro.html" intro-page)
       )))
