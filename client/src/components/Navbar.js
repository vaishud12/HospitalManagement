import React, { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="title">
        Website
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#about">About</a> {/* Changed Link to a */}
        </li>
        <li>
          <a href="#services">Services</a> {/* Changed Link to a */}
        </li>
        <li>
          <a href="#contact">Contact</a> {/* Changed Link to a */}
        </li>
      </ul>
    </nav>
  );
};
