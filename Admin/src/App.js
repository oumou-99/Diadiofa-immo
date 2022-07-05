import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/login/Login";
import Layout from "./components/layout/Layout";

import NewLocataire from "./pages/Locataire/NewLocataire";
import LocataireList from "./pages/Locataire/LocataireList";
import LocataireUpdate from "./pages/Locataire/LocataireUpdate";

import NewImmeuble from "./pages/Immeuble/NewImmeuble";
import ImmeubleList from "./pages/Immeuble/ImmeubleList";
import ImmeubleUpdate from "./pages/Immeuble/ImmeubleUpdate";

import AppartementList from "./pages/Appartement/AppartementList";
import NewAppartement from "./pages/Appartement/NewAppartement";
import NewImmeubleAppartement from "./pages/Appartement/NewImmeubleAppartement";
import AppartementUpdate from "./pages/Appartement/AppartementUpdate";

import NewPropriete from "./pages/AutrePropriete/NewPropriete";
import ProprieteList from "./pages/AutrePropriete/ProprieteList";
import ProprieteUpdate from "./pages/AutrePropriete/ProprieteUpdate";

import NewPaiement from "./pages/Paiement/NewPaiement";
import PaiementList from "./pages/Paiement/PaiementList";

function App() {
  const myStorage = window.localStorage;
  const currentUser = JSON.parse(myStorage.getItem("user"));
  const user = currentUser ? currentUser.isAdmin : null;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        {user ? (
          <>
            <Route exact path="/" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="listImmeuble" element={<ImmeubleList />} />
              <Route path="addImmeuble" element={<NewImmeuble />} />
              <Route
                path="/immeuble/:immeubleId"
                element={<ImmeubleUpdate />}
              />
              <Route
                path="appartement/:immeubleId"
                element={<NewImmeubleAppartement />}
              />
              <Route path="addApp/" element={<NewAppartement />} />
              <Route path="listApp/" element={<AppartementList />} />
              <Route path="listApp/:id" element={<AppartementUpdate />} />

              <Route path="addPropriete/" element={<NewPropriete />} />
              <Route path="listPropriete/" element={<ProprieteList />} />
              <Route path="listPropriete/:id" element={<ProprieteUpdate />} />

              <Route path="addLocataire/" element={<NewLocataire />} />
              <Route path="listLocataire/" element={<LocataireList />} />
              <Route
                path="/locataire/:locataire"
                element={<LocataireUpdate />}
              />

              <Route path="addPaiement/" element={<NewPaiement />} />
              <Route path="listPaiement/" element={<PaiementList />} />
            </Route>
          </>
        ) : (
          <Route path="" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
