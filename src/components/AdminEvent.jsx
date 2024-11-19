import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

import "./admin.css";
import Error from "./alerts/error";
import Success from "./alerts/success";

const AdminEvent = () => {
  const [showmsj, setShowmsj] = useState(false);
  const [showsuccses, setShowsuccses] = useState(false);
  const [msj, setmsj] = useState("");
  const [event, setevent] = useState({
    name: "",
    localisation: "",
    date: "",
    description: "",
    image: null,
  });

  const showerr = () => {
    setShowmsj(true);
    setTimeout(() => {
      setShowmsj(false);
    }, 4000);
  };

  const showsucc = () => {
    setShowsuccses(true);
    setTimeout(() => {
      setShowsuccses(false);
    }, 4000);
  };

  const file = useRef(null);

  const change = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setevent({ ...event, image: files[0] });
    } else {
      setevent({ ...event, [name]: value });
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", event.name);
    formData.append("localisation", event.localisation);
    formData.append("date", event.date);
    formData.append("description", event.description);
    formData.append("image", event.image);

    if (
      event.name.trim().length === 0 ||
      event.localisation.trim().length === 0 ||
      event.date.trim().length === 0 ||
      event.description.trim().length === 0 ||
      !event.image
    ) {
      setmsj("Tous les chapms sont obligatoire.");
      showerr();
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/admin/event", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setmsj("Ajouter Avec succes");
      showsucc();
      setTimeout(() => {
        window.location.reload();
      }, 4000);

      setevent({
        name: "",
        localisation: "",
        date: "",
        description: "",
        image: null,
      });

      file.current.value = "";
    } catch (error) {
      setmsj("Erreur d'ajout un evenement.");
      showerr();
      return;
    }
  };

  return (
    <div className="addevent">
      <h4>Événements</h4>
      <form onSubmit={submit}>
        <TextField
          sx={{ width: "100%", mb: 3.5 }}
          name="name"
          placeholder="Titre de l'événement"
          variant="standard"
          type="text"
          onChange={change}
          value={event.name}
        />
        <TextField
          sx={{ width: "100%", mb: 3.5 }}
          name="localisation"
          placeholder="Localisation"
          variant="standard"
          type="text"
          onChange={change}
          value={event.localisation}
        />
        <TextField
          sx={{ width: "100%", mb: 3.5 }}
          name="date"
          placeholder="Date (11 mois 1111 00:00AM)"
          variant="standard"
          type="text"
          value={event.date}
          onChange={change}
        />
        <br />

        <br />
        <TextField
          sx={{ width: "100%", mb: 3.5 }}
          id="image"
          name="image"
          placeholder="Image"
          variant="standard"
          type="file"
          inputRef={file}
          onChange={change}
        />
        <TextField
          sx={{ width: "100%", mb: 3.5 }}
          name="description"
          placeholder="Lien (URL d'inscription)"
          variant="standard"
          onChange={change}
          value={event.description}
        />
        <br />
        {showmsj && <Error alert={msj} />}
        {showsuccses && <Success alert={msj} />}
        <br />
        <Button type="submit" variant="contained" color="primary">
          Ajouter
        </Button>
      </form>
    </div>
  );
};

export default AdminEvent;
