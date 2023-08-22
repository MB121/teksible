import React from "react";
import star from "../../../assets/images/star.png";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <>
      <div>
        <div className="main-section-container third-main-section main-herder-section">
          <div className="container-box">
            <div className="third-section-container">
              <div className="text-center mb-3">
                <h4 className="section-main-title main-herder-text">
                  Our <span>Recent</span> Story
                </h4>
                <p>
                  About customer success story, Unique Projects help customer to
                  compete in market, Teksible Stories
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-section-container third-main-section">
          <img src={star} alt="star" className="starImg" />
          <img src={star} alt="star" className="starImg2" />
          <div className="container-box">
            <div className="third-section-container">
              <div className="our-stories-container">
                <div className="our-stories-box d-flex">
                  <div className="blogMain">
                    <img
                      className="blogImg"
                      src="https://spet-gatsby.envytheme.com/static/blog5-afbfbdfd40f8d35e591aa5f5c26423f8.jpg"
                      alt="img"
                    />
                    <div className="blogText">
                      <p>March 19, 2023</p>
                      <h5>Cybersecurity auditing and risk management:</h5>
                      <div className="blog-content-div">
                        {`Our team of cyber security experts at Teksible worked closely with customers to assess their existing cyber security posture, identify potential vulnerabilities and risks, and develop a customized risk management plan. We also recommended best practices for their cyber security operations and processes to improve their overall security posture.`.slice(
                          0,
                          200
                        ) + "..."}
                      </div>
                      <Link to="/blog/5" className="cta blogView">
                        <span className="cta-title blogView-title">
                          Read More
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
                      <div className="ring-orange"></div>
                      <div className="black-orange"></div>
                    </div>
                  </div>
                </div>
                <div className="our-stories-box d-flex">
                  <div className="blogMain">
                    <img
                      className="blogImg"
                      src="https://spet-gatsby.envytheme.com/static/blog4-8dbbb024b3be609d6b6c48f77ae4f095.jpg"
                      alt="img"
                    />
                    <div className="blogText">
                      <p>February 05, 2023</p>
                      <h5>Datacenter migration - Hosted solution:</h5>
                      <div className="blog-content-div">
                        {`We achieved this by providing a comprehensive migration strategy that included a thorough assessment of their existing infrastructure, identification of potential risks and challenges, and development of a customized migration plan. We also implemented a hosted solution on Azure that offered a scalable, secure, and cost-effective option for their data center needs.`.slice(
                          0,
                          200
                        ) + "..."}
                      </div>
                      <Link to="/blog/4" className="cta blogView">
                        <span className="cta-title blogView-title">
                          Read More
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
                      <div className="ring-orange"></div>
                      <div className="black-orange"></div>
                    </div>
                  </div>
                </div>
                <div className="our-stories-box d-flex">
                  <div className="blogMain">
                    <img
                      className="blogImg"
                      src="https://spet-gatsby.envytheme.com/static/blog3-a2e57eba995428852ec410f6a13ced57.jpg"
                      alt="img"
                    />
                    <div className="blogText">
                      <p>January 15, 2023</p>
                      <h5>Optimizing cost in the cloud:</h5>
                      <div className="blog-content-div">
                        {`We helped customers, to optimize their cloud infrastructure and reduce their overall cloud costs by proposing a comprehensive cloud optimization strategy that included cost analysis, performance optimization, and governance policies. We worked closely with their team to identify and eliminate any unnecessary cloud resources, right-size their cloud infrastructure, and implement cost-saving measures such as reserved instances, spot instances, and cost allocation tags.`.slice(
                          0,
                          200
                        ) + "..."}
                      </div>
                      <Link to="/blog/3" className="cta blogView">
                        <span className="cta-title blogView-title">
                          Read More
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
                      <div className="ring-orange"></div>
                      <div className="black-orange"></div>
                    </div>
                  </div>
                </div>
                <div className="our-stories-box d-flex">
                  <div className="blogMain">
                    <img
                      className="blogImg"
                      src="https://spet-gatsby.envytheme.com/static/blog2-c3809a2eb6a0baf6b5cb321ed76c29f2.jpg"
                      alt="img"
                    />
                    <div className="blogText">
                      <p>September 20, 2022</p>
                      <h5>Migration of On-prem SQL to PAAS service:</h5>
                      <div className="blog-content-div">
                        {`On this, we proposed a cloud-based database service on
                    Azure, which offered a fully managed, scalable, and
                    cost-effective solution for customers’ database needs. We
                    worked closely with their team to develop a customized
                    migration plan that minimized downtime and ensured data
                    integrity.`.slice(0, 200) + "..."}
                      </div>
                      <Link to="/blog/2" className="cta blogView">
                        <span className="cta-title blogView-title">
                          Read More
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
                      <div className="ring-orange"></div>
                      <div className="black-orange"></div>
                    </div>
                  </div>
                </div>
                <div className="our-stories-box d-flex">
                  <div className="blogMain">
                    <img
                      className="blogImg"
                      src="https://spet-gatsby.envytheme.com/static/blog1-fb50e94f7547cede1bcc161297b3d313.jpg"
                      alt="img"
                    />
                    <div className="blogText">
                      <p>June 15, 2022</p>
                      <h5>Migration of VMs to Azure - DC Rationalization:</h5>
                      <div className="blog-content-div">
                        {`At Teksible, we are committed to delivering innovative and
                    cost-effective IT solutions to our customers. Recently, we
                    were awarded to work with one of our customers to modernize
                    their IT infrastructure and optimize their data center
                    operations.`.slice(0, 200) + "..."}
                      </div>
                      <Link to="/blog/1" className="cta blogView">
                        <span className="cta-title blogView-title">
                          Read More
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
                      <div className="ring-orange"></div>
                      <div className="black-orange"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
