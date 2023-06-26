import { Schema, model } from "mongoose";
const UserSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
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
    subject:{      type: String,
        required: true,},
    password: {
      type: String,
      required: true,
    },
  });