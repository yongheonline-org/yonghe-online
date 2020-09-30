#!/usr/bin/env bash
REVERSE='\x1b[7m'
NC='\x1b[0m'
HOST_BIND_PORT=8000
DOCKER_EXPOSE_PORT=8000
IMAGE_NAME=maplesyrup/yonghe
CONTAINER_NAME=yonghe_online
set -xueo pipefail

echo -e "${REVERSE}\nBuild a docker image of Yonghe. The image name will be maplesyrup/yonghe${NC}"
docker build -t ${IMAGE_NAME} .

echo -e "${REVERSE}\nClean a docker container whose name is yonghe_online if it exists${NC}"
bash ./docker-clean-container.sh

echo -e "${REVERSE}\nCreate a docker container instance.
		Tha container name will be yonghe_online, and bind to ${HOST_BIND_PORT} port of your host.
		After the build, you can open http://localhost:${HOST_BIND_PORT} to see the pages.${NC}"
docker run -p ${HOST_BIND_PORT}:${DOCKER_EXPOSE_PORT} -d --name=${CONTAINER_NAME} ${IMAGE_NAME}

echo -e "${REVERSE}\n Run 'docker logs $(docker ps -q -f name=${CONTAINER_NAME})' to see the detail output of Gatsby${NC}"