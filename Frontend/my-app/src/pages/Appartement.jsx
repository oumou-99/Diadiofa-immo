import React from "react";
import { userRequest } from "../requestMethod";
import { useEffect, useState } from "react";

import Call from "../components/Call";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Category from "../components/Category";
import AllPropertyList from "../components/AllProperty/AllPropertyList";

function appartement() {
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

  return (
    <>
      <Navbar />
      <AllPropertyList appartement={appartement} title="Appartements" />
      <Call />
      <Footer />
    </>
  );
}

export default appartement;
