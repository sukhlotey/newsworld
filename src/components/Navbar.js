import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [theme, setTheme] = useState(false);

  const handler = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    if (theme === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  // note
  const hand = () => {
    const text =
      "Welcome to news daily application here you can read latest news of every kind of category and here you can connect with us by click conntect us option and you can join with us by signin google.";
    const value = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(value);
  };

  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark border-bottom-0 "
        style={{ backgroundColor: "rgb(0 8 20)" }}
      >
        <div className="container-fluid">
          <div className="navbar-brand">
            <Logo />
            News Daily
          </div>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/general">
                  General
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/business">
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/entertainment">
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/health">
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/science">
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sports">
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/technology">
                  Technology
                </NavLink>
              </li>
              <li className="nav-item border-line">
                <NavLink
                  className="nav-link"
                  data-bs-toggle="modal"
                  to="#exampleModalToggle"
                  style={{ color: "#ff0000", textDecoration: "none" }}
                >
                  Connect Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  data-bs-toggle="modal"
                  to="#exampleModal"
                >
                  Join Us
                </NavLink>
              </li>
              <li className="nav-item">
          
                <div className="btn" onClick={handler}>
                  {theme ? (
                    <img
                      style={{ height: "30px", width: "30px" }}
                      src="../light.png"
                      alt="light"
                    />
                  ) : (
                    <img
                      style={{ height: "30px", width: "30px" }}
                      src="../dark.png"
                      alt="dark"
                    />
                  )}
                </div>
              </li>
              <li className="nav-item">
                <button className="btn-note" onClick={hand}>
                <img src="../note.png" alt="voice"/>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
