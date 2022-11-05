import express from "express";
import {watch, edit} from "../controllers/videoController";

const videoRouter = express.Router();


videoRouter.get("/edit", edit);
videoRouter.get("/watch", watch);

export default videoRouter;