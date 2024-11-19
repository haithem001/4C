import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import PlaceIcon from "@mui/icons-material/Place";
import DateRangeIcon from "@mui/icons-material/DateRange";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { deleteEvent } from "../api.js";
import "./events.css";

import { Button } from "@mui/material";


const Events = ({ events, check }) => {
  const eventsRef = useRef(null);

  const scrollByOneEvent = (direction) => {
    if (eventsRef.current) {
      const scrollAmount =
        eventsRef.current.querySelector("div:not(.spacer)").offsetWidth + 40;
      eventsRef.current.scrollLeft +=
        direction === "right" ? scrollAmount : -scrollAmount;
    }
  };

  return (
    <div className="events-container">
      <IconButton
        onClick={() => scrollByOneEvent("left")}
        className="scroll-button left"
      >
        <ArrowBackIosIcon />
      </IconButton>

      <div className="eventslist" ref={eventsRef}>
      
        {events.map((event) => (
          <Card sx={{ maxWidth: 270, mt: 1,position: "relative" }} key={event._id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                image={`http://localhost:5000/${event.image.replace(
                  /\\/g,
                  "/"
                )}`}
                alt={event.name}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{ fontSize: 13, fontWeight: "bold" }}
                >
                  {event.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <DateRangeIcon />
                  {event.date}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PlaceIcon />
                  {event.localisation}
                </Typography>
              </CardContent>
            </CardActionArea>
            <br />
            <Button
    size="small"
    variant="contained"
    href={event.description}
    target="_blank"
    sx={{ position: "absolute", bottom: 8, right: 8 }}
  >
    <h4 id="parts">Register</h4>
  </Button>
            {check && (
              <>
                <br/>
                <IconButton
                  onClick={() => {
                    deleteEvent(event._id);
                    window.location.reload();
                  }}
                  sx={{ position: "absolute", bottom: 8, left: 8 }}
                  color="secondary"
                  aria-label="delete"
                  size="large"
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </>
            )}
          </Card>
        ))}
      </div>

      <IconButton
        onClick={() => scrollByOneEvent("right")}
        className="scroll-button right"
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};

export default Events;
