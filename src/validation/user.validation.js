import { UserJoiSchema, UserJoiUpdateSchema } from "../joiSchema/user.joi.js";
import { AppError } from "../utils/appError.js";
import { getError } from "../utils/errors.js";
import { validator } from "./main.js";

export const validateSignUp = (payload) => {
  const validateRegister = validator(UserJoiSchema);
  const { error, value } = validateRegister(payload);
  if (error) {
    throw new AppError(getError(error), 400);
  }
  return value;
};

export const validateUpdate = (payload) => {
  const validateRegister = validator(UserJoiUpdateSchema);
  const { error, value } = validateRegister(payload);
  if (error) {
    throw new AppError(getError(error), 400);
  }
  return value;
};
