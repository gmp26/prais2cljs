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
     (defn home-page [build-name]
       (str "<!doctype html>"
            (rum.core/render-static-markup (head "Child heart surgery info"))
            (rum.core/render-static-markup (body static-home build-name))))

     (defn intro-page [build-name]
       (str "<!doctype html>"
            (rum.core/render-static-markup (head "Child heart surgery info: what, why how"))
            (rum.core/render-static-markup (body static-intro build-name))))

     (defn faq-page [faq-ref build-name]
       (str "<!doctype html>"
            (rum.core/render-static-markup (head "Child heart surgery info: everything else"))
            (rum.core/render-static-markup (body #(static-faqs faq-ref) build-name))))

     (defn write-html [path html]
       (println " Writing " path)
       (spit path html))

     (defn all-faq-refs [build-name]
       ;(println "This is weird")
       (doseq [section (range (count faq-sections))]
         (doseq [ix (range (count (:faqs (faq-sections section))))]
           (write-html (str "target/public/faq-" section "-" ix ".html") (faq-page [section ix] build-name)))))

     (defn -main [argsmap & _]
       (let [build-name (:build-name argsmap)]
         (write-html "target/public/index.html" (home-page build-name))
         (write-html "target/public/intro.html" (intro-page build-name))
         (all-faq-refs build-name)))))

