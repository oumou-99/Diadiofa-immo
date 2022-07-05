import "./newPropriete.css";
import { useState, useEffect, Fragment } from "react";
import { userRequest } from "../../requestMethod";
import { useParams, useNavigate } from "react-router-dom";

export default function NewPropriete() {
  const params = useParams();
  const navigate = useNavigate();
  const idPropriete = params.id;
  const [idEtat, setIdEtat] = useState({});
  const [idClient, setIdClient] = useState({});
  const [inputs, setInputs] = useState({});
  const [client, setClient] = useState([]);
  const [etat, setEtat] = useState([]);
  const [propriete, setPropriete] = useState({});

  useEffect(() => {
    const getProprieteByID = async () => {
      try {
        const res = await userRequest.get("/autrePropriete/" + idPropriete);
        setIdClient(res.data.client.id);
        setIdEtat(res.data.etat);
        setPropriete(res.data);
        console.log(propriete);
      } catch (error) {
        console.log(error);
      }
    };
    getProprieteByID();
  }, []);

  useEffect(() => {
    const getClient = async () => {
      try {
        const result = await userRequest.get("/client");
        setClient(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getClient();
  }, []);

  useEffect(() => {
    const getEtat = async () => {
      try {
        const result = await userRequest.get("/etat");
        setEtat(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getEtat();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    const newData = { ...inputs, [e.target.name]: value };
    setInputs(newData);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await userRequest.put("/autrePropriete/" + idPropriete, inputs);
    if (res) {
      console.log("Propriete updated ...");
      navigate("/listPropriete");
    }
  };

  return (
    <Fragment>
      <div classNam e="newPropriete">
        <h1 className="addProprieteTitle">Mofication Propriete</h1>
        <form className="addProprieteForm">
          <div className="addProprieteItem">
            <label>Libelle</label>
            <input
              name="libelle"
              type="text"
              defaultValue={propriete.libelle}
              onChange={handleChange}
            />
          </div>

          <div className="addProprieteItem">
            <label>Client</label>
            <select name="client" onChange={handleChange}>
              {client.map((option) => (
                <option
                  selected={idClient === option._id}
                  key={option._id}
                  value={option._id}
                >
                  {option.nom}
                </option>
              ))}
            </select>
          </div>

          <div className="addProprieteItem">
            <label>Dimenssion</label>
            <input
              name="dimenssion"
              type="text"
              defaultValue={propriete.dimenssion}
              onChange={handleChange}
            />
          </div>

          <div className="addProprieteItem">
            <label>Localisation</label>
            <input
              name="localisation"
              type="text"
              defaultValue={propriete.localisation}
              onChange={handleChange}
            />
          </div>

          <div className="addProprieteItem">
            <label>Prix</label>
            <input
              name="prix"
              type="text"
              defaultValue={propriete.prix}
              onChange={handleChange}
            />
          </div>
          <div className="addProprieteItem">
            <label>Etat</label>
            <select name="etat" onChange={handleChange}>
              {etat.map((option) => (
                <option
                  selected={idEtat === option._id}
                  key={option._id}
                  value={option._id}
                >
                  {option.libelle}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleClick} className="addProprieteButton">
            Update
          </button>
        </form>
      </div>
    </Fragment>
  );
}
