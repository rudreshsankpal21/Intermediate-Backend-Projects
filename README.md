# 🛒 E-Commerce Backend API

A robust and scalable backend API for an e-commerce platform, built with **Node.js, Express, and MongoDB**.
This API provides secure user authentication, product management, cart functionality, and order handling.

---

## 🚀 Features

- 🔑 **User Authentication & Authorization** (JWT-based)
- 👤 **User Roles** – Admin & Customer
- 📦 **Product Management** – Add, update, delete, and view products
- 🛒 **Cart Management** – Add to cart, update, and remove items
- 💳 **Order Management** – Place and view orders
- 🔒 **Protected Routes** (role-based access control)
- 📂 **MongoDB Integration** with Mongoose
- 🛠 **Environment-based Configuration**

---

## 🏗 Tech Stack

- **Backend Framework:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** Express Validator
- **Environment Config:** dotenv

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ecommerce-backend-api.git
cd ecommerce-backend-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the root folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the server

```bash
npm run dev
```

Server will start at `http://localhost:5000/`

---

## 📁 API Endpoints

### 🔑 Auth Routes

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login user

### 📦 Product Routes

- `POST /api/products` – Create product (admin only)
- `GET /api/products` – Get all products
- `GET /api/products/:id` – Get single product
- `PUT /api/products/:id` – Update product (admin only)
- `DELETE /api/products/:id` – Delete product (admin only)

### 🛒 Cart Routes

- `POST /api/cart` – Add item to cart
- `GET /api/cart` – Get user’s cart
- `PUT /api/cart/:id` – Update cart item
- `DELETE /api/cart/:id` – Remove item from cart

## 🧪 Testing

- Use **Postman / Thunder Client** for API testing
- Ensure MongoDB is running locally or use Atlas connection string

---

## 📌 Future Improvements (Optional)

- 📸 Product image upload (Cloudinary / Multer)
- 💳 Payment gateway integration (Stripe, Razorpay)
- 📊 Admin dashboard analytics

---

## 🙌 Acknowledgements

Made with ❤️ by Rudresh

This project is part of my **12 Backend Projects Streak** to sharpen skills as a backend-focused MERN developer.
