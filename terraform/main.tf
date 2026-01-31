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
    Name = "housing-public-subnet"
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
    subnet_ids = [aws_subnet.public_subnet.id]
    # In production, use private subnets too and at least 2 AZs
  }

  depends_on = [
    aws_iam_role_policy_attachment.eks_cluster_policy
  ]
}

# --- EC2 Instance (For Ansible Configuration) ---
resource "aws_instance" "ansible_target" {
  ami           = "ami-0c7217cdde317cfec" # Ubuntu 22.04 LTS (us-east-1)
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.public_subnet.id
  
  key_name = "housing-key-pair" # User must create this key pair manually or we can resource it

  tags = {
    Name = "Ansible-Target-Server"
  }
}
