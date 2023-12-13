const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database is connected ");
  } catch (error) {
    console.log("Connection is failed "+error.message);
  }
};

module.exports = connectDB;
