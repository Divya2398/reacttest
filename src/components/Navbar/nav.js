import React from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark mb-1">
        <div className="container">
          <a className="navbar-brand" href="/home">
            DesignerW
          </a>
          <div className="order-lg-2 nav-btns">
            <button type="button" className="btn position-relative">
              <i className="fa fa-shopping-cart"></i>
            </button>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  p-3" id="collapsibleNavbar">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn p-0" type="button">
                <i className="bx bx-search bx-tada mt-2" id="searchicon"></i>
              </button>
            </form>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link " href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/category">
                  Shop now
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Trems
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  User
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/signup">
                      Register
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/logout">
                      logot
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
