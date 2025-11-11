//routes/ashrams.js
import express from "express";
import Ashram from "../models/ashram.js";

const router = express.Router();

// Get all ashrams with optional search
router.get("/", async (req, res) => {
  try {
    const { search } = req.query;
    
    let query = {};
    
    // If search parameter exists, search in address field
    if (search && search.trim() !== "") {
      query.address = { 
        $regex: search.trim(), 
        $options: "i" // Case-insensitive search, works with Kannada too
      };
    }
    
    const ashrams = await Ashram.find(query);
    
    // return empty array (200) instead of 404 when no docs found
    if (!ashrams || ashrams.length === 0) {
      return res.json([]);
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

export default router; // keep single default export
