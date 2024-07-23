#!/bin/sh
if [ -e ".env" ] ; then
    sed -i '' "s/APP_VERSION=.*/APP_VERSION=$(git rev-parse --short HEAD)/" .env
else
  echo "env file not found"
fi
