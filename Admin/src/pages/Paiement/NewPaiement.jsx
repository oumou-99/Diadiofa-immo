import "./newPaiement.css";
import { useState, useEffect, Fragment } from "react";
import { userRequest } from "../../requestMethod";
import { useNavigate } from "react-router-dom";

export default function NewAppartement() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});

  const [propriete, setPropriete] = useState([]);

  useEffect(() => {
    const Fetchdata = async () => {
      try {
        const result = await userRequest.get("/appartement");
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    Fetchdata();
  }, []);

  useEffect(() => {
    const getLocataire = async () => {
      try {
        const result = await userRequest.get("/autrePropriete/");
        setPropriete(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getLocataire();
  }, []);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(inputs);
    const res = await userRequest.post("/paiement", inputs);
    console.log(res.data);
    if (res) {
      navigate("/listPaiement");
    }
  };

  return (
    <Fragment>
      <div className="newAppartement">
        <h1 className="addAppartementTitle">New Paiement</h1>
        <form className="addAppartementForm">
          <div className="addAppartementItem">
            <label>Appartement</label>
            <select name="appartement" onChange={handleChange}>
              <option></option>
              {data.map((option) => (
                <option key={option._id} value={option._id}>
                  {option.reference}-{option.immeuble.nom}
                </option>
              ))}
            </select>
          </div>
          <div className="addAppartementItem">
            <label>Autre Propriete</label>
            <select name="autrePropriete" onChange={handleChange}>
              <option></option>
              {propriete.map((option) => (
                <option key={option._id} value={option._id}>
                  {option.libelle}
                </option>
              ))}
            </select>
          </div>
          <div className="addAppartementItem">
            <label>Versements</label>
            <input
              name="montant"
              type="number"
              placeholder="200000 FCFA"
              onChange={handleChange}
            />
          </div>
          <div className="addAppartementItem">
            <label>Année</label>
            <input
              name="annee"
              type="text"
              placeholder="2022"
              onChange={handleChange}
            />
          </div>

          <div className="addAppartementItem">
            <label>Mois </label>
            <select name="mois" id="" onChange={handleChange}>
              <option value=""></option>
              <option value="janvier">Janvier</option>
              <option value="fevrier">Fevrier</option>
              <option value="mars">Mars</option>
              <option value="avril">Avril</option>
              <option value="mai">Mai</option>
              <option value="juin">Juin</option>
              <option value="juillet">Juillet</option>
              <option value="aout">Aout</option>
              <option value="septembre">Septembre</option>
              <option value="octobre">Octobre</option>
              <option value="novembre">Novembre</option>
              <option value="decembre">Decembre</option>
            </select>
          </div>
          <div className="addAppartementItem">
            <label>Mode de Paiement</label>
            <select name="modePaiement" id="" onChange={handleChange}>
              <option value=""></option>
              <option value="cheque">Cheque</option>
              <option value="espece">Espece</option>
              <option value="virement">Virement bancaire</option>
            </select>
          </div>

          <button onClick={handleClick} className="addAppartementButton">
            Create
          </button>
        </form>
      </div>
    </Fragment>
  );
}
