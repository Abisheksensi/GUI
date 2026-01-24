FROM jenkins/jenkins:lts
USER root
# Install Docker CLI
RUN apt-get update && \
    apt-get install -y docker.io && \
    apt-get clean
# Give jenkins user access to docker group used on host
# (We might need to adjust group ID dynamically, but this is a start)
RUN usermod -aG docker jenkins
USER jenkins
