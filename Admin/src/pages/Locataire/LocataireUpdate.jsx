import "../Immeuble/newImmeuble.css";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethod";
import { useParams } from "react-router-dom";

export default function NewImmeuble() {
  const params = useParams();
  const id = params.locataire;
  const [data, setData] = useState({});
  const [value, setValue] = useState({});

  useEffect(() => {
    const getId = async () => {
      try {
        const res = await userRequest.get("/locataire/" + id);
        setValue(res.data.locataire);
      } catch (error) {
        console.log(error);
      }
    };
    getId();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    const newData = { ...data, [e.target.name]: value };
    setData(newData);
    console.log(data);
  };

  const handleClick = async (e) => {
    console.log("ok");
    e.preventDefault();
    const res = await userRequest.put("/locataire/" + id, data);
    console.log(res);
  };

  return (
    <div className="newImmeuble">
      <h1 className="addImmeubleTitle">Locataire</h1>
      <form className="addImmeubleForm">
        <div className="addImmeubleItem">
          <label>Nom</label>
          <input
            name="nom"
            type="text"
            defaultValue={value.nom}
            onChange={handleChange}
          />
        </div>
        <div className="addImmeubleItem">
          <label>Numero</label>
          <input
            name="numero"
            type="number"
            defaultValue={value.numero}
            onChange={handleChange}
          />
        </div>
        <div className="addImmeubleItem">
          <label>Email</label>
          <input
            name="email"
            type="text"
            defaultValue={value.email}
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
