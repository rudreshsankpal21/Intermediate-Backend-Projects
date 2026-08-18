const express = require("express");
const authRouter = require("./routes/authRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const categoryRouter = require("./routes/categoryRoutes");
const cartRouter = require("./routes/cartRoutes");
const productRouter = require("./routes/productRoutes");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/auth", authRouter);
app.use("/api/categories", authMiddleware, categoryRouter);
app.use("/api/cart", authMiddleware, cartRouter);
app.use("/api/products", authMiddleware, productRouter);

module.exports = app;
