import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import images from "../../assets/images/images";
const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url(${images.FOOTER_BG})` }}
    >
      <div className="footer__content container">
        <div className="footer__logo mb-3">
          <div className="logo">
            <Link to="/">
              <img src={images.LOGO} alt="fox logo" />
            </Link>
          </div>
        </div>

        <div className="footer__menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
            </li>
            <li>
              <Link to="/">Term of service</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/">Live</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Premium</Link>
            </li>
            <li>
              <Link to="/">Pravacy policy</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/">You mus watch</Link>
            </li>
            <li>
              <Link to="/">Recent release</Link>
            </li>
            <li>
              <Link to="/">Term of service</Link>
            </li>
            <li>
              <Link to="/">Top IMDB</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
