import React from "react";
import Layout from "../../Common/Layout";
import { ReactComponent as MobDesign } from "../../../assets/svg/mob-1.svg";
import { ReactComponent as SecondMobDesign } from "../../../assets/svg/mob-2.svg";
import HomeImage from "../../../assets/images/home-illu.gif";
import ServiceMain from "../../../assets/images/it-infra.gif";
import { Link } from "react-router-dom";
const ITInfrastructure = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <div>
          <div className="main-section-container third-main-section main-herder-section">
            <div className="container-box">
              <div className="third-section-container">
                <div className="text-center mb-3">
                  <h4 className="section-main-title main-herder-text">
                    IT <span>Infrastructure</span>
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
                    Robust <span> IT Infrastructure </span>Solutions for the
                    Modern Business
                  </h4>
                  <div className="service-mob-design-center-content">
                    SubEmpower Your Business with Scalable, Reliable, and Secure
                    IT Infrastructure Services
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
                      At Teksible, we specialize in designing, implementing,
                      and managing IT infrastructure solutions that help
                      businesses stay agile, competitive, and secure in today's
                      rapidly evolving digital landscape. Our team of
                      experienced professionals is dedicated to providing you
                      with the tools, strategies, and support needed to build a
                      robust and scalable IT infrastructure that supports your
                      business growth and drives innovation.
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
                    Our <span>IT Infrastructure</span> Solutions
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
                        IT Infrastructure Design and Planning{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our IT infrastructure design and planning services help
                        you build a future-proof IT environment that supports
                        your business goals and requirements. We assess your
                        current infrastructure, identify gaps, and develop a
                        strategic roadmap for implementing a scalable, reliable,
                        and secure IT infrastructure.
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
                        Network Solutions{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        We offer a range of network solutions, including network
                        design, implementation, and management, to ensure the
                        optimal performance, availability, and security of your
                        network infrastructure. Our network solutions include
                        LAN, WAN, SD-WAN, wireless, and remote access
                        technologies to keep your business connected and secure.
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
                        Data Center and Server Management{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our data center and server management solutions help you
                        optimize the performance, availability, and efficiency
                        of your physical and virtual servers. We offer server
                        virtualization, consolidation, and migration services,
                        along with data center design, implementation, and
                        optimization to ensure your IT infrastructure remains
                        agile and scalable.
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
                        Cloud Infrastructure Services{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        We provide comprehensive cloud infrastructure services,
                        including cloud strategy, migration, and management, to
                        help you harness the power of cloud computing. Our
                        solutions support various cloud platforms, including
                        AWS, Azure, and Google Cloud, ensuring a seamless and
                        secure transition to the cloud.
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
                        IT Infrastructure Monitoring and Maintenance{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our IT infrastructure monitoring and maintenance
                        services provide proactive monitoring, management, and
                        support for your IT environment. We identify and address
                        potential issues before they impact your business,
                        ensuring the optimal performance, reliability, and
                        security of your IT infrastructure.
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
                          Our team of certified IT infrastructure professionals
                          has extensive experience in designing, implementing,
                          and managing IT infrastructure solutions for
                          businesses across various industries.
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
                          deliver tailored IT infrastructure solutions that
                          align with your specific goals and requirements.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob third-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          Scalable and <span>Future-Proof</span>
                        </h4>
                        <div className="proven-expertise-content">
                          Our IT infrastructure solutions are designed to grow
                          with your business, ensuring that your IT environment
                          remains agile, scalable, and able to adapt to evolving
                          technologies and market demands.
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
                          standards ensures that your IT infrastructure remains
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
                      Ready to empower your business with our robust IT
                      infrastructure solutions? Contact us today to discuss your
                      requirements and learn how we can help you build a
                      scalable, reliable, and secure IT infrastructure that
                      drives growth and innovation.
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

export default ITInfrastructure;
