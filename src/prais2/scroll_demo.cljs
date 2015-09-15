(ns prais2.scroll-demo
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [rum :as r]
            [cljs.core.async :refer [<!]]
            [goog.events :as events]
            [cljsjs.react :as react]
            [prais2.fps :refer [fps]]
            [prais2.chan :refer [scroll-chan-events scroll-chan-test]]
            [prais2.scroll-engine :refer [animation-container]]))

(def cur-scroll-y (atom 0))
(def prev-scroll-y (atom 0))

(defn listen! []
  (let [chan (scroll-chan-events)]
    (go-loop []
             (let [new-y (<! chan)]
               (reset! prev-scroll-y @cur-scroll-y)
               (reset! cur-scroll-y (max 0 new-y)))
               (recur))))

(r/defc block < r/static [pv cv & {:keys [x y w h direction]}]
  (let [payload [:div {:style {:display :inline-block
                               :box-sizing :border-box
                               :width "100%"
                               :height "100%"
                               :background-color "#A78765"
                               :color :white
                               :padding 10}}]
        left-animation (if (= :left direction) [x 100] [x (+ x w 200)])]
    (animation-container pv cv payload
     {:style {:top y
              :left x
              :width w
              :height h}
      :animations {[0 4000] {:left left-animation
                             :width [w 0]
                             :opacity [1 0]
                             :height [h 0]}}})))

(r/defc page < r/reactive []
  (let [pv @prev-scroll-y
        cv (r/react cur-scroll-y)]
    (listen!)
    [:div
     {:style {:height 6000
              :font-family :sans-serif}}
     [:div {:key :p1
            :style {:position :fixed
                    :z-index 1000
                    :background-color "#989DAF"
                    :color :white
                    :padding 10}}
      "frame rate: " (r/react fps) " y: " cv]
     [:div
      {:key :p2
       :style {:position :fixed
               :top 0
               :left 0
               :width 1000
               :height 600
               :background-color "#E9EBF1"}}]
     [:div
      {:key :p3
       :style {:text-align :center
               :position :fixed
               :top 0
               :left 300
               :width 400
               :height 600
               :font-size 110
               :background-color "#FCC6DB"
               :color :white}}
      "be sure to drink your ovaltine"]
     (for [i (range 3)]
       (let [h 200
             w 200
             y (* i h)
             x 300]
         [:div
          :key i
          (r/with-key (block pv cv :x x :y y :w w :h h :direction :left) [i 1])
          (r/with-key (block pv cv :x (+ 200 x) :y y :w w :h h :direction :right) [i 2])]))
     [:div {:key :p4
            :style {:text-align :center
                    :position :fixed
                    :top 500
                    :left 0
                    :width 1000
                    :z-index 1000
                    :font-size 20}}
      [:p "scroll down to see the message"]]]))

(r/mount (page) (.getElementById js/document "app"))
