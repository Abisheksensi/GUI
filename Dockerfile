FROM node:18

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install Frontend dependencies
WORKDIR /app/housing-expert/frontend
RUN npm install

# Install Backend dependencies
WORKDIR /app/housing-expert/backend
RUN npm install

# Return to frontend root for execution
WORKDIR /app/housing-expert/frontend

# Expose ports
EXPOSE 3000 5000

# Start Backend (background) and Frontend (foreground)
CMD ["sh", "-c", "cd ../backend && npm start & npm start"]
