require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("bufferTimeoutMS", 20000);

const mongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

module.exports = mongoConnection;
