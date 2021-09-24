(ns prais2.components.head
  (:require [rum.core :as rum]))

(rum/defc head [title]
               [:head
                [:meta {:name "description"
                        :content "Make sense of published survival data about children’s heart surgery in the UK and Ireland. We explain how hospitals are monitored, and how to understand whether they are performing as predicted."}]
                [:meta {:charset "utf-8"}]
                [:meta {:name "viewport" :content "width=device-width" :initial-scale "1"}]
                [:meta {:name "apple-mobile-web-app-capable" :content "yes"}]
                [:meta {:http-equiv "X-UA-Compatible" :content "IE-edge"}]
                [:meta {:name "mobile-web-app-capable" :content "yes"}]
                [:title title]
                [:link {:rel "manifest" :href "/assets/manifest.json" :crossorigin "use-credentials"}]
                [:link {:rel "icon" :sizes "192x192" :href "/assets/touch-icon-android.png"}]
                [:link {:rel "apple-touch-icon" :sizes "180x180" :href "/apple-touch-icon.png"}]
                ;[:link {:rel "apple-touch-icon" :sizes "76x76" :href "/assets/touch-icon-ipad.png"}]
                ;[:link {:rel "apple-touch-icon" :sizes "120x120" :href "/assets/touch-icon-iphone-retina.png"}]
                ;[:link {:rel "apple-touch-icon" :sizes "152x152" :href "/assets/touch-icon-ipad-retina.png"}]

                [:script {:src "https://code.jquery.com/jquery-1.11.3.min.js"}]
                [:link {:rel "stylesheet" :href "//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"}]
                [:link {:rel "stylesheet" :href "/css/app.css"}]
                [:script {:src "/js/bootstrap-slider.min.js"}]

                ;; todo no longer exists :()
                ;[:link {:rel "stylesheet" :href "http://openlayers.org/en/v3.0.0/css/ol.css"}]

                ;; remote CDN
                ;[:link {:rel "stylesheet" :href "//vjs.zencdn.org/5.10.2/video-js.css"}]
                ;[:script {:src "//vjs.zencdn.net/5.10.2/video.min.js"}]
                [:script {:src "//vjs.zencdn.net/7.15.4/video.min.js"}]

                ;; local
                ;[:link {:rel "stylesheet" :href "/css/video-js.css"}]
                ;[:script {:src "/js/video.min.js"}]

                ;; fallback
                [:script {:dangerouslySetInnerHTML
                          {:__html "if (!window.videojs)
                          {console.log(\"no video-js-yet\");
                          document.write(unescape(\"%3Cscript src='/js/video.min.js' type='text/javascript' %3E%3C/script%3E\"));}"}}]])


