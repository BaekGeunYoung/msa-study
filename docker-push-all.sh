#!/bin/bash

docker push dvmflstm/config:latest
docker push dvmflstm/gateway:latest
docker push dvmflstm/registry:latest
docker push dvmflstm/auth:latest
docker push dvmflstm/exercise:latest
docker push dvmflstm/diet:latest
docker push dvmflstm/statistics:latest

