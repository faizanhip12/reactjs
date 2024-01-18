# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the app will run (e.g., 3000)
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]