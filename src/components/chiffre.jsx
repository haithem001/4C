import React from "react";
import "./chiffre.css";
import SchoolIcon from "@mui/icons-material/School";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HandshakeIcon from "@mui/icons-material/Handshake";
const Chiffre = () => {
  return (
    <>
      <div className="chiffreContainer">
        <div>
          <div>
            <SchoolIcon
              color="primary"
              sx={{
                fontSize: "3.5rem",
              }}
            />
          </div>
          <div className="chiffre">+1200</div>
          <div className="valuename">Étudiant Formé</div>
        </div>

        <div>
          <div>
            <EventAvailableIcon
              fontSize="large"
              color="primary"
              sx={{
                fontSize: "3.5rem",
              }}
            />
          </div>
          <div className="chiffre">+110</div>
          <div className="valuename">Événement Organisé</div>
        </div>

        <div>
          <div>
            <HandshakeIcon
              fontSize="large"
              color="primary"
              sx={{
                fontSize: "3.5rem",
              }}
            />
          </div>
          <div className="chiffre">+100</div>
          <div className="valuename">Collaboration</div>
        </div>
      </div>
    </>
  );
};

export default Chiffre;
