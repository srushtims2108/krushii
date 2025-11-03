import express from "express";
import  Farmer  from "../models/Farmer.js";

const router = express.Router();

// Get all farmers
router.get("/", async (req, res) => {
  try {
    const farmers = await Farmer.find(); // no need to populate if products are embedded
    if (!farmers || farmers.length === 0) {
      return res.status(404).json({ message: "No farmers found" });
    }
    res.json(farmers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get farmer by ID
router.get("/:id", async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.id);
    if (!farmer) return res.status(404).json({ error: "Farmer not found" });
    res.json(farmer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
