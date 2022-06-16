import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import SignInModal from "./SignInModal";

import logo from "../../assets/logo/brand.png";
import hamburg from "../../assets/icons/icons8-menu.svg";

import { useAuth } from "../../hooks/useAuth";

import "./navbar.css";

const Navbar = () => {
  const { user, isSignedIn, signOut } = useAuth();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const hide = () => setMobileNavOpen(false);

  const toggleModal = () => setModalOpen((prev) => !prev);

  const userName = useMemo(() => {
    if (!user) return "";
    return user.displayName?.length
      ? user.displayName
      : user.email?.split("@")[0];
  }, [user]);

  return (
    <>
      <SignInModal modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <div className="navbar">
        <div className="navbar__container">
          {/* left menu */}
          <div className="nav__menu">
            <ul>
              <li>
                <NavLink to="/photographers">Photographers</NavLink>
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
                <NavLink to="/estimate">Pricing</NavLink>
              </li>
              <li>
                {isSignedIn ? (
                  <button>{userName}</button>
                ) : (
                  <button onClick={toggleModal}>Sign In</button>
                )}
              </li>
              {isSignedIn ? (
                <li>
                  <button onClick={() => signOut()}>Sign Out</button>
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
                <NavLink onClick={hide} to="/photographers">
                  Photographers
                </NavLink>
              </li>
              <li>
                <NavLink onClick={hide} to="/estimate">
                  Estimate Cost
                </NavLink>
              </li>
              <li>
                {isSignedIn ? (
                  <button>{userName}</button>
                ) : (
                  <button
                    onClick={() => {
                      toggleModal();
                      hide();
                    }}
                  >
                    Sign In
                  </button>
                )}
              </li>
              {isSignedIn ? (
                <li>
                  <button onClick={() => signOut()}>Sign Out</button>
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
