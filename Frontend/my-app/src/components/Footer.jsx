const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Coordonnées</h5>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-2" /> Rte Centre Aeré ,Yoff
              Diamalaye
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-2" /> +221 33 962 59 50 - 77 677
              08 18 - 77 208 46 45
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-2" />
              diadiofa@aokcorporation.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-outline-light btn-social">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-outline-light btn-social">
                <i className="fab fa-youtube" />
              </a>
              <a className="btn btn-outline-light btn-social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Liens Rapides</h5>
            <a className="btn btn-link text-white-50">A propos de nous</a>
            <a className="btn btn-link text-white-50">Contact</a>
            <a className="btn btn-link text-white-50"> Services</a>
            <a className="btn btn-link text-white-50">
              Politique de confidentialité
            </a>
            <a className="btn btn-link text-white-50">
              Termes &amp; Conditions
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Photos</h5>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src="img/property-1.jpg"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src="img/property-2.jpg"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src="img/property-3.jpg"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src="img/property-4.jpg"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src="img/property-5.jpg"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src="img/property-6.jpg"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Newletters</h5>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: 400 }}
            >
              <input
                className="form-control bg-transparent w-60 py-3 ps-2 pe-3"
                type="text"
                placeholder="Prenom et Nom"
              />
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5 mt-2"
                type="text"
                placeholder="Your email"
              />
            </div>
            <button type="button" className="btn btn-primary mt-2 ml-3">
              Envoyer
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              © <a className="border-bottom">diadiofa@aokcorporation.com</a>,
              Tous droits réservés.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a>Accueil</a>
                <a>Cookies</a>
                <a>Aide</a>
                <a>FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
