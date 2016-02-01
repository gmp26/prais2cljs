#!/bin/bash

cd ~/clojure/prais2
lein clean
lein cljsbuild once min
rsync -av resources/public/ gmp26@pan.maths.org:/www/cms/drupal/sites/understandinguncertainty.org/files/animations/standalone/PRAIS2
rsync -av PRAIS2s0-1/ gmp26@pan.maths.org:/www/cms/drupal/sites/understandinguncertainty.org/files/animations/standalone/PRAIS2s0-1
