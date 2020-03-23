#!/bin/bash

docker image build -t dvmflstm/config ./config-server
docker image build -t dvmflstm/registry ./discovery-server
docker image build -t dvmflstm/auth ./microservice-auth
docker image build -t dvmflstm/diet ./microservice-diet
docker image build -t dvmflstm/exercise ./microservice-excercise
docker image build -t dvmflstm/statistics ./microservice-statistics
docker image build -t dvmflstm/gateway ./gateway

