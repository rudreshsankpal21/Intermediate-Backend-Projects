const category = require("../models/Category");

// create category
const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({ name });
    if (!category) {
      return res.status(400).json({
        message: "Category not created",
      });
    }
    res.status(201).json({
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    console.log(error);
  }
};

// get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (!categories) {
      return res.status(400).json({
        message: "Categories not found",
      });
    }
    res.status(200).json({
      message: "Categories found successfully",
      categories,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
