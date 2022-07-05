import React from "react";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethod";

import Call from "../components/Call";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Category from "../components/Category";
import AllPropertyList from "../components/AllProperty/AllPropertyList";

const Accueil = () => {
  const [property, setProperty] = useState([]);
  const [appartement, setAppartement] = useState([]);

  useEffect(() => {
    const getAppartement = async () => {
      try {
        const result = await userRequest.get("/appartement/disponible");
        setAppartement(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAppartement();
  }, []);

  useEffect(() => {
    const getPropriete = async () => {
      try {
        const result = await userRequest.get("/autrePropriete/disponible");
        setProperty(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPropriete();
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Category property={property} appartement={appartement} />
      <AllPropertyList property={property} appartement={appartement} />
      <Call />
      <Footer />
    </>
  );
};

export default Accueil;
