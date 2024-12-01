import React, { useState } from "react";
import { close, PassportImage, menu } from "../Assets";
import { navLinks } from "../Assets";
import "./Stylings/Navbar.css";


export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  const yOffset = -70;
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#home">
        <img
          src={PassportImage}
          alt="Sashwat Pashpulate"
          className="navbar-logo"
        />
      </a>

      {/* List of links */}
      <ul className="navbar-links">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="navbar-item"
            onClick={() => scrollToSection(nav.id)}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="navbar-mobile">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="navbar-toggle-icon"
          onClick={() => setToggle((prev) => !prev)}
        />
        {toggle && (
          <div className="navbar-sidebar">
            <ul className="sidebar-links">
              {navLinks.map((nav, index) => (
                <li key={nav.id} className="sidebar-item">
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
