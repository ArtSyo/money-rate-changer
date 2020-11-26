import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="flex-container">
            <div className="flex-item">
              <h1 className="footer-title">
                <a href="www.google.com">Money Changer</a>
              </h1>
              <p className="footer-rights">All Rights Reserved</p>
            </div>
            <div className="flex-item"></div>
            <div className="flex-item">
              <div className="module-body">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">На главную</Link>
                  </li>
                  <li>
                    <Link to="/about">О нас</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Контакты</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-bar">
        <div className="flex-container">
          <div className="flex-item">
            <ul className="link"></ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
