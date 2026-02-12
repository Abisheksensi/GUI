provider "aws" {
  region = "us-east-1"
}

# --- VPC Configuration ---
resource "aws_vpc" "housing_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "housing-expert-vpc"
  }
}

resource "aws_subnet" "public_subnet" {
  vpc_id                  = aws_vpc.housing_vpc.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
  availability_zone       = "us-east-1a"

  tags = {
    Name = "housing-public-subnet-1"
  }
}

resource "aws_subnet" "public_subnet_2" {
  vpc_id                  = aws_vpc.housing_vpc.id
  cidr_block              = "10.0.2.0/24"
  map_public_ip_on_launch = true
  availability_zone       = "us-east-1b"

  tags = {
    Name = "housing-public-subnet-2"
  }
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.housing_vpc.id

  tags = {
    Name = "housing-igw"
  }
}

resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.housing_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = "housing-public-rt"
  }
}

resource "aws_route_table_association" "public_assoc" {
  subnet_id      = aws_subnet.public_subnet.id
  route_table_id = aws_route_table.public_rt.id
}

resource "aws_route_table_association" "public_assoc_2" {
  subnet_id      = aws_subnet.public_subnet_2.id
  route_table_id = aws_route_table.public_rt.id
}

# --- EKS Cluster Role ---
resource "aws_iam_role" "eks_cluster_role" {
  name = "housing-eks-cluster-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "eks.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "eks_cluster_policy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
  role       = aws_iam_role.eks_cluster_role.name
}

# --- EKS Cluster ---
resource "aws_eks_cluster" "housing_cluster" {
  name     = "housing-expert-cluster"
  role_arn = aws_iam_role.eks_cluster_role.arn

  vpc_config {
    subnet_ids = [aws_subnet.public_subnet.id, aws_subnet.public_subnet_2.id]
  }

  depends_on = [
    aws_iam_role_policy_attachment.eks_cluster_policy
  ]
}

# --- EC2 Instance (For Ansible Configuration) ---
resource "aws_instance" "ansible_target" {
  ami           = "ami-0c7217cdde317cfec" # Ubuntu 22.04 LTS (us-east-1)
  instance_type = "t3.micro" # Switched to t3.micro to avoid t2 issues
  subnet_id     = aws_subnet.public_subnet.id
  
  key_name = "housing-key-pair" # User must create this key pair manually or we can resource it

  tags = {
    Name = "Ansible-Target-Server"
  }
}

# --- EKS Node Group ---
resource "aws_iam_role" "eks_node_role" {
  name = "housing-eks-node-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "ec2.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "eks_node_policy_AmazonEKSWorkerNodePolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
  role       = aws_iam_role.eks_node_role.name
}

resource "aws_iam_role_policy_attachment" "eks_node_policy_AmazonEKS_CNI_Policy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
  role       = aws_iam_role.eks_node_role.name
}

resource "aws_iam_role_policy_attachment" "eks_node_policy_AmazonEC2ContainerRegistryReadOnly" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
  role       = aws_iam_role.eks_node_role.name
}

resource "aws_eks_node_group" "housing_nodes" {
  cluster_name    = aws_eks_cluster.housing_cluster.name
  node_group_name = "housing-node-group"
  node_role_arn   = aws_iam_role.eks_node_role.arn
  # Use exact same subnets as cluster
  subnet_ids      = [aws_subnet.public_subnet.id, aws_subnet.public_subnet_2.id]

  scaling_config {
    desired_size = 2
    max_size     = 3
    min_size     = 1
  }

  instance_types = ["t3.small"] # t3.micro max pods=4 (full). t3.small max pods=11 (required).

  depends_on = [
    aws_iam_role_policy_attachment.eks_node_policy_AmazonEKSWorkerNodePolicy,
    aws_iam_role_policy_attachment.eks_node_policy_AmazonEKS_CNI_Policy,
    aws_iam_role_policy_attachment.eks_node_policy_AmazonEC2ContainerRegistryReadOnly,
  ]
}
