import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { userRequest } from "../requestMethod";
import Property from "../components/AllProperty/Property";
import Appartement from "../components/AllProperty/Appartement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DemandeChild from "../components/Demande";

const Demande = ({ appartement, property, props }) => {
  const [propertyId, setPropertyId] = useState([]);
  const [appartementId, setAppartementId] = useState([]);
  const location = useLocation();
  const id = props.location.state.PropertyId;

  useEffect(() => {
    const getAppartement = async () => {
      try {
        if (["Villa", "Terrain", "Maison"].includes(params.type)) {
          const result = await userRequest.get("/autrePropriete/" + id);
          setPropertyId(result.data);
          console.log(propertyId);
          console.log(params.type);
        } else {
          const result = await userRequest.get("/appartement/" + id);
          setAppartementId(result.data);
          console.log(appartementId);
          console.log(params.type);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAppartement();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-3">Demande</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              {property && <Property property={property} />}
              {appartement && <Appartement appartement={appartement} />}
            </div>
            <DemandeChild />
          </div>
          <div className="row g-4 pt-4">
            <div className="col-12">
              <div className="row gy-4">
                <div
                  className="col-md-6 col-lg-4 wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fa fa-map-marker-alt text-primary"></i>
                      </div>
                      <span>
                        Rte Centre Aeré
                        <br />
                        Yoff - Diamalaye{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 wow fadeIn"
                  data-wow-delay="0.3s"
                >
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fa fa-envelope-open text-primary"></i>
                      </div>
                      <span>diadiofa@aokcorporation.com</span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 wow fadeIn"
                  data-wow-delay="0.5s"
                >
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fa fa-phone-alt text-primary"></i>
                      </div>
                      <span>
                        +221 33 962 59 50
                        <br />
                        +221 77 677 08 18
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Demande;
