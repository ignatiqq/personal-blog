import { Router } from "express";

import { BlogController, adminController } from "../controllers/index.js"
import { authMiddleware } from "../middlewares/index.js";

const router = new Router();

router.get("/article", BlogController.showAllArticles);
router.post("/create", authMiddleware, BlogController.create);
router.get("/article/:id", BlogController.showArticleById);
router.post("/delete", authMiddleware, BlogController.delete);
router.get("/change/:id", BlogController.showArticleById);
router.post("/change/:id", authMiddleware, BlogController.update);

router.post("/authorization-by-admin", adminController.authorization);
router.get("/refresh", adminController.refresh);

export default router;