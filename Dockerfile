# Use the official Node.js 14 image as the base image
FROM node:20.18


# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the app for production
RUN npm run build

# Expose the port the app will run on
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev"]
