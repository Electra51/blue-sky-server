import express from "express";

import { createCategoryController } from "../controllers/categoryController.js";
const router = express.Router();

router.post("/category-create", createCategoryController);
export default router;
