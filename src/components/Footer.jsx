import React from "react";

const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <div className="mx-auto">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
