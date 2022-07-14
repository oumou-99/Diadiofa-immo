import About from "./pages/About";
import Villa from "./pages/Villa";
import Maison from "./pages/Maison";
import Contact from "./pages/Contact";
import Demande from "./pages/Demande";
import Terrain from "./pages/Terrain";
import Accueil from "./pages/Accueil";
import Appartement from "./pages/Appartement";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/appartement" element={<Appartement />} />
        <Route path="/maison" element={<Maison />} />
        <Route path="/terrain" element={<Terrain />} />
        <Route path="/appartement" element={<Appartement />} />
        <Route path="/villa" element={<Villa />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demande" element={<Demande />} />
      </Routes>
    </Router>
  );
}

export default App;
