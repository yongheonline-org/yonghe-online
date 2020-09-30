#!/usr/bin/env bash
set -xueo pipefail
docker ps -a -q -f name=yonghe_online | xargs docker stop | xargs docker rm