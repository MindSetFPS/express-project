# Stage 1: Build the app
FROM ubuntu:24.10 AS app

# Update  & install packages
RUN apt update -y && apt upgrade -y
RUN apt install nodejs npm -y

# Copy source code to container
WORKDIR /app
COPY ./app /app

# Install dependencies
RUN npm i

# Build web app
# At some point that thing broke and this was the fix:
RUN npx tailwindcss -i ./global.css -o ./node_modules/.cache/nativewind/global.css.web.css && npx expo export -p web 

# Stage 2: Build backend
FROM node:23-alpine AS backend

# Set the working directory in the container
WORKDIR /app

# Copy package*.json files so we have access to dependencies
COPY backend/package*.json ./
COPY ./backend ./

# Install dependencies
RUN npm install
RUN npm run build

# Stage 3: Final build
FROM node:23-alpine AS final

WORKDIR /app

COPY backend/package*.json ./

# Copy build to final container
COPY --from=backend ./app/build ./build

# Copy app to final container
COPY --from=app ./app/dist ./build/presentation/express/site

# Generate node_modules
RUN npm i

# Make port available to the world outside this container
EXPOSE 3482

# Define environment variable
# ENV NODE_ENV production

# Run app.js when the container launches
CMD ["npm", "run", "serve"]

# docker build -t mefit-backend:0.1 .