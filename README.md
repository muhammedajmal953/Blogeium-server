# Article Server (Node.js Backend)

This is a back-end server for managing articles, built using **Node.js** and **Express**. It allows for CRUD operations, authentication using JWT, and is connected to a **MongoDB** database via **Mongoose**.

## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
  - [Clone Repository](#clone-repository)
  - [Install Dependencies](#install-dependencies)
  - [Run the Application](#run-the-application)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Description

This application serves as the back-end for a blog system, where you can manage articles, handle user authentication, and perform CRUD operations. It uses **Express** to set up routes, **Mongoose** to interact with MongoDB, and **JWT** for secure user authentication.

## Technologies

- **Node.js** (JavaScript runtime)
- **Express** (Web framework)
- **MongoDB** (Database)
- **Mongoose** (MongoDB object modeling)
- **JWT** (JSON Web Tokens for authentication)
- **Bcryptjs** (Password hashing)
- **Typescript** (Static typing)
- **Nodemon** (Auto-reloading during development)
- **Cors** (Cross-Origin Resource Sharing)
- **Dotenv** (Environment variable management)

## Setup Instructions

### Clone Repository


---

### Key Sections Breakdown:

1. **Description**: Explains the purpose of the Node.js back-end server, including its use of **Express**, **MongoDB**, **Mongoose**, and **JWT** for authentication.

2. **Technologies**: Lists the technologies used in the project, including essential libraries like **bcryptjs** for hashing passwords and **Nodemon** for development.

3. **Setup Instructions**:
   - **Clone Repository**: Provides steps to clone the repository.
   - **Install Dependencies**: Shows how to install necessary dependencies using `npm install`.
   - **Run the Application**: Instructions on how to start the server in development mode using **Nodemon** and **ts-node**.

4. **Environment Variables**: Details which environment variables are required, such as the MongoDB connection string and the JWT secret key.

5. **API Endpoints**: Lists the key API endpoints for interacting with articles, including the necessary HTTP methods (GET, POST, PUT, DELETE).

6. **Contributing**: Gives guidelines for contributing to the project via forking, creating feature branches, and submitting pull requests.

7. **License**: States that the project is under the MIT License.

This README provides a complete guide for anyone looking to set up or contribute to your Node.js back-end server, including detailed setup and API usage instructions.


First, clone the repository to your local machine:

```bash
git clone https://github.com/username/article-server.git
cd article-server
