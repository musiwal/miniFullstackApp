const express = require("express");
const router = express.Router();

// Sample products data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    image:
      "https://plus.unsplash.com/premium_photo-1664202526475-8f43ee70166d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzXjGNCo0ekoj7HTxcPdhBckiB4-sPbSPYlPGuYsawhPf_-SZHLTMALaP1x_aiKySHHaoDS_wr9eQXjvQgh9fhzn_42gkPlrMZQixAcKx6ZYd66hZeroQG0C9DyKYI7c4cSQ9p__3KVA&usqp=CAc",
  },
  {
    id: 3,
    name: "Product 3",
    price: 39.99,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTfn-9prs7cPUuhSr09n85trqc-L0jQKziZAGSqgKfkqtXCKJN0Bfsehc6Qw6i-btPShHmlz5j8RiuI8uLnOxiCbxVpjhVSeVUvfcFxRft6fA-Dm4xKTv2nsCrIGH40r2zQCEUxdQ&usqp=CAc",
  },
];

// GET /products
router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;
