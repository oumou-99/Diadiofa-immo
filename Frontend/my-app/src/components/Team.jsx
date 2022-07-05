const Team = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <h1 className="mb-3">Liste de nos Agents</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
            vero dolor duo.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src="img/team-1.jpg" alt />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square mx-1" href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href>
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href>
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">Fatima Sy</h5>
                <small>Agent Immobilier</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src="img/team-2.jpg" alt />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square mx-1" href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href>
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href>
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">Michel Kyle </h5>
                <small>Agent Immobilier</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src="img/team-3.jpg" alt />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square mx-1" href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href>
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href>
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">Samira Dee</h5>
                <small>Agent Immobilier</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src="img/team-4.jpg" alt />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square mx-1" href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href>
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href>
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">Massaly </h5>
                <small>Agent Immobilier</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
