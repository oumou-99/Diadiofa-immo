import "./ImmeubleList.css";

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
  const [immeubles, setImmeuble] = useState([]);

  useEffect(() => {
    const getImmeuble = async () => {
      try {
        const res = await userRequest.get("/immeuble");
        setImmeuble(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getImmeuble();
  }, []);

  const handleDelete = async (id) => {
    const Immo = immeubles.filter((item) => item._id !== id);
    console.log(Immo);
    await userRequest.delete("/immeuble/" + id);
    setImmeuble(Immo);
  };

  // const rows: GridRowsProp = [
  //    { id: 1, col1: "Hello", col2: "World" },
  //    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  //    { id: 3, col1: "MUI", col2: "is Amazing" },
  // ];

  // const columns: GridColDef[] = [
  //    { field: "col1", headerName: "Column 1", width: 150 },
  //    { field: "col2", headerName: "Column 2", width: 150 },
  // ];

  const columns = [
    { field: "_id", headerName: "ID", width: 50 },
    {
      field: "nom",
      headerName: "Nom",
      width: 170,
      // renderCell: (params) => {
      //   return (
      //     <div className="immeubleListUser">
      //       <img className="immeubleListImg" src={params.row.avatar} alt="" />
      //       {params.row.immeublename}
      //     </div>
      //   );
      // },
    },
    { field: "nbreApp", headerName: "Nombre", width: 150 },
    {
      field: "bailleur",
      headerName: "Bailleur",
      width: 200,
    },
    {
      field: "numero",
      headerName: "Numero",
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
              <Link to={"/appartement/" + params.row._id}>
                <AddIcon className="immeubleApAdd" />
              </Link>
            </AddApButton>
            <EditApButton>
              <Link to={"/immeuble/" + params.row._id}>
                <EditIcon className="immeubleListEdit" />
              </Link>
            </EditApButton>

            <DeleteApButton>
              <DeleteOutline
                className="immeubleListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
            </DeleteApButton>
          </ActionContainer>
        );
      },
    },
  ];

  return (
    <div className="newImmeuble">
      <DataGrid
        getRowId={(row) => row._id}
        rows={immeubles}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
