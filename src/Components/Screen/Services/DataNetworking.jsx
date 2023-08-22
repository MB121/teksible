import React from "react";
import Layout from "../../Common/Layout";
import { ReactComponent as MobDesign } from "../../../assets/svg/mob-1.svg";
import { ReactComponent as SecondMobDesign } from "../../../assets/svg/mob-2.svg";
import HomeImage from "../../../assets/images/home-illu.gif";
import ServiceMain from "../../../assets/images/data-networking.gif";
import { Link } from "react-router-dom";
const DataNetworking = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <div>
          <div className="main-section-container third-main-section main-herder-section">
            <div className="container-box">
              <div className="third-section-container">
                <div className="text-center mb-3">
                  <h4 className="section-main-title main-herder-text">
                    Data <span>Networking</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="main-section-container first-service-section">
            <div className="container-box">
              <div className="service-mobdesign-container">
                <MobDesign className="service-mobdesign" />
                <div className="service-mob-text-container">
                  <h4 className="section-main-title-small main-herder-text">
                    Empower Your Business with Cutting-Edge{" "}
                    <span>Data Networking</span> Solutions
                  </h4>
                  <div className="service-mob-design-center-content">
                    SubEnhance Connectivity, Performance, and Security with Our
                    Customized Data Networking Services
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-section-container pb-5 second-main-section">
            <div className="container-box ">
              <div className="second-section-container second-service-container">
                <img
                  className="welcome-service-image"
                  src={ServiceMain}
                  alt="HomeIllu"
                />
                <div>
                  <div className="aboutText">
                    <h5>
                      Welcome to <span>Teksible IT Solutions</span>
                    </h5>
                    <div className="service-mob-design-content">
                      At Teksible, we specialize in data networking solutions
                      that help businesses stay connected, competitive, and
                      secure in today's digital landscape. Our team of
                      experienced professionals is dedicated to providing you
                      with the tools, strategies, and support needed to build a
                      high-performance, reliable, and secure data network
                      infrastructure that supports your business growth and
                      drives innovation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-section-container third-main-section main-herder-section main-border-section-rm-padding">
            <div className="container-box">
              <div className="third-section-container">
                <div className="text-center mb-3">
                  <h4 className="section-main-title main-herder-text">
                    Our <span>Data Networking</span> Solutions
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="main-section-container third-main-section">
            <div className="container-box">
              <div className="third-section-container">
                <div className="home-service-container service-manage-box-container">
                  <div className="d-flex service-manage-main-box">
                    <div className="serviceBoxNew">
                      <div className="iconBox">
                        <div className="icon-box-border service-box-number-count">
                          1
                        </div>
                      </div>
                      <h5 className="service-box-main-title">
                        Network Design and Planning{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our network design and planning services help you build
                        a future-proof data network that supports your business
                        goals and requirements. We assess your current network
                        infrastructure, identify gaps, and develop a strategic
                        roadmap for implementing a scalable, reliable, and
                        secure data network.
                      </div>
                      <p></p>
                    </div>
                  </div>
                  <div className="d-flex service-manage-main-box">
                    <div className="serviceBoxNew">
                      <div className="iconBox">
                        <div className="icon-box-border service-box-number-count">
                          2
                        </div>
                      </div>
                      <h5 className="service-box-main-title">
                        Network Implementation{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our network implementation services cover the
                        installation, configuration, and integration of network
                        hardware, software, and systems. We ensure a seamless
                        deployment of your data network infrastructure,
                        including switches, routers, firewalls, and wireless
                        access points, to keep your business connected and
                        secure.
                      </div>
                      <p></p>
                    </div>
                  </div>
                  <div className="d-flex service-manage-main-box">
                    <div className="serviceBoxNew">
                      <div className="iconBox">
                        <div className="icon-box-border service-box-number-count">
                          3
                        </div>
                      </div>
                      <h5 className="service-box-main-title">
                        Network Optimization{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        We provide network optimization services to enhance the
                        performance, reliability, and security of your data
                        network. By analyzing your network traffic patterns,
                        identifying bottlenecks, and implementing best
                        practices, we help you optimize your network
                        infrastructure for maximum efficiency and performance.
                      </div>
                      <p></p>
                    </div>
                  </div>
                  <div className="d-flex service-manage-main-box">
                    <div className="serviceBoxNew">
                      <div className="iconBox">
                        <div className="icon-box-border service-box-number-count">
                          4
                        </div>
                      </div>
                      <h5 className="service-box-main-title">
                        Network Security{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our network security solutions help you safeguard your
                        data network from unauthorized access, data breaches,
                        and cyber threats. We implement robust firewalls,
                        intrusion detection and prevention systems, and advanced
                        threat intelligence to ensure the security and integrity
                        of your data network.
                      </div>
                      <p></p>
                    </div>
                  </div>
                  <div className="d-flex service-manage-main-box full-service-manage-main-box">
                    <div className="serviceBoxNew">
                      <div className="iconBox">
                        <div className="icon-box-border service-box-number-count">
                          5
                        </div>
                      </div>
                      <h5 className="service-box-main-title">
                        Network Monitoring and Management{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our network monitoring and management services provide
                        real-time visibility into the performance, availability,
                        and security of your data network. We proactively
                        identify and address potential issues before they impact
                        your business, ensuring the optimal performance and
                        reliability of your network infrastructure.
                      </div>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-section-container third-main-section main-herder-section main-border-section-rm-padding">
            <div className="container-box">
              <div className="third-section-container">
                <div className="text-center mb-3">
                  <h4 className="section-main-title main-herder-text">
                    Why Choose <span>Teksible?</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="main-section-container third-main-section">
            <div className="container-box">
              <div className="third-section-container">
                <div className="home-service-container service-manage-box-container">
                  <div className="d-flex proven-expertise-manage-main-box">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob first-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          Proven <span>Expertise</span>
                        </h4>
                        <div className="proven-expertise-content">
                          Our team of certified data networking professionals
                          has extensive experience in designing, implementing,
                          and managing data network solutions for businesses
                          across various industries.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob second-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          <span>Customized </span> Solutions
                        </h4>
                        <div className="proven-expertise-content">
                          We understand that every business has unique
                          networking needs and challenges. Our customized
                          approach ensures that we deliver tailored data
                          networking solutions that align with your specific
                          goals and requirements.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob third-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          Scalable <span>and Future-Proof</span>
                        </h4>
                        <div className="proven-expertise-content">
                          Our data networking solutions are designed to grow
                          with your business, ensuring that your network
                          infrastructure remains agile, scalable, and able to
                          adapt to evolving technologies and market demands.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box full-width-who-service-section">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob fourth-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          <span>Enhanced</span> Security
                        </h4>
                        <div className="proven-expertise-content">
                          Our focus on security best practices and industry
                          standards ensures that your data network remains
                          protected against cyber threats and compliant with
                          relevant regulations.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box full-width-who-service-section">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob fifth-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          Dedicated <span>Support</span>
                        </h4>
                        <div className="proven-expertise-content">
                          Our customer-centric approach ensures you receive
                          personalized and responsive support from our team, who
                          are committed to your business's success.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-section-container pb-5 second-main-section">
            <div className="container-box ">
              <div className="second-section-container second-service-container">
                <img
                  className="welcome-service-image"
                  src={HomeImage}
                  alt="HomeIllu"
                />
                <div>
                  <div className="aboutText">
                    <h5>
                      Get Started with <span>Teksible</span> Today
                    </h5>
                    <div className="service-mob-design-content">
                      Ready to empower your business with our cutting-edge data
                      networking solutions? Contact us today to discuss your
                      requirements and learn how we can help you enhance
                      connectivity, performance, and security with our
                      customized data networking services.
                    </div>
                    <Link to="/contact" className="cta blogView">
                      <span className="cta-title blogView-title">
                        Contact Us
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
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DataNetworking;
