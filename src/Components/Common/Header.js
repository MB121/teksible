import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { ReactComponent as Hamburger } from "../../assets/svg/hamburger.svg";
import { ReactComponent as CloseIcon } from "../../assets/svg/close-icon.svg";
import { ReactComponent as TechsibleLogo } from "../../assets/svg/main-logo-name.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ currentPage, setCurrentPage }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        className="humMenu"
        placement="end"
      >
        <div className="main-drawer">
          <div className="main-drawer-header">
            <TechsibleLogo
              className="techsible-header-logo"
              onClick={() => navigate("/")}
            />
            <CloseIcon onClick={handleClose} className="mobile-hamburger" />
          </div>
          <div className="main-drawer-menus">
            <ul className="snip1226 drawer-meuns-ul">
              <li className={`${currentPage == "/" ? "current" : ""}`}>
                <Link to="/" data-hover="Home">
                  Home
                </Link>
              </li>
              <li className={`${currentPage == "/aboutus" ? "current" : ""}`}>
                <Link to="/aboutus" data-hover="About Us">
                  About Us
                </Link>
              </li>
              <li className={`${currentPage == "/services" ? "current" : ""}`}>
                <Link to="/services" data-hover="Services">
                  Services
                </Link>
              </li>
              <li className={`${currentPage == "/blog" ? "current" : ""}`}>
                <Link to="/blog" data-hover="Blog">
                  Blog
                </Link>
              </li>
              <li className={`${currentPage == "/contact" ? "current" : ""}`}>
                <Link to="/contact" data-hover="Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="drawer-support-button-container">
            <Link className="cta blogView" to="/contact">
              <span className="cta-title blogView-title drawer-support-button">
                SUPPORT
              </span>
              <svg
                className="cta-svg blogView-svg"
                width="13px"
                height="10px"
                viewBox="0 0 13 10"
              >
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </Offcanvas>
      <div className="header-container">
        <TechsibleLogo
          className="techsible-header-logo"
          onClick={() => navigate("/")}
        />
        <div className="header-desktop-menu">
          <ul className="snip1226">
            <li className={`${currentPage == "/" ? "current" : ""}`}>
              <Link to="/" data-hover="Home">
                Home
              </Link>
            </li>
            <li className={`${currentPage == "/aboutus" ? "current" : ""}`}>
              <Link to="/aboutus" data-hover="About Us">
                About Us
              </Link>
            </li>
            <li className={`${currentPage == "/services" ? "current" : ""}`}>
              <Link to="/services" data-hover="Services">
                Services
              </Link>
            </li>
            <li className={`${currentPage == "/blog" ? "current" : ""}`}>
              <Link to="/blog" data-hover="Blog">
                Blog
              </Link>
            </li>
            <li className={`${currentPage == "/contact" ? "current" : ""}`}>
              <Link to="/contact" data-hover="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="mobile-support-container">
          <Link className="cta blogView header-support-button" to="/contact">
            <span className="cta-title blogView-title">SUPPORT</span>
            <svg
              className="cta-svg blogView-svg"
              width="13px"
              height="10px"
              viewBox="0 0 13 10"
            >
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
          <Hamburger onClick={handleShow} className="mobile-hamburger" />
        </div>
      </div>
    </>
  );
};
export default Header;
