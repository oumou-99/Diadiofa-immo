import "./NewLocataire.css";
import { useState } from "react";
import { userRequest } from "../../requestMethod";
import { useNavigate } from "react-router-dom";

export default function NewLocataire() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await userRequest.post("/locataire", inputs);
    if (res) {
      navigate("/listLocataire");
    }
  };

  return (
    <div className="newLocataire">
      <h1 className="addLocataireTitle">New Locataire</h1>
      <form className="addLocataireForm">
        <div className="addLocataireItem">
          <label>Nom</label>
          <input
            name="nom"
            type="text"
            placeholder="Adja Oumou Kalsom"
            onChange={handleChange}
          />
        </div>
        <div className="addLocataireItem">
          <label>Email </label>
          <input
            name="email"
            type="text"
            placeholder="adja@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="addLocataireItem">
          <label>Numéro</label>
          <input
            name="numero"
            type="text"
            placeholder="774124577"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick} className="addLocataireButton">
          Create
        </button>
      </form>
    </div>
  );
}
