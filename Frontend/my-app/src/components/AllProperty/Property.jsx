import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Property = ({ property }) => {
  const navigate = useNavigate();
  const length = Object.keys(property).length;

  const showProperty = (option) => {
    return (
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
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
              {option.libelle}
            </div>
          </div>
          <div className="p-4 pb-0">
            <h5 className="text-primary mb-3">{option.prix} FCFA</h5>
            <a className="d-block h5 mb-2">
              {/* Golden Urban House à vendre */}
            </a>
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
                fontSize: "13px",
              }}
            >
              <i className="fa fa-map-marker-alt text-primary me-2" />
              {option.localisation}
            </p>
            <button
              onClick={() => handleClick(option._id)}
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
            </button>
          </div>
          <div className="d-flex border-top">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-ruler-combined text-primary me-2" />
              {option.dimenssion}
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-bed text-primary me-2" />3 Bed
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-bath text-primary me-2" />2 Bath
            </small>
          </div>
        </div>
      </div>
    );
  };

  const handleClick = (id) => {
    navigate("/demande", {
      state: {
        PropertyId: id,
      },
    });
    //navigate("/demande/", { property: "" });
  };

  return (
    <div className="row g-4">
      {length > 1 && property.map((option) => showProperty(option))}
      {length === 1 && showProperty(property)}
    </div>
  );
};

export default Property;
