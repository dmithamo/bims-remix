#!/bin/sh
if [ -e ".env" ] ; then
    sed -i '' "s/VITE_APP_VERSION=.*/VITE_APP_VERSION=$(git rev-parse --short HEAD)/" .env
else
  echo "env file not found"
fi
