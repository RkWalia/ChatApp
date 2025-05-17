import express from "express";
import {
  checkAuth,
  login,
  logout,
  signin,
  updateProfile,
} from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signin);
router.post("/login", login);
router.post("/logout", logout);

router.put("/updateProfile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;
