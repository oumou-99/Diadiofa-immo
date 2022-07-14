import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid nav-bar bg-transparent">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <a className="navbar-brand d-flex align-items-center text-center">
          <div className="icon p-2 me-2">
            <img
              className="img-fluid"
              src="img/icon-deal.png"
              style={{ width: 30, height: 30 }}
            />
          </div>
          <h2 className="m-0 text-primary">Diadiofa Immo</h2>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-item nav-link active">
              Accueil
            </Link>

            <div className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Proprieté
              </Link>
              <div className="dropdown-menu rounded-0 m-0">
                <Link to="/appartement" className="dropdown-item">
                  Appartements
                </Link>
                <Link to="/maison" className="dropdown-item">
                  Maisons
                </Link>
                <Link to="/terrain" className="dropdown-item">
                  Terrains
                </Link>
                <Link to="/villa" className="dropdown-item">
                  Villas
                </Link>
              </div>
            </div>

            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Pages
              </a>
              <div className="dropdown-menu rounded-0 m-0">
                <a className="dropdown-item">Testimonial</a>
                <a className="dropdown-item">404 Error</a>
              </div>
            </div>
            <Link to="/about" className="nav-item nav-link">
              A propos{" "}
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <a className="btn btn-primary px-3 d-none d-lg-flex">Ajouter </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
