#!/bin/bash

set -e
echo "Publishing to the live server"
read -p "Are you sure? (y/n) " -n 1 -r
echo ""
TARGET='206.189.125.146:/var/www/childrensheartsurgery.info/'
LOCAL_DEV='resources/public/'
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "===============Building files============="
    lein clean
    lein home     # creates static home page for fast load
    lein cljsbuild once min
    mkdir -p resources/public/css
    sass sass/app.scss resources/public/css/app.css
    gulp
    echo "===============rsync-ing files==================="
    rsync -av --del --no-perms --no-owner --no-group $LOCAL_DEV $USER@$TARGET
    echo "================================="
    echo "Uploaded to " $TARGET
    echo "================================="
fi
