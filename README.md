# TaxWizard

DU Hackathon Dev Ops Segment

## Overview
[Visit Deployed Site](https://tax-worker-2npiqzi4ka-uw.a.run.app/) 


TaxWizard is a software tool designed to simplify income tax calculations in Bangladesh. It provides an easy-to-use interface for users to calculate their income tax, manage their profiles, and generate detailed yearly reports. This tool aims to streamline the tax calculation process and make it more accessible for all.

## Technologies Used

- We've developed TaxWizard using an Express.js app with EJS as the template engine, utilizing the following technologies:
  ![TailwindCSS](	https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## Features

### 1. Tax Calculation
- Performs income tax calculations.
- Simplifies the tax calculation process for users in Bangladesh.

### 2. Profile Management
- Allows users to register and login to the website.
- Enables users to manage their profiles and tax-related information.

### 3. Tax Report Generation
- Users can access and download their tax reports for any specific year.
- Allows users to see a breakdown of their yearly tax calculation. 

### 4. Additional Features
- Validating User Input: Ensures secure data entry by placing limits on user input.
- User-Friendly Interface: Offers an intuitive and user-friendly interface for a seamless experience.
- JWT Token for Secure Sessions: Implements JWT tokens to secure user sessions.
- Auto Scaling Provided by Google Cloud Run: Automatically scales the application based on user demand upto 100 instances.

## Inclusion of DevOps

### Version Control
- Utilizes a version control system in Git with two branches: development and production (main).
- Development branch is used to push all codes in development
- Production branch is used to run the Github Workflow

### Containerization & Infrastructure as Code (IaC)
- Uses Docker for containerization of the application before deployment.
- Leverages Terraform to automate the building of infrastructure.

### CI/CD
- Implements Continuous Integration/Continuous Deployment (CI/CD) through Github Actions for automated testing and deployment.
- Workflow runs CI and on success, runs CD to ensure minimum bugs in production environment.
- Includes backend testing to ensure application reliability.

### Deployment
- Hosts the application on Google Cloud for scalability and availability.
- Auto scalabity feature through Google Cloud Run upto 100 instances, allowing increased workloads without performance issues.

### Basic Pipeline Diagram

![Image Pipeline](https://route179.files.wordpress.com/2020/06/cicd-cloudrun.png)

### Logging
- Employs Datadog for comprehensive logging of the deployed website.

## Getting Started

- Visit the TaxWizard website at: https://tax-worker-2npiqzi4ka-uw.a.run.app/

 ## Contributors

- [Nafisa Maliyat](https://github.com/NafisaMaliyat-iut)

- [Tahlil Mahfuz Faiyaz](https://github.com/TahlilMahfuz)

- [Mirza Mohammad Azwad](https://www.linkedin.com/in/mirza-mohammad-azwad-b5239b1a4/)
