import React from "react";
import Buscador from "./Buscador";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            MovieAPP
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  {" "}
                  home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/listado">
                  {" "}
                  listado
                </NavLink>
              </li>
            </ul>
          </div>
          <Buscador/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
