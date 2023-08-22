import React from "react";
import Layout from "../../Common/Layout";
import { ReactComponent as MobDesign } from "../../../assets/svg/mob-1.svg";
import { ReactComponent as SecondMobDesign } from "../../../assets/svg/mob-2.svg";
import HomeImage from "../../../assets/images/home-illu.gif";
import ServiceMain from "../../../assets/images/infra-as-code.gif";
import { Link } from "react-router-dom";
const InfraAsCode = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <div>
          <div className="main-section-container third-main-section main-herder-section">
            <div className="container-box">
              <div className="third-section-container">
                <div className="text-center mb-3">
                  <h4 className="section-main-title main-herder-text">
                    <span>Cloud </span>Transformation
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
                    Robust <span> Cloud Transformation </span>Solutions for the
                    Modern Business
                  </h4>
                  <div className="service-mob-design-center-content">
                    Our approach starts with a thorough assessment of your
                    current infrastructure, applications, and business goals.
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
                      With our Cloud Transformation Service, you can be
                      confident that your migration to the cloud will be
                      successful, seamless, and cost-effective. Contact us today
                      to learn more about how we can help your business thrive
                      in the cloud.
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
                    Our <span>Cloud Transformation</span> Service includes
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
                        Cloud Migration Planning
                      </h5>
                      <div className="service-box-main-subtitle">
                        We help you plan your cloud migration, including which
                        applications to move and when, and how to optimize your
                        infrastructure for cloud deployment.
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
                        Cloud Migration Execution
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our team of experts will execute your cloud migration,
                        ensuring minimal disruption to your business and
                        seamless integration with your existing systems.
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
                        Cloud Platform Selection
                      </h5>
                      <div className="service-box-main-subtitle">
                        We help you choose the right cloud platform and
                        provider, based on your unique needs and budget.
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
                        Cloud Optimization
                      </h5>
                      <div className="service-box-main-subtitle">
                        We help you optimize your cloud infrastructure to ensure
                        maximum performance and cost-effectiveness.
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
                      <h5 className="service-box-main-title">Cloud Security</h5>
                      <div className="service-box-main-subtitle">
                        We ensure that your cloud infrastructure is secure and
                        compliant with industry standards and regulations.
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
                          Teksible is experienced in cloud technologies and can
                          provide expertise in selecting the right cloud
                          platform and services for your business needs. They
                          can help you identify areas where cloud technology can
                          bring the most value and can provide guidance on how
                          to optimize your cloud resources to achieve your
                          goals.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob second-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          <span>Streamlined </span>Integration
                        </h4>
                        <div className="proven-expertise-content">
                          Teksible can help you integrate your existing systems
                          and applications with your cloud platform, ensuring a
                          smooth transition and minimal disruption to your
                          business operations. They can also provide guidance on
                          how to migrate your data to the cloud, ensuring data
                          security and compliance with regulatory requirements.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob third-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          <span>Cost-effectiveness</span>
                        </h4>
                        <div className="proven-expertise-content">
                          Teksible can help you identify cost-saving
                          opportunities through cloud technologies such as
                          automation, resource optimization, and pay-per-use
                          models. They can also help you identify areas where
                          cloud technologies can bring efficiency and cost
                          savings to your business.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box full-width-who-service-section">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob fourth-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          <span>Scalability</span>
                        </h4>
                        <div className="proven-expertise-content">
                          Teksible can help you design and implement a scalable
                          cloud architecture that can grow and evolve with your
                          business needs. This ensures that you can easily adapt
                          to changing market conditions, customer demands, and
                          business requirements.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box full-width-who-service-section">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob fifth-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          Risk <span>Mitigation</span>
                        </h4>
                        <div className="proven-expertise-content">
                          Teksible can help you identify and mitigate potential
                          risks associated with cloud adoption, such as data
                          security, compliance, and governance. They can also
                          provide guidance on how to ensure business continuity
                          in case of system failures or other disruptions.
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
                      With our Cloud Transformation Service, you can be
                      confident that your migration to the cloud will be
                      successful, seamless, and cost-effective. Contact us today
                      to learn more about how we can help your business thrive
                      in the cloud
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

export default InfraAsCode;
