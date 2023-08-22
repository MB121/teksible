import React from "react";
import Layout from "../../Common/Layout";
import star from "../../../assets/images/star.png";
import { Link } from "react-router-dom";
const Blog5 = ({ currentPage, setCurrentPage }) => {
  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      <div className="main-section-container third-main-section main-herder-section">
        <div className="container-box">
          <div className="third-section-container">
            <div className="text-center mb-3">
              <h4 className="section-main-title main-herder-text">
                Blog <span>Details</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="main-section-container">
        <div className="container-box">
          <div className="blog-details-main">
            <img
              className="blogImg blog-img-big"
              src="https://spet-gatsby.envytheme.com/static/blog5-afbfbdfd40f8d35e591aa5f5c26423f8.jpg"
              alt="img"
            />
            <div className="blogText blogTextBig">
              <p>March 19, 2023</p>
              <h5>Cybersecurity auditing and risk management:</h5>
              <div className="blog-main-content-div">
                Our team of cyber security experts at Teksible worked closely
                with customers to assess their existing cyber security posture,
                identify potential vulnerabilities and risks, and develop a
                customized risk management plan. We also recommended best
                practices for their cyber security operations and processes to
                improve their overall security posture.
              </div>
              <div className="blog-main-content-div">
                The cyber security audit included a thorough assessment of their
                IT systems, applications, and infrastructure to identify
                potential vulnerabilities and risks. We also conducted
                vulnerability scans and penetration testing to identify any
                weaknesses in their defenses. Based on the findings, we
                developed a comprehensive risk management plan that included
                specific recommendations for mitigating identified risks and
                improving their overall security posture.
              </div>
              <div className="blog-main-content-div">
                Our team provided ongoing support to implement the risk
                management plan, which included implementing security controls,
                conducting regular vulnerability assessments and penetration
                testing, and ensuring compliance with relevant regulatory
                standards.
              </div>
              <div className="blog-main-content-div">
                As a result of this, the customer was able to significantly
                improve their overall cyber security posture. They were able to
                identify and address potential vulnerabilities and risks before
                they could be exploited by cybercriminals. This helped them to
                protect their sensitive data and systems, safeguard their
                reputation, and reduce the risk of costly data breaches.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog5;
