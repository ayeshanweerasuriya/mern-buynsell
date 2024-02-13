import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

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

app.use(express.json());

app.listen(3000, () => {
  console.log("server is running in port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// create middileware to handle errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
