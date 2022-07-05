const joi = require("joi");
const mongoose = require("mongoose");
const { ProprieteSchema } = require("./Propriete");

const autreProprieteSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  libelle: {
    type: String,
    required: true,
    enum: ["Terrain", "Maison", "Villa"],
  },
  client: {
    type: new mongoose.Schema({
      nom: {
        type: String,
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
    required: true,
  },
});

function validate(autrePropriete) {
  const schema = joi.object({
    img: joi.string().required(),
    libelle: joi.string().required(),
    client: joi.ObjectId(),
    dimenssion: joi.string().required(),
    localisation: joi.string().required(),
    prix: joi.number().required(),
    etat: joi.ObjectId().required(),
  });
  return schema.validate(autrePropriete);
}

module.exports.validate = validate;
module.exports.AutreProprieteSchema = autreProprieteSchema;
module.exports.AutrePropriete = mongoose.model(
  "AutrePropriete",
  autreProprieteSchema
);
