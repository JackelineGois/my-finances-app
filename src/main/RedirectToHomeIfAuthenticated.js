import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthenticationProvider";

const RedirectToHomeIfAuthenticated = ({ element: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    <Navigate to="/home" replace />
  ) : (
    <Component {...rest} />
  );
};

export default RedirectToHomeIfAuthenticated;
