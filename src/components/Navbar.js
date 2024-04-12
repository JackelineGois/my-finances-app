import React from "react";
import NavbarItem from "./NavbarItem";
import { useContext } from "react";
import { AuthContext } from "../main/AuthenticationProvider";
import { useState } from "react";

function Navbar() {
  const { isAuthenticated, finishSession } = useContext(AuthContext);
  const [collapse, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapse);
  };

  const logout = (user) => {
    finishSession(user);
  };

  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a href="/home" className="navbar-brand">
          Minhas Finanças
        </a>
        {isAuthenticated ? (
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded={!collapse}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        ) : null}

        <div
          className={`collapse navbar-collapse ${!collapse ? "show" : ""} `}
          id="navbarResponsive"
        >
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
              href="/"
              Label="Logout"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
