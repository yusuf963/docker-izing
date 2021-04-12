# docker-izing
this basic node server meant to be deyloped on Azure VM
using docker container
- create file 'Dockerfile' and specify the dir and node


# userful command
## to build Docker image
docker build -t node-docker .
## to run the app 
docker run -it -p 9000:3000 node-docker
## to run docker on the background(detach)
docker run -d -p 9000:3000 node-docker
## to run docker in interactive mode(to see change)
docker run -it -p 9001:3000 -v $(pwd):/app node-docker 
## to see the list of running container
docker ps



Happy codingunning 