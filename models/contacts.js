const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ContactSchema = new schema({
  nom: { type: String },
  prenom: { type: String },
  role: { type: String },
  telephone: { type: String },
  email: { type: String }
});

module.exports = Conatct = mongoose.model("contact", ContactSchema);
