import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    paths: './env'
});

connectDB()



















/*
import express from "express";
const app = express();
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
    app.on('error', (error) => {
        console.error("Error in Express app:", error.message);
    })

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    });

  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
} */