const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const etatRoutes = require("./routes/etat");
const clientRoutes = require("./routes/client");
const demandeRoutes = require("./routes/demande");
const immeubleRoutes = require("./routes/immeuble");
const locataireRoutes = require("./routes/locataire");
const appartementRoutes = require("./routes/appartement");
const autreProprieteRoutes = require("./routes/autrePropriete");
const paiementRoutes = require("./routes/paiement");

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/etat", etatRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/demande", demandeRoutes);
app.use("/api/immeuble", immeubleRoutes);
app.use("/api/locataire", locataireRoutes);
app.use("/api/appartement", appartementRoutes);
app.use("/api/autrePropriete", autreProprieteRoutes);
app.use("/api/paiement", paiementRoutes);

mongoose
  .connect("mongodb://localhost/gestion_Immo")
  .then(() => console.log("Connected to mongodb"))
  .catch(() => console.log("Could not connect to Mongodb"));

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`\nBackend server is listening on port ${port} :) ...`)
);
