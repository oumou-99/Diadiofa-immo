const joi = require("joi");
const mongoose = require("mongoose");
const { PersonneSchema } = require("./Personne");

const ClientSchema = new mongoose.Schema({
  client: {
    type: PersonneSchema,
  },
});

function validate(client) {
  const schema = joi.object().keys({
    nom: joi.string().min(5).max(255).required(),
    numero: joi.number().required(),
    email: joi.string().required().email(),
  });
  return schema.validate(client);
}

module.exports.validate = validate;
module.exports.ClientSchema = ClientSchema;
module.exports.Client = mongoose.model("client", ClientSchema);
