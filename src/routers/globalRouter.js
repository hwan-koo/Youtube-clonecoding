import express from "express";
import { recommendedVideos } from "../controllers/videoController";
import { join } from "../controllers/userController";

const globalRouter = express.Router();


globalRouter.get("/" , recommendedVideos);
globalRouter.get("/join", join);

export default globalRouter;