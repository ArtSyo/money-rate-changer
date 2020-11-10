import React from "react";
import "./Nav.css";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              <li><Link to="/">На главную</Link></li>
              <li><Link to="/about">О нас</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
            </ul>

          </nav>
        </div>
    </div>
  );
};

export default Nav;
