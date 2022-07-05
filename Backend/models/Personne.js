const joi = require("joi");
const mongoose = require("mongoose");

const personneSchema = new mongoose.Schema(
  {
    _id: false,
    nom: {
      type: String,
      minlength: 5,
      maxlength: 255,
    },

    numero: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

function validate(personne) {
  const schema = joi.object({
    nom: joi.string.min(5).max(255).required(),
    numero: joi.number().required(),
    email: joi.string().required().email(),
  });

  return schema.validate(personne);
}

module.exports.validate = validate;
module.exports.PersonneSchema = personneSchema;
module.exports.Personne = mongoose.model("Personne", personneSchema);
