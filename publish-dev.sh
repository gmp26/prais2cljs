#!/bin/bash

set -e
echo "Publishing to Development server"
TARGET='dev.wintoncentre.uk:/var/www/childrensheartsurgery.dev.wintoncentre.uk/'
LOCAL_DEV='target/public/'
echo "===============Building files============="
# lein clean
bb clean
# lein home     # creates static home page for fast load
bb gen-html
# lein cljsbuild once min
# mkdir -p target/public/css
# sass sass/app.scss target/public/css/app.css
bb sass
# gulp
echo "===============rsync-ing files==================="
rsync -av --del --no-perms --no-owner --no-group $LOCAL_DEV $USER@$TARGET
echo "================================="
echo "Uploaded to " $TARGET
echo "================================="
