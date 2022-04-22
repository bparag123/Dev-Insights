const mongoose = require("mongoose");
require("dotenv").config()

const db = process.env.MONGO_URL

const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDb connected...");
  } catch (e) {
    console.error(e.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDb;
