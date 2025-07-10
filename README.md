# College Management API

A basic RESTful API for managing students in a college system, with JWT-based authentication and Docker support.

---

##  Features

- JWT Authentication (hardcoded admin user)
- Create and fetch students
- SQLite database with Sequelize ORM
- Dockerized for easy deployment

---

##  Tech Stack

- Node.js
- Express.js
- Sequelize + SQLite
- JWT (jsonwebtoken)
- Docker

---

##  Authentication

- **Username:** `admin`
- **Password:** `admin123`

After login, you'll receive a JWT token. Use this token in the `Authorization` header to access protected routes.

---

##  API Endpoints

### Login

```bash
POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"
}

```json
{ "token": "<JWT token>" }
```

---

### 🎓 Students (Protected)

**Get all students**
GET /api/students
Authorization: Bearer <JWT token>


POST /api/students
Authorization: Bearer <JWT token>
Content-Type: application/json

{
  "name": "Lalit Pal",
  "email": "lalit@example.com"
}




## 📝 License

MIT — use freely for educational projects.
