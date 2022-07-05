import React from "react";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethod";

import Call from "../components/Call";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Category from "../components/Category";
import AllPropertyList from "../components/AllProperty/AllPropertyList";

function Villa() {
  const [villa, setVilla] = useState([]);
  useEffect(() => {
    const getVilla = async () => {
      try {
        const result = await userRequest.get("/autrePropriete/disponible");
        const res = result.data.filter((item) => item.libelle == "Villa");

        setVilla(res);
      } catch (error) {
        console.log(error);
      }
    };
    getVilla();
  }, []);
  return (
    <>
      <Navbar />
      <AllPropertyList property={villa} title="Villas" />
      <Call />
      <Footer />
    </>
  );
}

export default Villa;
