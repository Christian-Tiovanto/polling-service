# Polling Service for Mata Kuliah DevOps

Welcome to the Polling Service repository. This project serves as the backend infrastructure designed to handle all aspects of polling operations.

---

## 📖 Service Functionality

This service operates as a dedicated backend server, providing comprehensive APIs and background processing for polling systems. Key functionalities include:

* **Poll Creation:** Handling requests to generate new polls with various configurations.
* **Data Retrieval:** Serving poll data, options, and current results to clients.
* **Vote Processing:** Managing incoming votes and ensuring data integrity.
* **Polling Management:** Handling all related operational tasks required for a robust polling lifecycle.

## 🛠️ Tech Stack

This project utilizes a modern, robust technology stack designed for scalability and reliability:

* **[Node.js](https://nodejs.org/)**: Runtime environment for executing JavaScript server-side.
* **[NestJS](https://nestjs.com/)**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
* **[PostgreSQL](https://www.postgresql.org/)**: The primary relational database for persistently storing poll data and user votes.
* **[RabbitMQ](https://www.rabbitmq.com/)**: A message broker used for handling asynchronous tasks and ensuring smooth processing of high-volume voting traffic.

---

## 🌐 Live Demo

The service is currently deployed and accessible at:
**[https://polbro-devops.duckdns.org](https://polbro-devops.duckdns.org)**

---

## 🚀 Getting Started Locally

Follow these simplified instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

Ensure you have **[Docker](https://www.docker.com/get-started)** installed and running on your machine.

### Installation & Run

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/DevonLoen/polling-service.git](https://github.com/DevonLoen/polling-service.git)
    cd polling-service
    ```

2.  **Set Up Environment Variables**
    Copy the sample environment file to create your local configuration.
    ```bash
    cp .env.sample .env
    ```

3.  **Start the Application**
    Use Docker Compose to spin up the entire stack (application, database, and message broker).
    ```bash
    docker compose up -d
    ```

### ✅ Verification

To confirm the service is running correctly, open your browser and navigate to:
**[http://localhost:3008/api-docs](http://localhost:3008/api-docs)**

If successful, you will see the Swagger API documentation for the service. 🎉
