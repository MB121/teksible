import React from "react";
import Layout from "../../Common/Layout";
import { ReactComponent as MobDesign } from "../../../assets/svg/mob-1.svg";
import { ReactComponent as SecondMobDesign } from "../../../assets/svg/mob-2.svg";
import HomeImage from "../../../assets/images/home-illu.gif";
import ServiceMain from "../../../assets/images/it-automation.gif";
import { Link } from "react-router-dom";
const ITAutomation = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <div>
          <div className="main-section-container third-main-section main-herder-section">
            <div className="container-box">
              <div className="third-section-container">
                <div className="text-center mb-3">
                  <h4 className="section-main-title main-herder-text">
                    IT <span>Automation</span>
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
                    Streamline Your Business Operations with Our{" "}
                    <span>IT Automation </span> Solutions
                  </h4>
                  <div className="service-mob-design-center-content">
                    SubDrive Efficiency, Consistency, and Innovation with
                    Advanced IT Automation Strategies
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
                      At Teksible, we specialize in IT automation solutions
                      that help businesses streamline their operations, improve
                      efficiency, and drive innovation. Our team of experienced
                      professionals is dedicated to providing you with the
                      tools, processes, and support needed to automate
                      repetitive tasks, reduce manual processes, and optimize
                      your IT environment.
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
                    Our <span>IT Automation</span> Services Solutions
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
                        Infrastructure Automation{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our infrastructure automation solutions enable you to
                        automate the provisioning, configuration, and management
                        of your IT infrastructure. By leveraging Infrastructure
                        as Code (IaC) and advanced automation tools, we help you
                        deploy and manage your infrastructure more efficiently
                        and consistently.
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
                        Application Deployment Automation{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our application deployment automation solutions
                        streamline the process of building, testing, and
                        deploying your applications. By implementing continuous
                        integration and continuous delivery (CI/CD) pipelines,
                        we help you accelerate the release of high-quality
                        software and improve collaboration between your
                        development and operations teams.
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
                        Monitoring and Alerting Automation{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        We offer comprehensive monitoring and alerting
                        automation solutions that provide real-time visibility
                        into your IT environment's performance, availability,
                        and security. By automating the collection, analysis,
                        and correlation of monitoring data, we help you
                        proactively identify and resolve potential issues before
                        they impact your business.
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
                        Security Automation{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our security automation solutions help you safeguard
                        your IT environment by automating security tasks such as
                        vulnerability scanning, patch management, and incident
                        response. By implementing automated security processes,
                        we help you reduce the risk of cyber threats and ensure
                        compliance with industry regulations.
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
                          Our team of certified IT automation professionals has
                          extensive experience in implementing automation
                          solutions for businesses across various industries,
                          ensuring a successful transformation of your IT
                          operations.
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
                          We understand that every business has unique needs and
                          challenges. Our customized approach ensures that we
                          deliver tailored IT automation solutions that align
                          with your specific goals and requirements.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob third-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          Improved <span>Efficiency </span> and Consistency
                        </h4>
                        <div className="proven-expertise-content">
                          By automating repetitive tasks and reducing manual
                          processes, we help you increase operational
                          efficiency, reduce human errors, and ensure consistent
                          execution of your IT tasks.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box full-width-who-service-section">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob fourth-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          <span> Enhanced Agility </span> and Innovation
                        </h4>
                        <div className="proven-expertise-content">
                          Our IT automation solutions enable you to respond more
                          quickly to changing business needs, adapt to evolving
                          technologies, and drive innovation within your
                          organization.
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
                      Ready to streamline your business operations with our
                      expert IT automation solutions? Contact us today to
                      discuss your requirements and learn how we can help you
                      drive efficiency, consistency, and innovation with
                      advanced IT automation strategies.
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

export default ITAutomation;
