import Accueil from "./pages/Accueil";
import Appartement from "./pages/Appartement";
import Maison from "./pages/Maison";
import Terrain from "./pages/Terrain";
import Villa from "./pages/Villa";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
      </Routes>
      ;
    </Router>
  );
}

export default App;
