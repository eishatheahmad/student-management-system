#!/bin/bash

minikube start

HOST_NAME=$(curl http://checkip.amazonaws.com)
sed "s/PLACE_HOLDER/${HOST_NAME}/g" -i frontend-deployment.yaml  

kubectl apply -f .

sleep 5

bash  ./frontend-forward.sh & bash  ./backend-forward.sh
