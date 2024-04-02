import React from "react";
import NavbarItem from "./NavbarItem";
import { useContext } from "react";
import { AuthContext } from "../main/AuthenticationProvider";

function Navbar() {
  const { isAuthenticated, finishSession } = useContext(AuthContext);

  const logout = (user) => {
    finishSession(user);
  };

  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a href="/home" className="navbar-brand">
          Minhas Finanças
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <NavbarItem render={isAuthenticated} href="/home" Label="Home" />
            <NavbarItem
              render={isAuthenticated}
              href="/consultation-releases"
              Label="Releases"
            />
            <NavbarItem
              render={isAuthenticated}
              href="/register-release"
              Label="Register Releases"
            />
            <NavbarItem
              render={isAuthenticated}
              onClick={logout}
              href="/login"
              Label="Logout"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
