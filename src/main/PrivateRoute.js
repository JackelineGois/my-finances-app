import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthenticationProvider";
import { useContext } from "react";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { authenticatedUser } = useContext(AuthContext);

  return authenticatedUser ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
