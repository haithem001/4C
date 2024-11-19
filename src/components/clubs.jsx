import React, { useRef } from "react";
import "./partenaires.css";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const Clubs = ({ clubs}) => {
  const partsRef = useRef(null);

  const scrollByOneClub = (direction) => {
    if (partsRef.current) {
      const scrollAmount = partsRef.current.querySelector("div:not(.spacer)").offsetWidth + 20;
      partsRef.current.scrollLeft += direction === "right" ? scrollAmount : -scrollAmount;
    }
  };

  return (
    <div className="parts-container">
      <IconButton onClick={() => scrollByOneClub("left")} className="scroll-button left">
        <ArrowBackIosIcon />
      </IconButton>

      <div className="parts" ref={partsRef}>
        
     
        {clubs.map((club) => (
          <div key={club._id}>
            <img
              className="partimg"
              src={`http://localhost:5000/${club.image.replace(/\\/g, "/")}`}
              alt=""
            />
            <h4>{club.name}</h4>
          </div>
        ))}
      </div>

      <IconButton onClick={() => scrollByOneClub("right")} className="scroll-button right">
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};

export default Clubs;
