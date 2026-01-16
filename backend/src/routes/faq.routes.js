import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  getFAQsController,
  searchFAQsController,
  getByCategoryController,
  createFAQController,
  updateFAQController,
  deleteFAQController
} from "../controllers/faq.controller.js";

const router = express.Router();

router.get("/", getFAQsController);
router.get("/search", searchFAQsController);
router.get("/category/:category", getByCategoryController);

router.post("/", authMiddleware, createFAQController);
router.put("/:id", authMiddleware, updateFAQController);
router.delete("/:id", authMiddleware, deleteFAQController);

export default router;
