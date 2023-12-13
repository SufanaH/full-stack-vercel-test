const express = require("express");
const cors = require('cors');
require("dotenv").config();

const connectDB = require("../config/db");
const productRouter = require("../routes/productsRoute");

const app = express();
const PORT = process.env.PORT


connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World! Welcome to my Server");
});

app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


module.exports = app;