# Production-Grade Jenkins CI/CD Pipeline on AWS

An end-to-end DevOps portfolio project demonstrating automated application build, testing, containerization, security scanning, and deployment using Jenkins and AWS.

## Project Overview

This project aims to build a production-style CI/CD pipeline for a Python Flask backend and a frontend dashboard.

The pipeline will automate application testing, Docker image creation, vulnerability scanning, and deployment to Kubernetes on Amazon EKS.

## Technology Stack

- **CI/CD:** Jenkins
- **Cloud:** AWS
- **Infrastructure as Code:** Terraform
- **Containers:** Docker
- **Container Registry:** Amazon ECR
- **Orchestration:** Kubernetes, Amazon EKS
- **Package Management:** Helm
- **Programming:** Python, JavaScript, Shell Scripting
- **Testing:** Pytest
- **Security:** SonarQube, Trivy
- **Monitoring:** Prometheus, Grafana, CloudWatch
- **Version Control:** Git, GitHub

## Current Application

### Backend
- Python Flask REST API
- Health-check endpoint
- Application information endpoint
- Automated tests using Pytest

### Frontend
- HTML, CSS, and JavaScript dashboard
- Backend health monitoring
- Displays application information
- Communicates with the Flask backend

## API Endpoints

| Endpoint | Description |
|---|---|
| `/` | Backend welcome message |
| `/health` | Backend health status |
| `/api/info` | Application information |

## Run Locally

### Backend

```bash
cd application/backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Backend runs at `http://localhost:5000`.

### Run Backend Tests

```bash
python -m pytest -v
```

### Frontend

Open another terminal:

```bash
cd application/frontend
python -m http.server 8000
```

Open `http://localhost:8000` in your browser.

## Project Structure

```text
jenkins-prod-cicd/
├── application/
│   ├── backend/
│   └── frontend/
├── docker/
├── helm/
├── kubernetes/
├── monitoring/
├── scripts/
└── terraform/
```

## Planned Implementation Roadmap

- [x] Develop Flask backend
- [x] Create frontend dashboard
- [x] Implement backend API communication
- [x] Add backend unit tests
- [x] Push application code to GitHub
- [ ] Containerize frontend and backend using Docker
- [ ] Configure Jenkins CI/CD pipeline
- [ ] Provision AWS infrastructure using Terraform
- [ ] Push Docker images to Amazon ECR
- [ ] Deploy applications to Amazon EKS
- [ ] Implement Helm-based deployments
- [ ] Integrate SonarQube and Trivy
- [ ] Configure Prometheus and Grafana monitoring
- [ ] Implement deployment verification and rollback

## Project Goal

Build a production-style CI/CD workflow that demonstrates practical DevOps engineering skills, automation, infrastructure provisioning, container orchestration, security, and monitoring.