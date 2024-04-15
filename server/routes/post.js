import express from "express";
import {
    getFeedPosts,
    getUserPosts,
    createPost,
    likePost
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken,  getFeedPosts);
router.get("/:userId/posts",verifyToken, getUserPosts);

/* CREATE */
router.post("/", verifyToken, createPost);

// /* UPDATE */
// router.patch("/:id", auth, updatePost);

// /* DELETE */
// router.delete("/:id", auth, deletePost);

/* LIKE */
router.patch("/:id/like", verifyToken, likePost);

export default router;
