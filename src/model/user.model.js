import { Schema, model } from "mongoose";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { POSITIONS } from "../enum/position.enum.js";
import { AppError } from "../utils/appError.js";
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
    enum: POSITIONS,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subject: { type: [String] },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("email")) {
    const emailExists = await this.constructor.findOne({ email: this.email });
    if (emailExists) {
      throw new AppError("User with this email already exists.", 409);
    }
  }
  if (this.isModified("password")) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
    } catch (error) {
      throw new AppError("Password encryption failed.", 500);
    }
  }
  next();
});

export default model("User", UserSchema);
