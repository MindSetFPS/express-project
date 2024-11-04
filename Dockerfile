# Use an official Node.js runtime as a parent image
FROM node:23-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package*.json files so we have access to dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy other application code into the container at the working dir
COPY ./backend_dist ./dist
COPY ./app/dist ./dist/presentation/express/site

# Make port available to the world outside this container
EXPOSE 3482

# Define environment variable
# ENV NODE_ENV production

# Run app.js when the container launches
CMD ["npm", "run", "serve"]
