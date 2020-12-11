#!/bin/bash

#cd ~/clojure/prais2
lein clean
lein home     # creates static home page for fast load
lein cljsbuild once min
mkdir -p resources/public/css
sass sass/app.scss resources/public/css/app.css
#gulp

#rsync -av resources/public/ gmp26@webuu1.maths.cam.ac.uk:/www/drupal/sites/understandinguncertainty.org/files/animations/standalone/PRAIS2
#rsync -av resources/public/ gmp26@webuu2.maths.cam.ac.uk:/var/www/childrensheartsurgery.info/html/
