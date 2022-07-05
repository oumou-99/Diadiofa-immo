import "./newPropriete.css";
import { useState } from "react";
import { userRequest } from "../../requestMethod";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

export default function NewPropriete() {
  const [inputs, setInputs] = useState({});
  const [client, setClient] = useState([]);
  const [file, setFile] = useState(null);
  const [etat, setEtat] = useState([]);
  const navigate = useNavigate();

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
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

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

        const res = await userRequest.post("/autrePropriete", {
          ...inputs,
          img: downloadURL,
        });
        if (res) {
          navigate("/listPropriete");
        }
      }
    );
  };

  return (
    <div className="newPropriete">
      <h1 className="addProprieteTitle">New Propriete</h1>
      <form className="addProprieteForm">
        <div className="addProprieteItem">
          <label>Image</label>
          <input
            type="file"
            name="img"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProprieteItem">
          <label>Libelle</label>
          <input
            name="libelle"
            type="text"
            placeholder="Maison"
            onChange={handleChange}
          />
        </div>
        <div className="addProprieteItem">
          <label>Client</label>
          <select name="client" onChange={handleChange}>
            <option></option>
            {client.map((option) => (
              <option key={option._id} value={option._id}>
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
            placeholder="150M²"
            onChange={handleChange}
          />
        </div>
        <div className="addProprieteItem">
          <label>Localisation</label>
          <input
            name="localisation"
            type="text"
            placeholder="Yoff"
            onChange={handleChange}
          />
        </div>
        <div className="addProprieteItem">
          <label>Prix</label>
          <input
            name="prix"
            type="text"
            placeholder="250 000FCFA"
            onChange={handleChange}
          />
        </div>
        <div className="addProprieteItem">
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
        <button onClick={handleClick} className="addProprieteButton">
          Create
        </button>
      </form>
    </div>
  );
}
