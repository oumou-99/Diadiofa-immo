import "./newAppartement.css";
import { useState, useEffect, Fragment } from "react";
import { userRequest } from "../../requestMethod";
import { useParams } from "react-router-dom";

export default function NewAppartement() {
  const params = useParams();

  const [inputs, setInputs] = useState({});
  const [immeuble, setImmeuble] = useState([]);

  useEffect(() => {
    const handleImmeubleAp = async () => {
      try {
        const result = await userRequest.get("/immeuble/" + params.immeubleId);
        setImmeuble(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleImmeubleAp();
  }, [params.immeubleId]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log({
      ...inputs,
      immeubleId: immeuble._id,
    });
    // const res = await userRequest.post("/appartement", {
    //   ...inputs,
    //   immeubleId: immeuble._id,
    // });
    // console.log(res);
    // if (res) {
    //   navigate("/appartement");
    // }
  };

  return (
    <Fragment>
      <div className="newAppartement">
        <h1 className="addAppartementTitle">New Appartement</h1>
        <form className="addAppartementForm">
          <div className="addAppartementItem">
            <label>Locataire</label>
            <input
              name="nom"
              type="text"
              placeholder="Rama Diop"
              onChange={handleChange}
            />
          </div>
          <div className="addAppartementItem">
            <label>Numero</label>
            <input
              name="numero"
              type="number"
              placeholder="776549876"
              onChange={handleChange}
            />
          </div>
          <div className="addAppartementItem">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="rama@gmail.com"
              onChange={handleChange}
            />
          </div>
          <div className="addAppartementItem">
            <label>Reference</label>
            <input
              name="reference"
              type="text"
              placeholder="6A"
              onChange={handleChange}
            />
          </div>
          <div className="addAppartementItem">
            <label>Immeuble</label>
            <input name="immeubleId" type="text" value={immeuble.nom} />
          </div>
          <div className="addAppartementItem">
            <label>Dimenssion</label>
            <input
              name="dimenssion"
              type="text"
              placeholder="T1"
              onChange={handleChange}
            />
          </div>

          <div className="addAppartementItem">
            <label>Localisation</label>
            <input
              name="localisation"
              type="text"
              placeholder="Yoff"
              onChange={handleChange}
            />
          </div>
          <div className="addAppartementItem">
            <label>Prix</label>
            <input
              name="prix"
              type="text"
              placeholder="250 000 FCFA"
              onChange={handleChange}
            />
          </div>
          <button onClick={handleClick} className="addAppartementButton">
            Create
          </button>
        </form>
      </div>
    </Fragment>
  );
}
