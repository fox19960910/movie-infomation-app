import React, { useRef, useState, useEffect } from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import images from "../../assets/images/images";
const Header = () => {
  const navLinks = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Movies",
      path: "/movie",
    },
    {
      display: "TV Series",
      path: "/tv",
    },
  ];
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const navLinkIndex = navLinks.findIndex((item) => item.path === pathname);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  return (
    <header ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <Link to="/">
            <img src={images.LOGO} alt="fox logo" />
          </Link>
        </div>
        <nav className={`navigation ${open ? "active" : ""}`}>
          <div className="mobile-nav-close" onClick={() => setOpen(false)}>
            <i className="bx bx-x"></i>
          </div>
          <ul>
            {navLinks.map((item, index) => (
              <li
                key={index}
                className={`navigation__item  ${
                  navLinkIndex === index ? "active" : ""
                }`}
              >
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="mobile-nav-button" onClick={() => setOpen(true)}>
          <i className="bx bx-menu"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
