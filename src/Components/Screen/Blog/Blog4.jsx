import React from "react";
import Layout from "../../Common/Layout";
import star from "../../../assets/images/star.png";
import { Link } from "react-router-dom";
const Blog4 = ({ currentPage, setCurrentPage }) => {
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
              src="https://spet-gatsby.envytheme.com/static/blog4-8dbbb024b3be609d6b6c48f77ae4f095.jpg"
              alt="img"
            />
            <div className="blogText blogTextBig">
              <p>February 05, 2023</p>
              <h5>Datacenter migration - Hosted solution:</h5>
              <div className="blog-main-content-div">
                We achieved this by providing a comprehensive migration strategy
                that included a thorough assessment of their existing
                infrastructure, identification of potential risks and
                challenges, and development of a customized migration plan. We
                also implemented a hosted solution on Azure that offered a
                scalable, secure, and cost-effective option for their data
                center needs.
              </div>
              <div className="blog-main-content-div">
                Customers were able to reduce their infrastructure costs,
                improve their agility and scalability, and enhance their data
                security and compliance. They also gained greater flexibility
                and resilience in their IT infrastructure, allowing them to
                focus on their core business priorities and innovation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog4;
