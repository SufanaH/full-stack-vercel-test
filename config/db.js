const mongoose = require("mongoose");
require('dotenv').config();

const dev = require("../config/server");
const mongodbUrl = dev.db.url

const connectDB = async () => {
  try {
    await mongoose.connect(mongodbUrl);
    console.log("Database is connected ");
  } catch (error) {
    console.log("Connection is failed "+error.message);
  }
};

module.exports = connectDB;
