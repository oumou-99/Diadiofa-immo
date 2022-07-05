import "../Appartement/newAppartement.css";
import { useState, useEffect, Fragment } from "react";
import { userRequest } from "../../requestMethod";
import { useParams, useNavigate } from "react-router-dom";

export default function NewAppartement() {
  const params = useParams();
  const navigate = useNavigate();
  const idAppartement = params.id;
  const [idImmeuble, setIdImmeuble] = useState({});
  const [idLocataire, setIdLocataire] = useState({});
  const [inputs, setInputs] = useState({});
  const [immeuble, setImmeuble] = useState([]);
  const [locataire, setLocataire] = useState([]);
  const [appartement, setAppartement] = useState({});

  useEffect(() => {
    const getAppartementByID = async (id) => {
      try {
        const res = await userRequest.get("/appartement/" + idAppartement);
        setIdImmeuble(res.data.immeuble);
        setIdLocataire(res.data.locataire._id);
        setAppartement(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAppartementByID();
  }, [idAppartement]);

  useEffect(() => {
    const getImmeuble = async () => {
      try {
        const result = await userRequest.get("/immeuble");
        setImmeuble(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getImmeuble();
  }, []);

  useEffect(() => {
    const getLocataire = async () => {
      try {
        const result = await userRequest.get("/locataire");
        setLocataire(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getLocataire();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    const newData = { ...inputs, [e.target.name]: value };
    setInputs(newData);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await userRequest.put("/appartement/" + idAppartement, inputs);
    if (res) {
      console.log("Appartement updated ...");
      navigate("/listApp");
    }
  };

  return (
    <Fragment>
      <div className="newAppartement">
        <h1 className="addAppartementTitle">New Appartement</h1>
        <form className="addAppartementForm">
          <div className="addAppartementItem">
            <label>Reference</label>
            <input
              name="reference"
              type="text"
              defaultValue={appartement.reference}
              onChange={handleChange}
            />
          </div>

          <div className="addAppartementItem">
            <label>Immeuble</label>
            <select
              name="immeuble"
              defaultValue={immeuble.nom}
              onChange={handleChange}
            >
              {immeuble.map((option) => (
                <option
                  selected={idImmeuble === option._id}
                  key={option._id}
                  value={option._id || idImmeuble}
                >
                  {option.nom}
                </option>
              ))}
            </select>
          </div>

          <div className="addAppartementItem">
            <label>Dimenssion</label>
            <input
              name="dimenssion"
              type="text"
              defaultValue={appartement.dimenssion}
              onChange={handleChange}
            />
          </div>

          <div className="addAppartementItem">
            <label>Localisation</label>
            <input
              name="localisation"
              type="text"
              defaultValue={appartement.localisation}
              onChange={handleChange}
            />
          </div>
          <div className="addAppartementItem">
            <label>Locataire</label>
            <select name="locataire" onChange={handleChange}>
              <option value=""></option>
              {locataire.map((option) => (
                <option
                  selected={idLocataire === option._id}
                  key={option._id}
                  value={option._id}
                >
                  LC{option._id.slice(-3).toUpperCase()} -{" "}
                  {option.locataire.nom}
                </option>
              ))}
            </select>
          </div>
          <div className="addAppartementItem">
            <label>Prix</label>
            <input
              name="prix"
              type="text"
              defaultValue={appartement.prix}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleClick} className="addAppartementButton">
            Update
          </button>
        </form>
      </div>
    </Fragment>
  );
}
