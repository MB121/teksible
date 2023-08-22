import React from "react";
import Layout from "../../Common/Layout";
import { ReactComponent as MobDesign } from "../../../assets/svg/mob-1.svg";
import { ReactComponent as SecondMobDesign } from "../../../assets/svg/mob-2.svg";
import HomeImage from "../../../assets/images/home-illu.gif";
import ServiceMain from "../../../assets/images/auditing-it.gif";
import { Link } from "react-router-dom";
const ITAuditing = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <div>
          <div className="main-section-container third-main-section main-herder-section">
            <div className="container-box">
              <div className="third-section-container">
                <div className="text-center mb-3">
                  <h4 className="section-main-title main-herder-text">
                    IT <span> Auditing</span>
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
                    Comprehensive <span> IT Auditing </span>Services for the
                    Modern Business
                  </h4>
                  <div className="service-mob-design-center-content">
                    SubEnsure Compliance, Optimize Performance and Strengthen
                    Security with Expert IT Auditing Solutions
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
                      At Teksible, we specialize in IT auditing services that
                      help businesses assess their IT environment, ensure
                      compliance with relevant regulations, optimize
                      performance, and strengthen security. Our team of
                      experienced professionals is dedicated to providing you
                      with the expertise, tools, and support needed to identify
                      potential risks, implement best practices, and safeguard
                      your IT infrastructure.
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
                    Our <span>IT Auditing</span> Services
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
                        IT Compliance Audits{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our IT compliance audits help you ensure that your IT
                        environment complies with industry-specific regulations
                        and standards, such as GDPR, HIPAA, and PCI-DSS. We
                        evaluate your existing controls, identify potential
                        gaps, and provide actionable recommendations to help you
                        achieve and maintain compliance.
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
                        IT Security Audits{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our IT security audits assess the security of your IT
                        infrastructure, applications, and processes, identifying
                        potential vulnerabilities and risks. We provide
                        comprehensive security assessments, penetration testing,
                        and vulnerability scanning to help you strengthen your
                        security posture and protect your business from cyber
                        threats.
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
                        IT Performance Audits{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our IT performance audits evaluate the efficiency and
                        effectiveness of your IT environment, identifying areas
                        for improvement and optimization. We analyze your
                        network, server, and application performance, providing
                        actionable insights to help you optimize your IT
                        resources and improve overall performance.
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
                        IT Process Audits{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our IT process audits examine the processes and
                        procedures used to manage your IT environment, ensuring
                        they align with industry best practices and standards.
                        We assess areas such as IT governance, change
                        management, and incident management, providing
                        recommendations for enhancing the efficiency and
                        effectiveness of your IT processes.
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
                          Our team of certified IT auditors has extensive
                          experience in conducting IT audits for businesses
                          across various industries, ensuring a thorough and
                          effective assessment of your IT environment.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob second-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          <span>Customized </span> Approach
                        </h4>
                        <div className="proven-expertise-content">
                          We understand that every business has unique IT needs
                          and challenges. Our customized approach ensures that
                          we deliver tailored IT auditing solutions that align
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
                          Comprehensive <span>Assessments</span>
                        </h4>
                        <div className="proven-expertise-content">
                          Our IT auditing services provide comprehensive
                          assessments of your IT environment, covering all
                          critical aspects, including compliance, security,
                          performance, and processes, to help you identify
                          potential risks and areas for improvement.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box full-width-who-service-section">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob fourth-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          <span>Actionable </span> Recommendations
                        </h4>
                        <div className="proven-expertise-content">
                          Our IT audits provide actionable recommendations and
                          guidance, helping you implement best practices,
                          enhance your IT environment, and safeguard your
                          business from potential risks and threats.
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
                      Ready to ensure compliance, optimize performance, and
                      strengthen security with our expert IT auditing solutions?
                      Contact us today to discuss your requirements and learn
                      how we can help you safeguard your IT environment and
                      drive your business forward.
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

export default ITAuditing;
