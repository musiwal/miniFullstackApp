const express = require("express");
const router = express.Router();

let cart = [];

// GET /cart
router.get("/", (req, res) => {
  res.json(cart);
});

// POST /cart
router.post("/", (req, res) => {
  const { id, name, price, image } = req.body;
  cart.push({ id, name, price, image });
  res.status(201).json(cart);
});

// DELETE /cart/:id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  cart = cart.filter((item) => item.id !== id);
  res.json(cart);
});

module.exports = router;
