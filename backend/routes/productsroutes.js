const express = require("express");

const router = express.Router();

// In-memory storage for products
let products = [];

// GET /products - Fetch all products
router.get("/", (req, res) => {
  res.json(products);
});

// POST /products - Add a new product
router.post("/", (req, res) => {
  const { id, name, price, image } = req.body;

  // Validation
  if (!id || !name || !price || !image) {
    return res
      .status(400)
      .json({ error: "All fields are required: id, name, price, image" });
  }

  // Check for duplicate IDs
  if (products.some((product) => product.id === id)) {
    return res
      .status(400)
      .json({ error: "Product with this ID already exists" });
  }

  // Add the product
  const newProduct = { id, name, price, image };
  products.push(newProduct);

  // Respond with the updated product list
  res.status(201).json(products);
});

// DELETE /products/:id - Remove a product
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  // Check if product exists
  if (!products.some((product) => product.id === id)) {
    return res.status(404).json({ error: "Product not found" });
  }

  // Remove the product
  products = products.filter((product) => product.id !== id);

  // Respond with the updated product list
  res.json(products);
});

module.exports = router;
