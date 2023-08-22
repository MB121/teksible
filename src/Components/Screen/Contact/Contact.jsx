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
                  Contact <span>Us</span>
                </h4>
                <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-section-container pb-5 second-main-section">
          <div className="ring-orange ring-orange2 contact-us-rings"></div>
          <div className="black-orange black-orange2 contact-us-rings"></div>
          <div className="container-box">
            <div className="second-section-container">
              <img
                className="second-home-image"
                src={HomeImage}
                alt="HomeIllu"
              />
              <div className="contact">
                <Form className="contact-form">
                  <Form.Control
                    className="form-fild"
                    type="text"
                    placeholder="Your name"
                  />
                  <Form.Control
                    className="form-fild"
                    type="text"
                    placeholder="Your email address"
                  />
                  <div className="innner-flex">
                    <Form.Control
                      className="form-fild"
                      type="text"
                      placeholder="Your phone Number"
                    />
                    <Form.Control
                      className="form-fild"
                      type="email"
                      placeholder="Your subject"
                    />
                  </div>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    className="form-fild form-text"
                    placeholder="Write your message.."
                  />
                  <a href="#" className="cta blogView contact-button">
                    <span className="cta-title blogView-title">
                      Send Message
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
                  </a>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="container-box">
          <div className="main-section-container pb-5 contact-main-section">
            <div className="contact-card">
              <div className="conatiner-card-main">
                <div className="contact-icon-main">
                  <Link to="mailto:info@teksiblegroup.com">
                    <EmailIcon className="contact-icons" />
                  </Link>
                </div>
                <div className="contactus-main-title main-herder-text">
                  Mail <span>Here</span>
                </div>
                <Link to="mailto:info@teksiblegroup.com">
                  <div className="footer-contact-content">
                    info@teksiblegroup.com
                  </div>
                </Link>
              </div>
              <div className="conatiner-card-main">
                <div className="contact-icon-main">
                  <Link
                    to="https://maps.app.goo.gl/MLxcN9t7UBMa8Bgo8"
                    target="_blank"
                  >
                    <HomeIcon className="contact-icons" />
                  </Link>
                </div>
                <div className="contactus-main-title main-herder-text">
                  Visit <span>Here</span>
                </div>
                <Link
                  to="https://maps.app.goo.gl/MLxcN9t7UBMa8Bgo8"
                  target="_blank"
                >
                  <div className="footer-contact-content">
                    Thiruppatur - 630211, Tamil Nadu, India.
                  </div>
                </Link>
              </div>
              <div className="conatiner-card-main">
                <div className="contact-icon-main">
                  <Link to="tel:+918015371702">
                    <CallIcon className="contact-icons" />
                  </Link>
                </div>
                <div className="contactus-main-title main-herder-text">
                  Call <span>Here</span>
                </div>
                <Link to="tel:+971585801300">
                  <div className="footer-contact-content">
                    UAE: +971 585801300
                  </div>
                </Link>
                <Link to="tel:+918015371702">
                  <div className="footer-contact-content">
                    India: +91 8015371702
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
