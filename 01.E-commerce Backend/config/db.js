const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected Successfully`);
  } catch (error) {
    console.log("Error creating DataBase connection");
    process.exit(1);
  }
};

module.exports = connectDB;
