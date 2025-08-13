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
    console.log(error);
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
    console.log(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
};
