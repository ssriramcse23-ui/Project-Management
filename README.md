# 🗂 Project Management Dashboard

A full-stack **Project Management Web Application** built using the **MERN Stack (MongoDB, Express, React, Node.js)**.
This application allows users to **create, view, update, and delete tasks** through a clean and responsive dashboard.

The project demonstrates **REST API integration, full CRUD operations, and modern UI development**.

---

## 🚀 Features

* Add new tasks with title and description
* View tasks in a responsive dashboard layout
* Edit existing tasks
* Delete tasks
* REST API integration using Axios
* Responsive UI with Bootstrap
* Environment variable configuration using `.env`
* Backend deployment support (Render)

---

## 🛠 Tech Stack

**Frontend**

* React.js
* Axios
* Bootstrap
* React Icons

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose

**Deployment**

* Render (Backend)
* GitHub (Version Control)

---

## 📂 Project Structure

```
Project-Management
│
├── Backend
│   ├── models
│   │   └── Task.js
│   ├── routes
│   │   └── taskRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend
│   ├── public
│   ├── src
│   │   └── App.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/Project-Management.git
```

```
cd Project-Management
```

---

### 2️⃣ Install Backend Dependencies

```
cd Backend
npm install
```

Create `.env`

```
MONGO_URI=your_mongodb_connection_string
PORT=4000
```

Start backend server

```
npm start
```

---

### 3️⃣ Install Frontend Dependencies

```
cd ../Frontend
npm install
```

Create `.env`

```
REACT_APP_API_URL=http://localhost:4000/api/tasks
```

Run frontend

```
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/tasks     | Get all tasks   |
| POST   | /api/tasks     | Create new task |
| PATCH  | /api/tasks/:id | Update task     |
| DELETE | /api/tasks/:id | Delete task     |

---

## 📸 Screenshots

Dashboard UI showing task cards with edit and delete functionality.

*(You can add screenshots here later)*

---

## 🌐 Deployment

Backend deployed on **Render**

Example API URL

```
https://your-backend-name.onrender.com/api/tasks
```

Frontend can be deployed on:

* Render
* Vercel
* Netlify

---

## 📌 Future Improvements

* User authentication (JWT)
* Task status management
* Search and filter tasks
* Drag-and-drop task board
* Team collaboration features

---

## 👨‍💻 Author

Sriram
Aspiring **MERN Stack Developer | Cybersecurity Enthusiast**

---

