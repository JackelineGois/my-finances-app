import React from "react";
import { Navigate } from "react-router-dom";

import LocalStorageService from "../app/service/LocalStorageService";
import { useState, useEffect } from "react";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkedAuth, setCheckedAuth] = useState(false);

  useEffect(() => {
    const userLogin = LocalStorageService.obtainItem("user_login");
    const isAuth =
      !!userLogin &&
      typeof userLogin === "object" &&
      Object.keys(userLogin).length > 0;
    setIsAuthenticated(isAuth);
    setCheckedAuth(true);
  }, []);

  if (!checkedAuth) {
    return null;
  }

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
