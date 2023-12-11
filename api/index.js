const express = require("express");

require('dotenv').config();

const productRouter = require('../routes/productsRoute')

const app = express();

const PORT = process.env.PORT ;

app.get("/", (req, res) => {
  res.send("Hello, World! Welcome to my Server");
});

app.use("/products", productRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });