import isAuth from "../middleware/is-auth.js";
import express from "express";
import { getAllTrans, postTrans } from "../controller/manager.js";

const router = express.Router();

router.get("/all", isAuth, getAllTrans);

router.post("/transaction", isAuth, postTrans);

export default router;
