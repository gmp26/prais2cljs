(ns ^:figwheel-always prais2.routes
    (:require [secretary.core :as secretary :refer-macros [defroute]]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [prais2.core :as core]
              )
    (:import goog.History))


;;;
;; basic hashbang routing to configure some options
;;;
(secretary/set-config! :prefix "#")


;;;
;; client-side routes
;;;
(defroute faqs "/faqs" []
  (swap! (core/app) #(assoc % :page :faqs :section :top)))

#_(defroute faq "/faq/:id" [id]
    (swap! (core/app) #(assoc % :page :faq :section id)))

(defroute intro "/intro" []
  (swap! (core/app) #(assoc % :page :intro :section :top)))

#_(defroute intro "/intro/:id" [id]
    (swap! (core/app) #(assoc % :page :intro :section id)))

(defroute data "/data" []
  (swap! (core/app) #(assoc % :page :data :section :top)))

#_(defroute data "/data/:id" [id]
    (swap! (core/app) #(assoc % :page :data :section id)))

(defroute home "/" []
  (swap! (core/app) #(assoc % :page :intro :section :top)))

(defroute other "*" []
  (swap! (core/app) #(assoc % :page :unknown :section :unknown)))

;; history configuration.
;;
;; The invisible element "dummy" is needed to make goog.History reloadable by
;; figwheel. Without it we see
;; Failed to execute 'write' on 'Document':
;; It isn't possible to write into a document from an
;; asynchronously-loaded external script unless it is explicitly
;;
;; Note that this history handling must happen after route definitions for it
;; to kick in on initial page load.
;;
(let [h (History. false false "dummy")]
  (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h (.setEnabled true)))
