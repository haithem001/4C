import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home.jsx";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/login.jsx";
import axios from "axios";
import MuiDrawer from "./MuiComponenets/MuiDrawer.jsx";
import NotFound from "./pages/NotFound.jsx";
import { getCookie } from "./api.js";

const verifyUser = async () => {
  const token = getCookie("token");
  if (!token) return false;
  try {
    const response = await axios.post("http://localhost:5000/api/admin/verify", { token });
    return response.status === 200;
  } catch (error) {
    return false;
  }
};

const AppRouter = () => {
  const [auth, setauth] = useState(null);
  useEffect(() => {
    const authenticateUser = async () => {
      const authStatus = await verifyUser();
      setauth(authStatus);
    };
    authenticateUser();
  }, []);

  if (auth === null) return <></>;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin/login",
      element: <Login />,
    },
    {
      path: "/admin/main",
      element: auth ? <MuiDrawer /> : <Login/>,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
