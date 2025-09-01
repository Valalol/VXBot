# Use official Node.js LTS image
FROM node:latest-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Start the bot
CMD ["node", "vxbot.js"]
