const mongoose = require("mongoose");

// Writting the Schema
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    "productName": String,
    "price": Number
  },
  {
    "collection": "productsCollection"
  }
);

// Export the schema
module.exports = mongoose.model("productsCollection", productSchema);