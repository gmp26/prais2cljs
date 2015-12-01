(ns ^:figwheel-always prais2.routes
    (:require [secretary.core :as secretary :refer-macros [defroute]]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [cljs.core.async :refer [put!]]
              [prais2.core :as core]
              )
    (:import goog.History))


(enable-console-print!)

;;;
;; basic hashbang routing to configure some options
;;;
(secretary/set-config! :prefix "#")


;;;
;; client-side routes
;;;
(defroute faqs "/faqs" []
  (put! core/event-bus [:faqs :top])
  #_(swap! core/app #(assoc % :page :faqs :section :top)))

(defroute faq "/faq/:id" [id]
  (put! core/event-bus [:faqs id])
  (prn "faq :id match")
  #_(swap! core/app #(assoc % :page :faq :section id)))

(defroute intros "/intro" []
  (put! core/event-bus [:intro :top])
  #_(swap! core/app #(assoc % :page :intro :section :top)))

(defroute intro "/intro/:id" [id]
  (put! core/event-bus [:intro id])
  (prn "intro :id match")
  #_(swap! core/app #(assoc % :page :intro :section id)))

(defroute datas "/data" []
  (put! core/event-bus [:data :top])
  #_(swap! core/app #(assoc % :page :data :section :top)))

(defroute data "/data/:id" [id]
  (put! core/event-bus [:data id])
  (prn "data :id match")
  #_(swap! core/app #(assoc % :page :data :section id)))

(defroute home "/" []
  (prn "home match")
  #_(swap! core/app #(assoc % :page :intro :section :top)))

(defroute other "*" []
  (prn "* match")
  #_(swap! core/app #(assoc % :page :unknown :section :unknown)))

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
