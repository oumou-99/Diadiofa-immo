const joi = require("joi");
const mongoose = require("mongoose");
const { PersonneSchema } = require("./Personne");

const LocataireSchema = new mongoose.Schema({
  locataire: {
    type: PersonneSchema,
  },
});

function validate(locataire) {
  const schema = joi.object().keys({
    nom: joi.string().min(5).max(255).required(),
    numero: joi.number().required(),
    email: joi.string().required().email(),
  });
  return schema.validate(locataire);
}

module.exports.validate = validate;
module.exports.LocataireSchema = LocataireSchema;
module.exports.Locataire = mongoose.model("locataire", LocataireSchema);
