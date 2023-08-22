import React from "react";
import Layout from "../../Common/Layout";
import star from "../../../assets/images/star.png";
import { Link } from "react-router-dom";
const Blog1 = ({ currentPage, setCurrentPage }) => {
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
              src="https://spet-gatsby.envytheme.com/static/blog1-fb50e94f7547cede1bcc161297b3d313.jpg"
              alt="img"
            />
            <div className="blogText blogTextBig">
              <p>June 15, 2022</p>
              <h5>Migration of VMs to Azure - DC Rationalization:</h5>
              <div className="blog-main-content-div">
                At Teksible, we are committed to delivering innovative and
                cost-effective IT solutions to our customers. Recently, we were
                awarded to work with one of our customers to modernize their IT
                infrastructure and optimize their data center operations.
              </div>
              <div className="blog-main-content-div">
                To achieve this, we recommended migrating their virtual machines
                to Microsoft Azure and implementing a DC rationalization
                strategy. This move allowed them to take advantage of the
                benefits of cloud computing, such as scalability, cost savings,
                and increased accessibility. It also allowed them to consolidate
                their data centers and optimize their infrastructure to reduce
                complexity and improve efficiency
              </div>
              <div className="blog-main-content-div">
                The project had a significant impact on their business. They
                were able to improve the reliability and performance of their IT
                systems, reduce operational costs, and increase their agility
                and scalability. Their customers also benefited from faster and
                more responsive services, leading to increased satisfaction and
                loyalty.
              </div>
              <div className="blog-main-content-div">
                Our team at Teksible worked closely with the customer to ensure
                a smooth transition to Azure and minimal disruption to their
                operations. We provided end-to-end support, from planning and
                migration to post-deployment optimization and training. We also
                helped them leverage the latest cloud technologies and optimize
                their data center operations to stay ahead of the competition
                and continue delivering top-notch services to their customers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog1;
