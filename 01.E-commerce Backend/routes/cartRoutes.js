const express = require("express");
const cartRouter = express.Router();
const {
  addToCart,
  updateCart,
  removeFromCart,
  getUserCart,
  getAllOrders,
} = require("../controllers/cartController");
const isAdmin = require("../middlewares/isAdmin");

// add to cart
cartRouter.post("/", addToCart); // ✅

// update Quantity
cartRouter.put("/", updateCart); // ✅

// remove from cart
cartRouter.delete("/", removeFromCart); // ✅

// get User cart
cartRouter.get("/:id", getUserCart); // ✅

// get all orders
cartRouter.get("/", isAdmin, getAllOrders); // ✅

// clear cart
// cartRouter.delete("/clear/:id", clearCart);

module.exports = cartRouter;
