import express from "express";
import Ashram from "../models/ashram.js"; // Ensure correct path

const router = express.Router();

// Get all ashrams
router.get("/", async (req, res) => {
  try {
    const ashrams = await Ashram.find();
    if (!ashrams || ashrams.length === 0) {
      return res.status(404).json({ message: "No ashrams found" });
    }
    res.json(ashrams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get ashram by ID
router.get("/:id", async (req, res) => {
  try {
    const ashram = await Ashram.findById(req.params.id);
    if (!ashram) return res.status(404).json({ error: "Ashram not found" });
    res.json(ashram);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
