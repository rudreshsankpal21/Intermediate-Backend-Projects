const Cart = require("../models/Cart");
const Product = require("../models/Product");
// Add to cart
const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // If cart doesn’t exist → create new with product.
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    //If product exists in cart → increase quantity.
    cart.items.push({ product: product._id, quantity });
    await cart.save();
    res.status(200).json({ message: "Product added to cart successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update Quantity
const updateCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const cartItem = cart.items.find((item) =>
      item.product.equals(product._id)
    );
    if (!cartItem) {
      return res.status(404).json({ message: "Product not found in cart" });
    }
    cartItem.quantity = quantity;
    await cart.save();
    res.status(200).json({ message: "Product quantity updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Remove from cart
const removeFromCart = async (req, res) => {
  const { productId } = req.body;
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    cart.items = cart.items.filter((item) => !item.product.equals(product._id));
    await cart.save();
    res.status(200).json({ message: "Product removed from cart successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// get User cart
const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json({ cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Cart.find();
    if (!orders) {
      return res.status(404).json({ message: "Orders not found" });
    }
    res.status(200).json({ orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addToCart,
  updateCart,
  removeFromCart,
  getUserCart,
  getAllOrders,
};
