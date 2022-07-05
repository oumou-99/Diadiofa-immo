const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const { Client } = require("../models/Client");

//Affichage de tous les immmeubles
router.get("/", async (req, res) => {
  try {
    const client = await Client.find();
    res.status(200).send(client);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
