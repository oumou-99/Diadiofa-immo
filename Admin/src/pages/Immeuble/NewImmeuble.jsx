import "./newImmeuble.css";
import { useState } from "react";
import { userRequest } from "../../requestMethod";
import { useNavigate } from "react-router-dom";

export default function NewImmeuble() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await userRequest.post("/immeuble", inputs);
    if (res) {
      navigate("/listImmeuble");
    }
  };

  return (
    <div className="newImmeuble">
      <h1 className="addImmeubleTitle">New Immeuble</h1>
      <form className="addImmeubleForm">
        <div className="addImmeubleItem">
          <label>Nom</label>
          <input
            name="nom"
            type="text"
            placeholder="Immeuble Adja Oumou Kalsom"
            onChange={handleChange}
          />
        </div>
        <div className="addImmeubleItem">
          <label>Nombre Appartement</label>
          <input
            name="nbreApp"
            type="number"
            placeholder="10"
            onChange={handleChange}
          />
        </div>
        <div className="addImmeubleItem">
          <label>Bailleur</label>
          <input
            name="bailleur"
            type="text"
            placeholder="Oumou Kalsom"
            onChange={handleChange}
          />
        </div>
        <div className="addImmeubleItem">
          <label>Numero</label>
          <input
            name="numero"
            type="number"
            placeholder="776770818"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick} className="addImmeubleButton">
          Create
        </button>
      </form>
    </div>
  );
}
