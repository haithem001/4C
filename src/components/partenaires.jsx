import React, { useRef } from "react";
import "./partenaires.css";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Partenaires = ({parts}) => {
  const partsRef = useRef(null);

  const scrollByOne = (direction) => {
    if (partsRef.current) {
      const scrollAmount = partsRef.current.querySelector("div:not(.spacer)").offsetWidth + 20;
      partsRef.current.scrollLeft += direction === "right" ? scrollAmount : -scrollAmount;
    }
  };
  return (
    <div className="parts-container">
      <IconButton onClick={() => scrollByOne("left")} className="scroll-button left">
        <ArrowBackIosIcon />
      </IconButton>
    <div className="parts" ref={partsRef}>
      {parts.map((part) => (
        <div key={part._id}>
          <img
            className="partimg"
            src={`http://localhost:5000/${part.image.replace(/\\/g, "/")}`}
            alt={part.name}
          />
          <h4 id="clubs">{part.name}</h4>
         
        </div>
      ))}
    </div>
    <IconButton onClick={() => scrollByOne("right")} className="scroll-button right">
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};

export default Partenaires;