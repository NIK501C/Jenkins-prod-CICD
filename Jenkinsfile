
pipeline {
    agent any

    stages {

        stage("Welcome") {
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
                echo 'Building backend test image'

                sh '''
                    docker build \
                        -f application/backend/Dockerfile.test \
                        -t backend-test:${BUILD_NUMBER} \
                        application/backend
                '''

                echo 'Running backend unit tests'

                sh '''
                    docker run --rm backend-test:${BUILD_NUMBER}
                '''
            }
        }

        stage('Build Docker Images') {
            steps {
                echo 'Building backend Docker image'

                sh '''
                    docker build \
                        -f application/backend/Dockerfile \
                        -t jenkins-backend:${BUILD_NUMBER} \
                        application/backend
                '''

                echo 'Building frontend Docker image'

                sh '''
                    docker build \
                        -f application/frontend/Dockerfile \
                        -t jenkins-frontend:${BUILD_NUMBER} \
                        application/frontend
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
