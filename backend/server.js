const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const productsRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
require("dotenv").config();

const app = express(); // express  instance

app.use(express.json()); // middleware to parse JSON request bodies

const PORT = process.env.PORT || 5000;

app.use(cors()); // middleware throw new Error("");
app.use(bodyParser.json()); // middleware   parse JSON request

// routes

app.get("/", (req, res) => {
  res.send("shopping App Backend is running");
});
app.use("/products", productsRoutes);
app.use("/cart", cartRoutes);

//start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
