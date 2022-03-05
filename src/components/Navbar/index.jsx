import React from "react";
import logo from "../../assets/logo/brand.png";

import { fireAuth } from "../../utils/firebase";
import { useAuth } from "../../hooks/useAuth";

import "./navbar.css";

const Navbar = () => {
  const { user, isSignedIn } = useAuth();

  return (
    <div className="navbar">
      <div className="navbar__container">
        {/* left menu */}
        <div className="nav__menu">
          <ul>
            <li>
              <a href="/me">About Me</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
          </ul>
        </div>
        {/* logo */}
        <div className="nav__logo">
          <h1 className="lead">Groot</h1>
          <img src={logo} alt="brand logo" />
          <h1 className="trail">Photo</h1>
        </div>
        {/* right menu */}
        <div className="nav__menu">
          <ul>
            <li>
              <a href="/schemes">Pricing</a>
            </li>
            <li>
              {isSignedIn ? (
                <button>{user.displayName}</button>
              ) : (
                <button onClick={() => fireAuth.signIn()}>Hire Me</button>
              )}
            </li>
            {isSignedIn ? (
              <li>
                <button onClick={() => fireAuth.signOut()}>Logout</button>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
