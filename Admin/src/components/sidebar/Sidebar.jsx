import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Accueil
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Locataire</h3>
          <ul className="sidebarList">
            <Link to="/addLocataire" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Nouvel locataire
              </li>
            </Link>
            <Link to="/listLocataire" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Liste locataire
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Immeuble</h3>
          <ul className="sidebarList">
            <Link to="/addImmeuble" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Nouvel immeuble
              </li>
            </Link>
            <Link to="/listImmeuble" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Liste immeuble
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Propriété</h3>
          <ul className="sidebarList">
            <Link to="/addApp" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Nouvel appartement
              </li>
            </Link>
            <Link to="/listApp" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Liste appartement
              </li>
            </Link>

            <Link to="/addPropriete" className="link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Nouvelle proprieté
              </li>
            </Link>
            <Link to="/listPropriete" className="link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Liste proprieté
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Paiement</h3>
          <ul className="sidebarList">
            <Link to="/addPaiement" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Paiement
              </li>
            </Link>
            <Link to="/listPaiement" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Liste paiement
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
