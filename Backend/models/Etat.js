const joi = require("joi");
const mongoose = require("mongoose");

const etatSchema = new mongoose.Schema({
  libelle: {
    type: String,
    required: true,
    enum: ["à vendre", "à louer", "vendu", "loué"],
  },
});

function validate(etat) {
  const schema = joi.object({
    libelle: joi.string().required,
  });
  return schema.validate(etat);
}

module.exports.EtatSchema = etatSchema;
module.exports.Etat = mongoose.model("Etat", etatSchema);
