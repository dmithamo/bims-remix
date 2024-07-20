#!/bin/bash
echo  "Updating version..."

if [ -e ".env" ] ; then
  version=$(git rev-parse --short HEAD)
  sed -i '' "s/APP_VERSION=.*/APP_VERSION=$version/" .env
  echo "Version updated."
  echo "APP_VERSION=$version"

else
  echo "No .env file found. Please run setup-local.sh first."
fi

