import Joi from "joi";
import { POSITIONS } from "../enum/position.enum.js";

export const UserJoiSchema = Joi.object({
  name: Joi.string().min(1).required(),
  position: Joi.string()
    .valid(...POSITIONS)
    .required(),
  email: Joi.string().email().required(), // Optional field
  password: Joi.string().min(8).max(15).required(), // Optional field
  subject: Joi.array().items(Joi.string()).min(1),
}).unknown(false);

export const UserJoiUpdateSchema = Joi.object({
  name: Joi.string().min(1).optional(),
  position: Joi.string()
    .valid(...POSITIONS)
    .optional(),
  email: Joi.string().email().optional(), // Optional field
  password: Joi.string().min(8).max(15).optional(), // Optional field
  subject: Joi.array().items(Joi.string()).min(1).optional(),
}).unknown(false);

export const UserJoiLoginSchema = Joi.object({
  email: Joi.string().email().required(), // Optional field
  password: Joi.string().min(8).max(15).required(), // Optional field
}).unknown(false);
