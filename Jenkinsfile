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
                    // Build from local workspace instead of cloning again
                    sh "docker build --no-cache -t gui-frontend housing-expert/frontend"
                }
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    echo 'Building Backend...'
                    // Build from local workspace - ensures correct folder usage
                    sh "docker build --no-cache -t gui-backend housing-expert/backend"
                }
            }
        }
        stage('Provision Infrastructure') {
            steps {
                script {
                    echo 'Provisioning AWS Infrastructure with Terraform...'
                    // Ensure Terraform is installed in Jenkins or available
                    // For now, we assume Jenkins has access or we use a Docker agent for Tools
                    dir('terraform') {
                        sh 'terraform init'
                        sh 'terraform plan -out=tfplan' 
                        sh 'terraform apply -auto-approve tfplan' 
                    }
                }
            }
        }

        stage('Configure Servers') {
            steps {
                script {
                    echo 'Configuring Servers with Ansible...'
                    dir('ansible') {
                         // sh 'ansible-playbook -i inventory.ini playbook.yml' // Uncomment when ready
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline Executed Successfully.'
        }
        failure {
            echo 'Pipeline Failed.'
        }
    }
}
