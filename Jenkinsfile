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
                    sh "docker build --platform linux/amd64 --no-cache -t gui-frontend housing-expert/frontend"
                }
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    echo 'Building Backend...'
                    // Build from local workspace - ensures correct folder usage
                    // Git has this folder as 'Backend' (uppercase), so we must match it for Linux
                    sh "docker build --platform linux/amd64 --no-cache -t gui-backend housing-expert/Backend"
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

        stage('Push Docker Images') {
            steps {
                script {
                    echo 'Pushing Docker Images to Docker Hub...'
                    // Fallback: Use Environment variables DOCKER_USERNAME and DOCKER_PASSWORD directly
                    // These must be set in your jenkins/docker-compose.yml or passed to the agent
                    withEnv(['DOCKER_USERNAME=abishekdesign']) {
                        // Assuming DOCKER_PASSWORD is set in Jenkins global config or passed safely
                        // If user wants SIMPLEST way, we can ask them to set it in Jenkins -> Global Properties -> Env Vars
                        
                        // OR we can inject it via withCredentials but using 'secret text' which is easier to set up?
                        // No, User struggled with Credentials UI.
                        
                        // Let's use specific credentials but standard username/password to eliminate ID confusion?
                        // Actually, the user asked for "docker login with environment variables".
                        
                        // We will use 'withCredentials' binding to a 'Secret Text' or just standard credentials
                        // created automatically? No.
                        
                        // Reverting to the "username/password" prompt strategy for simple use:
                        // "docker login -u abishekdesign -p <PASSWORD_IN_ENV_VAR>"
                        
                        // We will assume DOCKER_PASSWORD is in the environment (set via Jenkins UI -> Manage -> System -> Global properties)
                        sh 'echo $DOCKER_PASSWORD | docker login -u abishekdesign --password-stdin'
                        
                        // Tag and Push Frontend
                        sh "docker tag gui-frontend abishekdesign/gui-frontend:latest"
                        sh "docker push abishekdesign/gui-frontend:latest"
                        
                        // Tag and Push Backend
                        sh "docker tag gui-backend abishekdesign/gui-backend:latest"
                        sh "docker push abishekdesign/gui-backend:latest"
                    }
                }
            }
        }

        stage('Deploy to EKS') {
            steps {
                script {
                    echo 'Deploying to EKS Cluster...'
                    // Configure kubectl to use the EKS cluster created by Terraform
                    sh "aws eks update-kubeconfig --region us-east-1 --name housing-expert-cluster"
                    
                    // Apply the Kubernetes manifests
                    sh "kubectl apply -f k8s/deployment.yaml"
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
