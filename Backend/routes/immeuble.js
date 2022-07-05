const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Immeuble } = require("../models/Immeuble");

// Affichage par id
router.get("/:id", async (req, res) => {
  try {
    const immeuble = await Immeuble.findById(req.params.id);
    res.send(immeuble);
  } catch (error) {
    console.log(error.message);
  }
});

//Affichage de tous les immmeubles
router.get("/", async (req, res) => {
  try {
    const immeuble = await Immeuble.find();
    res.send(immeuble);
  } catch (error) {
    console.log(error.message);
  }
});
//Ajout d'un immeuble
router.post("/", async (req, res) => {
  try {
    let newImmeuble = new Immeuble({
      nom: req.body.nom,
      nbreApp: req.body.nbreApp,
      bailleur: req.body.bailleur,
      numero: req.body.numero,
    });
    const result = await newImmeuble.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Modification Immeuble
router.put("/:id", async (req, res) => {
  try {
    const immeuble = await Immeuble.updateOne(
      { _id: req.params.id },
      {
        $set: {
          nom: req.body.nom,
          nbreApp: req.body.nbreApp,
          bailleur: req.body.bailleur,
          numero: req.body.numero,
        },
      }
    );
    res.status(200).send(immeuble);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Suppression Immeuble
router.delete("/:id", async (req, res) => {
  try {
    const immeuble = await Immeuble.findByIdAndDelete(req.params.id);
    if (!immeuble)
      res.status(404).send("Cet Id ne correspond à aucun immeuble");

    res.status(200).send(immeuble);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
