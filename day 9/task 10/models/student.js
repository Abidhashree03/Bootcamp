const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  image: String,
  name: { type: String, required: true },
  major: String,
  year: String,
});
module.exports = mongoose.model("Student", studentSchema);
