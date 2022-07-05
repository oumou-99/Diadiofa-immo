const Appartement = ({ appartement }) => {
  return (
    <div className="row g-4">
      {appartement.map((option) => (
        <div className="col-lg-4 col-md-6">
          <div className="property-item rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <a href="">
                <img className="img-fluid" src={option.img} />
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
              <a className="d-block h5 mb-2" href="">
                {option.immeuble.nom}
              </a>
              <p>
                <i className="fa fa-map-marker-alt text-primary me-2"></i>
                {option.localisation}
              </p>
            </div>
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
      ))}
    </div>
  );
};

export default Appartement;
