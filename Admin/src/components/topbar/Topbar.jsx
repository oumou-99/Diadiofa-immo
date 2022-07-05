import React from "react";
import "./topbar.css";
import { NotificationsNone, ExitToAppTwoTone } from "@material-ui/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UsernameContainer = styled.span`
  margin-left: 10px;
  text-transform: capitalize;
`;

const Username = styled.span`
  font-weight: bold;
`;
export default function Topbar() {
  const myStorage = window.localStorage;
  const currentUser = JSON.parse(myStorage.getItem("user"));
  const navigate = useNavigate();

  const handleClick = () => {
    //endSession(dispatch);
    navigate("/login");
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Container>
            <img
              src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
              alt=""
              className="topAvatar"
            />
            <UsernameContainer>
              Hi, <Username>{currentUser.prenom}</Username>
            </UsernameContainer>
          </Container>
        </div>
        <div className="topCenter">
          <span className="logo">{currentUser.prenom} Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>

          <div title="Logout" className="topbarIconContainer">
            <ExitToAppTwoTone onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
