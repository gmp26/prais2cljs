(ns prais2.pages.generator
  #?(:clj
     (:require [rum.core :as rum]
               [prais2.content :refer [faq-sections]]
               [prais2.components.head :refer [head]]
               [prais2.components.body :refer [body]]
               [prais2.components.static-home :refer [static-home]]
               [prais2.components.static-intro :refer [static-intro]]
               [prais2.components.static-faqs :refer [static-faqs]]
               )))

#?(:clj
   (do

     (def home-page
       (str "<!doctype html>"
            (rum.core/render-static-markup (head "Child heart surgery info"))
            (rum.core/render-static-markup (body static-home))
            ))

     (def intro-page
       (str "<!doctype html>"
            (rum.core/render-static-markup (head "Child heart surgery info: what, why how"))
            (rum.core/render-static-markup (body static-intro))
            ))

     (defn faq-page [faq-ref]
       (str "<!doctype html>"
            (rum.core/render-static-markup (head "Child heart surgery info: everything else"))
            (rum.core/render-static-markup (body #(static-faqs faq-ref)))
            ))

     (defn write-html [path html]
       (println " Writing " path)
       (spit path html))

     (defn all-faq-refs []
       ;(println "This is weird")
       (doseq [section (range (count faq-sections))]
         (do                                                ;(println "section = " section)
             (doseq [ix (range (count (:faqs (faq-sections section))))]
               (do                                          ;(println "ix = " ix)
                   (write-html (str "resources/public/faq-" section "-" ix ".html") (faq-page [section ix])))))))

     (defn -main [& args]
       (write-html "resources/public/index.html" home-page)
       (write-html "resources/public/intro.html" intro-page)
       (all-faq-refs))))

