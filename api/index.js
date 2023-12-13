const express = require("express");
const cors = require('cors');

require("dotenv").config();

const productRouter = require("../routes/productsRoute");
const connectDB = require("../config/db");

const app = express();

const PORT = process.env.SERVER_PORT || 3038
const URL = (process.env.MONGODB_URL|| 'mongodb+srv://Sufana:sufana123@cluster0.zuslhqs.mongodb.net/full-stack-vercel-test?retryWrites=true&w=majority')


connectDB();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello, World! Welcome to my Server");
});

app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
