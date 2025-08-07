import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user_routes";
import courseRoutes from "./routes/courseRoutes";

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use(userRoutes);
app.use(courseRoutes);

mongoose.connect(process.env.MONGO_URI!)
  .then(() => app.listen(3000, () => console.log("Server running on port 3000")))
  .catch((err) => console.error("DB connection failed", err));