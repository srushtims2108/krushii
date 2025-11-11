// backend/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Farmer schema (with embedded products)
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
  products: [productSchema],
});

const Farmer = mongoose.model("Farmer", farmerSchema);

// MongoDB connection
const uri = process.env.MONGODB_URI || "mongodb+srv://rpchaithra07:rpchaithra12345@cluster0.ksmwceg.mongodb.net/?appName=Cluster0";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Seed function
async function seed() {
  try {
    await Farmer.deleteMany({}); // clear previous data

    const farmersData = [
      {
        name: "ಕೃಷಿಕ",
        contact: "9380637551",
        location: null,
        products: [
          { category: "Seeds / ಬೀಜಗಳು", name: "ಗೊಬ್ಬರ ಗಿಡ ಬೀಜ (Gliricidia)", description: null },
          { category: "Seeds / ಬೀಜಗಳು", name: "ವೆಲ್ವೆಟ್ ಬೀನ್ಸ್ ಬೀಜ", description: null },
          { category: "Seeds / ಬೀಜಗಳು", name: "ಕಾಡು ಎಸರು", description: null },
          { category: "Seeds / ಬೀಜಗಳು", name: "ಸುಬಾಬುಲ್ ಬೀಜ", description: null },
          { category: "Seeds / ಬೀಜಗಳು", name: "ಅಗಸೆ ಬೀಜ", description: null },
          { category: "Seeds / ಬೀಜಗಳು", name: "ಜಾಟ್ರೊಪಾ ಬೀಜ", description: null },
          { category: "Seeds / ಬೀಜಗಳು", name: "ನುಗ್ಗೆ ಬೀಜ", description: null },
          { category: "Seeds / ಬೀಜಗಳು", name: "ಹೆಬ್ಬೆವು ಬೀಜ", description: null },
          { category: "Seeds / ಬೀಜಗಳು", name: "Dhaaincha seeds", description: null },
          { category: "Seeds / ಬೀಜಗಳು", name: "ಸೆಣಬು", description: null }
        ]
      },
      {
        name: "ಎಸ್. ಎಮ್.ಕೆ. ಸೀಡ್ಸ್",
        contact: "9481612513, 6360817637",
        location: "ಬರದೂರ ಪೋಸ್ಟ್, ಮುಂಡರಗಿ ತಾಲ್ಲೂಕು, ಗದಗ ಜಿಲ್ಲೆ - 582113",
        products: [
          { category: "Seeds / ಬೀಜಗಳು", name: "CoFS-29", description: "ಬಹುವಾರ್ಷಿಕ ಮೇವಿನ ಜೋಳ" },
          { category: "Seeds / ಬೀಜಗಳು", name: "CoFS-31", description: "ಬಹುವಾರ್ಷಿಕ ಮೇವಿನ ಜೋಳ" },
          { category: "Seeds / ಬೀಜಗಳು", name: "Lucerne / Alfalfa", description: "ಕುದುರಿಮೆಂತೆ" },
          { category: "Seeds / ಬೀಜಗಳು", name: "Hedge Lucerne", description: "ಬೇಲಿಮೆಂತೆ" },
          { category: "Seeds / ಬೀಜಗಳು", name: "Susbania", description: "ಚೋಗಚಿ (ಅಗಸೆ)" },
          { category: "Seeds / ಬೀಜಗಳು", name: "Subabul", description: "ಸುಬಾಬುಲ್" },
          { category: "Seeds / ಬೀಜಗಳು", name: "Drumstick", description: "ನುಗ್ಗೆ" },
          { category: "Seeds / ಬೀಜಗಳು", name: "Stylo Hemoto", description: "ಹುಲ್ಲಿನ ಬೀಜಗಳು" },
          { category: "Seeds / ಬೀಜಗಳು", name: "Super Napier", description: "ಮೇವು" },
          { category: "Seeds / ಬೀಜಗಳು", name: "Gini Grass", description: "ಹುಲ್ಲಿನ ಬೀಜ" },
          { category: "Seeds / ಬೀಜಗಳು", name: "African Tall", description: "ಮೇವಿನ ಮೆಕ್ಕೆಜೋಳ" },
          { category: "Seeds / ಬೀಜಗಳು", name: "Suragram Grass", description: "ಮೇವಿನ ಜೋಳ" },
          { category: "Seeds / ಬೀಜಗಳು", name: "Velvet Beans", description: "ಅವರೆ ಬೀಜ" },
          { category: "Seeds / ಬೀಜಗಳು", name: "ಹಾಲ್ವಾಣ ಬೀಜ", description: null },
          { category: "Seeds / ಬೀಜಗಳು", name: "Sunhemp", description: "ಷೆಣಬಿನ ಬೀಜ" },
          { category: "Seeds / ಬೀಜಗಳು", name: "Dayancha", description: null },
          { category: "Seeds / ಬೀಜಗಳು", name: "Gliricidia", description: null }
        ]
      },
      {
        name: "Kanakapura Organic Producer Company",
        contact: "7975438900",
        location: "Kanakapura, Karnataka",
        products: [
          { category: "Millets / ಸಿದ್ದಾರ್ಥಗಳು", name: "ಸಾಮೆ", description: "₹110/kg (2kg free)" },
          { category: "Millets / ಸಿದ್ದಾರ್ಥಗಳು", name: "ಹಾರಕ", description: "₹80/kg (2kg free)" },
          { category: "Millets / ಸಿದ್ದಾರ್ಥಗಳು", name: "ನವಣೆ", description: "₹80/kg (2kg free)" },
          { category: "Millets / ಸಿದ್ದಾರ್ಥಗಳು", name: "ಊದಲು", description: "₹80/kg (2kg free)" },
          { category: "Millets / ಸಿದ್ದಾರ್ಥಗಳು", name: "ರಾಗಿ MR 6", description: "₹75/kg" },
          { category: "Millets / ಸಿದ್ದಾರ್ಥಗಳು", name: "ರಾಗಿ ML 365", description: "₹75/kg" },
          { category: "Pulses / ಪಲ್ಸಸ್", name: "ತೊಗರಿ", description: "₹175/kg" },
          { category: "Pulses / ಪಲ್ಸಸ್", name: "ಅವರೆ", description: "₹180/kg" },
          { category: "Pulses / ಪಲ್ಸಸ್", name: "ತರಗುಣೆ (ಹಲಸಂದೆ)", description: "₹180/kg" },
          { category: "Pulses / ಪಲ್ಸಸ್", name: "ಹೆಸರು", description: "₹180/kg" },
          { category: "Pulses / ಪಲ್ಸಸ್", name: "ಉದ್ದು", description: "₹180/kg" },
          { category: "Native Ragi Seeds / ಸ್ಥಳೀಯ ರಾಗಿ ಬೀಜಗಳು", name: "ಕೆಂಪು ರಾಗಿ", description: "₹80/kg" },
          { category: "Native Ragi Seeds / ಸ್ಥಳೀಯ ರಾಗಿ ಬೀಜಗಳು", name: "ಬೋಂಡಾ ರಾಗಿ", description: "₹80/kg" },
          { category: "Native Ragi Seeds / ಸ್ಥಳೀಯ ರಾಗಿ ಬೀಜಗಳು", name: "ಶರಾವತಿ", description: "₹80/kg" },
          { category: "Native Paddy / ಸ್ಥಳೀಯ ಅಕ್ಕಿ", name: "ಸಿದ್ದ ಸಣ್ಣ", description: "₹90/kg" },
          { category: "Native Paddy / ಸ್ಥಳೀಯ ಅಕ್ಕಿ", name: "ರಾಜಮುಡಿ", description: "₹90/kg" },
          { category: "Native Paddy / ಸ್ಥಳೀಯ ಅಕ್ಕಿ", name: "ಗಂಧ ಸಾಲೆ", description: "₹90/kg" },
          { category: "Native Paddy / ಸ್ಥಳೀಯ ಅಕ್ಕಿ", name: "ಗೌರಿ ಸಣ್ಣ", description: "₹90/kg" },
          { category: "Native Paddy / ಸ್ಥಳೀಯ ಅಕ್ಕಿ", name: "ಕೆಂಪು ಮುಂಡಗ", description: "₹90/kg" },
          { category: "Native Paddy / ಸ್ಥಳೀಯ ಅಕ್ಕಿ", name: "ನವರ", description: "₹90/kg" },
          { category: "Groundnut / ಕಡಲೆಕಾಯಿ", name: "ಕಡಲೆಕಾಯಿ (K6)", description: null },
          { category: "Groundnut / ಕಡಲೆಕಾಯಿ", name: "ಕೆಂಪು ಗುತ್ತಿ", description: null }
        ]
      },
      {
        name: "ಹೂವಿನ ಹಡಗಲಿಯ ಕಲ್ಲಪ್ಪ",
        contact: "9739191437",
        location: "ಉತ್ತಂಗಿ, ಹೂವಿನಹಡಗಲಿ ತಾಲೂಕು, ವಿಜಯನಗರ ಜಿಲ್ಲೆ",
        products: [
          { category: "Millets (ಸಿರಿಧಾನ್ಯಗಳು)", name: "7 ಪ್ರಕಾರದ ಸಿರಿಧಾನ್ಯಗಳು", description: "Seven varieties of millets" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಕರಿ ಕಡಲೆ", description: "Black Chickpea" },
          { category: "Cash Crop (ಹತ್ತಿ)", name: "ಜಯಧರ ಹತ್ತಿ", description: "Jayadhara Cotton" },
          { category: "Oilseeds (ಎಣ್ಣೆ ಬೀಜಗಳು)", name: "ಸೋಯಾಬೀನ್ಸ್", description: "Soybeans" },
          { category: "Spices (ಮಸಾಲೆ)", name: "ಮೆಂತೆ", description: "Fenugreek" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಓಂಕಾಳು", description: "Horse Gram" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಹೆಸರು", description: "Green Gram (Moong)" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಉದ್ದು", description: "Black Gram (Urad)" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಮಡಿಕೆ ಕಾಳು", description: "Cowpea" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಅವರೆ", description: "Field Beans" },
          { category: "Grains (ಧಾನ್ಯಗಳು)", name: "ಗೋಧಿ", description: "Wheat seeds" },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ವಿವಿಧ ತರಕಾರಿ ಬೀಜಗಳು", description: "Various vegetable seeds" },
          { category: "Medicinal Plants (ಔಷಧಿ ಸಸ್ಯಗಳು)", name: "ಔಷದಿ ಸಸ್ಯಗಳು", description: "Medicinal plant seeds" }
        ]
      },
      {
        name: "ರಮೇಶ್ ತರೀಕೆರೆ",
        contact: "+919241096073",
        location: "ತರೀಕೆರೆ",
        products: [
          { category: "Millets (ಸಿರಿಧಾನ್ಯಗಳು)", name: "ಹುರುಳಿ", description: "ಸ್ಥಳೀಯ ಹುರುಳಿ ಬೀಜ" },
          { category: "Millets (ಸಿರಿಧಾನ್ಯಗಳು)", name: "ನವಣೆ", description: "ಪೌಷ್ಟಿಕ ಮಿಲ್ಲೆಟ್ ಬೀಜ" },
          { category: "Millets (ಸಿರಿಧಾನ್ಯಗಳು)", name: "ಸಜ್ಜೆ", description: "ಪರಂಪರೆಯ ಸಜ್ಜೆ ಬೀಜ" },
          { category: "Millets (ಸಿರಿಧಾನ್ಯಗಳು)", name: "ಊದಲು", description: "ಆರೋಗ್ಯಕರ ಊದಲು ಬೀಜ" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ತೊಗರಿ", description: "ಸ್ಥಳೀಯ ತೊಗರಿ ಬೀಜ" },
          { category: "Oil Seeds (ಎಣ್ಣೆ ಬೀಜಗಳು)", name: "ಬರಗು", description: "ಸ್ಥಳೀಯ ಬರಗು ಬೀಜ" },
          { category: "Vegetables (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಕೂರಲೆ", description: "ಪರಂಪರೆಯ ಕೂರಲೆ ಬೀಜ" },
          { category: "Millets (ಸಿರಿಧಾನ್ಯಗಳು)", name: "ಜೋಳ", description: "ಸ್ಥಳೀಯ ಜೋಳ ಬೀಜ" }
        ]
      },
      {
        name: "ಶಿವರಾಜ್ ಪಾರಾಗೊಂಡ",
        contact: "+91 77220 06731",
        location: null,
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಮರ ತೊಗರಿ", description: "ನೈಸರ್ಗಿಕವಾಗಿ ಬೆಳೆದ ಮರ ತೊಗರಿ ಬೀಜ" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಬಿಳಿ ತೊಗರಿ", description: "ನೈಸರ್ಗಿಕವಾಗಿ ಬೆಳೆದ ಬಿಳಿ ತೊಗರಿ ಬೀಜ" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಕೆಂಪು ತೊಗರಿ", description: "ನೈಸರ್ಗಿಕವಾಗಿ ಬೆಳೆದ ಕೆಂಪು ತೊಗರಿ ಬೀಜ" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಪಿಂಕ್ ತೊಗರಿ", description: "ನೈಸರ್ಗಿಕವಾಗಿ ಬೆಳೆದ ಪಿಂಕ್ ತೊಗರಿ ಬೀಜ" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಗುಳ್ಳ ಯಾಳ ತೊಗರಿ", description: "ನೈಸರ್ಗಿಕವಾಗಿ ಬೆಳೆದ ಗುಳ್ಳ ಯಾಳ ತೊಗರಿ ಬೀಜ" }
        ]
      },
      {
        name: "ಶಿವಮೂರ್ತಿ",
        contact: "+91 70223 98917",
        location: null,
        products: [
          { category: "Millets (ಸಿರಿಧಾನ್ಯಗಳು)", name: "ರಾಗಿ", description: "ನೈಸರ್ಗಿಕವಾಗಿ ಬೆಳೆದ ರಾಗಿ ಬೀಜಗಳು" },
          { category: "Millets (ಸಿರಿಧಾನ್ಯಗಳು)", name: "ಉದುಲು", description: "ಸ್ಥಳೀಯ ಉದುಲು ಬೀಜಗಳು" },
          { category: "Millets (ಸಿರಿಧಾನ್ಯಗಳು)", name: "ಆರಕ", description: "ಸಾಂಪ್ರದಾಯಿಕ ಆರಕ (ಜೋಳದ ಒಂದು ಪ್ರಕಾರ) ಬೀಜಗಳು" },
          { category: "Millets (ಸಿರಿಧಾನ್ಯಗಳು)", name: "ಹರಳು", description: "ಹರಳು (Barn Millet) ಬೀಜಗಳು" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಅವರೇ ತೊಗರಿ", description: "ಅವರೇ ತೊಗರಿ ಬೀಜಗಳು" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಅಲಸಂದಿ", description: "ಸ್ಥಳೀಯ ಅಲಸಂದಿ ಬೀಜಗಳು" }
        ]
      },
      {
        name: "ಜಿ. ಪಿ ಅಂಜಿನಯ್ಯ",
        contact: "9742822792",
        location: "ಗ್ರಾಮ: ಮಂಡಲಗೆರೆ, ತಾಲ್ಲೂಕು: ರಾಯಚೂರು, ಪಿನ್ ಕೋಡ್: 584102",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ನಾಟಿ ಅಲ್ಸಂದೆ", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ನಾಟಿ ಅಲಸಂದೆ ಕೆಂಪು", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ನಾಟಿ ಹಲಸಂದೆ ಬಿಳಿ", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ನಾಟಿ ಅಲಸಂದೆ ಕೆಂಪು ಬೆಳೆ ಮಿಕ್ಸ್ರಣೆ", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಗೋವಿಂನಾ ಜೋಳ", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಉರುಳಿ ಕೆಂಪು", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಹುರುಳಿ ಬಿಳಿ", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ತೊಗರಿ ಕೆಂಪು", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ತೊಗರಿ ಬಿಳಿ", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಹೆಸರು ಕಾಳು", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಉದ್ದು", description: null }
        ]
      },
      {
        name: "ಸಿರಮಂತ ನಂದೂರ",
        contact: "9980334247",
        location: "ಬರಡೋಲ, ತಾ. ಚಡಚಣ, ಜಿ. ವಿಜಯಪುರ",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ತೊಗರಿ Foundation ಬೀಜ GRG-152", description: "ಮೊಳಕೆ ಪ್ರಮಾಣ ಪರೀಕ್ಷಿಸಿದ, ಶಿಫಾರಸ್ಸು ಮಾಡಿದ ಕ್ರಮಗಳಿಂದ ಬೆಳೆದ, Foundation variety. ದರ: ರೂ 100 / kg" }
        ]
      },
      {
        name: "ರಾಜೇಂದ್ರ ಬೆಳಗಾವಿ",
        contact: "+919632446565",
        location: "Belagavi, Karnataka",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಸೋಯಾಬೀನ್", description: "ಸೋಯಾಬೀನ್ ಬೀಜಗಳು ಲಭ್ಯವಿದೆ." },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಕಪ್ಪು ಕಡಲೆ (ಜವಾರಿ)", description: "ಕಪ್ಪು ಕಡಲೆ (ಜವಾರಿ) ಬೀಜಗಳು ಲಭ್ಯವಿದೆ." },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಜವೆ ಗೋದಿ", description: "ಜವೆ ಗೋದಿ ಬೀಜಗಳು ಲಭ್ಯವಿದೆ." }
        ]
      },
      {
        name: "ಕ್ರಷಿಕ",
        contact: "9620616616",
        location: "ಚಿತ್ರದುರ್ಗ, ಕರ್ನಾಟಕ",
        products: [
          { category: "Medicinal Seeds (ಔಷಧಿ ಬೀಜಗಳು)", name: "ರಾಮ ತುಳ್ಸಿ", description: "Rama Tulsi seeds - ₹1650" },
          { category: "Medicinal Seeds (ಔಷಧಿ ಬೀಜಗಳು)", name: "ಕೃಷ್ಣ ತುಳ್ಸಿ", description: "Krishna Tulsi seeds - ₹2000" },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ನುಗ್ಗೆ", description: "Drumstick seeds - ₹1650" },
          { category: "Forest Plant Seeds (ಅರಣ್ಯ ಸಸ್ಯ ಬೀಜಗಳು)", name: "ಶ್ರೀಗಂದ", description: "Sandalwood seeds - ₹2000" },
          { category: "Forest Plant Seeds (ಅರಣ್ಯ ಸಸ್ಯ ಬೀಜಗಳು)", name: "ಮಹಾಘಾನಿ", description: "Mahogany seeds - ₹1400" },
          { category: "Fruit Seeds (ಹಣ್ಣಿನ ಬೀಜಗಳು)", name: "ನಿಂಬೆ", description: "Lemon seeds - ₹2000" },
          { category: "Fruit Seeds (ಹಣ್ಣಿನ ಬೀಜಗಳು)", name: "ಸೀಬೆ", description: "Guava seeds - ₹1200" },
          { category: "Fruit Seeds (ಹಣ್ಣಿನ ಬೀಜಗಳು)", name: "ಪಪ್ಪಾಯಿ", description: "Papaya seeds - ₹2000" },
          { category: "Fruit Seeds (ಹಣ್ಣಿನ ಬೀಜಗಳು)", name: "ದಾಳಿಂಬೆ", description: "Pomegranate seeds - ₹1800" },
          { category: "Fruit Seeds (ಹಣ್ಣಿನ ಬೀಜಗಳು)", name: "ಸೀತಾಫಲ", description: "Custard apple seeds - ₹1500" },
          { category: "Medicinal Seeds (ಔಷಧಿ ಬೀಜಗಳು)", name: "ಬೃಂಗರಾಜ", description: "Bhringraj seeds - ₹2000" },
          { category: "Medicinal Seeds (ಔಷಧಿ ಬೀಜಗಳು)", name: "ಬಿಲ್ವ ಪತ್ರೆ", description: "Bilva patre seeds - ₹1500" },
          { category: "Medicinal Seeds (ಔಷಧಿ ಬೀಜಗಳು)", name: "ಗುಲಗಂಜಿ", description: "Abrus seeds (Red Black White) - ₹950" },
          { category: "Forest Plant Seeds (ಅರಣ್ಯ ಸಸ್ಯ ಬೀಜಗಳು)", name: "ಕಮಲಾ", description: "Lotus seeds - ₹1800" },
          { category: "Medicinal Seeds (ಔಷಧಿ ಬೀಜಗಳು)", name: "ಅಶ್ವಗಂಧ", description: "Ashwagandha seeds - ₹650" },
          { category: "Medicinal Seeds (ಔಷಧಿ ಬೀಜಗಳು)", name: "ಶತಾವರಿ", description: "Shatavari seeds - ₹2500" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಗಜ್ಜುಗ ಬೀಜ", description: "499/- Per Kg (Minimum 5 kg Order)" }
        ]
      },
      {
        name: "ಸಂತೋಷ ಪಾಗದ",
        contact: "9481448990 / 9741108500",
        location: "ಪೋ-ಕೊತಬಾಳ, ತಾ-ರೋಣ, ಜಿ-ಗದಗ",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "CoFS-31 - ಬಹುವಾರ್ಷಿಕ ಮೇವಿನ ಜೋಳ", description: "Multi cut fodder sorghum variety suitable for goats, sheep, and dairy farms." },
          { category: "Seeds (ಬೀಜಗಳು)", name: "Lucerne/Alfalfa - ಕುದುರಿಮೆಂತೆ", description: "High protein perennial fodder." },
          { category: "Seeds (ಬೀಜಗಳು)", name: "Hedgelucerne - ಬೇಲಿಮೆಂತೆ/ಧಶರಥ ಕಡ್ಡಿ", description: "Perennial fodder crop suitable as hedge and fodder." },
          { category: "Seeds (ಬೀಜಗಳು)", name: "Susbania - ಚೋಗಚಿ/ಅಗಸೆ/ಶಡೆ", description: "Fast-growing fodder tree crop." },
          { category: "Seeds (ಬೀಜಗಳು)", name: "Subabul - ಸುಬಾಬುಲ್", description: "Common perennial fodder tree for cattle and goats." },
          { category: "Seeds (ಬೀಜಗಳು)", name: "Drumstick - ನುಗ್ಗೆ", description: "Nutritious fodder leaves also used for human consumption." }
        ]
      },
      {
        name: "ಕ್ರಷಿಕ (ಮೇವಿನ ಬೀಜಗಳು)",
        contact: "9538838814",
        location: "ಚಿತ್ರದುರ್ಗ, ಕರ್ನಾಟಕ",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಮೇವಿನ ಬೀಜಗಳು", description: "Multi-cut fodder seeds (7-9 years continuous fodder supply). No thorns or weeds, improves milk yield and fat content, suitable for cows, goats, sheep, rabbits, horses, and native chicken. Can be used for silage, dry fodder, or green fodder." }
        ]
      },
      {
        name: "ಎಚ್.ಜೆ. ಪದ್ಮರಾಜು",
        contact: "9945323787",
        location: "ತೋವಿನಕೆರೆ 572138, ತುಮಕೂರು ಜಿಲ್ಲೆ",
        products: [
          { category: "Plants (ಸಸಿಗಳು)", name: "ತೆಂಗಿನ ಸಸಿಗಳು", description: "ಆಯ್ದ 25 ಮರಗಳಿಂದ ಆಯ್ದ ಕಾಯಿ ಮೂಲಕ ಬೆಳೆದ ನಾಟಿ ಸಸಿಗಳು. ಪ್ರತಿಯೊಂದು ₹150-175 ಕ್ಕೆ ಮಾರಾಟ. ಯಾವುದೇ ರಾಸಾಯನಿಕ ಗೊಬ್ಬರ ಅಥವಾ ಟಾನಿಕ್ ಬಳಸದೇ, 8 ವರ್ಷಗಳಿಂದ ಶುದ್ಧ ವಿಧಾನದಲ್ಲಿ ಬೆಳೆಯಲಾಗುತ್ತಿದೆ." }
        ]
      },
      {
        name: "ಕನಕಪುರ ಆರ್ಗಾನಿಕ್ ಪ್ರೋಡ್ಯುಸರ್ ಕಂಪನಿ (KOPCL)",
        contact: "9845968372 / 8431540724 / 7975438900",
        location: "ಕನಕಪುರ, ಕರ್ನಾಟಕ (ರಾಜ್ಯವ್ಯಾಪಿ ರೈತರಿಗೆ ಲಭ್ಯ)",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಕೊರಲೆ", description: "ಉಚಿತ ಬೀಜ ವಿತರಣೆ. ಖರೀದಿ ಬೆಲೆ: ₹4100" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಊದಲು", description: "ಉಚಿತ ಬೀಜ ವಿತರಣೆ. ಖರೀದಿ ಬೆಲೆ: ₹3900" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಸಾಮೆ", description: "ಉಚಿತ ಬೀಜ ವಿತರಣೆ. ಖರೀದಿ ಬೆಲೆ: ₹3900" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ನವಣೆ", description: "ಉಚಿತ ಬೀಜ ವಿತರಣೆ. ಖರೀದಿ ಬೆಲೆ: ₹3600" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಹಾರಕ", description: "ಉಚಿತ ಬೀಜ ವಿತರಣೆ. ಖರೀದಿ ಬೆಲೆ: ₹3600" }
        ]
      },
      
      {
        name: "ಪೂಚಂತೇ ಪರಪಂಚ",
        contact: "9591066583",
        location: "ಬೆಳವಾಡಿ, ಅರಕಲಗೂಡು ತಾಲ್ಲೂಕು, ಹಾಸನ 573113",
        description: "ವಿಸ್ಮಯಗಳ ಅಕ್ಷಯ ಪಾತ್ರೆ! ನೈಸರ್ಗಿಕ ಕೃಷಿಯಲ್ಲಿ ಬೆಳೆಸಿರುವ, ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಗಿಡಗಳು. ತೋಟಗಾರಿಕೆ ಬೆಳೆ, ಹಸಿರಿನ ಹೊಳೆ, ನೆಮ್ಮದಿ ನಾಳೆ",
        products: [
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಬಿಜಾಪುರ ಕಾಗ್ಜಿ ನಿಂಬೆ", description: "40-60" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಟಿಶ್ಯೂ ಕಲ್ಚರ್ ಏಲಕ್ಕಿ (ಪುಟ್ಟ ಬಾಳೆ)", description: "23" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಟಿಶ್ಯೂ ಕಲ್ಚರ್ ಪಚ್ಚ ಬಾಳೆ (ವಿಲಿಯಮ್ಸ್)", description: "14" },
          { category: "Vegetable Plants (ತರಕಾರಿ ಗಿಡಗಳು)", name: "ಅಗಸೆ ಸೊಪ್ಪು ಗಿಡ", description: "10+" },
          { category: "Vegetable Plants (ತರಕಾರಿ ಗಿಡಗಳು)", name: "PKM1 ನುಗ್ಗೆ", description: "15+" },
          { category: "Medicinal Plants (ಔಷಧಿ ಸಸ್ಯಗಳು)", name: "ಚಕ್ರ ಮುನಿ (Multi Vitamin plant)", description: "30+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಸಿದ್ದು ಹಲಸು", description: "250+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಚಂದ್ರ ಹಲಸು", description: "150+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ರುದ್ರಾಕ್ಷಿ ಹಲಸು", description: "160" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಗಮ್ ಲೆಸ್ ಹಲಸು", description: "130+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಗೋಡಂಬಿ ಹಲಸು", description: "130+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ರಸಬಕ್ಕೆ", description: "130+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ತಾಲಿಪಾರಂ ಹಲಸು", description: "120+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಮಟ್ಟಪಳಂ ಹಲಸು", description: "125+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಸರ್ವ ಋತು ಹಲಸು", description: "120" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಅಲ್ಫಾನ್ಸೋ ಮಾವು", description: "120+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಮಲ್ಲಿಕಾ ಮಾವು", description: "120+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಕೇಸರಿ ಮಾವು", description: "120+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಮಿಡಿ ಉಪ್ಪಿನಕಾಯಿ ಮಾವು", description: "120+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಗಿಣಿಮಾವು (ತೋತಾಪುರಿ)", description: "130+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ರಸಪುರಿ ಮಾವು", description: "130+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಅನಾ ಸೇಬು", description: "270+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಕ್ರಿಕೆಟ್ ಬಾಲ್ ಸಪೋಟ", description: "80-120" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "PKM1 ಹುಣಸೇ", description: "120-130" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಅಲಹಾಬಾದ್ ಸಫೇದಾ ಸೀಬೆ", description: "70-80" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಲಕ್ನೋ-49 ಸೀಬೆ", description: "70-80" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಬೆಟ್ಟದ ನೆಲ್ಲಿಕಾಯಿ", description: "70-80" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಬೇಲದ ಹಣ್ಣು", description: "60-70" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಬಾಲನಗರ ಸೀತಾಫಲ", description: "60-70" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಲಕ್ಷ್ಮಣಫಲ", description: "90-100" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಹನುಮಫಲ", description: "170-180" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ರಾಮಫಲ", description: "50" },
          { category: "Spice Plants (ಮಸಾಲೆ ಗಿಡಗಳು)", name: "ದಾಲ್ಚಿನ್ನಿ / ಚಕ್ಕೆ", description: "40-50" },
          { category: "Spice Plants (ಮಸಾಲೆ ಗಿಡಗಳು)", name: "ಜಾಯಿಕಾಯಿ", description: "50-70" },
          { category: "Spice Plants (ಮಸಾಲೆ ಗಿಡಗಳು)", name: "ಲವಂಗ", description: "50-100" },
          { category: "Spice Plants (ಮಸಾಲೆ ಗಿಡಗಳು)", name: "ಟಿಶ್ಯೂ ಕಲ್ಚರ್ ಏಲಕ್ಕಿ", description: "60+" },
          { category: "Spice Plants (ಮಸಾಲೆ ಗಿಡಗಳು)", name: "SKP ಏಲಕ್ಕಿ", description: "20+" },
          { category: "Spice Plants (ಮಸಾಲೆ ಗಿಡಗಳು)", name: "ಮೂಡಿಗೆರೆ ಏಲಕ್ಕಿ", description: "20+" },
          { category: "Spice Plants (ಮಸಾಲೆ ಗಿಡಗಳು)", name: "ಕಾಳು ಮೆಣಸು ಪಣಿಯೂರು 1 - ಕಡ್ಡಿ", description: "8+" },
          { category: "Beekeeping Plants (ಜೇನು ಕೃಷಿ)", name: "ಜೇನು ಕೃಷಿಕ ಪೂರಕ ಅಂಟುವಾಳ", description: "30-50" },
          { category: "Spice Plants (ಮಸಾಲೆ ಗಿಡಗಳು)", name: "ಸರ್ವ ಸಾಂಬಾರ್", description: "60+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಜಂಭೂ ನೇರಳೆ (ಕೋಲ್ಕತಾ)", description: "110-120" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಪನ್ನೇರಳೆ", description: "80" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ವಾಟರ್ ಆಪಲ್ ಗ್ರೀನ್", description: "80" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ವಾಟರ್ ಆಪಲ್ ರೆಡ್", description: "120" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಬಿಳಿ ನೇರಳೆ", description: "120+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಭಗವಾ ಕೇಸರಿ ದಾಳಿಂಬೆ", description: "80+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ರಾಂಬೂಟಾನ್", description: "70-200" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಬೆಣ್ಣೆ ಹಣ್ಣು", description: "60+180" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಬ್ರೆಡ್ ಫ್ರೂಟ್", description: "70-80" },
          { category: "Nut Plants (ಗೋಡಂಬಿ)", name: "ಗೋಡಂಬಿ / ಗೇರು", description: "100+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಅಂಜೂರ", description: "80+" },
          { category: "Spice Plants (ಮಸಾಲೆ ಗಿಡಗಳು)", name: "ಕೋಕಂ", description: "70+" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಬಾರ್ಬಡಸ್ ಚೆರ್ರಿ (ಸಿಹಿ)", description: "70-80" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಕೊಡಗು ಕಿತ್ತಳೆ", description: "50-120" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ನಾಗಪುರ ಕಿತ್ತಳೆ", description: "150-160" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಸಾತ್ಗುಡಿ ಮೋಸಂಬಿ", description: "140-150" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ದೇವನಹಳ್ಳಿ ಚಕ್ಕೋತ", description: "200" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಬಿಳಿ ಸಪೋಟ", description: "80" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಮೊಟ್ಟೆ ಹಣ್ಣು", description: "200" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಸಿಹಿ ಅಮಟೆ", description: "200" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಬ್ರೆಡ್ ಫ್ರೂಟ್", description: "60-70" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ನಕ್ಷತ್ರ ಹಣ್ಣು", description: "120" },
          { category: "Nut Plants (ಗೋಡಂಬಿ)", name: "ನಾಟಿ ಅಡಿಕೆ", description: "25-30" },
          { category: "Nut Plants (ಗೋಡಂಬಿ)", name: "ತೀರ್ಥಹಳ್ಳಿ ಅಡಿಕೆ", description: "25" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ತಿಪಟೂರು ತೆಂಗು", description: "100" },
          { category: "Products (ಉತ್ಪನ್ನಗಳು)", name: "ನೈಸರ್ಗಿಕ ಬೆಲ್ಲ", description: "Available" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಸಾವಯವ ಸಿರಿಧಾನ್ಯಗಳು", description: "Available" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ನಾಟಿ ಸೊಪ್ಪು ತರಕಾರಿ ಬೀಜಗಳು", description: "Available" },
          { category: "Books (ಪುಸ್ತಕಗಳು)", name: "ಕೃಷಿ, ಪರಿಸರ ಮತ್ತು ಪೂರ್ಣ ಚಂದ್ರ ತೇಜಸ್ವಿ ಅವರ ಪುಸ್ತಕಗಳು", description: "Available" }
        ]
      },
      {
        name: "ಸೋಮಯ್ಯ (ಜೈವಿಕ ಕೇಂದ್ರ)",
        contact: "97313 92648",
        location: "ಹುಳಿಮಾವು, ಬೆಂಗಳೂರು",
        products: [
          { category: "Earthworms (ಎರೆಹುಳ)", name: "ಎರೆಹುಳ", description: "ಎರೆಹುಳ ಸಿಗುತ್ತದೆ" }
        ]
      },
      {
        name: "ಬಾಲಗೊಂಡ್ ಹೈಟೆಕ್ ನರ್ಸರಿ",
        contact: "8618633833, 6363612351",
        location: "ಕೊಲ್ಹಾರ",
        products: [
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ದಾಳಿಂಬೆ", description: "₹30" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಕೇಸರ್ ಮಾವು", description: "₹60-150" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಅಫೋಸ್ ಮಾವು", description: "₹200" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಅಂಬ್ರಪಾಲಿ ಮಾವು", description: "₹150" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಮಿಯಾಜಾಕಿ ಮಾವು", description: "₹2000" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಕಪ್ಪು ಮಾವು", description: "₹1800" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಅಲಹಾಬಾದ್ ಪೇರಲ", description: "₹40" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "VNR ಗುವಾ", description: "₹120" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ವಿಯೆಟ್ನಾಂ ಹಲಸು", description: "₹280" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಬೀಜರಹಿತ ನಿಂಬೆ", description: "₹120" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಕ್ರಿಕೆಟ್ ಚೆಂಡು ಚಿಕು", description: "₹120-150" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಡ್ರ್ಯಾಗನ್ ಫ್ರೂಟ್", description: "₹40" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ತೆಂಗಿನಕಾಯಿ D*T", description: "₹350" },
          { category: "Forest Plants (ಅರಣ್ಯ ಸಸ್ಯ)", name: "ಮಹೋಗಾನಿ", description: "₹30" },
          { category: "Forest Plants (ಅರಣ್ಯ ಸಸ್ಯ)", name: "ಶ್ರೀಗಂಧ", description: "₹30" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಆಲ್ ಟೈಮ್ ಮಾವು", description: "₹450" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಬಾಳೆ ಮಾವು", description: "₹450" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "L49 ಪೇರಲ", description: "₹40" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಥೈವಾನ್ ಬಿಳಿ", description: "₹60" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಥಾಯ್ ವಾನ್ ರೆಡ್", description: "₹40" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಜಪಾನ್ ಕೆಂಪು (ಕೆಂಪು ವಜ್ರ)", description: "₹120" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಕಾಸ್ಮಿರಿ ಬಾರೆ", description: "₹60" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಸುದ್ರಿ ಬಾರೆ", description: "₹60" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಸ್ವೀಟ್ ಮಾಲ್ಟಾ", description: "₹120" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಸ್ವಾತುಕಿ ಕಿತ್ತಳೆ", description: "₹120" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಕಲಾಪತಿ ಚಿಕು", description: "₹150" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಡ್ರ್ಯಾಗನ್ ಹಣ್ಣು ಗುಲಾಬಿ", description: "₹40" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಕಪ್ಪು ಜಾಮೂನ್", description: "₹100" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಬಿಳಿ ಜಾಮೂನ್", description: "₹150" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಅರಶಿಕೇರಿ ತೆಂಗಿನಕಾಯಿ", description: "₹180" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "MDG ತೆಂಗಿನಕಾಯಿ", description: "₹300" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "COD ತೆಂಗಿನಕಾಯಿ", description: "₹250" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ತಿಪಟೂರು ತೆಂಗಿನಕಾಯಿ", description: "₹150" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಸೇಬು HR 99", description: "₹250" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಎನ್ಎಂಕೆ ಗೋಲ್ಡ್ ಸೀತಾಫಲ", description: "₹40" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ದಾಳಿಂಬೆ", description: "₹25" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಪ್ಯಾಶನ್ ಹಣ್ಣು", description: "₹100" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಅಂಜೂರ", description: "₹50" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಬ್ರೆಡ್ ಹಣ್ಣು", description: "₹400" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಮ್ಯಾಂಗೋಸ್ಟೀನ್", description: "₹500" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಮೇರಾ ಕ್ಯಾಲ್ ಹಣ್ಣು", description: "₹400" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ರಾಮ ಭೂತಾನ್", description: "₹500" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಚೆರ್ರಿ", description: "₹120" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ದ್ರಾಕ್ಷಿ", description: "₹150" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಲಿಚಿ", description: "₹180" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಆಮ್ಲಾ", description: "₹120" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಕೆಂಪು ಆಮ್ಲಾ", description: "₹120" },
          { category: "Fruit Plants (ಹಣ್ಣಿನ ಗಿಡಗಳು)", name: "ಬಳವಲ ಕಾಯಿ", description: "₹180" }
        ]
      },
      {
        name: "Gleceridia ಗೊಬ್ಬರದ ಬೀಜ ಪೂರೈಕೆದಾರ",
        contact: "9343589301",
        location: null,
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "Gleceridia ಗೊಬ್ಬರದ ಬೀಜ", description: null }
        ]
      },
      {
        name: "ಗಜುಗದ ಬೀಜ ಪೂರೈಕೆದಾರ",
        contact: "+919972612828",
        location: null,
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಗಜುಗದ ಬೀಜ", description: "ಕೇಜಿಗೆ ₹ 650/-" }
        ]
      },
      {
        name: "ಅನ್ನದಾನ ಸಂಸ್ಥೆ",
        contact: "9182771166",
        location: "ಬೆಂಗಳೂರು",
        products: [
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ತರಕಾರಿ ಮತ್ತು ಸೊಪ್ಪಿನ ಬೀಜಗಳು", description: "ಗುಣಮಟ್ಟದ ಉತ್ತಮ ಬೀಜಗಳು" }
        ]
      },
      {
        name: "ಗೋವಿಂದರಾಜು (ಏರೋ ಸ್ಪೇಸ್)",
        contact: "+919620616616",
        location: "ಚಿತ್ರದುರ್ಗ",
        products: [
          { category: "Medicinal Seeds (ಔಷಧಿ ಬೀಜಗಳು)", name: "ಆಯುರ್ವೇದ ಗಿಡಮೂಲಿಕೆಗಳ ಬೀಜಗಳು", description: null }
        ]
      },
      {
        name: "ಆಕಾಶ್ ಚೌರಾಸಿಯ",
        contact: "9179066275",
        location: null,
        products: [
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ತರಕಾರಿ ಮತ್ತು ಸೊಪ್ಪಿನ ಬೀಜಗಳು", description: null }
        ]
      },
      {
        name: "ಪ್ರದೀಪ್ ಕುಮಾರ್",
        contact: "9019101979",
        location: null,
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಡಯಾಂಚ ಬೀಜ", description: "ಒಂದು ಕೆಜಿಗೆ ₹60/- ಕೊರಿಯರ್ ಚಾರ್ಜ್ ಪ್ರತ್ಯೇಕ. ಒಂದು ಎಕರೆಗೆ 25 ಕೆಜಿ ಬೀಜ ಬಿತ್ತನೆ ಮಾಡಿದಾಗ 10 ಟನ್ ಹಸಿರೆಲೆ ಗೊಬ್ಬರ ಸಿಗುತ್ತದೆ" }
        ]
      },
      {
        name: "Dr. Nirmala Kelmani",
        contact: "9482455038",
        location: "Gulbarga",
        products: [
          { category: "Spices (ಮಸಾಲೆ)", name: "ಲಾವಂಚ", description: "ತುಂಬಾ ದೊಡ್ಡ ಪ್ರಮಾಣದಲ್ಲಿ ಇಲ್ಲ" }
        ]
      },
      {
        name: "ಸಂದೀಪ್ ಪಾಟೀಲ್",
        contact: "+919844123696",
        location: "ಜಮಖಂಡಿ",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಬಿತ್ತನೆ ಗೋಧಿ ಬೀಜ", description: null }
        ]
      },
      {
        name: "ಪ್ರಕಾಶ್ ಗೌಡ",
        contact: "+918870004241",
        location: "ಉತ್ತರ ಕರ್ನಾಟಕ",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ತೊಗರಿ ಬೀಜ (ಗುಳ್ಯಾಲ)", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಕಡ್ಲೆ ಕಾಯಿ", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಬಿಳಿ ಎಳ್ಳು", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಕುಸುಬೆ", description: null }
        ]
      },
      {
        name: "ಮುತ್ತಪ್ಪ ಪಾಟೀಲ",
        contact: "7892025561",
        location: null,
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಜವೇ ಗೋಧಿ", description: null }
        ]
      },
      {
        name: "ಶಂಕರ ಲಂಗಟಿ",
        contact: "9972150378",
        location: "ಬೆಳಗಾವಿ",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಬೀಜ ಸಂರಕ್ಷಣೆ", description: "ಹಲವು ದೇಸಿ ಬೀಜಗಳು ಲಭ್ಯ" }
        ]
      },
      {
        name: "ಅಫ್ತಾಬ್ (ಕ್ಷಿತಿ ಗವ್ಯಕೃಷಿ)",
        contact: "8762221001",
        location: "ಕುಶಾಲನಗರ, ಕೊಡಗು 571234",
        products: [
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "40+ ಬದನೆ ತಳಿಗಳು", description: "₹40-60 per packet" },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಟೊಮೇಟೊ ಬೀಜಗಳು", description: "Multiple varieties ₹50-150 per packet" },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಬೆಂಡೆ ತಳಿಗಳು", description: "22+ varieties ₹50-75" },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಮೂಲಂಗಿ, ಗಜ್ಜರಿ", description: "Various colors" },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಅಮರಾಂಥಸ್ ತಳಿಗಳು", description: "15+ varieties" },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಕಾಳುಗಳು ಮತ್ತು ಬೀನ್ಸ್", description: "Various types" },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಸೌತೆ, ಹಗಲ, ಕುಂಬಳ ತಳಿಗಳು", description: "Multiple varieties" }
        ]
      },
      {
        name: "ಬೀಜದ ಕಾಳಪ್ಪ",
        contact: "+919480647369 / 9480647364",
        location: "ಹಿಟ್ನೆ ಹೆಬ್ಬಾಗಿಲು ಗ್ರಾಮ, ಪಿರಿಯಾಪಟ್ಟಣ, ಮೈಸೂರು ಜಿಲ್ಲೆ",
        description: "ಸೊಪ್ಪು - ತರಕಾರಿ ಬೀಜದ ಪೂರೈಕೆದಾರ",
        products: [
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಹಸಿರು ದಂಟು", description: "25g ₹20" },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಬಿಳಿ ದಂಟು", description: "25g ₹20" },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಕೆಂಪು ದಂಟು", description: "25g ₹20" },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಅರವೇ ಸೋಪು", description: "25g ₹20" },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಕಿರೇ ಸೋಪು", description: "20g ₹20" },
          { category: "Spices (ಮಸಾಲೆ)", name: "ಧನಿಯಾ", description: "50g ₹10" },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಸಬಸೀಗೇ", description: "50g ₹20" },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಪಾಲಕ್", description: "50g ₹20" },
          { category: "Spices (ಮಸಾಲೆ)", name: "ಮೇಂತಿ", description: "50g ₹10" },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಚಕೋತ ಸೋಪು", description: "25g ₹20" },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಹುಳಿ ಸೋಪು", description: "20g ₹20" },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಪುಂಡಿ ಕೆಂಪು", description: "20g ₹20" },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಪುಂಡಿ ಬಿಳಿ", description: "20g ₹20" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಪಡವಲಕಾಯಿ", description: "10g ₹50" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಪಡವಲಕಾಯಿ ಚಿಕ್ಕದು", description: "10g ₹30" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಹೀರೇಕಾಯಿ", description: "15g ₹20" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಗೋಚಲು ಹೀರೇ", description: "10g ₹50" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಪುಟ್ ಹೀರೇ", description: "10g ₹40" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ತುಪ್ಪದ ಹೀರೇ", description: "10g ₹20" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಸೋರೆಕಾಯಿ", description: "20g ₹30" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಬೀದಿಗೇ ಸೋರೆ", description: "10g ₹20" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ತಂಬೂರಿ ಸೋರೆ", description: "10g ₹20" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಪುಂಗಿ ಸೋರೆ", description: "10g ₹20" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಹಗಲಕಾಯಿ", description: "10g ₹30" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಪುಟ್ ಹಗಲ", description: "10g ₹50" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಸವತೆಕಾಯಿ", description: "10g ₹30" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಮುಳ್ಳು ಸವತೆ", description: "10g ₹40" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಸಾಂಬಾರ್ ಸೌತೆಕಾಯಿ", description: "10g ₹40" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಬೂದು ಕುಂಬಳ", description: "10g ₹30" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಸಿಹಿ ಕುಂಬಳ", description: "10g ₹30" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಪುಟ್ ಕುಂಬಳ", description: "10g ₹50" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಉದ ಕುಂಬಳ", description: "10g ₹50" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಗೋರಿಕಾಯಿ", description: "25g ₹20" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಗಜ್ಜರಿ", description: "10g ₹30" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಕಪ್ಪು ಗಜ್ಜರಿ", description: "10g ₹50" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಪರಪಲ್ ಗಜ್ಜರಿ", description: "10g ₹50" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಬಿಟರೋಟ್", description: "10g ₹30" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಮೂಲಂಗಿ", description: "10g ₹20" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ", description: "10g ₹25" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಕಪ್ಪು ಮೆಣಸಿನಕಾಯಿ", description: "10g ₹70" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಹರುವ ತಟೇ ಮೆಣಸಿನಕಾಯಿ", description: "10g ₹70" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಗಾಂದರಿ ಮೆಣಸಿನಕಾಯಿ", description: "10g ₹50" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ನಾಲಿಕಾಯಿ ಮೆಣಸಿನಕಾಯಿ", description: "5g ₹50" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಸಾಟ್ರಬೇರಿ ಮೆಣಸಿನಕಾಯಿ", description: "5g ₹50" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಹಳದಿ ಮೆಣಸಿನಕಾಯಿ", description: "5g ₹70" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಬುಲೆಟ್ ಮೆಣಸಿನಕಾಯಿ", description: "5g ₹50" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಹಸಿರು ಬದನೆಕಾಯಿ", description: "5g ₹20" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ನೀಲಿ ಬುಂಡ ಬದನೆಕಾಯಿ", description: "5g ₹20" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಮುಸುಕು ಬದನೆಕಾಯಿ", description: "5g ₹20" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಬಿಳಿ ಬದನೆಕಾಯಿ", description: "5g ₹30" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ನೀಲಿ ಉದ ಬದನೆಕಾಯಿ", description: "5g ₹30" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಮದನ್ ಪಲಿ ಟಮೋಟ", description: "5g ₹40" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಎಲೋ ಚಾರಿ ಟಮೋಟ", description: "5g ₹40" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ರೇಡ್ ಚಾರಿ ಟಮೋಟ", description: "5g ₹40" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಜಾಮುನ್ ಟಮೋಟ", description: "5g ₹40" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಹಸಿರು ಬೇಂಡೆ", description: "50g ₹25" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಶ್ರೀ ಬೇಂಡೆ", description: "50g ₹30" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಮಲ್ಟಿ ಕಲರ್ ಬೇಂಡೆ", description: "50g ₹30" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಕೆಂಪು ಬೇಂಡೆ", description: "50g ₹50" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಆನೆ ದಾಂತ ಬೇಂಡ", description: "50g ₹50" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಬಿಳಿ ಬೇಂಡೆ", description: "50g ₹40" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಕಸ್ತೂರಿ ಬೇಂಡೆ", description: "10seeds ₹28" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ನಕ್ಷತ್ರಕಾರದ ಬೇಂಡೆ", description: "50g ₹40" },
          { category: "Flowers (ಹೂಗಳು)", name: "ಚೇಂಡ ಹೂ", description: "5g ₹50" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಕಲಗಂಡಿ", description: "10seeds ₹15" },
          { category: "Fruits (ಹಣ್ಣುಗಳು)", name: "ಪಪ್ಪಾಯ", description: "50 seeds ₹750" },
          { category: "Flowers (ಹೂಗಳು)", name: "ಸೂರ್ಯಕಾಂತಿ", description: "50g ₹25" },
          { category: "Millets (ಸಿರಿಧಾನ್ಯ)", name: "ಮಲ್ಟಿ ಕಲರ್ ಜೋಳ", description: "10g ₹20" },
          { category: "Millets (ಸಿರಿಧಾನ್ಯ)", name: "ಗೋವಿನ ಜೋಳ", description: "50g ₹15" },
          { category: "Millets (ಸಿರಿಧಾನ್ಯ)", name: "ಬಿಳಿ ಜೋಳ", description: "50g ₹20" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಸೆಣಬು", description: "50g ₹20" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಈರುಳ್ಳಿ", description: "20g ₹50" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಹುರುಳಿ ಕಾಳು", description: "50g ₹20" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ತೋಗರಿ ಕಾಳು", description: "50g ₹20" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಬಿಳಿ ಅಲಂಸದೇ", description: "50g ₹20" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಕೆಂಪು ಅಲಂಸದೇ", description: "50g ₹20" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಹೆಸರು ಕಾಳು", description: "50g ₹20" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಉದಿನ್ ಕಾಳು", description: "50g ₹20" },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ನೇರಳೆ ಬೀನ್ಸ್", description: "50g ₹20" },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ದೋಡ್ ಹುರುಳಿ ಕಾಳು", description: "50g ₹20" },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಮೀಟರ್ ಬೀನ್ಸ್", description: "50g ₹20" },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಕಪ್ಪು ಬೀನ್ಸ್", description: "50g ₹20" },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಕೆಂಪು ಬೀನ್ಸ್", description: "50g ₹20" },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಹಸಿರು ಬೀನ್ಸ್", description: "50g ₹20" },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಬಿಳಿ ಬೀನ್ಸ್", description: "50g ₹20" },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಕಾತಿ ಅವರೇ ಬಿಳಿ", description: "50g ₹20" },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಕಾತಿ ಅವರೇ ಕೆಂಪು", description: "50g ₹20" },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಬಿಳಿ ಅವರೇ", description: "50g ₹20" },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ತೋಟದ ಬೇಲಿ ಅವರೇ", description: "50g ₹20" },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಚಪ್ಪರದ ಅವರೇ", description: "50g ₹20" },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಕೆಂಪು ಅವರೇ", description: "50g ₹20" },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಗೀಣ್ ಅವರೇ", description: "50g ₹20" },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ದಬ್ಬ ಅವರೇ", description: "50g ₹20" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಕಡಲೇ ಕಾಳು", description: "50g ₹20" },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಶೇಂಗಾ", description: "50g ₹20" },
          { category: "Millets (ಸಿರಿಧಾನ್ಯ)", name: "ನವಣೆ", description: "50g ₹20" },
          { category: "Millets (ಸಿರಿಧಾನ್ಯ)", name: "ಊದಲು", description: "50g ₹20" },
          { category: "Millets (ಸಿರಿಧಾನ್ಯ)", name: "ಕೋರಲೆ", description: "20g ₹20" },
          { category: "Millets (ಸಿರಿಧಾನ್ಯ)", name: "ಸಜ್ಜೆ", description: "50g ₹20" },
          { category: "Millets (ಸಿರಿಧಾನ್ಯ)", name: "ಸಮೇ", description: "50g ₹20" },
          { category: "Paddy (ಭತ್ತ)", name: "ರಾಜ್ ಮುಡಿ ಭತ", description: "100g ₹20" },
          { category: "Paddy (ಭತ್ತ)", name: "ರಾಜ್ ಭೋಗ", description: "100g ₹20" },
          { category: "Paddy (ಭತ್ತ)", name: "ಸಿದ್ಧ ಸಣ್ಣ", description: "100g ₹20" },
          { category: "Paddy (ಭತ್ತ)", name: "ಕಪು ಭತ", description: "100g ₹20" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ನುಗ್ಗೆಕಾಯಿ", description: "20 seeds ₹20" },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಶುಂಠಿ ಸಾವಯವ", description: "ಸಾವಯವ ಶುಂಠಿ" },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಅರಿಸಿಣ ಸಾವಯವ", description: "ಸಾವಯವ ಅರಿಸಿಣ" },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಚೀಯ", description: "ಚೀಯ ಬೀಜ" },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಗೆಡ್ಡೆಗೆಣಸುಗಳು", description: "ವಿವಿಧ ಗೆಡ್ಡೆಗೆಣಸು ತಳಿಗಳು" }
        ]
      },
      {
        name: "ಅಜ್ಜಪ್ಪ ಕುಲಗೋಡ",
        contact: "9008977319",
        location: "ಕೌಜಲಗಿ",
        products: [
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಬೆಂಡೆ", description: "ಸಾವಯವ ಕೃಷಿಯ ದೇಸಿ ತರಕಾರಿ ಬೀಜ" },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಹಾಗಲ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಹಿರೇ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಗೊಂಚಲ ಹಿರೇ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಟೋಪಿ ಬದನೆ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಕುಂಬಳ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಚಿನ್ನ ಕುಂಬಳ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ದೊಡ್ಡ ಕುಂಬಳ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಬೂದು ಕುಂಬಳ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಹಾಲು ಕುಂಬಳ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಚವಳೆ", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಹರವೆ ಸೊಪ್ಪು", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ದಂಟಿನ ಸೊಪ್ಪು", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಪಾಲಕ", description: null },
          { category: "Spices (ಮಸಾಲೆ)", name: "ಮೆಂತೆ", description: null },
          { category: "Spices (ಮಸಾಲೆ)", name: "ಕೋತಂಬರಿ", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಸಬ್ಬಸಿಗೆ", description: null },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಚಳ ಅವರೇ", description: null },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಸಣ್ಣ ಅವರೇ", description: null },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಕೆಂಪು ಅವರೇ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಗಜ್ಜರಿ ಕೆಂಪು", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಗಜ್ಜರಿ ಕೇಸರಿ", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಹುಳಿ ಚಿಕ್ಕ ಸೊಪ್ಪು", description: null },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಕರಗಸ ಅವರೇ (ಚೌಕ ವರಿ)", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಕರಿಬದನೆ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಬಿಳಿಬದನೆ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಬಿಳಿ ಮತ್ತು ಕಪ್ಪು ಮಿಶ್ರಿತ ಬದನೆ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಸಣ್ಣ ಬದನೆ", description: null },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಚಪ್ಪರದವರೆ", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಪುಂಡಿ ಸೊಪ್ಪು", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಬಸಳೆಸೊಪ್ಪು ಕೆಂಪು ಮತ್ತು ಬಿಳಿ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಟೊಮೆಟೊ ಸಣ್ಣ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ದೊಡ್ಡ ಟೊಮೆಟೊ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಸಮತೆ ಸಣ್ಣ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಉದ್ದ ಸೌತೆ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಗೋಳಗಾಯಿ ಸೌತಿ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಹಾಗಲಕಾಯಿ ಹಸಿರು", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಸಣ್ಣ ಹಗಲು", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಗೊಂಚಲ ಮೆಣಸಿನಕಾಯಿ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಗಿಡ್ಡ ಮೆಣಸಿನಕಾಯಿ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಬಳ ಮೇಸಿನಕಾಯಿ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಮಾರಿಹಾಳ ಮೆಣಸಿನಕಾಯಿ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಡೊಣ್ಣಗಾಯಿ ಮೆಣಸಿನಕಾಯಿ ದೇಸಿ", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಕಿರಿಕ್ ಸನಿ ಸೊಪ್ಪು", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಗೋಮುಖ ಬದನೆ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಬಿಳಿ ಹಾಗಲ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಕರಿ ಗಜ್ಜರಿ", description: null }
        ]
      },
      {
        name: "ಹರಿಕೃಷ್ಣ ಕಾಮತ್",
        contact: "9481390710",
        location: "ಫಾರ್ಮ್ ದುರ್ಗಾಗಿರಿ, ಪೆರೀಗೆರಿ ಅಂಚೆ, ಪುತ್ತೂರು ತಾಲೂಕು, ದಕ್ಷಿಣ ಕನ್ನಡ - 574223",
        products: [
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಕೆಸು 9 ತಳಿಗಳು", description: "ಕಲಶ, ಸಹಸ್ರಮುಖಿ, ಮದ್ರಾಸ್, ಕರಿ, ಮುಡ್ಲಿ, ತುರಿಸದ, ಹೆಗ್ಗೇಸು, ಚೆಟ್ಲೆ, ಮರ ಕೆಸು" },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಬಳ್ಳಿ ಕೆಸು", description: "ಹಸಿರು ಮತ್ತು ಕಪ್ಪು" },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಅರಷಿಣ", description: "ಕಸ್ತೂರಿ ಮತ್ತು ನಾಟಿ" },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಶುಂಠಿ", description: "ನಾಟಿ ಮತ್ತು ಮಾವು ಶುಂಠಿ" },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಮರಗೆಣಸು", description: null },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಸಿಹಿ ಗೆಣಸು ವಿವಿಧ ತಳಿಗಳು", description: "ಬಿಳಿ ಉದ್ದ, ಕೆಂಪು ಉದ್ದ, ಕೆಂಪು ದುಂಡಗೆ, ಬಿಟ್ರೂಟ್ ಬಣ್ಣ" },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಅರಾರೂಟ್", description: null },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಚಿರಿಕೆ", description: null },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಬಳ್ಳಿ ಬಟಾಟೆ", description: null },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಸುವರ್ಣ ಗೆಡ್ಡೆ", description: null },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ತುಪ್ಪ ಗೆಣಸು", description: "ಒನಕೆ, ಹಾಲು ಗೆಣಸು" },
          { category: "Medicinal (ಔಷಧಿ)", name: "ಶತಾವರಿ", description: null },
          { category: "Medicinal (ಔಷಧಿ)", name: "ಬಜೆ", description: null },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಮೂಂಡಿ ಗೆಡ್ಡೆ", description: null },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಕಟ್ಟೆ ಕಣಗ", description: null },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಪರ್ಪಲ್ ಯಾಮ್", description: null },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ನಾಯಿಬಾಲ", description: null },
          { category: "Tubers (ಗೆಡ್ಡೆ-ಗೆಣಸು)", name: "ಸಾಂಬ್ರಾಣಿ ಗೆಡ್ಡೆ", description: null }
        ]
      },
      {
        name: "ಮಂಡ್ಯ ಸಾವಯವ ಕೃಷಿಕರ ಸಹಕಾರ ಸಂಘ",
        contact: "9742245457, 9844884666",
        location: "ಮಂಡ್ಯ",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಬೀಜ ಸಂರಕ್ಷಣೆ", description: "ವಿವಿಧ ದೇಸಿ ಬೀಜಗಳು" }
        ]
      },
      {
        name: "ಶಿವಕುಮಾರ್ (ಜನಧಾನ್ಯ)",
        contact: "9448029137, 9008549827",
        location: "ಕನಕಪುರ",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ವಿವಿಧ ಬೀಜಗಳು", description: "ಜನಧಾನ್ಯ ಸಂಸ್ಥೆ" }
        ]
      },
      {
        name: "ಭತ್ತದ ಬೋರೇಗೌಡ",
        contact: "8971438272, 7829020746",
        location: "ಶಿವಳ್ಳಿ",
        products: [
          { category: "Paddy Seeds (ಭತ್ತ ಬೀಜ)", name: "250+ ದೇಸಿ ತಳಿ ಭತ್ತ", description: "250+ native rice varieties" }
        ]
      },
      {
        name: "ಕಾಸರವಾಡಿ ಮಹದೇವ್",
        contact: "9844884666",
        location: null,
        products: [
          { category: "Paddy Seeds (ಭತ್ತ ಬೀಜ)", name: "ಭತ್ತ ಸಂರಕ್ಷಕರು", description: null }
        ]
      },
      {
        name: "ದೊಡ್ಡಲಿಂಗೇಗೌಡ",
        contact: "9964588184",
        location: "ಹಲ್ಲೇಗೆರೆ",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ವಿವಿಧ ಬೀಜಗಳು", description: null }
        ]
      },
      {
        name: "ಆಂಜನೇಯ ಕುಂಬಳೂರು",
        contact: "9972088929",
        location: "ಹರಿಹರ ತಾಲೂಕ, ದಾವಣಗೆರೆ ಜಿಲ್ಲೆ",
        products: [
          { category: "Paddy Seeds (ಭತ್ತ ಬೀಜ)", name: "ಭತ್ತ ಬೀಜ ಸಂರಕ್ಷಕ", description: null }
        ]
      },
      {
        name: "ಜಿ ಎನ್ ಸ್ವಾಮಿ",
        contact: "9110430031",
        location: "ಗುತ್ತಿದುರ್ಗ, ಜಗಳೂರು ತಾಲೂಕು",
        products: [
          { category: "Millets (ಸಿರಿಧಾನ್ಯ)", name: "ಸಿರಿಧಾನ್ಯ ಸಂರಕ್ಷಕ", description: null }
        ]
      },
      {
        name: "ಪ್ರಭಾಕರ್ ಬಿ",
        contact: "9008157567",
        location: "ಕೊಂಡಹಳ್ಳಿ ಗ್ರಾಮ, ಬೈರಕೂರು ಅಂಚೆ, ಮುಳಬಾಗಿಲು ತಾಲೂಕು, ಕೋಲಾರ ಜಿಲ್ಲೆ",
        products: [
          { category: "Millets (ಸಿರಿಧಾನ್ಯ)", name: "ಆಹಾರ ಧಾನ್ಯಗಳು", description: null },
          { category: "Pulses (ಕಾಳುಗಳು)", name: "ಅಕ್ಕಡಿ ಕಾಳು ವಿವಿಧ ತಳಿಗಳು", description: null }
        ]
      },
      {
        name: "ಪದ್ಮನಾಭ ಕೆ ಆರ್",
        contact: "9972008186",
        location: "ಸಾವಿರ ಮಲ್ಲರಾಜಪಟ್ಣ, ಅರಕಲಗೂಡು ತಾಲೂಕು",
        products: [
          { category: "Paddy Seeds (ಭತ್ತ ಬೀಜ)", name: "ಭತ್ತ", description: null }
        ]
      },
      {
        name: "ಕೆ ಎಲ್ ರಘು",
        contact: "9900663193",
        location: "ಕುಣಗಟ್ಟೆಹಳ್ಳಿ, ಅರಸೀಕೆರೆ ತಾಲೂಕು",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ವೆಲ್ವೆಟ್ ಬೀನ್ಸ್", description: null }
        ]
      },
      {
        name: "ಎಂ ಶರಣಪ್ಪ ನಾಗಣ್ಣ",
        contact: "8722664268",
        location: "ಹುಲಿಕೆರೆ ಗ್ರಾಮ, ಕೂಡ್ಲಿಗಿ ತಾಲೂಕು, ವಿಜಯನಗರ ಜಿಲ್ಲೆ",
        products: [
          { category: "Oil Seeds (ಎಣ್ಣೆ ಬೀಜಗಳು)", name: "ಎಣ್ಣೆ ಬೀಜಗಳು", description: null },
          { category: "Millets (ಸಿರಿಧಾನ್ಯ)", name: "ಆಹಾರದ ಧಾನ್ಯಗಳ ಬೀಜಗಳು", description: null }
        ]
      },
      {
        name: "ಶ್ರೀ ಕೃಷ್ಣ ಪ್ರಸಾದ್ (ಸಹಜ ಸಮೃದ್ಧ)",
        contact: "9880862058",
        location: null,
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ನಾಟಿ ಬೀಜಗಳು ಮತ್ತು ಅನುಭವಗಳು", description: "ಬೀಜ ಸಂರಕ್ಷಣೆ ಕಾರ್ಯ" }
        ]
      },
      {
        name: "MORINGA Seeds Supplier",
        contact: "8073554614",
        location: "Bangalore Peeny",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "PKM-1 Moringa", description: "Above 100% Germination. New season seeds" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "PKM-2 Moringa", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ODC-3 Moringa", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "KDM-01 (BHAGYA) Moringa", description: null },
          { category: "Products (ಉತ್ಪನ್ನಗಳು)", name: "Organic moringa powder", description: null },
          { category: "Products (ಉತ್ಪನ್ನಗಳು)", name: "Moringa oil", description: null },
          { category: "Products (ಉತ್ಪನ್ನಗಳು)", name: "Moringa capsules", description: null }
        ]
      },
      {
        name: "ರೇಯಲ ಸೆಮಿನಿಸ್ (Onion Seeds)",
        contact: "9972429012, 8431394341",
        location: null,
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಈರುಳ್ಳಿ ಬೀಜ", description: null }
        ]
      },
      {
        name: "Ms Revathi (TDU)",
        contact: "+919481651815",
        location: "TDU, Bengaluru",
        products: [
          { category: "Medicinal Plants (ಔಷಧಿ ಸಸ್ಯಗಳು)", name: "Medicinal nursery plants", description: null }
        ]
      },
      {
        name: "ವೆಂಕಟೇಶ್",
        contact: "+91 6361 824 022",
        location: null,
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಕಾಡು ಹೆಸರು ಬೀಜ", description: "₹ 500/ಕೆಜಿ" }
        ]
      },
      {
        name: "ಧರಿತ್ರಿ ಕೃಷಿ ಪರಿವಾರ",
        contact: "9480399168",
        location: "ಗದಗ",
        products: [
          { category: "Millets (ಸಿರಿಧಾನ್ಯ)", name: "ಎಲ್ಲ ಸಿರಿಧಾನ್ಯ ಬೀಜಗಳು", description: null }
        ]
      },
      {
        name: "ಸಿದ್ದಪ್ಪ ಶಿವಲಿಂಗಪ್ಪ ಭೂಸಗೊಂಡ",
        contact: "9972612828",
        location: null,
        products: [
          { category: "Oil Seeds (ಎಣ್ಣೆ ಬೀಜಗಳು)", name: "ಬಿಳಿ ಎಳ್ಳು", description: "ಕೃಷಿ ಪಂಡಿತ ಪ್ರಶಸ್ತಿ ವಿಜೇತ" },
          { category: "Spices (ಮಸಾಲೆ)", name: "ಅಜ್ವಾನ್", description: null }
        ]
      },
      {
        name: "Abhishek R (IIHR)",
        contact: "9731733011",
        location: "IIHR Bangalore",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "Velvet Beans Seeds (mucuna pruriens)", description: "300₹ per kg from IIHR Bangalore. Only 6kg available" }
        ]
      },
      {
        name: "Basaiah Hiremath",
        contact: "7676337673",
        location: null,
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "PKM1 and ODC2 moringa seeds", description: "Organically grown. Limited quantity" }
        ]
      },
      {
        name: "ಮಾಕಳಿ ಬೇರು ಪೂರೈಕೆದಾರ",
        contact: "+91 99452 70698",
        location: null,
        products: [
          { category: "Medicinal (ಔಷಧಿ)", name: "ಮಾಕಳಿ ಬೇರು", description: null }
        ]
      },
      {
        name: "ದವನ ಬೀಜಗಳು (Free Seeds)",
        contact: "7022940376",
        location: "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ (80-90 ಕಿಮೀ)",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಉಚಿತ ದವನ ಬೀಜಗಳು", description: "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ ಪ್ರದೇಶದ ರೈತರಿಗೆ" }
        ]
      },
      {
        name: "ಕೊಲಂಬೋ ತೊಗರಿ ಪೂರೈಕೆದಾರ",
        contact: "9902111009",
        location: null,
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಬಹುವಾರ್ಷಿಕ ಕೊಲಂಬೋ ನಾಟಿ ಕೆಂಪು ತೊಗರಿ", description: "160-180 ದಿನದ ಬೆಳೆ, 5-10 ಕ್ವಿಂಟಾಲ್ ಇಳುವರಿ, 3-4 ವರುಷ ಬರುತ್ತವೆ" }
        ]
      },
      {
        name: "Dr. Chennayya Hiremath (CIMAP)",
        contact: "06360940523",
        location: "CIMAP",
        products: [
          { category: "Plants (ಸಸಿಗಳು)", name: "Lavender Slips", description: "ಸಾಕಷ್ಟು ಲಭ್ಯವಿದೆ" }
        ]
      },
      {
        name: "ಡಾ ಚೆನ್ನವೀರಪ್ಪ ಕೊಂಚಿಗೆರೆ",
        contact: "9448341802",
        location: null,
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಅಳಲೇಕಾಯಿ", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಜವಾರಿ ಔಡಲ", description: null },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಗಜ್ಜುಗ", description: null }
        ]
      },
      {
        name: "ಕೇಂದ್ರ ತೋಟಗಾರಿಕಾ ಸಂಶೋದನಾ ಸಂಸ್ಥೆ (KOPCL)",
        contact: "7975438900, 9916030272",
        location: "Kanakapura",
        description: "ತರಕಾರಿ ಬೀಜಗಳ ಮಿನಿ ಕಿಟ್ ಲಭ್ಯವಿದೆ",
        products: [
          { 
            category: "Seeds Kit (ಬೀಜ ಕಿಟ್)", 
            name: "ತರಕಾರಿ ಬೀಜಗಳ ಮಿನಿ ಕಿಟ್", 
            description: "ಚಪ್ಪರದ ಅವರೆ 50g, ಹಲಸಂದೆ 50g, ಫ್ರೆಂಚ್ ಬೀನ್ಸ್ 50g, ದಂಟಿನ ಸೊಪ್ಪು 50g. ಬೆಲೆ: ₹125/- (ಷೇರುದಾರರಿಗೆ ₹110/-)" 
          }
        ]
      },
      {
        name: "ತುಕಾರಾಮ ಪವಾರ",
        contact: "8660629659 / 9481224906",
        location: null,
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಜವಾರಿ (ದೇಶಿಯ) ದಪ್ಪ ಈರುಳ್ಳಿ ಬೀಜಗಳು", description: "ಉತ್ಕೃಷ್ಟವಾದ ಜವಾರಿ ಈರುಳ್ಳಿ ಬೀಜ" }
        ]
      },
      {
        name: "ಶ್ರೀಕಾಂತ್ ಕುಂಬಾರ್",
        contact: "+919740813888",
        location: null,
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಪುಂಡಿ ಬೀಜ", description: "ಬಿತ್ತನೆ, ಬೆಳೆಯುವುದು, ಮೌಲ್ಯವರ್ಧನೆ ಮತ್ತು ಮಾರಾಟ ಬಗ್ಗೆ ಮಾಹಿತಿ" },
          { category: "Products (ಉತ್ಪನ್ನಗಳು)", name: "ಹರಿಶಿಣ", description: "ಮೌಲ್ಯವರ್ಧನೆ ಮತ್ತು ಮಾರಾಟ" }
        ]
      },
      {
        name: "Azola Supplier",
        contact: "8431334028",
        location: null,
        products: [
          { category: "Cattle Feed (ಪಶು ಆಹಾರ)", name: "Azola cattle feed mother culture", description: "Available" }
        ]
      },
      {
        name: "ಸುಗುಣ ಸಿಂಹ",
        contact: "+919845693124",
        location: null,
        products: [
          { category: "Paddy Seeds (ಭತ್ತ ಬೀಜ)", name: "ದೊಡ್ಡಿ ಭತ್ತ ಬೀಜ", description: null }
        ]
      },
      {
        name: "ರೇಷ್ಮೆ ನರ್ಸರಿ",
        contact: "9980354146, 9844996658",
        location: "ಅಪ್ಪಣ್ಣನಹಳ್ಳಿ, ನಿಟ್ಟೂರ್ ಹೋಬಳಿ, ಗುಬ್ಬಿ ತಾಲೂಕ್, ತುಮಕೂರು ಜಿಲ್ಲೆ",
        products: [
          { category: "Plants (ಸಸಿಗಳು)", name: "ರೇಷ್ಮೆ ಸಸಿ", description: "ಉತ್ತಮ ರೇಷ್ಮೆ ಸಸಿ ದೊರೆಯುತ್ತದೆ" }
        ]
      },
      {
        name: "ನಕ್ಷತ್ರ ವನ & ರಾಶಿ ವನ ಸಸ್ಯಗಳು",
        contact: "9620616616",
        location: null,
        description: "ನಕ್ಷತ್ರ ವನ ಹಾಗು ರಾಶಿ ವನ ಮಾಡಲು ಬೇಕಾಗಿರುವ ಎಲ್ಲ ಸಸ್ಯಗಳು",
        products: [
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಅಶ್ವಿನಿ: ಕೂಚಲ", description: "Strychnos nux-vomica" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಭರಣಿ: ನೆಲ್ಲಿ", description: "Phyllanthus emblica" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಕಾರ್ತಿಕ: ಅತ್ತಿ", description: "Ficus racemosa" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ರೋಹಿಣಿ: ನೇರಳೆ", description: "Syzygium cumini" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಮೃಗಶಿರ: ಕರಿಜಾಲಿ", description: "Acacia catechu" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಆರ್ದ್ರಾ: ಕರಿಮರ", description: "Diospyros ebenum" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಪುನರ್ವಸು: ಬಿದಿರು", description: "Bambusa arundinacea" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಪುಷ್ಯ: ಅರಳಿ", description: "Ficus religiosa" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಆಶ್ಲೇಷ: ನಾಗಸಂಪಿಗೆ", description: "Mesua ferrea" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಮಖಾ: ಆಲ", description: "Ficus benghalensis" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಪೂರ್ವಾ: ಪಲಾಶ", description: "Butea monosperma" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಉತ್ತರಾ: ಇತ್ತಿ", description: "Ficus microcarpa" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಹಸ್ತಾ: ಅಂಬಟೆ", description: "Spondias pinnata" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಚಿತ್ರಾ: ಬಿಲ್ವ", description: "Aegle marmelos" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಸ್ವಾತಿ: ಅರ್ಜುನ", description: "Terminalia arjuna" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ವಿಶಾಖ: ಕಾಯಿಹಣ್ಣು ಸಂಪಿಗೆ", description: "Flacourtia montana" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಅನುರಾಧ: ಇಲಂಜಿ", description: "Mimusops elengi" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಜ್ಯೇಷ್ಠ: ವೆಟ್ಟಿಗಿಡ", description: "Aporosa lindleyana" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಮೂಲ: ವನಸ್ಪತಿ", description: "Vateria indica" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಪೂರ್ವಾಷಾಢ: ವಂಚಿ", description: "Salyx tetrasperma" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಉತ್ತರಾಷಾಢ: ಹಲಸು", description: "Artocarpus heterophyllus" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಶ್ರವಣ: ಎಕ್ಕ", description: "Calotropis gigantea" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಧನಿಷ್ಠಾ: ಬನ್ನಿ", description: "Prosopis cineraria" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಶತಭಿಷಾ: ಕದಂಬ", description: "Anthocephalus chinensis" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಪೂರ್ವಭಾದ್ರ: ಬೇವು", description: "Azadirachta indica" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ಉತ್ತರಾಭಾದ್ರ: ಮಾವು", description: "Mangifera indica" },
          { category: "Nakshatra Vana (ನಕ್ಷತ್ರ ವನ)", name: "ರೇವತಿ: ಹಿಪ್ಪೆ", description: "Madhuca longifolia" },
          { category: "Rashi Vana (ರಾಶಿ ವನ)", name: "ರಾಶಿ ವನ ಸಸ್ಯಗಳು", description: "12 ರಾಶಿಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಸಸ್ಯಗಳು" }
        ]
      },
      {
        name: "BESST-HORT (ICAR-IIHR)",
        contact: "Contact via IIHR",
        location: "ICAR-IIHR, Bengaluru",
        products: [
          { category: "Seeds & Technology (ಬೀಜಗಳು & ತಂತ್ರಜ್ಞಾನ)", name: "Quality seeds and technology products", description: "NIDHI-Technology Business Incubator" }
        ]
      },
      {
        name: "ಕೃಷಿ ವಿಜ್ಞಾನ ಕೇಂದ್ರ",
        contact: "Contact KVK",
        location: "ತರಳಬಾಳು, ದಾವಣಗೆರೆ",
        products: [
          { category: "Cattle Feed (ಪಶು ಆಹಾರ)", name: "ಅಜೋಲಾ", description: "ಅಜೋಲಾ ಸಿಗುತ್ತದೆ" }
        ]
      },
      {
        name: "ಜಗಳೂರು ರಾಗಿ ಪೂರೈಕೆದಾರ",
        contact: "+918762221001",
        location: "ಜಗಳೂರು",
        products: [
          { category: "Millets (ಸಿರಿಧಾನ್ಯ)", name: "ಜಗಳೂರು ರಾಗಿ", description: "100 rs/kg ನಾಟಿ ತಳಿ, 4-5 ತಿಂಗಳ ಬೆಳೆ" }
        ]
      },
      {
        name: "ಮಧುಕೇಶ್ವರ ಹೆಗಡೆ",
        contact: "9480746335",
        location: null,
        products: [
          { category: "Beekeeping (ಜೇನು ಸಾಕಣೆ)", name: "ಜೇನಿನ ತರಬೇತಿ ಮತ್ತು ಮೌಲ್ಯವರ್ಧನೆ", description: "ಜೇನು ಸಾಕಣೆ ಬಗ್ಗೆ ಪರಿಣಿತಿ" }
        ]
      },
      {
        name: "GKVK ಜೇನು ಕೇಂದ್ರ",
        contact: "080 23636776",
        location: "ಬೆಂಗಳೂರು GKVK",
        products: [
          { category: "Beekeeping (ಜೇನು ಸಾಕಣೆ)", name: "ಜೇನಿನ ಮಾಹಿತಿ ಮತ್ತು ಪರಿಕರಗಳು", description: "ಜೇನು ಸಾಕಣೆ ತರಬೇತಿ ಮತ್ತು ಉಪಕರಣಗಳು" }
        ]
      },
      {
        name: "Art of Living Center",
        contact: "Contact Art of Living Center",
        location: "Bengaluru",
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ನಾಟಿ ಸೌತೆಕಾಯಿ", description: "Desi cucumber seeds" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ನಾಟಿ ಅವರೆ", description: "Desi beans seeds" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ನಾಟಿ ಬದನೆ", description: "Desi brinjal seeds" }
        ]
      },
      {
        name: "ಮುಖುನ & ಗಜ್ಜುಗ ಬೀಜ ಪೂರೈಕೆದಾರ",
        contact: "94494 61074",
        location: null,
        products: [
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಮುಖುನ ಬೀಜ", description: "Mucuna seeds" },
          { category: "Seeds (ಬೀಜಗಳು)", name: "ಗಜ್ಜುಗ ಬೀಜ", description: "Gajjuga seeds" }
        ]
      },
      {
        name: "ಶ್ರೀ ಬನಶಂಕರಿ ಗೋ ಮತ್ತು ಕೃಷಿ ಅನುಸಂಧಾನ ಕೇಂದ್ರ",
        contact: "9008977319",
        location: "ಕೌಜಲಗಿ",
        description: "ಸಾವಯವ ಕೃಷಿಯಲ್ಲಿ ಬೆಳೆದ ದೇಸಿ (ಜವಾರಿ) ತರಕಾರಿ ಬೀಜಗಳು",
        products: [
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಬೆಂಡೆ", description: "ಸಾವಯವ ಕೃಷಿಯ ದೇಸಿ ತರಕಾರಿ ಬೀಜ" },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಹಾಗಲ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಹಿರೇ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಗೊಂಚಲ ಹಿರೇ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ತುಪ್ಪರಿ ಹಿರಿ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಕುಂಬಳ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಚಿನ್ನ ಕುಂಬಳ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ದೊಡ್ಡ ಕುಂಬಳ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಬೂದು ಕುಂಬಳ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಹಾಲು ಕುಂಬಳ", description: null },
          { category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ಚವಳೆ", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಹರವೆ ಸೊಪ್ಪು", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ದಂಟಿನ ಸೊಪ್ಪು", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಪಾಲಕ", description: null },
          { category: "Spices (ಮಸಾಲೆ)", name: "ಮೆಂತೆ", description: null },
          { category: "Spices (ಮಸಾಲೆ)", name: "ಕೋತಂಬರಿ", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಸಬ್ಬಸಿಗೆ", description: null },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಚಳ ಅವರೇ", description: null },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಸಣ್ಣ ಅವರೇ", description: null },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಕೆಂಪು ಅವರೇ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಗಜ್ಜರಿ ಕೆಂಪು", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಗಜ್ಜರಿ ಕೇಸರಿ", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಹುಳಿ ಚಿಕ್ಕ ಸೊಪ್ಪು", description: null },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಕರಗಸ ಅವರೇ (ಚೌಕ ವರಿ)", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಕರಿಬದನೆ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಬಿಳಿಬದನೆ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಬಿಳಿ ಮತ್ತು ಕಪ್ಪು ಮಿಶ್ರಿತ ಬದನೆ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಸಣ್ಣ ಬದನೆ", description: null },
          { category: "Beans (ಬೀನ್ಸ್)", name: "ಚಪ್ಪರದವರೆ", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಪುಂಡಿ ಸೊಪ್ಪು", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಬಸಳೆಸೊಪ್ಪು ಕೆಂಪು ಮತ್ತು ಬಿಳಿ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಟೊಮೆಟೊ ಸಣ್ಣ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ದೊಡ್ಡ ಟೊಮೆಟೊ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಸಮತೆ ಸಣ್ಣ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಉದ್ದ ಸೌತೆ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಗೋಳಗಾಯಿ ಸೌತಿ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಹಾಗಲಕಾಯಿ ಹಸಿರು", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಬಿಳಿ ಹಾಗಲ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಸಣ್ಣ ಹಗಲು", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಗೊಂಚಲ ಮೆಣಸಿನಕಾಯಿ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಗಿಡ್ಡ ಮೆಣಸಿನಕಾಯಿ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಬಳ ಮೇಸಿನಕಾಯಿ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಮಾರಿಹಾಳ ಮೆಣಸಿನಕಾಯಿ", description: null },
          { category: "Vegetables (ತರಕಾರಿ)", name: "ಡೊಣ್ಣಗಾಯಿ ಮೆಣಸಿನಕಾಯಿ ದೇಸಿ", description: null },
          { category: "Leafy Vegetables (ಸೊಪ್ಪು)", name: "ಕಿರಿಕ್ ಸನಿ ಸೊಪ್ಪು", description: null }
        ]
      },
    ];

    // Insert farmers with products
    for (const f of farmersData) {
      const farmer = new Farmer({
        name: f.name,
        contact: f.contact,
        location: f.location || null,
        description: f.description || null,
        products: f.products || [],
      });
      await farmer.save();
    }

    console.log("🌱 Farmers and products seeded successfully!");
    console.log(`✅ Total farmers added: ${farmersData.length}`);
  } catch (err) {
    console.error("❌ Error seeding data:", err);
  } finally {
    mongoose.connection.close();
  }
}

// Run seed
seed();
