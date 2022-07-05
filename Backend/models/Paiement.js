const Joi = require("joi");
const mongoose = require("mongoose");

const paiementSchema = new mongoose.Schema({
  appartement: {
    type: new mongoose.Schema({
      _id: false,
      reference: {
        type: String,
      },
      immeuble: {
        type: String,
      },
      locataire: {
        type: String,
      },
      prix: {
        type: String,
      },
    }),
    default: null,
  },
  autrePropriete: {
    type: new mongoose.Schema({
      _id: false,
      libelle: {
        type: String,
        // required: true,
      },

      client: {
        type: String,
        // default: null,
      },
      prix: {
        type: String,
        // required: true,
      },
    }),
    default: null,
  },
  versements: {
    type: [
      { montant: { type: Number }, date: { type: Date, default: Date.now() } },
    ],
    default: [],
  },
  reliquat: {
    type: Number,
    required: true,
  },
  annee: {
    type: Number,
    required: true,
  },
  mois: {
    type: String,
    requuired: true,
  },
  modePaiement: {
    type: String,
    required: true,
  },
});
function validate(paiement) {
  const schema = Joi.object({
    appartement: Joi.objectId(),
    autrePropriete: Joi.objectId(),
    // versements: Joi.string().required(),
    reliquat: Joi.number().required(),
    annee: Joi.number().required(),
    mois: Joi.string().required(),
    modePaiement: Joi.string().required(),
  });

  return schema.validate(paiement);
}

module.exports.validate = validate;
module.exports.PaiementSchema = paiementSchema;
module.exports.Paiement = mongoose.model("Paiement", paiementSchema);
