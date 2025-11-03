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
const uri = process.env.MONGODB_URI || "mongodb+srv://srushtims:Qwert12345@mongodblab1.u11dp.mongodb.net/krushii?retryWrites=true&w=majority";

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
      { category: "Pulses (ಕಾಳುಗಳು)", name: "ಅವರೆ", description: "Field Beans" }
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
      {category: "Seeds (ಬೀಜಗಳು)",name: "ಮರ ತೊಗರಿ", description: "ನೈಸರ್ಗಿಕವಾಗಿ ಬೆಳೆದ ಮರ ತೊಗರಿ ಬೀಜ" },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ಬಿಳಿ ತೊಗರಿ", description: "ನೈಸರ್ಗಿಕವಾಗಿ ಬೆಳೆದ ಬಿಳಿ ತೊಗರಿ ಬೀಜ" },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ಕೆಂಪು ತೊಗರಿ", description: "ನೈಸರ್ಗಿಕವಾಗಿ ಬೆಳೆದ ಕೆಂಪು ತೊಗರಿ ಬೀಜ" },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ಪಿಂಕ್ ತೊಗರಿ", description: "ನೈಸರ್ಗಿಕವಾಗಿ ಬೆಳೆದ ಪಿಂಕ್ ತೊಗರಿ ಬೀಜ" },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ಗುಳ್ಳ ಯಾಳ ತೊಗರಿ", description: "ನೈಸರ್ಗಿಕವಾಗಿ ಬೆಳೆದ ಗುಳ್ಳ ಯಾಳ ತೊಗರಿ ಬೀಜ" }
    ]
  },
  {
   name: "ಶಿವಮೂರ್ತಿ",
   contact: "+91 70223 98917",
    location: null,
products: [
      {category: "Millets (ಸಿರಿಧಾನ್ಯಗಳು)",name: "ರಾಗಿ", description: "ನೈಸರ್ಗಿಕವಾಗಿ ಬೆಳೆದ ರಾಗಿ ಬೀಜಗಳು" },
      {category: "Millets (ಸಿರಿಧಾನ್ಯಗಳು)",name: "ಉದುಲು", description: "ಸ್ಥಳೀಯ ಉದುಲು ಬೀಜಗಳು" },
      {category: "Millets (ಸಿರಿಧಾನ್ಯಗಳು)",name: "ಆರಕ", description: "ಸಾಂಪ್ರದಾಯಿಕ ಆರಕ (ಜೋಳದ ಒಂದು ಪ್ರಕಾರ) ಬೀಜಗಳು" },
      {category: "Millets (ಸಿರಿಧಾನ್ಯಗಳು)",name: "ಹರಳು", description: "ಹರಳು (Barn Millet) ಬೀಜಗಳು" },
      {category: "Pulses (ಕಾಳುಗಳು)",name: "ಅವರೇ ತೊಗರಿ", description: "ಅವರೇ ತೊಗರಿ ಬೀಜಗಳು" },
      {category: "Pulses (ಕಾಳುಗಳು)",name: "ಅಲಸಂದಿ", description: "ಸ್ಥಳೀಯ ಅಲಸಂದಿ ಬೀಜಗಳು" }
    ]
  },
  {
   name: "ಜಿ. ಪಿ ಅಂಜಿನಯ್ಯ",
   contact: "9742822792",
    location: "ಗ್ರಾಮ: ಮಂಡಲಗೆರೆ, ತಾಲ್ಲೂಕು: ರಾಯಚೂರು, ಪಿನ್ ಕೋಡ್: 584102",
products: [
      {category: "Seeds (ಬೀಜಗಳು)",name: "ನಾಟಿ ಅಲ್ಸಂದೆ", description: null },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ನಾಟಿ ಅಲಸಂದೆ ಕೆಂಪು", description: null },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ನಾಟಿ ಹಲಸಂದೆ ಬಿಳಿ", description: null },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ನಾಟಿ ಅಲಸಂದೆ ಕೆಂಪು ಬೆಳೆ ಮಿಕ್ಸ್ರಣೆ", description: null },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ಗೋವಿಂನಾ ಜೋಳ", description: null },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ಉರುಳಿ ಕೆಂಪು", description: null },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ಹುರುಳಿ ಬಿಳಿ", description: null },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ತೊಗರಿ ಕೆಂಪು", description: null },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ತೊಗರಿ ಬಿಳಿ", description: null },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ಹೆಸರು ಕಾಳು", description: null },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ಉದ್ದು", description: null }
    ]
  },
  {
   name: "ಸಿರಮಂತ ನಂದೂರ",
   contact: "9980334247",
    location: "ಬರಡೋಲ, ತಾ. ಚಡಚಣ, ಜಿ. ವಿಜಯಪುರ",
products: [
      {category: "Seeds (ಬೀಜಗಳು)",name: "ತೊಗರಿ Foundation ಬೀಜ GRG-152", description: "ಮೊಳಕೆ ಪ್ರಮಾಣ ಪರೀಕ್ಷಿಸಿದ, ಶಿಫಾರಸ್ಸು ಮಾಡಿದ ಕ್ರಮಗಳಿಂದ ಬೆಳೆದ, Foundation variety. ದರ: ರೂ 100 / kg" }
    ]
  },
  {
   name: "ರಾಜೇಂದ್ರ ಬೆಳಗಾವಿ",
   contact: "+919632446565",
    location: "Belagavi, Karnataka",
products: [
      {category: "Seeds (ಬೀಜಗಳು)",name: "ಸೋಯಾಬೀನ್", description: "ಸೋಯಾಬೀನ್ ಬೀಜಗಳು ಲಭ್ಯವಿದೆ." },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ಕಪ್ಪು ಕಡಲೆ (ಜವಾರಿ)", description: "ಕಪ್ಪು ಕಡಲೆ (ಜವಾರಿ) ಬೀಜಗಳು ಲಭ್ಯವಿದೆ." },
      {category: "Seeds (ಬೀಜಗಳು)",name: "ಜವೆ ಗೋದಿ", description: "ಜವೆ ಗೋದಿ ಬೀಜಗಳು ಲಭ್ಯವಿದೆ." }
    ]
  },
  {
    name: "ಕ್ರಷಿಕ",
    contact: "9620616616",
    location: "ಚಿತ್ರದುರ್ಗ, ಕರ್ನಾಟಕ",
    products: [
      {category: "Medicinal Seeds (ಔಷಧಿ ಬೀಜಗಳು)", name: "ರಾಮ ತುಳ್ಸಿ", description: "Rama Tulsi seeds - ₹1650" },
      {category: "Medicinal Seeds (ಔಷಧಿ ಬೀಜಗಳು)", name: "ಕೃಷ್ಣ ತುಳ್ಸಿ", description: "Krishna Tulsi seeds - ₹2000" },
      {category: "Vegetable Seeds (ತರಕಾರಿ ಬೀಜಗಳು)", name: "ನುಗ್ಗೆ", description: "Drumstick seeds - ₹1650" },
      {category: "Forest Plant Seeds (ಅರಣ್ಯ ಸಸ್ಯ ಬೀಜಗಳು)", name: "ಶ್ರೀಗಂದ", description: "Sandalwood seeds - ₹2000" },
      {category: "Forest Plant Seeds (ಅರಣ್ಯ ಸಸ್ಯ ಬೀಜಗಳು)", name: "ಮಹಾಘಾನಿ", description: "Mahogany seeds - ₹1400" },
      {category: "Fruit Seeds (ಹಣ್ಣಿನ ಬೀಜಗಳು)", name: "ನಿಂಬೆ", description: "Lemon seeds - ₹2000" },
      {category: "Fruit Seeds (ಹಣ್ಣಿನ ಬೀಜಗಳು)", name: "ಸೀಬೆ", description: "Guava seeds - ₹1200" },
      {category: "Fruit Seeds (ಹಣ್ಣಿನ ಬೀಜಗಳು)", name: "ಪಪ್ಪಾಯಿ", description: "Papaya seeds - ₹2000" },
      {category: "Fruit Seeds (ಹಣ್ಣಿನ ಬೀಜಗಳು)", name: "ದಾಳಿಂಬೆ", description: "Pomegranate seeds - ₹1800" },
      {category: "Fruit Seeds (ಹಣ್ಣಿನ ಬೀಜಗಳು)", name: "ಸೀತಾಫಲ", description: "Custard apple seeds - ₹1500" },
      {category: "Medicinal Seeds (ಔಷಧಿ ಬೀಜಗಳು)", name: "ಬೃಂಗರಾಜ", description: "Bhringraj seeds - ₹2000" },
      {category: "Medicinal Seeds (ಔಷಧಿ ಬೀಜಗಳು)", name: "ಬಿಲ್ವ ಪತ್ರೆ", description: "Bilva patre seeds - ₹1500" },
      {category: "Medicinal Seeds (ಔಷಧಿ ಬೀಜಗಳು)", name: "ಗುಲಗಂಜಿ", description: "Abrus seeds (Red Black White) - ₹950" },
      {category: "Forest Plant Seeds (ಅರಣ್ಯ ಸಸ್ಯ ಬೀಜಗಳು)", name: "ಕಮಲಾ", description: "Lotus seeds - ₹1800" },
      {category: "Medicinal Seeds (ಔಷಧಿ ಬೀಜಗಳು)", name: "ಅಶ್ವಗಂಧ", description: "Ashwagandha seeds - ₹650" },
      {category: "Medicinal Seeds (ಔಷಧಿ ಬೀಜಗಳು)", name: "ಶತಾವರಿ", description: "Shatavari seeds - ₹2500" }
    ]
  },
  {
    name: "ಸಂತೋಷ ಪಾಗದ",
contact: "9481448990 / 9741108500",
    location: "ಪೋ-ಕೊತಬಾಳ, ತಾ-ರೋಣ, ಜಿ-ಗದಗ",
    products: [
      {category: "Seeds (ಬೀಜಗಳು)", name: "CoFS-31 - ಬಹುವಾರ್ಷಿಕ ಮೇವಿನ ಜೋಳ", description: "Multi cut fodder sorghum variety suitable for goats, sheep, and dairy farms." },
      {category: "Seeds (ಬೀಜಗಳು)", name: "Lucerne/Alfalfa - ಕುದುರಿಮೆಂತೆ", description: "High protein perennial fodder." },
      {category: "Seeds (ಬೀಜಗಳು)", name: "Hedgelucerne - ಬೇಲಿಮೆಂತೆ/ಧಶರಥ ಕಡ್ಡಿ", description: "Perennial fodder crop suitable as hedge and fodder." },
      {category: "Seeds (ಬೀಜಗಳು)", name: "Susbania - ಚೋಗಚಿ/ಅಗಸೆ/ಶಡೆ", description: "Fast-growing fodder tree crop." },
      {category: "Seeds (ಬೀಜಗಳು)", name: "Subabul - ಸುಬಾಬುಲ್", description: "Common perennial fodder tree for cattle and goats." },
      {category: "Seeds (ಬೀಜಗಳು)", name: "Drumstick - ನುಗ್ಗೆ", description: "Nutritious fodder leaves also used for human consumption." }
    ]
  },
  {
    name: "ಕ್ರಷಿಕ",
contact: "9538838814",
    location: "ಚಿತ್ರದುರ್ಗ, ಕರ್ನಾಟಕ",
    products: [
      {category: "Seeds (ಬೀಜಗಳು)", name: "ಮೇವಿನ ಬೀಜಗಳು", description: "Multi-cut fodder seeds (7-9 years continuous fodder supply). No thorns or weeds, improves milk yield and fat content, suitable for cows, goats, sheep, rabbits, horses, and native chicken. Can be used for silage, dry fodder, or green fodder." }
    ]
  },
  {
    name: "ಎಚ್.ಜೆ. ಪದ್ಮರಾಜು",
contact: "9945323787",
    location: "ತೋವಿನಕೆರೆ 572138, ತುಮಕೂರು ಜಿಲ್ಲೆ",
    products: [
      {category: "Plants (ಸಸಿಗಳು)", name: "ತೆಂಗಿನ ಸಸಿಗಳು", description: "ಆಯ್ದ 25 ಮರಗಳಿಂದ ಆಯ್ದ ಕಾಯಿ ಮೂಲಕ ಬೆಳೆದ ನಾಟಿ ಸಸಿಗಳು. ಪ್ರತಿಯೊಂದು ₹150-175 ಕ್ಕೆ ಮಾರಾಟ. ಯಾವುದೇ ರಾಸಾಯನಿಕ ಗೊಬ್ಬರ ಅಥವಾ ಟಾನಿಕ್ ಬಳಸದೇ, 8 ವರ್ಷಗಳಿಂದ ಶುದ್ಧ ವಿಧಾನದಲ್ಲಿ ಬೆಳೆಯಲಾಗುತ್ತಿದೆ." }
    ]
  },
  {
    name: "ಕನಕಪುರ ಆರ್ಗಾನಿಕ್ ಪ್ರೋಡ್ಯುಸರ್ ಕಂಪನಿ (KOPCL)",
contact: "9845968372 / 8431540724 / 7975438900",
    location: "ಕನಕಪುರ, ಕರ್ನಾಟಕ (ರಾಜ್ಯವ್ಯಾಪಿ ರೈತರಿಗೆ ಲಭ್ಯ)",
    products: [
      {category: "Seeds (ಬೀಜಗಳು)", name: "ಕೊರಲೆ", description: "ಉಚಿತ ಬೀಜ ವಿತರಣೆ. ಖರೀದಿ ಬೆಲೆ: ₹4100" },
      {category: "Seeds (ಬೀಜಗಳು)", name: "ಊದಲು", description: "ಉಚಿತ ಬೀಜ ವಿತರಣೆ. ಖರೀದಿ ಬೆಲೆ: ₹3900" },
      {category: "Seeds (ಬೀಜಗಳು)", name: "ಸಾಮೆ", description: "ಉಚಿತ ಬೀಜ ವಿತರಣೆ. ಖರೀದಿ ಬೆಲೆ: ₹3900" },
      {category: "Seeds (ಬೀಜಗಳು)", name: "ನವಣೆ", description: "ಉಚಿತ ಬೀಜ ವಿತರಣೆ. ಖರೀದಿ ಬೆಲೆ: ₹3600" },
      {category: "Seeds (ಬೀಜಗಳು)", name: "ಹಾರಕ", description: "ಉಚಿತ ಬೀಜ ವಿತರಣೆ. ಖರೀದಿ ಬೆಲೆ: ₹3600" }
    ]
  },
  {
    name: "ಕ್ರಷಿಕ",
    contact: "95388 38814",
    location: "ಚಿತ್ರದುರ್ಗ, ಕರ್ನಾಟಕ",
    products: [
      {
        category: "Seeds (ಬೀಜಗಳು)",
        name: "ಮೇವಿನ ಬೀಜಗಳು (Multi-cut fodder seeds)",
        description: "ಹಸು, ಕುರಿ, ಮೇಕೆ, ಎಮ್ಮೆ, ಮೊಲ ಮತ್ತು ಕುದುರೆ ಸಾಕಾಣಿಕೆ ಮಾಡುವವರಿಗೆ. ನಾಟಿ ಕೋಳಿ ಸಾಕಾಣಿಕೆಗೆ ಸಹ ಸೂಕ್ತ. 7-9 ವರ್ಷಗಳವರೆಗೆ ನಿರಂತರವಾಗಿ ಹಸಿ ಮೇವು ಲಭ್ಯ. ಮುಳ್ಳು/ಸುಂಕು ಇಲ್ಲದೆ, ದಂಟು ಸಣ್ಣದಾಗಿದ್ದು ಪ್ರಾಣಿಗಳು ಇಷ್ಟಪಡುವಂಥದ್ದು. ಹಾಲಿನ ಇಳುವರಿ ಹಾಗೂ ಫ್ಯಾಟ್ ಅಂಶ ಹೆಚ್ಚಾಗುತ್ತದೆ. ಕುರಿ, ಮೇಕೆ, ಮೊಲಗಳಿಗೆ ತೂಕ ಹೆಚ್ಚುವಿಕೆಗೆ ಸಹಕಾರಿ. ಸೈಲೆಜ್, ಒಣಮೇವು ಹಾಗೂ ಹಸಿಮೇವು ರೂಪದಲ್ಲಿ ಬಳಸಬಹುದು."
      }
    ]
  }
      
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
  } catch (err) {
    console.error("❌ Error seeding data:", err);
  } finally {
    mongoose.connection.close();
  }
}

// Run seed
seed();
