
# **MicroChat**  
### **Real-Time Chat Application with Microservices and Event-Driven Architecture**  
*A scalable messaging platform built with Node.js, RabbitMQ, Docker, and MongoDB*  

---

## **🚀 Features**  
✔ **User Management** – JWT authentication & profile handling  
✔ **Real-Time Chat** – Websocket-powered messaging  
✔ **Notifications** – Email alerts for offline users  
✔ **Event-Driven** – RabbitMQ for inter-service communication  
✔ **Containerized** – Dockerized services with Nginx load balancing  

---

## **🛠 Tech Stack**  
| Category       | Technologies                          |  
|----------------|---------------------------------------|  
| **Backend**    | Node.js, Express, TypeScript          |  
| **Database**   | MongoDB (Mongoose)                    |  
| **Messaging**  | RabbitMQ                              |  
| **Real-Time**  | Socket.io                             |  
| **DevOps**     | Docker, Docker Compose, Nginx         |  

---

## **⚡ Quick Start (Docker)**  

```bash
# 1. Clone the repository
git clone https://github.com/Sachita007/MicroChat.git
cd MicroChat

# 2. Set up environment variables 
cp user-service/.env.example user-service/.env
cp chat-service/.env.example chat-service/.env
cp notification-service/.env.example notification-service/.env

# 3. Launch all services
docker-compose up --build
```
**Access endpoints:**  
- API Gateway: `http://localhost:85`  
- User Service: `http://localhost:8081`  
- Chat Service: `http://localhost:8082`  
- Notification Service: `http://localhost:8083`  


---

## **🔧 Manual Setup**  

### **Prerequisites**  
- Node.js v18+  
- MongoDB (local or Atlas URI)  
- RabbitMQ (local or CloudAMQP)  

```bash
# Install dependencies for each service
cd user-service && npm install
cd ../chat-service && npm install 
cd ../notification-service && npm install

# Start services (in separate terminals)
npm run dev
```

---

## **📂 Project Structure**  
```
chatflow/
├── user-service/          # Auth & user profiles
│
├── chat-service/          # Real-time messaging
│
├── notification-service/  # Email/push alerts
│
├── gateway/               # API Gateway
└── nginx/                 # Reverse proxy config
```

---

## **🔌 API Endpoints**  

| Service       | Endpoint                  | Description                     |
|---------------|---------------------------|---------------------------------|
| **Auth**      | `POST /user/register` | Register new user               |
|               | `POST /user/login`    | Generate JWT token              |
| **Chat**      | `WS /chat`                | Websocket connection            |
|               | `GET /chat/get/:receiverId`       | Fetch message history           |
|               | `POST /chat/send`       | Send Message        |






