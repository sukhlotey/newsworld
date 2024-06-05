import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";


const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsNavbarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsNavbarOpen(false); // Close the navbar when clicking on a navbar button
  };

  return (
    <div ref={navbarRef}>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-dark border-bottom-0 ${
          isNavbarOpen ? "show" : ""
        }`}
        style={{ backgroundColor: "#2e2929ed" }}
      >
        <div className="container-fluid">
          <div className="navbar-brand">News World</div>
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            aria-expanded={isNavbarOpen}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            // aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/general"
                  onClick={handleNavLinkClick}
                >
                  General
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/business"
                  onClick={handleNavLinkClick}
                >
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/entertainment"
                  onClick={handleNavLinkClick}
                >
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/health"
                  onClick={handleNavLinkClick}
                >
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/science"
                  onClick={handleNavLinkClick}
                >
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/sports"
                  onClick={handleNavLinkClick}
                >
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/technology"
                  onClick={handleNavLinkClick}
                >
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;
