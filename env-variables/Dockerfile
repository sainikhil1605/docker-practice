# This is the base image for the project we are creating
FROM node:14

# Install updates in the linux
RUN apt-get update -y

# Make directory for the project
RUN mkdir -p /usr/src/app

# Set the working directory 
WORKDIR /usr/src/app

# Copy current directory source code to the working directory in the container
COPY . /usr/src/app


#Run npm install to install all the dependencies
RUN npm install

#Expose the port 3000 this is the port where the application will run and this command is only for documentation purpose
EXPOSE 3000

#Run the application
ENTRYPOINT [ "node","server.js" ]