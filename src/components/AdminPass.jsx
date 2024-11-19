import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./admin.css";
import axios from "axios";
import Error from "./alerts/error";
import Success from "./alerts/success";

const AdminPass = () => {
  const [showmsj, setShowmsj] = useState(false);
  const [showsuccses, setShowsuccses] = useState(false);
  const [msj, setmsj] = useState("");

  const [data, setdata] = useState({
    actualPass: "",
    newPass: "",
    confirm: "",
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

  const change = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (
      data.actualPass.trim().length === 0 ||
      data.newPass.trim().length === 0 ||
      data.confirm.trim().length === 0
    ) {
      setmsj("Remplir Tous les champs");
      showerr();
      return;
    }

    if (data.newPass !== data.confirm) {
      setmsj("Confirmation invalide");
      showerr();
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/change",
        data
      );

      if (response.status === 200) {
        setmsj("Mot de Passe Modifier");
        showsucc();
        setdata({
          actualPass: "",
          newPass: "",
          confirm: "",
        });
      } else {
        setmsj("Une erreur s'est produite");
        showerr();
      }
    } catch (error) {
      setmsj("Mot de passe invalide");
      showerr();
    }
  };

  return (
    <div>
      <div className="addevent">
        <h4>Changer Mot De Passe</h4>
        <form onSubmit={submit}>
          <TextField
            sx={{ width: "100%", mb: 3.5 }}
            id="actualPass"
            name="actualPass"
            placeholder="Mot de passe Actuel"
            variant="standard"
            type="password"
            onChange={change}
            value={data.actualPass}
          />
          <br />
          <TextField
            sx={{ width: "100%", mb: 3.5 }}
            id="newPass"
            name="newPass"
            placeholder="Nouveau Mot De Passe"
            variant="standard"
            type="password"
            onChange={change}
            value={data.newPass}
          />
          <br />
          <TextField
            sx={{ width: "100%", mb: 3.5 }}
            id="confirm"
            name="confirm"
            placeholder="Confirmer Nouveau Mot De Passe"
            variant="standard"
            type="password"
            onChange={change}
            value={data.confirm}
          />
          <br />
          {showmsj && <Error alert={msj} />}
          {showsuccses && <Success alert={msj} />}
          <br />
          <Button type="submit" variant="contained" color="primary">
            Changer
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminPass;
