import React from "react";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethod";

import Call from "../components/Call";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Category from "../components/Category";
import AllPropertyList from "../components/AllProperty/AllPropertyList";

function Terrain() {
  const [terrain, setTerrain] = useState([]);
  useEffect(() => {
    const getTerrain = async () => {
      try {
        const result = await userRequest.get("/autrePropriete/disponible");
        const res = result.data.filter((item) => item.libelle == "Terrain");
        console.log(res);
        setTerrain(res);
      } catch (error) {
        console.log(error);
      }
    };
    getTerrain();
  }, []);
  return (
    <>
      <Navbar />
      <AllPropertyList property={terrain} title="Terrains" />
      <Call />
      <Footer />
    </>
  );
}

export default Terrain;
