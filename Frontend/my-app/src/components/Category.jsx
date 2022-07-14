import _ from "lodash";
import { useEffect, useState } from "react";

const Category = ({ property, appartement }) => {
  const [villa, setVilla] = useState([]);
  const [maison, setMaison] = useState([]);
  const [terrain, setTerrain] = useState([]);
  const [app, setApp] = useState([]);

  const countProperty = (array, value) =>
    array.reduce((a, v) => (v.libelle === value ? a + 1 : a), 0);

  const countApp = (array, value) =>
    array.reduce((a, v) => (v.reference ? a + 1 : a), 0);

  useEffect(() => {
    const getNumber = async () => {
      try {
        setMaison(countProperty(property, "Maison"));
        setVilla(countProperty(property, "Villa"));
        setTerrain(countProperty(property, "Terrain"));
        setApp(countApp(appartement, ""));
      } catch (error) {
        console.log(error);
      }
    };
    getNumber();
  });

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <h1 className="mb-3">Type de proprietés ...</h1>
          <p>Nous disposons des appartements, maisons, villas et terrains</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <a className="cat-item d-block bg-light text-center rounded p-3">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/icon-apartment.png" />
                </div>
                <h6>Appartement</h6>
                <span>{app} Proprietés</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <a className="cat-item d-block bg-light text-center rounded p-3">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/icon-villa.png" />
                </div>
                <h6>Villa</h6>
                <span>{villa} Proprietés</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <a className="cat-item d-block bg-light text-center rounded p-3">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/icon-house.png" />
                </div>
                <h6>Maison</h6>
                <span>{maison} Proprietés</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <a className="cat-item d-block bg-light text-center rounded p-3">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img
                    className="img-fluid"
                    src="img/icon-housing.png"
                    alt="Icon"
                  />
                </div>
                <h6>Terrain</h6>
                <span>{terrain} Proprietés</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
