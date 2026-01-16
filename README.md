```markdown
# 📘 FAQ Management System

A full-stack **FAQ Management System** with a public FAQ interface and an admin panel for managing FAQs.
Built as part of an internship assignment using **React, Node.js, Express, and MongoDB**.

---

## 🚀 Live Demo

* **Frontend (Netlify):** [https://faqs3.netlify.app/](https://faqs3.netlify.app/)
* **Backend API (Render):** [https://faq-88y8.onrender.com](https://faq-88y8.onrender.com)

---

## 🧩 Features

### 👤 Public User
* View all FAQs
* Search FAQs by keyword
* Filter FAQs by category
* No login required

### 🔐 Admin Panel
* Secure admin login (JWT-based)
* Add new FAQs
* Edit existing FAQs
* Delete FAQs
* Categorize FAQs

---

## 🔑 Admin Credentials (for evaluation)

```
Email: admin@example.com
Password: admin123
```

---

## 🛠️ Tech Stack

**Frontend:** React (Vite), React Router, Axios, CSS
**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT
**Deployment:** Netlify, Render, MongoDB Atlas

---

## 📂 Project Structure

**Backend:** src/ (config, controllers, middleware, models, routes, services, utils)
**Frontend:** src/ (api, components, pages, css)

---

## 🔌 API Endpoints

**Public:** GET /api/faqs, /api/faqs/search, /api/faqs/category/:category
**Admin:** POST /api/auth/login, POST/PUT/DELETE /api/faqs/:id

---

## ⚙️ Environment Variables

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## ✅ Requirements Checklist

✔ Searchable FAQ system
✔ Category filtering
✔ Admin CRUD interface
✔ MongoDB full-text search
✔ Access control
✔ Deployed frontend & backend
✔ Sample data included

---

**Author:** Manjunath Reddy | B.Tech Student (AI)
```
