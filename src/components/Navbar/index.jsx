import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo/brand.png";
import hamburg from "../../assets/icons/icons8-menu.svg";

import { useAuth } from "../../hooks/useAuth";

import "./navbar.css";

const Navbar = () => {
  const { user, isSignedIn, signIn, signOut } = useAuth();
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  const hide = () => setMobileNavOpen(false);

  return (
    <>
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
          <NavLink to="/">
            <div className="nav__logo">
              <h1 className="lead">Groot</h1>
              <img src={logo} alt="brand logo" />
              <h1 className="trail">Photo</h1>
            </div>
          </NavLink>
          {/* right menu */}
          <div className="nav__menu">
            <ul>
              <li>
                <a href="/estimate">Pricing</a>
              </li>
              <li>
                {isSignedIn ? (
                  <button>{user.displayName}</button>
                ) : (
                  <button onClick={() => signIn()}>Hire Me</button>
                )}
              </li>
              {isSignedIn ? (
                <li>
                  <button onClick={() => signOut()}>Logout</button>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        {/* mobile */}
        <div className="mobile__navigation">
          <div className="nav__trigger">
            <img
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              width={40}
              src={hamburg}
              alt="mobile nav menu trigger"
            />
          </div>
          <div className={`nav__panel ${mobileNavOpen ? "view" : ""}`}>
            <ul>
              <li>
                <NavLink onClick={hide} to="/me">
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink onClick={hide} to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink onClick={hide} to="/estimate">
                  Estimate Cost
                </NavLink>
              </li>
              <li>
                {isSignedIn ? (
                  <button>{user.displayName}</button>
                ) : (
                  <button onClick={() => signIn()}>Hire Me</button>
                )}
              </li>
              {isSignedIn ? (
                <li>
                  <button onClick={() => signOut()}>Logout</button>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
