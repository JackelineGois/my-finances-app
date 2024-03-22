import React from "react";

import { Route, HashRouter, Routes } from "react-router-dom";
import Login from "../views/Login";
import RegisterUser from "../views/registerUser";
import Home from "../views/Home";
import Releases from "../views/releases/Releases";

function FinancesRoute() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />}>
          {" "}
        </Route>
        <Route path="/register-user" element={<RegisterUser />}>
          {" "}
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/consultation-releases" element={<Releases />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default FinancesRoute;
