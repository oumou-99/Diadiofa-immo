const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Paiement } = require("../models/Paiement");
const { Appartement } = require("../models/Appartement");
const { AutrePropriete } = require("../models/AutrePropriete");

// Affichage paiement

router.get("/", async (req, res) => {
  try {
    const paiement = await Paiement.find();
    res.status(200).send(paiement);
  } catch (error) {
    console.log(error.message);
  }
});

// Ajout d'un paiement
router.post("/", async (req, res) => {
  const appartement = await Appartement.findById(req.body.appartement);
  const autrePropriete = await AutrePropriete.findById(req.body.autrePropriete);

  try {
    let newPaiement = new Paiement({
      appartement: {
        reference: appartement?.reference,
        immeuble: appartement?.immeuble.nom,
        locataire: appartement?.locataire.nom,
        prix: appartement?.prix,
      },
      autrePropriete: {
        _id: autrePropriete?._id,
        libelle: autrePropriete?.libelle,
        client: autrePropriete?.client.nom,
        prix: autrePropriete?.prix,
      },
      versements: [
        {
          montant: req.body?.montant,
        },
      ],
      reliquat: appartement?.prix - req.body.montant,
      annee: req.body.annee,
      mois: req.body.mois,
      modePaiement: req.body.modePaiement,
    });
    const result = newPaiement.save();
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
  }
});

// Modification Paiement
router.put("/:id", async (req, res) => {
  try {
    const paie = await Paiement.findById(req.params.id);

    const somme = paie.versements
      .map((item) => item.montant)
      .reduce((prev, curr) => prev + curr, 0);

    const versement = await Paiement.updateOne(
      { _id: req.params.id },
      {
        $set: { reliquat: paie.appartement.prix - somme + req.body?.montant },
      }
    );

    await Paiement.updateOne(
      { _id: req.params.id },
      { $push: { versements: { montant: req.body?.montant } } }
    );

    res.status(200).send(paiement);
  } catch (error) {
    res.status(500).send(error);
  }
});
// Suppression Paiement
router.delete("/:id", async (req, res) => {
  try {
    const paiement = await Paiement.findByIdAndDelete(req.params.id);
    if (!paiement)
      res.status(404).send("Cet Id ne correspond à aucun paiement");

    res.status(200).send(paiement);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
