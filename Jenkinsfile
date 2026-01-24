pipeline {
    agent any

    environment {
        // You can change your github repo URL here if needed
        REPO_URL = 'https://github.com/Abisheksensi/GUI.git'
    }

    stages {
        stage('Checkout') {
            steps {
                // Jenkins usually checks out SCM automatically if configured in UI
                // But we can ensure it's clean here
                checkout scm
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    echo 'Building Frontend...'
                    // We use the same command we tested earlier
                    sh "docker build --no-cache -t gui-frontend ${REPO_URL}#main:housing-expert/frontend"
                }
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    echo 'Building Backend...'
                    // Note usage of 'Backend' (uppercase) as discovered
                    sh "docker build --no-cache -t gui-backend ${REPO_URL}#main:housing-expert/Backend"
                }
            }
        }
    }
    
    post {
        success {
            echo 'Build Successful! Docker images created.'
        }
        failure {
            echo 'Build Failed.'
        }
    }
}
