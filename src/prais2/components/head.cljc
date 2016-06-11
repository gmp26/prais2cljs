(ns prais2.components.head
  (:require [rum.core]))

(rum.core/defc head [title]
               [:head
                [:meta {:charset "utf-8"}]
                [:meta {:name "viewport" :content "width=device-width" :initial-scale "1"}]
                [:meta {:name "apple-mobile-web-app-capable" :content "yes"}]
                [:meta {:http-equiv "X-UA-Compatible" :content "IE-edge"}]
                [:title title]
                [:link {:rel "apple-touch-icon" :href "/assets/touch-icon-iphone.png"}]
                [:link {:rel "apple-touch-icon" :sizes "76x76" :href "/assets/touch-icon-ipad.png"}]
                [:link {:rel "apple-touch-icon" :sizes "120x120" :href "/assets/touch-icon-iphone-retina.png"}]
                [:link {:rel "apple-touch-icon" :sizes "152x152" :href "/assets/touch-icon-ipad-retina.png"}]

                [:script {:src "https://code.jquery.com/jquery-1.11.3.min.js"}]
                [:link {:rel "stylesheet" :href "//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"}]
                [:link {:rel "stylesheet" :href "/css/app.css"}]
                [:script {:src "/js/bootstrap-slider.min.js"}]
                [:link {:rel "stylesheet" :href "http://openlayers.org/en/v3.0.0/css/ol.css"}]

                [:link {:rel "stylesheet" :href "//vjs.zencdn.net/5.10.2/video-js.css"}]
                ;[:script {:src "http://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"}]
                [:script {:src "//vjs.zencdn.net/5.10.2/video.js"}]
                ])

