import fs from "fs";
import imagekit from "../configs/imagekit.js";
import BlogModel from "../models/Blog.js";
import Comment from "../models/Comment.js"; // <-- IMPORTANT
import main from "../configs/gemini.js";

// export const addBlog = async (req, res) => {
//   try {
//     const { title, subTitle, description, category, ispublished } =
//       JSON.parse(req.body.blog); // <-- Corrected field name

//     const imgFile = req.file;

//     if (!title || !description || !category || !subTitle || !imgFile) {
//       return res.json({ success: false, message: "Missing required fields" });
//     }

//     const fileBuffer = await fs.promises.readFile(imgFile.path);

//     const response = await imagekit.upload({
//       file: fileBuffer,
//       fileName: imgFile.originalname,
//       folder: "/blogs",
//     });

//     const optimizedImageURL = imagekit.url({
//       path: response.filePath,
//       transformation: [
//         { quality: "auto" },
//         { format: "webp" },
//         { width: "1280" },
//       ],
//     });

//     const image = optimizedImageURL;

//     await BlogModel.create({
//       title,
//       subTitle,
//       description,
//       category,
//       image,
//       isPublished: ispublished, // <-- FIXED
//     });

//     res.json({ success: true, message: "Blog added Successfully!" });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } =
      JSON.parse(req.body.blog);

    const imgFile = req.file;

    if (!title || !subTitle || !description || !category || !imgFile) {
      return res.json({ success: false, message: "Missing fields" });
    }

    const fileBuffer = await fs.promises.readFile(imgFile.path);

    const uploadResult = await imagekit.upload({
      file: fileBuffer,
      fileName: imgFile.originalname,
      folder: "/blogs",
    });

    const image = imagekit.url({
      path: uploadResult.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" }
      ]
    });

    await BlogModel.create({
      title,
      subTitle,
      description,
      category,
      isPublished,
      image
    });

    res.json({ success: true, message: "Blog added successfully!" });

  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

export const getAllBlogs = async (req, res) => 
{
  try {
    const blogs = await BlogModel.find({ isPublished: true });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getBlogsById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await BlogModel.findById(blogId);
    if (!blog) {
      return res.json({ success: false, message: "Blog not found!" });
    }
    res.json({ success: true, blog });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;
    await BlogModel.findByIdAndDelete(id);

    await Comment.deleteMany({ blog: id });

    return res.json({ success: true, message: "Blog deleted successfully!" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Blog ID is required" });
    }

    const blog = await BlogModel.findById(id);

    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    blog.isPublished = !blog.isPublished;
    await blog.save();

    res.json({
      success: true,
      message: "Blog status updated",
      isPublished: blog.isPublished,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addComment = async (req, res) => {
  try {
  const { blog, name, content } = req.body;
  console.log("Received body:", req.body);
    await Comment.create({ blog, name, content });
    res.json({ success: true, message: "Comment added for review" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getBlogComments = async (req, res) => {
  try {
    const { blogId } = req.body;
    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({
      createdAt: -1,
    });
    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

  export const generateContent = async (req, res) => {
    try {
      const { prompt } = req.body;

      const content = await main(
        prompt + " — Generate a blog content for this topic in simple text format."
      );

      return res.json({ success: true, content });
    } catch (error) {
      console.error("Error generating content:", error);
      return res.json({ success: false, message: error.message });
    }
  };

