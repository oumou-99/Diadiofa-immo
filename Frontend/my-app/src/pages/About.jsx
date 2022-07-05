import Call from "../components/Call";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import React from "react";

function About() {
  return (
    <>
      <Navbar />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img
                  className="img-fluid w-100 "
                  style={{ height: "150%" }}
                  src="img/Credit-Immo.png"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">
                #1 Endroit pour trouver la proprieté parfaite
              </h1>
              <p className="mb-4">
                Des logements de qualité superieure dans un cadre de confort .
                {/* <span className="text-primary"> */} DIADIOFA IMMO est une
                agence spécialisée dans tout ce qui est transaction immobilière,
                elle est notamment active dans la gestion, la location et la
                gérance de biens immobiliers.Diadiofa Immo {/* </span>{" "} */}
                vous offre des residences idéales adaptées à votre besoin{" "}
              </p>
              <p className="me-3">
                <i className="fa fa-check text-primary me-4" />
                Accompagnement pour votre projet
              </p>
              <p className="me-3">
                <i className="fa fa-check text-primary me-4" />
                Logements de qualité supérieure
              </p>
              <p className="me-3">
                <i className="fa fa-check text-primary me-4" />
                Residences modernes et sécurisées
              </p>

              <a className="btn btn-primary py-3 px-5 mt-3" href>
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </div>
      <Call />
      <Footer />
    </>
  );
}

export default About;
