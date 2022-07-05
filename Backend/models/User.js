const joi = require("joi");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
    minlength: 9,
    maxlengnt: 20,
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
  isAdmin: {
    type: Boolean,
    default: true,
  },
});

UserSchema.methods.generateAuthtoken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      isAdmin: this.isAdmin,
    },
    process.env.JWT_SECRET,
    { expiresIn: "3d" }
  );
  return token;
};

function validate(user) {
  const schema = joi.object({
    prenom: joi.string().min(3).max(50).required(),
    nom: joi.string().min(2).max(50).required(),
    numero: joi.number().required(),
    email: joi.string().required().email(),
    password: joi.string().min(8).max(255).required(),
  });
  return schema.validate(user);
}

module.exports.validate = validate;
module.exports.User = mongoose.model("User", UserSchema);
