#!/bin/bash

# config vars defines LOCAL and REMOTE
. ./config

if npm run build; then
  echo "built the app, deploying...";
fi

if rsync -aP $LOCAL $REMOTE; then
  echo "app deployed to https://meteormicrosever.com";
fi
