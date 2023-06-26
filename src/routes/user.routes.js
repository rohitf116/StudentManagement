import { Router } from "express";
// import { createUser } from "../controllers/users.controller.js";
// import { isAuth } from "../middlewares/auth.js";

import { createUser } from "../controller/user.controller.js";

const router = Router();

router.route("/").post(createUser);
// router.route("/signin").post(login);

// router.route('/:id').patch(isAuth, isVerified, valideUpdate, updateUser);

export default router;
