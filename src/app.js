import express from "express";
import mongoose from "mongoose";

import { MONGO_URL } from "./constants/main.js";
import { globalErrorHandler } from "./controller/error.controller.js";
const app = express();

app.use(express.json());

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
import User from "./routes/user.routes.js";

app.use("/users", User);

app.use(globalErrorHandler);
app.listen(3000, () => {
  console.log("Running");
});
