import React from 'react';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteclub } from "../api";
import "./adminlist.css"

const Adminclublist = ({clubs}) => {



    return (
        <div className='adminclublist'>
            {clubs.map((club) => (
          <div key={club._id}>
            <img
              className="logoclub"
              src={`http://localhost:5000/${club.image.replace(/\\/g, "/")}`}
              alt=""
            />
            <h4>{club.name}</h4>
              <IconButton
                onClick={() => {
                  deleteclub(club._id);
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
}

export default Adminclublist;