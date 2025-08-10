const express = require("express");
const isAdmin = require("../middlewares/isAdmin");
const { createCategory } = require("../controllers/categoryController");

const categoryRouter = express.Router();

// create Category
categoryRouter.post("/", isAdmin, createCategory);

// get all categories
categoryRouter.get("/", getAllCategories);

// get category by id
categoryRouter.get("/:id", getCategoryById);

// update category by id
categoryRouter.put("/:id", isAdmin, updateCategoryById);

// delete category by id
categoryRouter.delete("/:id", isAdmin, deleteCategoryById);

module.exports = categoryRouter;
