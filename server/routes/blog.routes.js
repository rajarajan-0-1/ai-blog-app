import express from "express"
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogComments, getBlogsById, togglePublish } from "../controllers/blog.controller.js";
import upload from "../middleware/multer.js";
import { auth } from "../middleware/auth.middleware.js";

const blogRouter = express.Router();

// blogRouter.post("/add", upload.single('image'), auth, addBlog);
blogRouter.post("/add", upload.single("image"), addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/:blogId", getBlogsById);
blogRouter.post("/delete", auth, deleteBlogById);
blogRouter.post("/toggle-publish", auth, togglePublish);
blogRouter.post("/add-comment", addComment);
// blogRouter.post("/add-comment", addComment);
blogRouter.post("/comments", getBlogComments);
blogRouter.post("/generate", generateContent);

export default blogRouter;