const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB Connected Successfully`);
  } catch (error) {
    console.log("Error creating DataBase connection", error);
    process.exit(1);
  }
};

module.exports = connectDB;
