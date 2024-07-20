#!/bin/bash

echo "Setting up local environment..."

# Use the node version specified in .nvmrc
source ~/.nvm/nvm.sh  # Adjust the path if your nvm installation is in a different location
nvm use

# Copy the example environment file if it doesn't exist
if [ ! -e ".env" ] ; then
    echo "Copying env..."
    cp .env.example .env
fi

# Create the SSL certificate if it doesn't exist
if [ ! -e "local.bims.dmithamo.dev.pem" ]; then
  echo "Creating SSL certificate..."

  brew install mkcert nss # requires homebrew, and runs in sudo
  mkcert -install
  mkcert local.bims.dmithamo.dev
fi

echo "Local environment setup complete."

npm run update-version
