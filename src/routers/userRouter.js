import express from "express";
import { edit } from "../controllers/videoController";
import { deleteUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/delete",deleteUser);
userRouter.get("/edit",edit);

export default userRouter;