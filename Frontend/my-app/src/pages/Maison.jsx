import React from "react";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethod";

import Call from "../components/Call";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Category from "../components/Category";
import AllPropertyList from "../components/AllProperty/AllPropertyList";

function Maison() {
  const [maison, setMaison] = useState([]);
  useEffect(() => {
    const getMaison = async () => {
      try {
        const result = await userRequest.get("/autrePropriete/disponible");
        const res = result.data.filter((item) => item.libelle == "Maison");
        console.log(res);
        setMaison(res);
      } catch (error) {
        console.log(error);
      }
    };
    getMaison();
  }, []);
  return (
    <>
      <Navbar />
      <AllPropertyList property={maison} title="Maisons" />
      <Call />
      <Footer />
    </>
  );
}

export default Maison;
