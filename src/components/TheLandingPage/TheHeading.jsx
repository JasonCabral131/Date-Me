import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "./../../assets/images/logo.png";
const Menu = (props) => {
  return (
    <>
      <p>Features</p>

      <p>How it works</p>
      <p>Members</p>
    </>
  );
};
const TheHeading = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="header">
      <div className="header-link">
        <div className="header-link-logo">
          <img src={logo} alt="logo" />
          <h1>Date Me</h1>
        </div>
        <div className="header-links-container">
          <Menu {...props} />
        </div>
      </div>
      <div className="header-link-sign">
        <button className="login">Login</button>
        <button className="join">Join Free</button>
      </div>
      <div className="header-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}{" "}
        {toggleMenu && (
          <div className="gpt__navbar-menu_container scale-up-center">
            <div className="gpt__navbar-menu_container-links">
              <Menu {...props} />
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
