A sample web application demonstrating an automated Jenkins CI pipeline integrated with GitHub and Docker.

# Project Overview

This project contains a Flask backend and an Nginx frontend. Jenkins is configured to run the pipeline when changes are pushed to the GitHub repository.

The pipeline checks out the source code, runs backend unit tests, and builds Docker images for the backend and frontend.

The application was also run locally with Docker Compose to verify that the frontend can communicate with the backend.

# Architecture

Developer
   |
   | Push code
   v
GitHub Repository
   |
   | Automatic trigger
   v
Jenkins Pipeline
   |
   +--> Checkout source code
   |
   +--> Run backend unit tests
   |
   +--> Build backend Docker image
   |
   +--> Build frontend Docker image

# Application flow when running locally:

Browser
   |
   | http://localhost:8000
   v
Nginx Frontend
   |
   | /health and /api/info
   v
Flask Backend

# Jenkins Pipeline

The Jenkinsfile defines these stages:

Welcome — prints a pipeline start message.

Checkout — verifies the checked-out source revision. Jenkins checks out the repository from the configured SCM source.

Backend Unit Tests — builds the backend test image and runs the Pytest suite.

Build Docker Images — builds the backend and frontend application images.

The pipeline uses the Jenkins build number as the Docker image tag, for example:

jenkins-backend:<BUILD_NUMBER>
jenkins-frontend:<BUILD_NUMBER>

The pipeline is configured to run automatically when code is pushed to GitHub.

# Start the application

From the repository root, run these commands in PowerShell:

$env:BUILD_NUMBER = "local"
docker compose up --build -d

# Open the frontend in your browser:

http://localhost:8000

The frontend displays the backend health status and application information.

# Check the containers

docker compose ps

# Stop the application

docker compose down