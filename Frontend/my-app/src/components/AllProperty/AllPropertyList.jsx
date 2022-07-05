import React from "react";
import Property from "./Property";
import Appartement from "./Appartement";

const AllPropertyList = ({ property, appartement, title }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-0 gx-5 align-items-end">
          <div className="col-lg-6">
            <div
              className="text-start mx-auto mb-5 wow slideInLeft"
              data-wow-delay="0.1s"
            >
              <h1 className="mb-3">
                Liste des {property && appartement ? "Propriétés" : ""}
                {title && title}
              </h1>
              <p>
                Recherchez votre type de besoin (Appartements ou Maison) à
                vendre ou à louer , des terrains fiables dans des zones deja
                habitées .
              </p>
            </div>
          </div>
          <div
            className="col-lg-6 text-start text-lg-end wow slideInRight"
            data-wow-delay="0.1s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
              <li className="nav-item me-2">
                <a
                  className="btn btn-outline-primary active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  Liste
                </a>
              </li>
              <li className="nav-item me-2">
                <a
                  className="btn btn-outline-primary"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  à vendre
                </a>
              </li>
              <li className="nav-item me-0">
                <a
                  className="btn btn-outline-primary"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  à louer
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            {property && <Property property={property} />}
            {appartement && <Appartement appartement={appartement} />}
          </div>
        </div>

        <div
          className="col-12 text-center wow fadeInUp"
          style={{ marginTop: "70px" }}
          data-wow-delay="0.1s"
        >
          <a className="btn btn-primary py-3 px-5" href="#">
            Browse More Property
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllPropertyList;
