import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyles = {
    color: "white",
    transition: "color 0.3s",
  };

  const hoverStyles = {
    color: "yellow",
  };
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <h3 className=" text-white mx-3" to="">
          Fashion Store
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/men"
                style={linkStyles}
                onMouseEnter={(e) => (e.target.style.color = hoverStyles.color)}
                onMouseLeave={(e) => (e.target.style.color = linkStyles.color)}
              >
                Men's Collection
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/women"
                style={linkStyles}
                onMouseEnter={(e) => (e.target.style.color = hoverStyles.color)}
                onMouseLeave={(e) => (e.target.style.color = linkStyles.color)}
              >
                Women's Collection
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
