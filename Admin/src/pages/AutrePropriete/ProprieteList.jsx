import "./ProprieteList.css";
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
  const [propriete, setPropriete] = useState([]);

  useEffect(() => {
    const getPropriete = async () => {
      try {
        const res = await userRequest.get("/autrePropriete");
        setPropriete(res.data);
        console.log(propriete);
      } catch (error) {
        console.log(error);
      }
    };
    getPropriete();
  }, []);

  const handleDelete = async (id) => {
    const proprieteDeleted = propriete.filter((item) => item._id !== id);
    await userRequest.delete("/autrePropriete/" + id);
    setPropriete(proprieteDeleted);
  };
  const columns = [
    {
      field: "libelle",
      headerName: "Libelle",
      width: 140,
    },
    {
      field: "client",
      headerName: "Client",
      width: 140,
      renderCell: (params) => {
        return (
          <div>
            {params.row.client?.nom && params.row.client.nom}
            {!params.row.client.nom && "Aucun"}
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
                <AddIcon className="proprieteApAdd" />
              </Link>
            </AddApButton>
            <EditApButton>
              <Link to={"/listPropriete/" + params.row._id}>
                <EditIcon className="proprieteListEdit" />
              </Link>
            </EditApButton>

            <DeleteApButton>
              <DeleteOutline
                className="proprieteListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
            </DeleteApButton>
          </ActionContainer>
        );
      },
    },
  ];

  return (
    <div className="newPropriete">
      <DataGrid
        getRowId={(row) => row._id}
        rows={propriete}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
