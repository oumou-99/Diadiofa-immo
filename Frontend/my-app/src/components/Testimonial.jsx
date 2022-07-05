const Testimonial = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <h1 className="mb-3 text-primary">Diadiofa Immo</h1>
          <h5>
            L'avenir c'est maintenent...Commencez par un bon choix
            d'inviestissement.Ensemble batissons cet avenir meilleur.
          </h5>
        </div>
        <div
          className="owl-carousel testimonial-carousel wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="testimonial-item bg-light rounded p-3">
            <div className="bg-white border rounded p-4">
              <p>
                Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                est kasd kasd erat eos
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded"
                  src="img/testimonial-1.jpg"
                  style={{ width: 45, height: 45 }}
                />
                <div className="ps-3">
                  <h6 className="fw-bold mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item bg-light rounded p-3">
            <div className="bg-white border rounded p-4">
              <p>
                Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                est kasd kasd erat eos
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded"
                  src="img/testimonial-2.jpg"
                  style={{ width: 45, height: 45 }}
                />
                <div className="ps-3">
                  <h6 className="fw-bold mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item bg-light rounded p-3">
            <div className="bg-white border rounded p-4">
              <p>
                Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                est kasd kasd erat eos
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded"
                  src="img/testimonial-3.jpg"
                  style={{ width: 45, height: 45 }}
                />
                <div className="ps-3">
                  <h6 className="fw-bold mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
