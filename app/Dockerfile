# Use official Node.js LTS image
FROM node:22-alpine

# Create and switch to working directory
WORKDIR /app

# Copy dependency files first (better Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application files
COPY . .

# Application listens on port 3000
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
