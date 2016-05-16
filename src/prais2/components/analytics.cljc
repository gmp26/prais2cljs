(ns prais2.components.analytics
  (:require [rum.core :as rum]))

(rum/defc analytics [ua-id]
          [:script {:dangerouslySetInnerHTML {:__html "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n}
)(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n
ga('create', '" ua-id "', 'auto');\nga('send', 'pageview');\n"}}])
