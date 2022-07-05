const Joi = require("joi");
const mongoose = require("mongoose");

const immeubleSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  nbreApp: {
    type: Number,
    required: true,
  },
  bailleur: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
});

function validate(Immeuble) {
  const schema = Joi.object({
    nom: Joi.string().required(),
    nbreApp: Joi.number().required(),
    bailleur: Joi.string().required(),
    numero: Joi.number().odurequired(),
  });
}
module.exports.validate = validate;
module.exports.ImmeubleSchema = immeubleSchema;
module.exports.Immeuble = mongoose.model("Immeuble", immeubleSchema);
