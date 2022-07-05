const joi = require("joi");
const mongoose = require("mongoose");
const { ClientSchema } = require("./Client");

const demandeSchema = new mongoose.Schema({
  besoin: {
    type: String,
    required: true,
    minlenght: 8,
    maxlenght: 500,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  appartement: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appartement",
    default: null,
  },
  autrePropriete: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AutrePropriete",
    default: null,
  },
});

function validate(demande) {
  const schema = joi.object({
    besoin: joi.string().min(8).max(500).required(),
  });
  return schema.validate(demande);
}

module.exports.validate = validate;
module.exports.DemandeSchema = demandeSchema;
module.exports.Demande = mongoose.model("demande", demandeSchema);
