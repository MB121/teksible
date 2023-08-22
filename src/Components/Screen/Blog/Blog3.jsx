import React from "react";
import Layout from "../../Common/Layout";
import star from "../../../assets/images/star.png";
import { Link } from "react-router-dom";
const Blog3 = ({ currentPage, setCurrentPage }) => {
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
              src="https://spet-gatsby.envytheme.com/static/blog3-a2e57eba995428852ec410f6a13ced57.jpg"
              alt="img"
            />
            <div className="blogText blogTextBig">
              <p>January 15, 2023</p>
              <h5>Optimizing cost in the cloud:</h5>
              <div className="blog-main-content-div">
                We helped customers, to optimize their cloud infrastructure and
                reduce their overall cloud costs by proposing a comprehensive
                cloud optimization strategy that included cost analysis,
                performance optimization, and governance policies. We worked
                closely with their team to identify and eliminate any
                unnecessary cloud resources, right-size their cloud
                infrastructure, and implement cost-saving measures such as
                reserved instances, spot instances, and cost allocation tags.
              </div>
              <div className="blog-main-content-div">
                They were able to reduce their cloud infrastructure costs by
                30%, without compromising their performance, reliability, or
                security. They also gained greater visibility and control over
                their cloud spending, enabling them to make more informed
                decisions and allocate their resources more efficiently.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog3;
