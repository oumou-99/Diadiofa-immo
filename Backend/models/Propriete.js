const joi = require("joi");
const mongoose = require("mongoose");

const proprieteSchema = new mongoose.Schema(
  {
    _id: false,

    prix: {
      type: Number,
      required: true,
    },
    dimenssion: {
      type: String,
    },
    localisation: {
      type: String,
      required: true,
    },
    locataire: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Locataire",
      default: null,
    },
    etat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Etat",
    },
  },
  { timestamps: true }
);

function validate(propriete) {
  const schema = joi.object.keys({
    prix: joi.number().required(),
    dimenssion: joi.string().required(),
    localisation: joi.string().required(),
    locataire: {},
  });

  return schema.validate(propriete);
}

module.exports.ProprieteSchema = proprieteSchema;
module.exports.Propriete = mongoose.model("Propriete", proprieteSchema);
