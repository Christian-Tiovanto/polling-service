# Polling Service for Mata Kuliah DevOps

### 👥 Team Members
* **Jason** - 221111572
* **Cecilia Ongso** - 221111729
* **Willy Halim** - 221110079
* **Devon Marvelous Loen** - 221110226
* **Christian Tiovanto** - 221111153

---

Welcome to the Polling Service repository. This project serves as the backend infrastructure designed to handle all aspects of polling operations.

---

## 📖 Service Functionality

This service operates as a dedicated backend server, providing comprehensive APIs and background processing for polling systems. Key functionalities include:

* **Poll Creation:** Handling requests to generate new polls with various configurations.
* **Data Retrieval:** Serving poll data, options, and current results to clients.
* **Vote Processing:** Managing incoming votes and ensuring data integrity.
* **Polling Management:** Handling all related operational tasks required for a robust polling lifecycle.

## 🛠️ Tech Stack
<img width="1367" height="537" alt="image" src="https://github.com/user-attachments/assets/ac91500b-db2f-4ffc-8345-d89348ef7b3d" />
<img width="932" height="595" alt="image" src="https://github.com/user-attachments/assets/1a565e47-3bb7-4fcc-9e5c-6991b83922b0" />

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

3.  **Start the Application Cluster**
    Use Docker Compose to spin up the entire stack.
    > **Note:** This command will start **two** separate containers for the polling service (simulating a cluster for horizontal scaling) along with the necessary database and message broker.
    ```bash
    docker compose up -d
    ```

### ✅ Verification

To confirm the service cluster is running correctly, you can access the API documentation for both instances:

* **Node 1:** [http://localhost:3005/api-docs](http://localhost:3005/api-docs)
* **Node 2:** [http://localhost:3008/api-docs](http://localhost:3008/api-docs)

If successful, you will see the Swagger API documentation on both ports. 🎉
