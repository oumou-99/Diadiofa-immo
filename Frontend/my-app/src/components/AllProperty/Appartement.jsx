import { Link } from "react-router-dom";

const showApp = (option) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="property-item rounded overflow-hidden">
        <div className="position-relative overflow-hidden">
          <a>
            <img
              className="img-fluid"
              src={option.img}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "225px",
              }}
            />
          </a>
          <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
            {option.etat.libelle}
          </div>
          <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
            Appartement {option.reference}
          </div>
        </div>
        <div className="p-4 pb-0">
          <h5 className="text-primary mb-3">{option.prix} FCFA</h5>
        </div>
        <div className="pb-0" style={{ marginLeft: "20px" }}>
          <a className="d-block h5">{option.immeuble.nom}</a>
        </div>
        <div
          className="pb-0"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "15px",
          }}
        >
          <p
            style={{
              color: "#102F4F",
              textTransform: "uppercase",
              fontSize: "1px",
            }}
          >
            <i className="fa fa-map-marker-alt text-primary me-2"></i>
            {option.localisation}
          </p>
          <Link
            to={"/demande/" + "Appartement/" + option._id}
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              fontSize: "13px",
              textAlign: "center",
              width: "40px",
              padding: "2px 5px",
              color: "white",
              fontWeight: "bold",
              backgroundColor: "#102F4F",
              marginTop: "-12px",
            }}
          >
            Voir
          </Link>
        </div>
        <div className=" pb-0"></div>
        <div className="d-flex border-top">
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-ruler-combined text-primary me-2"></i>
            {option.dimenssion}
          </small>
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-bed text-primary me-2"></i>3 Bed
          </small>
          <small className="flex-fill text-center py-2">
            <i className="fa fa-bath text-primary me-2"></i>2 Bath
          </small>
        </div>
      </div>
    </div>
  );
};

const Appartement = ({ appartement }) => {
  const length = Object.keys(appartement).length;

  return (
    <div className="row g-4">
      {length > 1 && appartement.map((option) => showApp(option))}
      {length === 1 && showApp(appartement)}
    </div>
  );
};

export default Appartement;
