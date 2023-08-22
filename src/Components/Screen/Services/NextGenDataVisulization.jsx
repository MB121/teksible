import React from "react";
import Layout from "../../Common/Layout";
import { ReactComponent as MobDesign } from "../../../assets/svg/mob-1.svg";
import { ReactComponent as SecondMobDesign } from "../../../assets/svg/mob-2.svg";
import HomeImage from "../../../assets/images/home-illu.gif";
import ServiceMain from "../../../assets/images/data-visu.gif";
import { Link } from "react-router-dom";
const NextGenDataVisulization = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <div>
          <div className="main-section-container third-main-section main-herder-section">
            <div className="container-box">
              <div className="third-section-container">
                <div className="text-center mb-3">
                  <h4 className="section-main-title main-herder-text">
                    Next-Gen <span>Data Visualization</span>
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
                    <span>Next-Gen Data Visualization</span> Solutions.
                  </h4>
                  <div className="service-mob-design-center-content">
                    Data is at the heart of every business decision, and the
                    ability to effectively analyze and interpret data is
                    critical for success.
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
                      Our approach starts with understanding your business
                      objectives and data sources. We work with you to identify
                      the key metrics and KPIs that are critical to your
                      success. Then, we create customized dashboards and reports
                      that present your data in a clear and visually compelling
                      way.
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
                    Our <span> Next-Gen Data Visualization</span> Service
                    includes
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
                        Customized Dashboards
                      </h5>
                      <div className="service-box-main-subtitle">
                        We create custom dashboards that are tailored to your
                        unique business needs. These dashboards allow you to
                        quickly and easily visualize your data and track your
                        progress toward your goals.
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
                        Interactive Report
                      </h5>
                      <div className="service-box-main-subtitle">
                        We create interactive reports that allow you to drill
                        down into your data and explore different scenarios.
                        This helps you identify trends and patterns that you may
                        have otherwise missed.
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
                        Real-time Data Visualization
                      </h5>
                      <div className="service-box-main-subtitle">
                        We offer real-time data visualization tools that allow
                        you to monitor your data in real time. This helps you
                        identify and respond to issues as they arise, and make
                        informed decisions on the fly.
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
                        Advanced Analytics
                      </h5>
                      <div className="service-box-main-subtitle">
                        We offer advanced analytics tools that allow you to
                        perform predictive modeling and forecasting, so you can
                        anticipate trends and stay ahead of the competition.
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
                        Integration with Other Systems
                      </h5>
                      <div className="service-box-main-subtitle">
                        We can integrate your data visualization tools with
                        other systems, such as CRM and ERP systems, so you have
                        a holistic view of your business data.
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
                          Teksible is experienced in implementing data
                          visualization solutions and can provide expertise in
                          selecting the right technology and tools for your
                          business needs. They can help you identify the best
                          visualization techniques to convey your data insights
                          effectively and ensure that your data visualization is
                          optimized for user experience and accessibility.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob second-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          <span>Integration </span>
                        </h4>
                        <div className="proven-expertise-content">
                          Teksible can help you integrate your data
                          visualization solution with your existing systems and
                          applications, ensuring a seamless user experience and
                          minimal disruption to your business operations. They
                          can also help you ensure that your data visualization
                          solution is scalable and can handle large volumes of
                          data.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob third-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          <span>Customization</span>
                        </h4>
                        <div className="proven-expertise-content">
                          Teksible can help you customize your data
                          visualization solution to meet your specific business
                          needs. They can help you design and implement custom
                          dashboards and reports that provide actionable
                          insights and enable better decision-making.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box full-width-who-service-section">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob fourth-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          <span>Security</span>
                        </h4>
                        <div className="proven-expertise-content">
                          Teksible can help you ensure that your data
                          visualization solution is secure and complies with
                          regulatory requirements. They can provide guidance on
                          data governance, access control, and data encryption
                          to ensure that your data is protected.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex proven-expertise-manage-main-box full-width-who-service-section">
                    <div className="why-choose-card-service">
                      <SecondMobDesign className="why-choose-mob fifth-why-mob" />
                      <div className="proven-expertise-main-content">
                        <h4 className="proven-expertise-main-title main-herder-text">
                          Training and <span>Support</span>
                        </h4>
                        <div className="proven-expertise-content">
                          Teksible can provide training and support to your
                          team to ensure that they can use the data
                          visualization solution effectively. They can also
                          provide ongoing support and maintenance to ensure that
                          your solution is running smoothly and any issues are
                          addressed promptly.
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
                      With our Next Gen Data Visualization service, you can
                      unlock the full potential of your data and gain the
                      insights you need to make informed decisions. Contact us
                      today to learn more about how we can help you visualize
                      your data in new and innovative ways.
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

export default NextGenDataVisulization;
