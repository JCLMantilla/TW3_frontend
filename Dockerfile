FROM node:20-alpine AS builder
WORKDIR /app

# Define build arguments for environment variables
ARG VITE_TW3_BACKEND_HOST=localhost
ARG VITE_TW3_BACKEND_PORT=270

# Set environment variables for the build process
ENV VITE_TW3_BACKEND_HOST=$VITE_TW3_BACKEND_HOST
ENV VITE_TW3_BACKEND_PORT=$VITE_TW3_BACKEND_PORT

COPY app/package*.json ./
RUN npm install
COPY app/ .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

# Install serve for production
RUN npm install -g serve

# Copy built frontend
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"] 