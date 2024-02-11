import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // initialize dotenv

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected mongoDB!");
  })
  .catch((err) => {
    console.error(err);
  });
const app = express();

app.listen(3000, () => {
  console.log("server is running in port 3000");
});
