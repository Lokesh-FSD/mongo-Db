const mongoose = require("mongoose");

// Writting the Schema
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: String,
    collegeName: String,
    location: String
  },
  {
    "collection": "studentsCollection"
  }
);

// Export the schema
module.exports = mongoose.model("studentsCollection", studentSchema);