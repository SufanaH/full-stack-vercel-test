const express = require("express");
const cors = require('cors');
require("dotenv").config();

const connectDB = require("../db");
const productRouter = require("../routes/productsRoute");

const app = express();

const PORT = process.env.PORT || 3038
//const MONGODB_URL = (process.env.MONGODB_URL || 'mongodb+srv://Sufana:sufana123@cluster0.zuslhqs.mongodb.net/full-stack-vercel-test?retryWrites=true&w=majority')


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
