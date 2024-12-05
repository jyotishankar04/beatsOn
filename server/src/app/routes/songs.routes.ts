import express from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  res.send("hello world");
});

export default router;
