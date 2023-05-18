import express from "express";
import { watch, getEdit, postEdit, getUpLoad, postUpLoad } from "../controllers/videoController";
const videoRouter = express.Router();


videoRouter.route("/:id(\\d+)").get(watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpLoad).post(postUpLoad);


export default videoRouter;