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
    title: {
      type: String,
      required: true,
      enum: Title,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  });