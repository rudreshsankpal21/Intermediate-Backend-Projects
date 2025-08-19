const Cart = require("../models/Cart");

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

module.exports = { addToCart };
