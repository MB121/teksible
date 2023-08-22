import React from "react";
import Layout from "../../Common/Layout";
import star from "../../../assets/images/star.png";
import { Link } from "react-router-dom";
const Blog2 = ({ currentPage, setCurrentPage }) => {
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
              src="https://spet-gatsby.envytheme.com/static/blog2-c3809a2eb6a0baf6b5cb321ed76c29f2.jpg"
              alt="img"
            />
            <div className="blogText blogTextBig">
              <p>September 20, 2022</p>
              <h5>Migration of On-prem SQL to PAAS service</h5>
              <div className="blog-main-content-div">
                On this, we proposed a cloud-based database service on Azure,
                which offered a fully managed, scalable, and cost-effective
                solution for customers’ database needs. We worked closely with
                their team to develop a customized migration plan that minimized
                downtime and ensured data integrity.
              </div>
              <div className="blog-main-content-div">
                The migration project had a significant impact on their
                business. They were able to reduce their IT infrastructure
                costs, improve their database performance and availability, and
                enhance their data security and compliance. Their teams also
                benefited from the ease of use and flexibility of the new
                cloud-based database service, leading to increased productivity
                and efficiency.
              </div>
              <div className="blog-main-content-div">
                We ensured that the migration was completed on time and within
                budget, with minimal disruption to their operations.
              </div>
              <div className="blog-main-content-div">
                Overall, our successful migration of their on-premises SQL
                database to a cloud-based PAAS service on Azure enabled the
                customer to reduce their IT infrastructure costs, enhance their
                data security and compliance, and improve their overall database
                performance and availability.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog2;
