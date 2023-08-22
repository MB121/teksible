import React from "react";
import FooterMap from "../../assets/images/footer-map.png";
import { ReactComponent as TechsibleLogo } from "../../assets/svg/techsible-main-logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/svg/location.svg";
import { ReactComponent as EmailIcon } from "../../assets/svg/email.svg";
import { ReactComponent as CallIcon } from "../../assets/svg/call.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div className="footer">
        <div className="footer-layer"></div>
        <img className="footer-img" src={FooterMap} alt="footer" />
        <div className="container-box">
          <div className="footer-custom-container">
            <div className="footer-custom-content">
              <div className="footerInfo">
                <div className="logo">
                  <Link to="/">
                    <TechsibleLogo className="techsible-header-logo" />
                  </Link>
                </div>
                <p>
                  Our mission is to provide high-quality IT solutions that
                  enhance your business operations, improve productivity, and
                  drive growth. We strive to build long-lasting relationships
                  with our clients by always offering exceptional services and
                  support.
                </p>
              </div>
            </div>
            <div className="footer-custom-content">
              <ul className="footer-links">
                <div className="footer-heading">Company</div>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/blog">Latest News</Link>
                </li>
              </ul>
            </div>
            <div className="footer-custom-content">
              <ul className="footer-links">
                <div className="footer-heading">Support</div>
                <li>
                  <Link to="/career">Career</Link>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-custom-content">
              <ul className="footer-links">
                <div className="footer-heading">Address</div>
                <li className="footer-contact-list footer-address-lists">
                  <div
                    className="footer-contact-svg-container"
                    onClick={() =>
                      window.open(
                        "https://goo.gl/maps/kkTgNbbfEk1e6Vto9",
                        "_blank"
                      )
                    }
                  >
                    <HomeIcon className="footer-contact-icons" />
                  </div>
                  <div
                    className="footer-contact-content-address footer-contact-content"
                    onClick={() =>
                      window.open(
                        "https://goo.gl/maps/kkTgNbbfEk1e6Vto9",
                        "_blank"
                      )
                    }
                  >
                    <div>Head Office:</div>
                    <div>TEKSIBLE IT SOLUTIONS CO. L.L.C</div>
                    <div>
                      Office 43-44, Dubai Municipality building, Al Fahidi, Bur
                      Dubai
                    </div>
                    <div>Dubai, UAE.</div>
                  </div>
                </li>
                <li className="footer-contact-list footer-address-lists">
                  <div
                    className="footer-contact-svg-container"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/MLxcN9t7UBMa8Bgo8",
                        "_blank"
                      )
                    }
                  >
                    <HomeIcon className="footer-contact-icons" />
                  </div>
                  <div
                    className="footer-contact-content-address footer-contact-content"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/MLxcN9t7UBMa8Bgo8",
                        "_blank"
                      )
                    }
                  >
                    <div>Techsible IT Solutions Private Limited,</div>
                    <div>
                      Opposite to Christuraja matriculation higher secondary
                      school,
                    </div>
                    <div>Thiruppatur- 630211,</div>
                    <div>Sivagangai District,</div>
                    <div>Tamil Nadu, India.</div>
                  </div>
                </li>
                <li className="footer-contact-list">
                  <div className="footer-contact-svg-container">
                    <EmailIcon className="footer-contact-icons" />
                  </div>
                  <div>
                    <Link
                      className="footer-contact-content"
                      to="mailto:info@teksiblegroup.com"
                    >
                      info@teksiblegroup.com
                    </Link>
                  </div>
                </li>
                <li className="footer-contact-list">
                  <div className="footer-contact-svg-container">
                    <CallIcon className="footer-contact-icons" />
                  </div>
                  <div>
                    <div>
                      <Link
                        className="footer-contact-content"
                        to="tel:+918015371702"
                      >
                        India: +91 8015371702
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="footer-contact-content"
                        to="tel:+918015371702"
                      >
                        UAE: +971 585801300
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
