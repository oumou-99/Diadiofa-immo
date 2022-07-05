const joi = require("joi");
const mongoose = require("mongoose");
const { required } = require("joi");

const AdminSchema = new mongoose.Schema({
  prenom: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  nom: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
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
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 255,
  },
  isAdmin: Boolean,
});

function validate(admin) {
  const schema = joi.object({
    prenom: joi.string().min(3).max(50).required(),
    nom: joi.string().min(2).max(50).required(),
    numero: joi.number().required(),
    email: joi.string().required().email(),
    password: joi.string().min(8).max(255).required(),
  });
  return schema.validate(admin);
}

module.exports.validate = validate;
module.exports.AdminSchema = AdminSchema;
module.exports = mongoose.model("Admin", AdminSchema);
