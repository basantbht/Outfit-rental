// const mongoose = require("mongoose");

// const connectDB = async (DATABASE_URI) => {
// try {
  
//     await mongoose.connect(DATABASE_URI);
//     console.log("Connected to DataBase");
//   }

// catch (e) {
//   console.log(e);
// }
// }
// module.exports=connectDB;

const mongoose = require("mongoose");
const dns = require("dns");

// Force Google DNS - fixes Windows SRV resolution issues
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async (DATABASE_URI) => {
  try {
    await mongoose.connect(DATABASE_URI, { family: 4 });
    console.log("Connected to Database");
  } catch (e) {
    console.error("Database connection failed:", e);
  }
};

module.exports = connectDB;