const mongoose = require("mongoose");

// Writting the Schema
const Schema = mongoose.Schema;

const quoteSchema = new Schema(
  {
    "quote": String,
    "author": String
  },
  {
    "collection": "quotesCollection"
  }
);

// Export the schema
module.exports = mongoose.model("quotesCollection", quoteSchema);