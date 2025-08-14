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
    const { page = 1, limit = 10, search = "" } = req.query;

    // Search filter
    const searchFilter = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    // Pagination logic
    const skip = (page - 1) * limit;

    const products = await Product.find(searchFilter)
      .skip(skip)
      .limit(parseInt(limit))
      .exec();

    const total = await Product.countDocuments(searchFilter);

    res.status(200).json({
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / limit),
      products,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
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

// update product by ID
const updateProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await product.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    if (!product) {
      return res.status(400).json({
        message: "Product not found",
      });
    }
    res.status(200).json({
      message: "Product updated successfully",
      product,
    });
    // save the updated product
    await product.save();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// delete product by ID
const deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await product.findByIdAndDelete(id);
    if (!product) {
      return res.status(400).json({
        message: "Product not found",
      });
    }
    res.status(200).json({
      message: "Product deleted successfully",
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
  updateProductById,
  deleteProductById,
};
