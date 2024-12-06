# Stage 1: Build the app
FROM ubuntu:24.10 AS builder

# Update  & install packages
RUN apt update -y 
RUN apt upgrade -y
RUN apt install nodejs npm -y

# Copy source code to container
WORKDIR /app
COPY ./app /app

# Install dependencies
RUN npm i

# Build web app
# RUN npx expo export -p web
# may fix:
RUN npx tailwindcss -i ./global.css -o ./node_modules/.cache/nativewind/global.css.web.css && npx expo export -p web 

# Stage 2: Use an official Node.js runtime as a parent image
FROM node:23-alpine AS final

# Set the working directory in the container
WORKDIR /app

# Copy package*.json files so we have access to dependencies
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy other application code into the container at the working dir
COPY ./backend/build ./build
COPY --from=builder ./app/dist ./build/presentation/express/site

# Make port available to the world outside this container
EXPOSE 3482

# Define environment variable
# ENV NODE_ENV production

# Run app.js when the container launches
CMD ["npm", "run", "serve"]

# docker build -t mefit-backend:0.1 .