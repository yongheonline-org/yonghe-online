#!/usr/bin/env bash

set -xueo pipefail

# Check for Homebrew,
# Install if we don't have it
if test ! $(which brew); then
  echo -e "\n Installing homebrew..."
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi

# install docker if needed for waca dev env
if test ! $(which docker); then
  echo "Installing homebrew..."
  brew cask install --appdir="/Applications" docker
fi