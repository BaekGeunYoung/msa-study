#!/bin/bash

docker image build -t msa-practice/config ./config-server
docker image build -t msa-practice/registry ./discovery-server
docker image build -t msa-practice/auth ./microservice-auth
docker image build -t msa-practice/diet ./microservice-diet
docker image build -t msa-practice/exercise ./microservice-excercise
docker image build -t msa-practice/statistics ./microservice-statistics

