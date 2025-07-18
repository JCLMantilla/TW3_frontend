# TW3_frontend

## Getting Started

This project contains a Dockerized React app with a landing page displaying "hello world".

### Docker Usage

1. Build the Docker image (from the project root):
   ```bash
   docker build -t tw3-front .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 tw3-front
   ```


If you prefer to use docker-compose

   ```bash
   docker compose up -d --build
   ```




The app will be available at [http://localhost:3000](http://localhost:3000)


### Pulling from GitHub Container registry

To pull the image from github image registry just run
   ```bash
   docker pull ghcr.io/jclmantilla/tw3-front:latest
   ```

# Important note
You must have a .env file in the root directory containing the following variables

   ```bash
   VITE_TW3_BACKEND_HOST=localhost
   VITE_TW3_BACKEND_PORT=270
   ```

