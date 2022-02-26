import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "./../../assets/images/logo.png";
const Menu = ({ color, howWorksView }) => {
  return (
    <>
      <p style={{ color: color ? "rgb(65, 65, 65)" : "#ffffff" }}>Features</p>

      <p
        style={{ color: color ? "rgb(65, 65, 65)" : "#ffffff" }}
        onClick={() => {
          howWorksView?.current.scrollIntoView();
        }}
      >
        How it works
      </p>
      <p style={{ color: color ? "rgb(65, 65, 65)" : "#ffffff" }}>Members</p>
    </>
  );
};
const TheHeading = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [color, setColor] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    let innerHeight = window.innerHeight;
    if (window.scrollY > 10) {
      setNavbar(true);
      setColor(true);
    } else {
      setNavbar(false);
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground, true);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);
  return (
    <div
      className="header"
      style={{ backgroundColor: navbar ? "#ededed" : "transparent" }}
    >
      <div className="header-link">
        <div className="header-link-logo">
          <img src={logo} alt="logo" />
          <h1 style={{ color: color ? "rgb(34, 34, 34)" : "#ffffff" }}>
            Date Me
          </h1>
        </div>
        <div className="header-links-container">
          <Menu {...props} color={color} />
        </div>
      </div>
      <div className="header-link-sign">
        <button className="login">Login</button>
        <button className="join">Join Free</button>
      </div>
      <div className="header-menu">
        {toggleMenu ? (
          <RiCloseLine
            color={color ? "rgb(34, 34, 34)" : "#fff"}
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color={color ? "rgb(34, 34, 34)" : "#fff"}
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}{" "}
        {toggleMenu && (
          <div className="gpt__navbar-menu_container scale-up-center">
            <div className="gpt__navbar-menu_container-links">
              <Menu {...props} color={color} />
              <div className="header-menu-link-sign">
                <button className="login">Login</button>
                <button className="join">Join Free</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TheHeading;
