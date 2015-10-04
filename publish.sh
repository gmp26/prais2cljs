#!/bin/bash

cd ~/clojure/prais2
lein clean
lein cljsbuild once min
rsync -av resources/public/ gmp26@maths.org:/www/cms/drupal/sites/understandinguncertainty.org/files/animations/PRAIS2v0-4
