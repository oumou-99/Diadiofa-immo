const Joi = require("joi");
const mongoose = require("mongoose");

const appartementSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
  immeuble: {
    type: new mongoose.Schema({
      nom: {
        type: String,
        required: true,
      },
    }),
    default: null,
  },

  dimenssion: {
    type: String,
    required: true,
  },
  localisation: {
    type: String,
    required: true,
  },
  locataire: {
    type: new mongoose.Schema({
      nom: {
        type: String,
      },
    }),
    default: null,
  },
  prix: {
    type: Number,
    required: true,
  },
  etat: {
    type: new mongoose.Schema({
      libelle: {
        type: String,
      },
    }),
    required: false,
  },
});

function validate(appartement) {
  const schema = Joi.object({
    img: Joi.string().required(),
    reference: Joi.string().required(),
    immeuble: Joi.objectId(),
    dimenssion: Joi.string().required(),
    localisation: Joi.string().required(),
    locataire: Joi.objectId(),
    prix: Joi.number().required(),
    etat: joi.ObjectId().required(),
  });

  return schema.validate(appartement);
}

module.exports.validate = validate;
module.exports.AppartementSchema = appartementSchema;
module.exports.Appartement = mongoose.model("Appartement", appartementSchema);
