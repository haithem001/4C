import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";
import axios from "axios";
import "./admin.css";
import Error from "./alerts/error";
import Success from "./alerts/success";

const AdminClub = () => {
  const [showmsj, setShowmsj] = useState(false);
  const [showsuccses, setShowsuccses] = useState(false);
  const [msj, setmsj] = useState("");
  const [club, setclub] = useState({
    name: "",
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
      setclub({ ...club, image: files[0] });
    } else {
      setclub({ ...club, [name]: value });
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", club.name);
    formData.append("image", club.image);

    if (club.name.trim().length === 0 || !club.image) {
      setmsj("Tous les chapms sont obligatoire.");
      showerr();
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/admin/club", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setmsj("Ajouter Avec succes");
      showsucc();
      setTimeout(() => {
        window.location.reload();
      }, 4000);
      setclub({
        name: "",
        image: null,
      });
      file.current.value = "";
    } catch (error) {
      setmsj("Erreur d'ajout un club.");
      showerr();
      return;
    }
  };

  return (
    <>
      <div>
        <div className="addevent">
          <h4>Clubs</h4>
          <form onSubmit={submit}>
            <TextField
              sx={{ width: "100%", mb: 3.5 }}
              id="name"
              name="name"
              placeholder="Nom"
              variant="standard"
              type="text"
              value={club.name}
              onChange={change}
            />
            <br />
            <TextField
              sx={{ width: "100%", mb: 3.5 }}
              id="image"
              name="image"
              placeholder="image"
              variant="standard"
              type="file"
              inputRef={file}
              onChange={change}
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
      </div>
    </>
  );
};

export default AdminClub;
