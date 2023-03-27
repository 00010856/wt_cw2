const mongoose = require("mongoose");
const db = (async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/wt_cw2", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Error");
  }
})();
module.exports = db;
