import mongoose from "mongoose";

const ashramSchema = new mongoose.Schema({
  slNo: { type: Number }, // Serial number
  name: { type: String, required: true }, // Name of person/ashram contact
  ashramName: { type: String }, // Name of the ashram
  address: { type: String }, // Full address
  mobile: [{ type: String }], // Multiple mobile numbers
  cropDiversity: { type: String }, // Details of crops / plants diversity
});

const Ashram = mongoose.model("Ashram", ashramSchema);

export default Ashram;
