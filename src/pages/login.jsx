import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Navigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./login.css";
import c from "../img/4cc.png";
import axios from "axios";
import Error from "../components/alerts/error";
import Success from "../components/alerts/success";
import { setCookie } from "../api";
const Login = () => {
  const [showmsj, setShowmsj] = useState(false);
  const [showvalid, setShowvalid] = useState(false);
  const [msj, setMsj] = useState("");
  const [data, setData] = useState({ username: "", password: "" });
  const [redirect, setRedirect] = useState(false);

  const showerr = (msg) => {
    setMsj(msg);
    setShowmsj(true);
    setTimeout(() => setShowmsj(false), 4000);
  };

  const showsucc = (msg) => {
    setMsj(msg);
    setShowvalid(true);
    setTimeout(() => setShowvalid(false), 4000);
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

const cancel = () =>{
  setData({ username: "", password: "" })
}


  const submit = async (e) => {
    e.preventDefault();

    if (
      data.username.trim().length === 0 ||
      data.password.trim().length === 0
    ) {
      showerr("Tous les champs sont obligatoires.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        { username: data.username, password: data.password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.msj) {
        setCookie("token",response.data.token,1)
        setData({ username: "", password: "" });
        showsucc(response.data.msj);
        setData({ username: "", password: "" })
        setTimeout(() => {
          setRedirect(true);
          setTimeout(() => {
            window.location.reload();
          }, 1);
        }, 4000);
        return;
      } else {
        setMsj("Vérifiez les paramètres de connexion.")
        showerr(msj);
        setData({ username: "", password: "" });
        return;
      }
    } catch (error) {
      setMsj("Vérifiez les paramètres de connexion.");
      showerr(msj);
      return;
    }
  };

  if (redirect) {
    return <Navigate to="/admin/main"/>;
  }

  return (
    <div className="background">
      <div className="form">
        <img src={c} alt="4C" />
        <form onSubmit={submit}>
          <TextField
            sx={{ width: "100%", mb: 3.5 }}
            id="username"
            name="username"
            placeholder="User Name"
            variant="standard"
            type="text"
            value={data.username}
            onChange={change}
          />
          <TextField
            sx={{ width: "100%", mb: 3.5 }}
            id="password"
            name="password"
            placeholder="Password"
            variant="standard"
            type="password"
            value={data.password}
            onChange={change}
          />
          <br />
          {showmsj && <Error alert={msj} />}
          {showvalid && <Success alert={msj} />}
          <br />
          <div className="btns">
            <Button onClick={cancel} variant="outlined">Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
