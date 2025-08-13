const product = require("../models/Product");

// create product
const createProduct = async (req, res) => {
  const { name, description, price, category, stock } = req.body;
  try {
    const product = await product.create({
      name,
      description,
      price,
      category,
      stock,
      //   images,
    });
    if (!product) {
      return res.status(400).json({
        message: "Error creating the product",
      });
    }
    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await product.find();
    if (!product) {
      return res.status(400).json({
        message: "Products not found",
      });
    }
    res.status(200).json({
      message: "Products found successfully",
      products,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// get a product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await product.findById(id);
    if (!product) {
      return res.status(400).json({
        message: "Product not found",
      });
    }
    res.status(200).json({
      message: "Product found successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
};
