const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Personne } = require("../models/Personne");
const { Locataire } = require("../models/Locataire");
const { validate } = require("../models/Locataire");

// Affichage d'un locataire par ID
router.get("/:id", async (req, res) => {
  try {
    const locataire = await Locataire.findById(req.params.id);
    res.send(locataire);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Affichage de tous les locataires
router.get("/", async (req, res) => {
  try {
    const locataire = await Locataire.find();
    res.send(locataire);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Ajout d'un locataire
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    let newlocataire = new Locataire({
      locataire: new Personne({
        nom: req.body.nom,
        numero: req.body.numero,
        email: req.body.email,
      }),
    });

    const result = await newlocataire.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Modification Locataire
router.put("/:id", async (req, res) => {
  try {
    const locataire = await Locataire.updateOne(
      { _id: req.params.id },
      {
        $set: {
          locataire: {
            nom: req.body.nom,
            numero: req.body.numero,
            email: req.body.email,
          },
        },
      }
    );
    res.status(200).send(locataire);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Suppression Immeuble
router.delete("/:id", async (req, res) => {
  try {
    const locataire = await Locataire.findByIdAndDelete(req.params.id);
    if (!locataire)
      res.status(404).send("Cet Id ne correspond à aucun locataire");
    res.status(200).send(locataire);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
