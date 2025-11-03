import mongoose from "mongoose";
import Ashram from "./models/ashram.js"; // adjust path

const seedAshrams = async () => {
  await mongoose.connect("mongodb+srv://srushtims:Qwert12345@mongodblab1.u11dp.mongodb.net/krushii?retryWrites=true&w=majority");

  const ashrams = [
    {
      slNo: 1,
      name: "Mahesh B Kulkarni",
      ashramName: "Madhuvana Agro Forestry",
      address: "RS 7/4B, Guruvinahalli, Kundgol Taluk, Dharwad District, PIN-580024, IN",
      mobile: ["9901775644"],
      cropDiversity: "More than 55 types of agro forestry medicinal plants",
    },
    {
      slNo: 2,
      name: "Dr Sanjay and Dr Jyoti Sanjay Chandargimath",
      ashramName: "Sanjeevani Goukulashrm",
      address: "Alnavar District, Dharwad, Karnataka, India",
      mobile: ["9448348973", "6364631956"],
      cropDiversity: "25 ತರದ ಹಣ್ಣುಗಳು, 25 ತರದ ಹಸಿ ಕಾಯಿಪಲೆ್ಲ, ಹಾವು ಗಡೆ್ಡ ಗೆಣಸುಗಳು",
    },
    {
    slNo: 3,
    name: "Lakshmikanthappa",
    ashramName: "",
    address: "Honngondanahalli, Sira TQ, Tumakuru District",
    mobile: ["9844598705"],
    cropDiversity: "Food forest, organic vegetables",
  },
  {
    slNo: 4,
    name: "B Pradeep S/o Basavaraju",
    ashramName: "",
    address: "Chikkabellavi, Bellavi Post, Tumkur",
    mobile: ["9513015051"],
    cropDiversity: "ವಿವಿಧ ಹಣು್ಣನ gidaglu",
  },
  {
    slNo: 5,
    name: "ರವಿ ಗಂಗಪ್ಪ ಕುರಬೆಟ",
    ashramName: "",
    address: "ಮುಖ್ಯ ಪೋಸ್ಟ್, ಮರಕುಂಬಿ ತಾಲ್ಲೂಕು, ಸೌದತಿ ಜಿಲೆಲ್ ಬೆಳಗಾಂ",
    mobile: ["9902273538"],
    cropDiversity: "ಲಿಂಬು, ಕರಿಮೆವು, ಗೊಂಜಾಳ, ಕಬು ಶೇಂಗಾ",
  },
  {
    slNo: 6,
    name: "Sunil M S",
    ashramName: "",
    address: "Tubagere, Doddaballapur",
    mobile: ["9886896969"],
    cropDiversity: "ತರಕಾರಿಗಳು, ಮಾವು, ಹುಣಸೆ, ಮಿಶ್ರ ಹಣು್ಣಗಳು, ಶಿರ್ಗಂಧ, ಹೆಬೆವು, ನುಗೆ್ಗ, ಅಗಸೆ, Dalchinni etc.",
  },
  {
    slNo: 7,
    name: "ಬಸವರಾಜು N D",
    ashramName: "",
    address: "ಚಿಂದೇನಹಳ್ಳಿ ಗಡಿ, ಅರಸೀಕೆರೆ ತಾಲ್ಲೂಕು, ಹಾಸನ ಜಿಲೆಲ್",
    mobile: ["9741415073"],
    cropDiversity: "80 (not specified)",
  },
  {
    slNo: 8,
    name: "ಧನ್ವಂತರಿ ಸಸ್ಯಕಾಶಿ",
    ashramName: "",
    address: "ಹೊನ್ನಗೊಂಡನಹಳ್ಳಿ, ಶಿರಾ ತಾಲ್ಲೂಕು, ತುಮಕೂರು ಜಿಲೆಲ್, PIN 572137",
    mobile: ["9844598705"],
    cropDiversity: "5000 ಕು್ಕ ಹೆಚಿ ನ ಮರಗಳು ಇವೆ",
  },
  {
    slNo: 9,
    name: "ಪರಶುರಾಮ್",
    ashramName: "",
    address: "ಎತಿತನಗುಡ್ಡ ಅಂಚೆ/ಊರು: ಸುಳಿಕಟಿ, ತಾ:ಕಲಘಟಗಿ, ಜಿಲಾ:ಧಾರವಾಡ್",
    mobile: ["9449949699"],
    cropDiversity: "80 ಮಾವು, ಪೆರಾಲ್, ಬತ್ತ, ಸಾಮೆ, ಮಡಿಕೆ, ಹೆಸರು, ಜೋಳ, ತೊಗರಿ",
  },
  {
    slNo: 10,
    name: "ವೀರೇಶ. ಮನಗೂಳಿ",
    ashramName: "",
    address: "ಮನಗೂಳಿ ಗ್ರಾಮ, ಬಸವನ ಬಾಗೇವಾಡಿ ತಾಲೂಕು, ವಿಜಯಪುರ ಜಿಲೆಲ್, 586122",
    mobile: ["9591436195"],
    cropDiversity: "ಕಬು, ಬಾಳೆ, ಗೋವಿನ, ಜೋಳ, ತೆಂಗು, ಮಾವು, ಚಿಕು, ಸೀಬೆ, ಮಹಾಗನಿ, ರೇಷೆ್ಮ",
  },
  ];

  await Ashram.insertMany(ashrams);
  console.log("Ashrams seeded successfully!");
  mongoose.connection.close();
};

seedAshrams();
