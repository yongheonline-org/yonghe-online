#!/usr/bin/env bash
set -xueo pipefail

bash ./docker-clean-container.sh
docker image ls -a | grep "maplesyrup/yonghe" | awk '{print $3}' | xargs docker rmi