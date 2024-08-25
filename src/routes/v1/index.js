import express from "express";
const router = express.Router();

import { createPost, getPosts, getPostById,updatePost,deletePost } from "../../controllers/post-controller.js";

import {createUser,usersignin} from "../../controllers/user-controller.js"

// /api/v1/posts POST
router.post("/posts", createPost);

router.post("/user", createUser);

router.post("/login", usersignin);

// /api/v1/posts/:id GET
router.get("/posts/:id", getPostById);

// /api/v1/posts GET
router.get("/posts",getPosts );

// /api/v1/posts/:id PUT
router.put("/posts/:id", updatePost);

// /api/v1/posts/:id DELETE
router.delete("/posts/:id", deletePost);

export default router;
