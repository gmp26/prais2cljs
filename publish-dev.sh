#!/bin/bash

set -e
echo "Publishing to Development server"
TARGET='dev.wintoncentre.uk:/var/www/childrensheartsurgery.dev.wintoncentre.uk/'
LOCAL_DEV='target/public/'
echo "===============Building files============="
bb gen-html #creates the html pages
bb gen      #creates a production build
bb sass     #creates the stylesheet in public/css
echo "===============rsync-ing files==================="
rsync -av --del --no-t --no-perms --no-owner --no-group $LOCAL_DEV $1@$TARGET
echo "================================="
echo "Uploaded to " $TARGET
echo "================================="
