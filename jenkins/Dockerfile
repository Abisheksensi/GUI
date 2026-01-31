FROM jenkins/jenkins:lts
USER root

# Install Docker CLI and dependencies
RUN apt-get update && \
    apt-get install -y docker.io wget unzip gnupg lsb-release && \
    apt-get clean

# Install Terraform
RUN wget -O- https://apt.releases.hashicorp.com/gpg | gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/hashicorp.list && \
    apt-get update && apt-get install -y terraform

# Install Ansible
# Note: On standard Debian (jenkins base), ansible is available in the main repo
RUN apt-get update && apt-get install -y ansible

# Give jenkins user access to docker group
RUN usermod -aG docker jenkins

USER jenkins
