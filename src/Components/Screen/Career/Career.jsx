import React from "react";
import HomeImage from "../../../assets/images/contact.gif";
import { Form } from "react-bootstrap";
import { ReactComponent as HomeIcon } from "../../../assets/svg/location.svg";
import { ReactComponent as EmailIcon } from "../../../assets/svg/email.svg";
import { ReactComponent as CallIcon } from "../../../assets/svg/call.svg";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div>
        <div className="main-section-container third-main-section main-herder-section">
          <div className="container-box">
            <div className="third-section-container">
              <div className="text-center mb-3">
                <h4 className="section-main-title main-herder-text">
                  <span>Career</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container-box">
          <div className="main-section-container pb-5 contact-main-section">
            <div className="career-card">
              <div className="conatiner-card-main career-card-main">
                <div className="contact-icon-main">
                  <Link to="mailto:info@teksiblegroup.com">
                    <EmailIcon className="contact-icons" />
                  </Link>
                </div>
                <div className="contactus-main-title main-herder-text">
                  Send your <span>Profile</span>
                </div>
                <Link to="mailto:info@teksiblegroup.com">
                  <div className="footer-contact-content">
                    info@teksiblegroup.com
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
