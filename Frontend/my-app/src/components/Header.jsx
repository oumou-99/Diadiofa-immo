const Accueil = () => {
  return (
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">
            Choisissez<span className="text-primary"> L'idéal</span> Chez Nous
          </h1>
          <p className="animated fadeIn mb-4 pb-2">
            Appartement, Maison, Terrain ...
            <br />
            Définissez votre de besoin et nos agents vous suivront .
          </p>
          <a
            href="#"
            className="btn btn-primary py-3 px-5 me-3 animated fadeIn"
          >
            Commencez
          </a>
        </div>
        <div className="col-md-6 animated fadeIn">
          <div className="owl-carousel header-carousel d-block">
            <div className="owl-carousel-item active">
              <img className="img-fluid " src="img/carousel-1.jpg" />
            </div>
            {/* <div className="owl-carousel-item">
              <img className="img-fluid d-block" src="img/carousel-2.jpg" alt="true" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
