import express from "express";
import {
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerController);

//Login
router.post("/login", loginController);

router.get("/test", requireSignIn, isAdmin, testController);

//protected route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
