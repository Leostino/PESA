// require mongoose

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// collection
const pesaSchema = new Schema({
// from project group
  company_name: { type: String, required: true },
  description: { type: String, required: true },
  location: {type: String, required: true  },
  position: { type: String, required: true },
  application_date: { type: Date, default: null },
  documents: {type: String, default: ""},
  // my project

  company: { type: String, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  link: { type: String, required: true },
  instruction: { type: String, required: true },
  post_date: { type: Date, default: null }
});

const Pesa = mongoose.model("Pesa", pesaSchema);


module.exports = Pesa;
