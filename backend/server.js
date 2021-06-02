const express = require("express");
const app = express();
const PORT = 5000;
const products = require("./data/products");
const dotenv = require("dotenv");
const connected = require("./config/connectDB");

// dotenv.config();
connected();

app.get("/", (req, res) => {
  res.send("APP is running ...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`server up and running on port ${PORT}`);
});
