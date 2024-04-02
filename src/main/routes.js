// router.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RegisterUser from "../views/registerUser";
import Home from "../views/Home";
import Releases from "../views/releases/Releases";
import RegisterReleases from "../views/releases/Register-Releases";
import PrivateRoute from "./PrivateRoute";
import Login from "../views/Login";
import RedirectToHomeIfAuthenticated from "./RedirectToHomeIfAuthenticated";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <RedirectToHomeIfAuthenticated element={Login} />,
  },
  { path: "/register-user", element: <RegisterUser /> },
  {
    path: "/home",
    element: <PrivateRoute element={Home} />,
  },
  {
    path: "/register-release/:id?",
    element: <PrivateRoute element={RegisterReleases} />,
  },

  {
    path: "/consultation-releases",
    element: <PrivateRoute element={Releases} />,
  },
]);

export default router;
