import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./configs/db.js";
import adminRouter from "./routes/admin.routes.js";
import blogRouter from "./routes/blog.routes.js";

const app = express();

await connectDB()

// middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API is Working"));
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})

export default app;