import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import farmersRoute from "./routes/farmers.js";
import ashramsRoute from "./routes/ashrams.js";

dotenv.config();
const app = express();
app.use(cors({
  origin: "http://localhost:5173", // <--- frontend URL for Vite
  credentials: true,               // optional if you need cookies/auth
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Use farmers routes
app.use("/api/farmers", farmersRoute);
app.use("/api/ashrams", ashramsRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
