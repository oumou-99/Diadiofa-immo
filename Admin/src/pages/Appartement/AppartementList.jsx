import "./AppartementList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/EditOutlined";
import styled from "styled-components";

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddApButton = styled.button`
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  border-radius: 10px;
  border: 1px solid white;
  padding: 10px 10px;
  color: white;
  margin-right: 10px;
`;

const DeleteApButton = styled.button`
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  border-radius: 10px;
  border: 1px solid white;
  padding: 5px 10px;
  color: white;
  margin-right: 10px;
`;

const EditApButton = styled.button`
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  border-radius: 10px;
  border: 1px solid white;
  padding: 5px 10px;
  color: white;
  margin-right: 10px;
`;

export default function UserList() {
  const [appartement, setAppartement] = useState([]);

  useEffect(() => {
    const getAppartement = async () => {
      try {
        const res = await userRequest.get("/appartement");
        setAppartement(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAppartement();
  }, []);

  const handleDelete = async (id) => {
    const appartementDeleted = appartement.filter((item) => item._id !== id);
    await userRequest.delete("/appartement/" + id);
    setAppartement(appartementDeleted);
  };

  const columns = [
    {
      field: "reference",
      headerName: "Reference",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="appartementListUser">
            <img className="appartementListImg" src={params.row.img} alt="" />
            {params.row.reference}
          </div>
        );
      },
    },
    {
      field: "immeuble",
      headerName: "Immeuble",
      width: 140,
      renderCell: (params) => {
        return (
          <div>
            {params.row.immeuble?.nom && params.row.immeuble.nom}
            {params.row.immeuble === null && "Aucun"}
          </div>
        );
      },
    },
    {
      field: "dimenssion",
      headerName: "Dimenssion",
      width: 150,
    },
    {
      field: "localisation",
      headerName: "Localisation",
      width: 200,
    },
    {
      field: "locataire",
      headerName: "Locataire",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            {params.row.locataire?.nom && params.row.locataire.nom}
            {!params.row.locataire.nom && "Aucun"}
          </div>
        );
      },
    },
    {
      field: "etat",
      headerName: "Etat",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            {params.row.etat?.libelle && params.row.etat.libelle}
            {params.row.etat === null && "Aucun"}
          </div>
        );
      },
    },
    {
      field: "prix",
      headerName: "Prix",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <ActionContainer>
            <AddApButton>
              <Link to={"" + params.row._id}>
                <AddIcon className="appartementApAdd" />
              </Link>
            </AddApButton>
            <EditApButton>
              <Link to={"/listApp/" + params.row._id}>
                <EditIcon className="appartementListEdit" />
              </Link>
            </EditApButton>

            <DeleteApButton>
              <DeleteOutline
                className="appartementListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
            </DeleteApButton>
          </ActionContainer>
        );
      },
    },
  ];

  return (
    <div className="newAppartement">
      <DataGrid
        getRowId={(row) => row._id}
        rows={appartement}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
