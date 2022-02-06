import express from "express";
const router = express.Router();
import { postSignin } from "../controller/user.js";
import { postLogin } from "../controller/user.js";

router.post("/signUp", postSignin);
router.post("/login", postLogin);

export default router;
