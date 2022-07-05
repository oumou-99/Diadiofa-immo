const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { AutrePropriete } = require("../models/AutrePropriete");
const { Client } = require("../models/Client");
const { Etat } = require("../models/Etat");

//Affichage propriete disponible

router.get("/disponible", async (req, res) => {
  try {
    const propriete = await AutrePropriete.find({
      $or: [{ "etat.libelle": "à vendre" }, { "etat.libelle": "à louer" }],
    });

    res.status(200).send(propriete);
  } catch (error) {
    console.log(error.message);
  }
});
// Affichage par ID
router.get("/:id", async (req, res) => {
  try {
    const autreProprieteById = await AutrePropriete.findById(req.params.id);
    if (!autreProprieteById) res.status(400).send("Invalid Property");
    res.status(200).send(autreProprieteById);
  } catch (error) {
    console.log(error.message);
  }
});
//Affichage de tous les autreProprietes
router.get("/", async (req, res) => {
  try {
    const autrePropriete = await AutrePropriete.find();
    res.status(200).send(autrePropriete);
  } catch (error) {
    console.log(error.message);
  }
});

//Ajout d'un autrePropriete
router.post("/", async (req, res) => {
  const client = await Client.findById(req.body.client);
  // if (!client) return res.status(400).send("Invalid client.");

  const etat = await Etat.findById(req.body.etat);
  if (!etat) return res.status(400).send("Invalid etat.");

  console.log("Client", client);
  console.log(etat.libelle);

  try {
    let newAutrePropriete = new AutrePropriete({
      img: req.body.img,
      libelle: req.body.libelle,
      client: {
        _id: client?._id,
        nom: client?.client.nom,
      },
      dimenssion: req.body.dimenssion,
      localisation: req.body.localisation,
      prix: req.body.prix,
      etat: {
        _id: etat?._id,
        libelle: etat?.libelle,
      },
    });
    const result = await newAutrePropriete.save();
    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
  }
});

// Modification autrePropriete
router.put("/:id", async (req, res) => {
  try {
    const autreProprieteUpdate = await AutrePropriete.updateOne(
      { _id: req.params.id },
      {
        $set: {
          libelle: req.body.libelle,
          Client: req.body.proprietaire,
          dimenssion: req.body.dimenssion,
          localisation: req.body.localisation,
          prix: req.body.prix,
          etat: req.body.etat,
        },
      }
    );
    res.status(200).send(autreProprieteUpdate);
  } catch (error) {
    console.log(error);
  }
});

// Suppression Autrepropriete
router.delete("/:id", async (req, res) => {
  const autreProprieteDelete = await AutrePropriete.findByIdAndDelete(
    req.params.id
  );
  if (!autreProprieteDelete)
    res.status(404).send("Cet Id ne correspond à aucune prorieté");

  res.status(200).send(autreProprieteDelete);
});
module.exports = router;
