import React from "react";
import "./Navbar.css"

function Navbar() {
    return (
      <div>
      <header>
      <h1>Sabrina Nawaz</h1>
    <img className="header-logo" src="/assets/logo.png" alt="Picture of Sabrina"/>
      <nav>
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
      </nav>
  </header>
  </div>
    );
  }
  export default Navbar;