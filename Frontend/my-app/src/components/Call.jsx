const Call = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded p-3">
          <div
            className="bg-white rounded p-4"
            style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
          >
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className="img-fluid rounded w-100"
                  src="img/call-to-action.jpg"
                  alt
                />
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="mb-4">
                  <h1 className="mb-3">
                    Prenez contact avec nos agents qualifiés
                  </h1>
                  <p>
                    Contactez nos agents qualifiés pour plus d'informations et
                    surtout pour vous accompagner et vous conseiller sur votre
                    projet{" "}
                  </p>
                </div>
                <a href className="btn btn-primary py-3 px-4 me-2">
                  <i className="fa fa-phone-alt me-2" />
                  Envoyer un message
                </a>
                <a href className="btn btn-dark py-3 px-4">
                  <i className="fa fa-calendar-alt me-2" />
                  Prendre un rdv
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
