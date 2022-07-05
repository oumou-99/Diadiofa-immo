const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Immeuble } = require("../models/Immeuble");
const { Etat } = require("../models/Etat");
const { Locataire } = require("../models/Locataire");
const { Appartement } = require("../models/Appartement");

//Affichage appartement disponible

router.get("/disponible", async (req, res) => {
  try {
    const appartement = await Appartement.find({
      $or: [{ "etat.libelle": "à vendre" }, { "etat.libelle": "à louer" }],
    });

    res.status(200).send(appartement);
  } catch (error) {
    console.log(error.message);
  }
});
// Affichage Appartement By Id
router.get("/:id", async (req, res) => {
  try {
    const appartement = await Appartement.findById(req.params.id);
    res.status(200).send(appartement);
  } catch (error) {
    console.log(error.message);
  }
});

//Affichage de tous les appartements
router.get("/", async (req, res) => {
  try {
    const appartement = await Appartement.find();
    res.status(200).send(appartement);
  } catch (error) {
    console.log(error.message);
  }
});

//Ajout d'un Appartement
router.post("/", async (req, res) => {
  const immeuble = await Immeuble.findById(req.body.immeuble);
  // if (!immeuble) return res.status(400).send("Invalid immeuble.");

  const locataire = await Locataire.findById(req.body.locataire);
  // if (!locataire) return res.status(400).send("Invalid locataire.");
  const etat = await Etat.findById(req.body.etat);

  try {
    let newAppartement = new Appartement({
      img: req.body.img,
      reference: req.body.reference,
      immeuble: {
        _id: immeuble?._id,
        nom: immeuble?.nom,
      },
      dimenssion: req.body.dimenssion,
      localisation: req.body.localisation,
      locataire: {
        _id: locataire?._id,
        nom: locataire?.locataire.nom,
      },
      prix: req.body.prix,
      etat: {
        _id: etat?._id,
        libelle: etat?.libelle,
      },
    });
    const result = await newAppartement.save();
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
  }
});

// Modification appartement A FAIRE
router.put("/:id", async (req, res) => {
  let immeuble, locataire;

  if (req.body.immeuble) {
    immeuble = await Immeuble.findById(req.body.immeuble);
    if (!immeuble) return res.status(400).send("Invalid immeuble.");
  }
  if (req.body.locataire) {
    locataire = await Locataire.findById(req.body.locataire);
    if (!locataire) return res.status(400).send("Invalid locataire.");
  }

  try {
    const appartement = await Appartement.updateOne(
      { _id: req.params.id },
      {
        $set: {
          reference: req.body.reference,
          immeuble: {
            _id: immeuble?._id,
            nom: immeuble?.nom,
          },
          dimenssion: req.body.dimenssion,
          localisation: req.body.localisation,
          locataire: {
            _id: locataire?._id,
            nom: locataire?.locataire.nom,
          },
          prix: req.body.prix,
        },
      }
    );
    console.log(appartement);
    res.status(200).send(appartement);
  } catch (error) {
    console.log(error);
  }
});

// Suppression Appartement
router.delete("/:id", async (req, res) => {
  try {
    const appartement = await Appartement.findByIdAndDelete(req.params.id);
    if (!appartement)
      res.status(404).send("Cet Id ne correspond à aucun appartement");
    res.status(200).send(appartement);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
