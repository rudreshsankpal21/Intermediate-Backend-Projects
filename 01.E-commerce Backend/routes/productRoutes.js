const express = require("express");
const isAdmin = require("../middlewares/isAdmin");
const productRouter = express.Router();

// create product
productRouter.post("/", isAdmin, createProduct);

// get all products
productRouter.get("/", getAllProducts);

// get product by id
productRouter.get("/:id", getProductById);

// update product by id
productRouter.put("/:id", isAdmin, updateProductById);

// delete product by id
productRouter.delete("/:id", isAdmin, deleteProductById);

module.exports = productRouter;
