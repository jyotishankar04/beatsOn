import express from "express";
import { loginUser, RegisterController } from "../controllers/auth.controller";

const router = express.Router();

router.post("/register", RegisterController);
router.get("/login", loginUser);

export default router;
