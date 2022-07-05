const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Personne } = require("../models/Personne");
const { Client } = require("../models/Client");
const { Demande } = require("../models/Demande");

//Affichage de toutes les demandes
router.get("/", async (req, res) => {
  try {
    const demande = await Demande.find();
    res.send(demande);
  } catch (error) {
    console.log(error.message);
  }
});

//Ajout d'une demande
router.post("/", async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  try {
    const newClient = new Client({
      client: new Personne({
        prenom: req.body.prenom,
        nom: req.body.nom,
        numero: req.body.numero,
        email: req.body.email,
      }),
    });

    let result = await newClient.save();

    const newDemande = new Demande({
      besoin: req.body.besoin,
      client: result._id,
      appartement: req.body.appartement,
      autrePropriete: req.body.autrePropriete,
    });

    result = await newDemande.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Modification Demande
router.put("/:id", async (req, res) => {
  try {
    const idClient = (await Demande.findById(req.params.id)).client;

    const clientUpdate = await Client.updateOne(
      { _id: idClient },
      {
        $set: {
          client: {
            prenom: req.body.prenom,
            nom: req.body.nom,
            numero: req.body.numero,
            email: req.body.email,
          },
        },
      }
    );

    const demandeUpdate = await Demande.updateOne(
      { _id: req.params.id },
      {
        $set: {
          besoin: req.body.besoin,
          appartement: req.body.appartement,
          autrePropriete: req.body.autrePropriete,
        },
      }
    );
    res.status(200).send(clientUpdate);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Suppression Demande
router.delete("/:id", async (req, res) => {
  try {
    const demandeDelete = await Demande.findByIdAndDelete(req.params.id);
    if (!demandeDelete)
      res.status(404).send("Cet Id ne correspond à aucune proprieté");

    res.status(200).send(demandeDelete);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
