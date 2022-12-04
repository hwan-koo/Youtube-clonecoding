import express from "express";
import { getEdit, startKakaoLogin,finishKakaoLogin ,logout,see,startGithubLogin,finishGithubLogin, postEdit, getChangePassword, postChangePassword } from "../controllers/userController";
import { avatarUpload, protetorMiddleware, publicOnlyMiddleware} from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protetorMiddleware, logout);
userRouter.route("/edit").all(protetorMiddleware).get(getEdit).post(avatarUpload.single("avatar"),postEdit);
userRouter.route("/change-password").all(protetorMiddleware).get(getChangePassword).post(postChangePassword);
userRouter.get("/github/start",publicOnlyMiddleware,startGithubLogin);
userRouter.get("/github/finish",publicOnlyMiddleware,finishGithubLogin);
userRouter.get("/kakao/start",publicOnlyMiddleware ,startKakaoLogin);
userRouter.get("/kakao/finish",publicOnlyMiddleware ,finishKakaoLogin);
userRouter.get("/:id", see);
export default userRouter;