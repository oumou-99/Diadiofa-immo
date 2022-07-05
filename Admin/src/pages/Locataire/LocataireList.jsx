import "./LocataireList.css";
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
  const [locataires, setLocataire] = useState([]);

  useEffect(() => {
    const getLocataire = async () => {
      try {
        const res = await userRequest.get("/locataire");
        setLocataire(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getLocataire();
  }, []);

  const handleDelete = async (id) => {
    const locataireDeleted = locataires.filter((item) => item._id !== id);
    await userRequest.delete("/locataire/" + id);
    setLocataire(locataireDeleted);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "nom",
      headerName: "Nom",
      width: 170,
      renderCell: (params) => {
        return <div>{params.row.locataire.nom}</div>;
      },
    },
    {
      field: "email",
      headerName: "email",
      width: 150,
      renderCell: (params) => {
        return <div>{params.row.locataire.email}</div>;
      },
    },
    {
      field: "numero",
      headerName: "Numero",
      width: 200,
      renderCell: (params) => {
        return <div>{params.row.locataire.numero}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <ActionContainer>
            <AddApButton>
              <Link to={"/appartement/" + params.row._id}>
                <AddIcon className="locataireApAdd" />
              </Link>
            </AddApButton>
            <EditApButton>
              <Link to={"/locataire/" + params.row._id}>
                <EditIcon className="locataireListEdit" />
              </Link>
            </EditApButton>

            <DeleteApButton>
              <DeleteOutline
                className="locataireListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
            </DeleteApButton>
          </ActionContainer>
        );
      },
    },
  ];

  return (
    <div className="newLocataire">
      <DataGrid
        getRowId={(row) => row._id}
        rows={locataires}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
