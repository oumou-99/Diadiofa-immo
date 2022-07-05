const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const router = require("express").Router();

const { User } = require("../models/User");

//Login
router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid email or password");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).send("Invalid email or password");

    const token = user.generateAuthtoken();

    return res.status(200).send({ ...user._doc, token });
  } catch (error) {
    res.status(500).send(error);
  }
});

//Register
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });

  if (user) res.status(401).send("User already registered");
  try {
    let newUser = new User({
      prenom: req.body.prenom,
      nom: req.body.nom,
      numero: req.body.numero,
      email: req.body.email,
      password: req.body.password,
    });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    const result = await newUser.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

function validate(req) {
  const schema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().min(8).max(255).required(),
  });
  return schema.validate(req);
}

/*  ============= DECODE TOKEN =============
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded);
*/
