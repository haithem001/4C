import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletepartner } from "../api";
import "./adminlist.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from '@mui/icons-material/Email';
const Adminpartlist = ({ parts }) => {
  return (
    <div className="adminclublist">
      {parts.map((part) => (
        <div key={part._id}>
          <img
            className="logoclub"
            src={`http://localhost:5000/${part.image.replace(/\\/g, "/")}`}
            alt=""
          />
          <h4>{part.name}</h4>
          
          {part.contact?.partname ? (
            <div className="infoslist">
              <AccountCircleIcon/>
              <h4 className="infos">{part.contact.partname}</h4>
            </div>
          ) : null}
          {part.contact?.email ? (
            <div className="infoslist">
              <EmailIcon/><h4 className="infos">{part.contact.email}</h4>
            </div>
          ) : null}
          {part.contact?.email2 ? (
            <div className="infoslist">
              <EmailIcon/><h4 className="infos">{part.contact.email2}</h4>
            </div>
          ) : null}
          {part.contact?.phone ? (
            <div className="infoslist">
              <LocalPhoneIcon />
              <h4 className="infos">{part.contact.phone}</h4>
            </div>
          ) : null}
          {part.contact?.phone2 ? (
            <div className="infoslist">
              <LocalPhoneIcon/><h4 className="infos">{part.contact.phone2}</h4>
            </div>
          ) : null}
          <IconButton
            onClick={() => {
              deletepartner(part._id);
              window.location.reload();
            }}
            color="secondary"
            aria-label="delete"
            size="large"
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default Adminpartlist;
