# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy the entire source code
COPY . .

# Build the Astro project
RUN npm run build

# Production stage (serving static files)
FROM nginx:alpine AS runner

WORKDIR /usr/share/nginx/html

# Copy built files from the builder
COPY --from=builder /app/dist .

# Expose the correct port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]