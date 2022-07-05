import "../Immeuble/newImmeuble.css";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethod";
import { useParams } from "react-router-dom";

export default function NewImmeuble() {
  const [data, setData] = useState({});
  const [immeuble, setImmeuble] = useState({});

  const params = useParams();
  const immoId = params.immeubleId;

  useEffect(() => {
    const getId = async () => {
      try {
        const res = await userRequest.get("/immeuble/" + immoId);
        setImmeuble(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getId();
  }, [immoId]);

  const handleChange = (e) => {
    const { value } = e.target;
    const newData = { ...data, [e.target.name]: value };
    setData(newData);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await userRequest.put("/immeuble/" + immoId, data);
    console.log(res);
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
            defaultValue={immeuble.nom}
            onChange={handleChange}
          />
        </div>
        <div className="addImmeubleItem">
          <label>Nombre Appartement</label>
          <input
            name="nbreApp"
            type="number"
            defaultValue={immeuble.nbreApp}
            onChange={handleChange}
          />
        </div>
        <div className="addImmeubleItem">
          <label>Bailleur</label>
          <input
            name="bailleur"
            type="text"
            defaultValue={immeuble.bailleur}
            onChange={handleChange}
          />
        </div>
        <div className="addImmeubleItem">
          <label>Numero</label>
          <input
            name="numero"
            type="number"
            defaultValue={immeuble.numero}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick} className="addImmeubleButton">
          Update
        </button>
      </form>
    </div>
  );
}
