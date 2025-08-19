const express = require("express");
const cartRouter = express.Router();
const { addToCart } = require("../controllers/cartController");

// add to cart
cartRouter.post("/", addToCart); // ✅

// update Quantity
// cartRouter.put("/", updateCart);

// // remove from cart
// cartRouter.delete("/", removeFromCart);

// // get User cart
// cartRouter.get("/:id", getUserCart);

// // clear cart
// cartRouter.delete("/clear/:id", clearCart);

module.exports = cartRouter;
