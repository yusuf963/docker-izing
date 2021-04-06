# docker-izing
this basic node server meant to be deyloped on Azure VM
using docker container
- create file 'Dockerfile' and specify the dir and node


# userful command
## to build Docker
docker build -t node-docker .
## to run the app 
docker run -it -p 9000:3000 node-docker
## to run docker on the background(detach)
docker run -d -p 9000:3000 node-docker
## to see the list of running container
docker ps



Happy codingunning 