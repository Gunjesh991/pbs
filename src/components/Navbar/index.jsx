import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../Modal";

import logo from "../../assets/logo/brand.png";
import hamburg from "../../assets/icons/icons8-menu.svg";

import { useAuth } from "../../hooks/useAuth";

import "./navbar.css";

const Navbar = () => {
  const { user, isSignedIn, signIn, signInEmail, signOut } = useAuth();
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [creds, setCreds] = useState({ email: "", password: "" });

  const updateCreds = (field) => (e) => {
    setCreds((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const onEmailSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    signInEmail(creds.email, creds.password)
      .then(() => setModalOpen(false))
      .catch((err) => console.log({ err }))
      .finally(() => {
        setLoading(false);
      });
  };

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
      <Modal
        open={modalOpen}
        toggleModal={setModalOpen}
        title="Sign In Options"
      >
        <div className="signin__options">
          <button onClick={() => signIn().then(() => setModalOpen(false))}>
            Sign In with Google
          </button>
          <hr />
          <form onSubmit={onEmailSignIn}>
            <div className="input__field">
              <input
                type="email"
                required
                value={creds.email}
                onChange={updateCreds("email")}
                placeholder="Email Address"
              />
            </div>
            <div className="input__field">
              <input
                type="password"
                required
                value={creds.password}
                onChange={updateCreds("password")}
                minLength={8}
                placeholder="Your Password"
              />
            </div>
            <button disabled={loading}>Sign In with Email</button>
          </form>
        </div>
      </Modal>

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
