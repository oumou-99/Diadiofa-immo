const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const { Etat } = require("../models/Etat");

//Affichage de tous les immmeubles
router.get("/", async (req, res) => {
  try {
    const etat = await Etat.find();
    res.status(200).send(etat);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Ajout d'un Etat
router.post("/", async (req, res) => {
  try {
    let newEtat = new Etat({
      libelle: req.body.libelle,
    });
    const result = await newEtat.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Modification d'un etat
router.put("/:id", async (req, res) => {
  try {
    const etatUpdate = await Etat.updateOne(
      { _id: req.params.id },
      {
        $set: {
          libelle: req.body.libelle,
        },
      }
    );
    res.status(200).send(etatUpdate);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Suppression d'un etat
router.delete("/:id", async (req, res) => {
  try {
    const etatDelete = await Etat.findByIdAndDelete(req.params.id);
    if (!etatDelete) res.status(404).send("Cet Id ne correspond à aucun etat");

    res.status(200).send(demandeDelete);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
