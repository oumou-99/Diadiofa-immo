import "./newAppartement.css";
import { useState, useEffect, Fragment } from "react";
import { userRequest } from "../../requestMethod";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

export default function NewAppartement() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [etat, setEtat] = useState([]);
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({});

  const [locataire, setLocataire] = useState([]);

  //www.youtube.com/watch?v=pJ8LykeBDo4

  https: useEffect(() => {
    const Fetchdata = async () => {
      try {
        const result = await userRequest.get("/immeuble");
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
        const result = await userRequest.get("/locataire");
        setLocataire(result.data);
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

  const handleClick = async (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      async () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log({ ...inputs, img: downloadURL });

        const res = await userRequest.post("/appartement", {
          ...inputs,
          img: downloadURL,
        });
        if (res) {
          navigate("/listApp");
        }
      }
    );
  };

  return (
    <Fragment>
      <div className="newAppartement">
        <h1 className="addAppartementTitle">New Appartement</h1>
        <form className="addAppartementForm">
          <div className="addAppartementItem">
            <label>Image</label>
            <input
              type="file"
              name="img"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
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
            <select name="immeuble" onChange={handleChange}>
              <option></option>
              {data.map((option) => (
                <option key={option._id} value={option._id}>
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
            <label>Locataire</label>
            <select name="locataire" onChange={handleChange}>
              <option></option>
              {locataire.map((option) => (
                <option key={option._id} value={option._id}>
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
              placeholder="250 000 FCFA"
              onChange={handleChange}
            />
          </div>
          <div className="addAppartementItem">
            <label>Etat</label>
            <select name="etat" onChange={handleChange}>
              <option></option>
              {etat.map((option) => (
                <option key={option._id} value={option._id}>
                  {option.libelle}
                </option>
              ))}
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
