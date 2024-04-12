import React, { createContext, useState } from "react";
import AuthService from "../app/service/AuthService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    AuthService.obtainUserAuthenticated()
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthService.isAuthenticatedUser()
  );

  const beginSession = (user) => {
    AuthService.login(user);
    setAuthenticatedUser(user);
    setIsAuthenticated(true);
  };

  const finishSession = () => {
    AuthService.removeAuthUser();
    setAuthenticatedUser(null);
    setIsAuthenticated(false);
  };

  const contextValue = {
    authenticatedUser,
    isAuthenticated,
    beginSession,
    finishSession,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
