import React from "react";
import "./Header.css";

import Nav from "../nav/Nav";

const Header = () => {
  return (
    <header>
      <div className="top-bar animate-dropdown"></div>
      <div className="main-header">
        <div className="container">
          <h1 className="site-title">MONEY CHANGER</h1>
        </div>
      </div>

      <Nav />
    </header>
  );
};

export default Header;
