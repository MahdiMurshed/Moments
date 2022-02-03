import express from "express";
import auth from "../middleware/auth.js";
const router = express.Router();
import { createPost, getPosts } from "../controllers/post.js";

router.get("/", getPosts);
router.post("/", auth, createPost);

export default router;
