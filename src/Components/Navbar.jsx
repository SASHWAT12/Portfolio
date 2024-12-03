import React, { useState } from "react";
import { close, Sign, menu } from "../Assets";
import { navLinks } from "../Assets";
import "./Stylings/Navbar.css";

// Scroll function for smooth navigation to sections
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  const yOffset = 0;
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      {/* Navbar Logo wrapped in div */}
      <div className="navbar-logo">
        <a href="#home">
          <img src={Sign} alt="Sashwat Pashpulate" />
        </a>
      </div>

      {/* Navbar Links wrapped in div */}
      <div className="navbar-links">
        <ul>
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
      </div>

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
