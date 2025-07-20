# ========== STAGE 1: Build React App ==========
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first (better layer caching)
COPY package.json yarn.lock* ./

# Install dependencies (use --frozen-lockfile for Yarn)
RUN npm install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the app (with optional build-time API_URL)
ARG API_URL=http://localhost:8000/api/v1
ENV API_URL=$API_URL

RUN npm run build

# ========== STAGE 2: Serve with Nginx ==========
FROM nginx:alpine

# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built React app from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 3000 (matches nginx.conf)
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]