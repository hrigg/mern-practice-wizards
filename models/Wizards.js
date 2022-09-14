///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const WizardSchema = new mongoose.Schema({
  name: String,
  image: String,
  pet: String,
},{timestamps: true});

const Wizards = mongoose.model("Wizards", WizardSchema);

module.exports = Wizards
