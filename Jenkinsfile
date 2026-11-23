pipeline {
    agent any

    stages {

        stage ("Welcome") {
            steps {
                echo "Welcome to Jenkins prod CI/CD project"
            }
        }

        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub'
                sh 'git rev-parse --short HEAD'
            }
        }

        stage('Backend Unit Tests') {
            steps {
                echo 'Running backend unit tests'

                sh '''
                    docker run --rm \
                    -v "$WORKSPACE/application/backend:/app" \
                    -w /app \
                    python:3.12-slim \
                    sh -c "pip install --no-cache-dir -r requirements.txt && pytest -v"
                '''
            }
        }
    }

    post {
        success {
            echo 'CI Pipeline completed successfully!'
        }

        failure {
            echo 'CI Pipeline failed. Please check the logs.'
        }
    }
}
