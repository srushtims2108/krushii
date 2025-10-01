import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  category: { type: String },
  name: { type: String },
  description: { type: String },
});

const farmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String },
  location: { type: String },
  description: { type: String },
  products: [productSchema], // <-- make sure this is an array of objects
});

const Farmer = mongoose.model("Farmer", farmerSchema);
export default Farmer;
