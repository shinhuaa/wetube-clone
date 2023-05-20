// install express
// npm install --save-dev @babel/core
// npm install @babel/core @babel/node --save-dev
//import express from "express"; === const express = require("express"); 왼쪽이 최신 버전 둘다 같음
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalrouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views")
app.use(logger);
app.use(express.urlencoded({extened: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;



