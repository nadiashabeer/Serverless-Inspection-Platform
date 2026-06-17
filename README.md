# Project 3: Serverless Inspection Platform

[![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![AWS Lambda](https://img.shields.io/badge/AWS_Lambda-%23FF9900.svg?style=flat&logo=aws-lambda&logoColor=white)](https://aws.amazon.com/lambda/)
[![DynamoDB](https://img.shields.io/badge/DynamoDB-%234053D6.svg?style=flat&logo=amazon-dynamodb&logoColor=white)](https://aws.amazon.com/dynamodb/)

## 🎯 Objective
Build a fully serverless, event-driven inspection system designed for real-time data processing, secure image handling, and high scalability.

---

## 🏗️ Architecture Overview
This platform utilizes a decoupled, event-driven architecture to ensure low latency and high availability without the need for managing underlying servers.

* **Frontend:** React application hosted on Amazon S3 and distributed via CloudFront.
* **API Layer:** Amazon API Gateway triggering AWS Lambda functions.
* **Storage:** Amazon S3 for secure object storage and Amazon DynamoDB for inspection metadata.
* **Event Processing:** SNS/SQS for asynchronous workflows.
* **Security & Networking:** Private Lambda execution via VPC Endpoints.

---

## 🛠️ Implementation Highlights

* **Frontend Hosting:** Global content delivery using CloudFront, backed by S3 buckets.
* **Secure Uploads:** Implementation of S3 Presigned URLs to allow frontend clients to upload images directly and securely without exposing AWS credentials.
* **API & Compute:** RESTful APIs managed by API Gateway, with business logic executed in serverless Lambda functions.
* **Data Persistence:** Highly scalable DynamoDB tables storing inspection records and metadata.
* **Asynchronous Workflows:** Decoupling services using SNS and SQS to handle complex inspection logic in the background.
* **Networking:** Enhanced security posture by running Lambdas within a private VPC, utilizing VPC Endpoints for private AWS service communication.

---

## 🚀 Getting Started

### Prerequisites
* AWS Account
* AWS CLI installed and configured
* Node.js and npm (for React frontend)

### Deployment Steps
1.  **Infrastructure Provisioning:** Deploy the backend services (DynamoDB, Lambda, S3, API Gateway) using Terraform or AWS CloudFormation.
2.  **Frontend Setup:** Build the React application and sync it to the S3 bucket configured for static website hosting.
3.  **API Configuration:** Link the API Gateway endpoints to the relevant Lambda functions and enable CORS for the frontend origin.
4.  **Security Setup:** Configure VPC Endpoints to ensure private traffic between your Lambda functions and AWS services.

---

## 📄 Documentation
A detailed Microsoft Word document containing the full technical documentation, architectural diagrams, and configuration steps is attached to this repository.

---

## ✒️ Author
**Nadia Shabeer**
