import React from "react";
import Layout from "../../Common/Layout";
import { ReactComponent as MobDesign } from "../../../assets/svg/mob-1.svg";
import { ReactComponent as SecondMobDesign } from "../../../assets/svg/mob-2.svg";
import HomeImage from "../../../assets/images/home-illu.gif";
import ServiceMain from "../../../assets/images/service-main.gif";
import { Link } from "react-router-dom";
const ManagedService = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <div>
          <div className="main-section-container third-main-section main-herder-section">
            <div className="container-box">
              <div className="third-section-container">
                <div className="text-center mb-3">
                  <h4 className="section-main-title main-herder-text">
                    <span>Managed</span> Services
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
                    Expert <span>Managed</span> Services for Your Business{" "}
                    <span> Success</span> Services
                  </h4>
                  <div className="service-mob-design-center-content">
                    Unleash Your Business Potential with Our Comprehensive
                    Managed Services Solutions
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
                      At Teksible, we offer a full range of managed services to
                      help businesses of all sizes achieve greater efficiency,
                      productivity, and success. By partnering with us, you can
                      focus on your core business operations while we take care
                      of your IT infrastructure, ensuring your technology works
                      seamlessly to support your goals.
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
                    Our <span>Managed</span> Services Solutions
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
                        IT Support and Helpdesk Services
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our experienced and certified IT professionals are
                        available 24/7 to provide prompt and effective support
                        for all your technology needs. From troubleshooting
                        hardware and software issues to providing expert
                        guidance on your IT environment, our helpdesk services
                        are designed to keep your business running smoothly.
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
                        Network Management and Monitoring
                      </h5>
                      <div className="service-box-main-subtitle">
                        We keep your network secure, reliable, and optimized
                        with our proactive network management and monitoring
                        services. By identifying potential issues before they
                        escalate, we ensure the stability and performance of
                        your network, minimizing downtime and protecting your
                        business data.
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
                        Cloud Services{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Our cloud services allow you to harness the power of
                        cloud computing to streamline your business operations.
                        From migrating your infrastructure to the cloud to
                        providing ongoing management and optimization of your
                        cloud environment, we have the expertise to help you
                        maximize the benefits of cloud technology.
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
                        Data Backup and Disaster Recovery{" "}
                      </h5>
                      <div className="service-box-main-subtitle">
                        Protect your business from data loss and downtime with
                        our data backup and disaster recovery solutions. We
                        offer secure, scalable, and automated backup solutions
                        to ensure your critical data is always protected. In the
                        event of a disaster, our comprehensive recovery plans
                        ensure rapid restoration of your IT environment.
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
                      <h5 className="service-box-main-title">Cybersecurity </h5>
                      <div className="service-box-main-subtitle">
                        Our cybersecurity services safeguard your business from
                        evolving threats, providing multi-layered protection for
                        your IT infrastructure, data, and applications. We
                        implement robust security measures, including threat
                        monitoring, vulnerability assessments, and employee
                        training, to keep your business safe from cyberattacks.
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
                          Our team of certified and experienced IT professionals
                          have a proven track record in delivering managed
                          services solutions tailored to the unique needs of
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
                          <span>Cost-Effective</span> Solutions
                        </h4>
                        <div className="proven-expertise-content">
                          By outsourcing your IT management to us, you can save
                          on operational costs while benefiting from access to
                          the latest technology and industry best practices.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob third-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          Scalable <span>Services</span>
                        </h4>
                        <div className="proven-expertise-content">
                          As your business grows and evolves, our managed
                          services can easily scale to accommodate your changing
                          needs, ensuring your IT infrastructure supports your
                          growth objectives.
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
                          We prioritize the security of your IT infrastructure,
                          data, and applications, implementing advanced security
                          measures and continually monitoring your environment
                          for potential threats.
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
                      Ready to unleash your business's potential with our
                      expert-managed services? Contact us today to discuss your
                      requirements and learn how we can help you achieve greater
                      efficiency, productivity, and success.
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

export default ManagedService;
