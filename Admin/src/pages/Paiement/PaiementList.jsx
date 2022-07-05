// import "./AppartementList.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { DeleteOutline } from "@material-ui/icons";
import VisibilityIcon from "@material-ui/icons/VisibilityOutlined";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { userRequest } from "../../requestMethod";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/EditOutlined";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
const SeeApButton = styled.button`
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  border-radius: 10px;
  border: 1px solid white;
  padding: 5px 10px;
  color: white;
  margin-right: 10px;
`;

function dateFormatter(date) {
  const newDate = new Date(date);
  let formattedDate = `${`0${newDate.getDate()}`.slice(-2)}-`;
  formattedDate += `${`0${newDate.getMonth() + 1}`.slice(-2)}-`; // for double digit month
  formattedDate += `${newDate.getFullYear()}`; // for double digit day
  return formattedDate;
}

export default function UserList() {
  const [paiement, setPaiement] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (id) => {
    setOpen(false);
  };
  const buttonOpen = useRef(paiement.versements);

  useEffect(() => {
    const getPaiement = async () => {
      try {
        const res = await userRequest.get("/paiement");
        setPaiement(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPaiement();
  }, []);

  const handleDelete = async (id) => {
    const paiementDeleted = paiement.filter((item) => item._id !== id);
    await userRequest.delete("/paiement/" + id);
    setPaiement(paiementDeleted);
    console.log("ok");
  };

  const columns = [
    {
      field: "appartement.reference",
      headerName: "Reference",
      width: 140,
      renderCell: (params) => {
        return (
          <div>
            {params.row.appartement?.reference &&
              params.row.appartement.reference}
          </div>
        );
      },
    },
    {
      field: "appartement.immeuble",
      headerName: "Immeuble",
      width: 140,
      renderCell: (params) => {
        return (
          <div>
            {params.row.appartement?.immeuble &&
              params.row.appartement.immeuble}
          </div>
        );
      },
    },
    {
      field: "appartement.locataire",
      headerName: "Locataire",
      width: 140,
      renderCell: (params) => {
        return (
          <div>
            {params.row.appartement?.locataire &&
              params.row.appartement.locataire}
          </div>
        );
      },
    },
    {
      field: "appartement.prix",
      headerName: "Net à payer",
      width: 140,
      renderCell: (params) => {
        return (
          <div>
            {params.row.appartement?.prix && params.row.appartement.prix}
          </div>
        );
      },
    },
    {
      field: "versements",
      headerName: "Versements",
      width: 140,
      renderCell: (params) => {
        return (
          <ActionContainer>
            <SeeApButton>
              <VisibilityIcon
                className="appartementListEdit"
                onClick={() => handleOpen()}
                // ref={buttonOpen}
              />
            </SeeApButton>
            <Modal
              // disablePortal
              // disableEnforceFocus
              // disableAutoFocus
              
              open={open}
              onClose={() => handleClose()}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  VERSEMENT(S) :{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "orange",
                      textTransform: "uppercase",
                    }}
                  >
                    {params.row.mois} - {params.row.annee}
                  </span>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <ol style={{ color: "black" }}>
                    {params.row.versements.map((option) => (
                      <li>
                        <span style={{ fontSize: "13px", color: "grey" }}>
                          {dateFormatter(option.date)}
                        </span>
                        <br />
                        Montant :{" "}
                        <span style={{ fontSize: "15px", color: "green" }}>
                          {option.montant} FCFA
                        </span>
                      </li>
                    ))}
                  </ol>
                  <hr
                    style={{
                      border: "1px dotted black",
                      width: "100%",
                      textAlign: "center",
                      margin: "20px 0px",
                    }}
                  />
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "17px",
                    }}
                  >
                    Total :{" "}
                    {params.row.versements
                      .map((item) => item.montant)
                      .reduce((prev, curr) => prev + curr, 0)}{" "}
                    FCFA
                  </span>
                </Typography>
              </Box>
            </Modal>
            <AddApButton>
              <Link to={"" + params.row._id}>
                <AddIcon className="appartementApAdd" />
              </Link>
            </AddApButton>
          </ActionContainer>
        );
      },
    },
    {
      field: "reliquat",
      headerName: "Reliquat",
      width: 140,
    },
    {
      field: "annee",
      headerName: "Annee",
      width: 150,
    },
    {
      field: "mois",
      headerName: "Mois",
      width: 200,
    },
    {
      field: "modePaiement",
      headerName: "Mode de paiement",
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
        rows={paiement}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
