import {
  serializeUserRegistration,
  serializeUserUpdate,
} from "../serialize/user.serialize.js";
import { catchAsync } from "../utils/catchAsync.js";
import {
  validateSignUp,
  validateUpdate,
} from "../validation/user.validation.js";
import usersModel from "../model/user.model.js";
import { AppError } from "../utils/appError.js";
export const createUser = catchAsync(async (req, res, next) => {
  const result = validateSignUp(req.body);
  const user = await usersModel.create(result);
  const show = serializeUserRegistration(user);
  res.status(201).json(show);
});

export const updateUser = catchAsync(async (req, res, next) => {
  const result = validateUpdate(req.body);
  const id = req.user._id;
  const user = await usersModel.findById(id);
  if (!user) {
    throw new AppError("User not found", 404);
  }
  Object.assign(user, result);
  await user.save();
  const show = serializeUserUpdate(user);
  res.status(201).json(show);
});

export const login = catchAsync(async (req, res, next) => {});
