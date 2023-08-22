import React, { useState } from "react";
import star from "../../../assets/images/star.png";
import banner from "../../../assets/images/first-illu.gif";
import { ReactComponent as ManagedService } from "../../../assets/svg/managed-service.svg";
import { ReactComponent as Devops } from "../../../assets/svg/devops.svg";
import { ReactComponent as DataNetwork } from "../../../assets/svg/infra-as-code.svg";
import { ReactComponent as Auditing } from "../../../assets/svg/it-auditing.svg";
import { ReactComponent as InfraAsCode } from "../../../assets/svg/data-networking.svg";
import { ReactComponent as FinanceIcon } from "../../../assets/svg/finance.svg";
import { ReactComponent as SecurityEdge } from "../../../assets/svg/security.svg";
import { ReactComponent as Automation } from "../../../assets/svg/automation.svg";
import { ReactComponent as InfraStructure } from "../../../assets/svg/infrastructure.svg";
import { ReactComponent as Manufacturing } from "../../../assets/svg/manufacture.svg";
import { ReactComponent as Healthcare } from "../../../assets/svg/health.svg";
import { ReactComponent as AUtomobile } from "../../../assets/svg/automobile.svg";
import { ReactComponent as Banking } from "../../../assets/svg/banking.svg";
import { ReactComponent as RealEstate } from "../../../assets/svg/real-estate.svg";
import { ReactComponent as Insurance } from "../../../assets/svg/insurance.svg";
import { ReactComponent as OurRecentStory } from "../../../assets/svg/recent-story.svg";
import { ReactComponent as Arrow } from "../../../assets/svg/arrow.svg";

import HomeImage from "../../../assets/images/home-illu.gif";
import { Link } from "react-router-dom";
const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const serviceHomePageJson = [
    {
      icon: ManagedService,
      iconBackgroundColor: "#80c54d",
      cardTitle: "Managed Services",
      cardContent:
        "At Teksible, we offer a full range of managed services to help businesses of all sizes achieve greater efficiency, productivity, and success. By partnering with us, you can focus on your core business operations while we take care of your IT infrastructure, ensuring your technology works seamlessly to support your goals.",
      navigationLink: "/services/managedservice",
    },
    {
      icon: InfraAsCode,
      iconBackgroundColor: "#6223C5",
      cardTitle: "Cloud Transformation",
      cardContent:
        "The cloud is no longer just a buzzword, it's a necessary step for businesses to remain competitive in today's digital age. By moving your infrastructure and applications to the cloud, you can increase your agility, reduce costs, and improve your overall performance. Our Cloud Transformation Service is designed to help you achieve these goals by providing you with a comprehensive plan tailored to your specific needs.",
      navigationLink: "/services/cloudtransformation",
    },
    {
      icon: Devops,
      iconBackgroundColor: "#ca8220",
      cardTitle: "DevOps",
      cardContent:
        "At Teksible, we specialize in DevOps solutions that help businesses streamline their software development and operations processes. Our team of experienced DevOps professionals is dedicated to providing you with the tools, practices, and support needed to innovate faster and deliver high-quality products to your customers.",
      navigationLink: "/services/devops",
    },
    {
      icon: Automation,
      iconBackgroundColor: "#de6742",
      cardTitle: "IT Automation",
      cardContent:
        "At Teksible, we specialize in IT automation solutions that help businesses streamline their operations, improve efficiency, and drive innovation. Our team of experienced professionals is dedicated to providing you with the tools, processes, and support needed to automate repetitive tasks, reduce manual processes, and optimize your IT environment.",
      navigationLink: "/services/itautomation",
    },
    {
      icon: Auditing,
      iconBackgroundColor: "#FFCC5A",
      cardTitle: "Next-Gen Data Visualization",
      cardContent:
        "Data is at the heart of every business decision, and the ability to effectively analyze and interpret data is critical for success. Our Next-Gen Data Visualization service offers advanced tools and techniques to help you gain insights and make better decisions based on your data.",
      navigationLink: "/services/nextgendatavisualization",
    },
    {
      icon: SecurityEdge,
      iconBackgroundColor: "#b92fb1",
      cardTitle: "Information Security",
      cardContent:
        "At Teksible, we offer end-to-end information security solutions designed to protect your business from the edge to the cloud. Our team of experienced security professionals is dedicated to providing you with the strategies, tools, and support necessary to secure your digital assets and ensure the integrity and confidentiality of your data.",
      navigationLink: "/services/informationsecurity",
    },
    {
      icon: InfraStructure,
      iconBackgroundColor: "#59eed0",
      cardTitle: "IT Infrastructure",
      cardContent:
        "At Teksible, we specialize in designing, implementing, and managing IT infrastructure solutions that help businesses stay agile, competitive, and secure in today's rapidly evolving digital landscape. Our team of experienced professionals is dedicated to providing you with the tools, strategies, and support needed to build a robust and scalable IT infrastructure that supports your business growth and drives innovation.",
      navigationLink: "/services/itinfrastructure",
    },
    {
      icon: DataNetwork,
      iconBackgroundColor: "#4267d1",
      cardTitle: "Data Networking",
      cardContent:
        "At Teksible, we specialize in data networking solutions that help businesses stay connected, competitive, and secure in today's digital landscape. Our team of experienced professionals is dedicated to providing you with the tools, strategies, and support needed to build a high-performance, reliable, and secure data network infrastructure that supports your business growth and drives innovation.",
      navigationLink: "/services/datanetworking",
    },
    {
      icon: Auditing,
      iconBackgroundColor: "#FF5A5A",
      cardTitle: "IT Auditing",
      cardContent:
        "At Teksible, we specialize in IT auditing services that help businesses assess their IT environment, ensure compliance with relevant regulations, optimize performance, and strengthen security. Our team of experienced professionals is dedicated to providing you with the expertise, tools, and support needed to identify potential risks, implement best practices, and safeguard your IT infrastructure.",
      navigationLink: "/services/itauditing",
    },
  ];
  const blogData = [
    {
      image:
        "https://spet-gatsby.envytheme.com/static/blog5-afbfbdfd40f8d35e591aa5f5c26423f8.jpg",
      date: "March 19, 2023",
      title: "Cybersecurity auditing and risk management:",
      detail:
        "Our team of cyber security experts at Teksible worked closely with customers to assess their existing cyber security posture, identify potential vulnerabilities and risks, and develop a customized risk management plan. We also recommended best practices for their cyber security operations and processes to improve their overall security posture.",
      link: "/blog/5",
    },
    {
      image:
        "https://spet-gatsby.envytheme.com/static/blog4-8dbbb024b3be609d6b6c48f77ae4f095.jpg",
      date: "February 05, 2023",
      title: "Datacenter migration - Hosted solution:",
      detail:
        "We achieved this by providing a comprehensive migration strategy that included a thorough assessment of their existing infrastructure, identification of potential risks and challenges, and development of a customized migration plan. We also implemented a hosted solution on Azure that offered a scalable, secure, and cost-effective option for their data center needs.",
      link: "/blog/4",
    },
    {
      image:
        "https://spet-gatsby.envytheme.com/static/blog3-a2e57eba995428852ec410f6a13ced57.jpg",
      date: "January 15, 2023",
      title: "Optimizing cost in the cloud:",
      detail:
        "We helped customers, to optimize their cloud infrastructure and reduce their overall cloud costs by proposing a comprehensive cloud optimization strategy that included cost analysis, performance optimization, and governance policies. We worked closely with their team to identify and eliminate any unnecessary cloud resources, right-size their cloud infrastructure, and implement cost-saving measures such as reserved instances, spot instances, and cost allocation tags.",
      link: "/blog/3",
    },
    {
      image:
        "https://spet-gatsby.envytheme.com/static/blog2-c3809a2eb6a0baf6b5cb321ed76c29f2.jpg",
      date: "September 20, 2022",
      title: "Migration of On-prem SQL to PAAS service:",
      detail:
        "On this, we proposed a cloud-based database service on Azure, which offered a fully managed, scalable, and cost-effective solution for customers’ database needs. We worked closely with their team to develop a customized migration plan that minimized downtime and ensured data integrity.",
      link: "/blog/2",
    },
    {
      image:
        "https://spet-gatsby.envytheme.com/static/blog1-fb50e94f7547cede1bcc161297b3d313.jpg",
      date: "June 15, 2022",
      title: "Migration of VMs to Azure - DC Rationalization:",
      detail:
        "At Teksible, we are committed to delivering innovative and cost-effective IT solutions to our customers. Recently, we were awarded to work with one of our customers to modernize their IT infrastructure and optimize their data center operations.",
      link: "/blog/1",
    },
  ];
  const nextSlide = () => {
    setSlideIndex(1);
  };
  const prevSlide = () => {
    setSlideIndex(0);
  };
  const isVisibleBlog = (index) => {
    if (index == 0 || index == 1 || index == 2) {
      if (slideIndex == 0) {
        return true;
      } else {
        return false;
      }
    }
    if (index == 3 || index == 4) {
      if (slideIndex == 1) {
        return true;
      } else {
        return false;
      }
    }
  };
  return (
    <>
      <div>
        <div className="main-section-container">
          <div className="container-box">
            <div className="first-section-container">
              <div>
                <h1 className="HomeBanner">
                  Proficient System <span>Integration</span> Company
                </h1>
                <p className="HomeBanner-paragraph">
                  CyberSecurity Solutions, Infrastructure, End-to-End IT
                  Solution & Managed Service
                </p>
                <Link to="/aboutus" className="cta blogView">
                  <span className="cta-title blogView-title">Read More</span>
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
              <div className="first-immage-container">
                <img className="bannerMainImg" src={banner} alt="banner" />
              </div>
            </div>
          </div>
        </div>
        <div className="main-section-container pb-5 second-main-section">
          <div className="ring-orange ring-orange2"></div>
          <div className="black-orange black-orange2"></div>
          <div className="container-box ">
            <div className="second-section-container">
              <img
                className="second-home-image"
                src={HomeImage}
                alt="HomeIllu"
              />
              <div>
                <div className="aboutText">
                  <h5>
                    Welcome to <span>Teksible IT Solutions</span>
                  </h5>
                  <p>
                    Your trusted partner for all your Information Technology
                    needs. We are a high quality provider of Information and
                    Communication Technology (ICT) services. We have quickly
                    become the go-to partner for organizations seeking Cloud
                    Transformation, Digital Transformation and optimize Cloud,
                    IT Infrastructure, Data Networking & Information Security
                    with enabling Data Visualization on top of it. We help our
                    customers innovate their processes, create valuable
                    connections and rapport with their business and increase
                    their productivity.
                  </p>
                  <p>
                    With over 20 years of cumulative "Glocal" experience and
                    certified professionals, Teksible has a wealth of expertise
                    to deliver solutions designed to meet customers' business
                    needs today and allow for future growth.
                  </p>
                  <p>
                    We work with customers in mind to offer integrated design
                    and solutions, oversee smooth overall project implementation
                    and provide regular maintenance and enhancements to meet
                    ongoing and future needs.
                  </p>
                  <Link to="/aboutus" className="cta blogView">
                    <span className="cta-title blogView-title">Read More</span>
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
        <div className="main-section-container third-main-section">
          <img src={star} alt="star" className="starImg" />
          <img src={star} alt="star" className="starImg2" />
          <div className="container-box">
            <div className="third-section-container">
              <div className="text-center mb-3">
                <h4 className="section-main-title">
                  Services We can Help you with
                </h4>
                <p>
                  Analyze, Customized plan, Implement, Optimize & Post
                  Implementation 24x7 Support
                </p>
              </div>
              <div className="home-service-container">
                {serviceHomePageJson?.map((data, index) => {
                  return (
                    <div className="custom-service-card" key={index}>
                      <div className="custom-service-card-inner-div">
                        <img
                          src={star}
                          alt="star"
                          className="custom-service-card-image"
                        />
                        <div
                          className="custom-service-icon-main"
                          style={{ backgroundColor: data?.iconBackgroundColor }}
                        >
                          <data.icon className="custom-service-icon" />
                        </div>
                        <div>
                          <Link
                            to={data?.navigationLink}
                            className="custom-service-link"
                          >
                            {data?.cardTitle}
                          </Link>
                        </div>
                        <div className="custom-service-text">
                          {data?.cardContent.slice(0, 200) + "..."}
                        </div>
                        <div>
                          <Link
                            to={data?.navigationLink}
                            className="cta blogView"
                          >
                            <span className="cta-title blogView-title">
                              Learn More
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
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="main-section-container fourth-main-section">
          <div className="container-box">
            <div className="third-section-container">
              <div className="text-center mb-3">
                <h4 className="section-main-title">Industries We Serve</h4>
                <p>
                  With Our support and vertical technical expertise we serve top
                  industries
                </p>
              </div>
              <div className="industry-container">
                <div className="d-flex industry-box">
                  <div className="industriesBox">
                    <p>Manufacturing</p>
                    <div className="industriesBoxIconbg">
                      <div className="industry-icon-box">
                        <Manufacturing className="industry-icons" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex industry-box">
                  <div className="industriesBox">
                    <p>Healthcare</p>
                    <div className="industriesBoxIconbg">
                      <div className="industry-icon-box">
                        <Healthcare className="industry-icons" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex industry-box">
                  <div className="industriesBox">
                    <p>Automobile</p>
                    <div className="industriesBoxIconbg">
                      <div className="industry-icon-box">
                        <AUtomobile className="industry-icons" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex industry-box">
                  <div className="industriesBox">
                    <p>Banking</p>
                    <div className="industriesBoxIconbg">
                      <div className="industry-icon-box">
                        <Banking className="industry-icons" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex industry-box">
                  <div className="industriesBox">
                    <p>Construction</p>
                    <div className="industriesBoxIconbg">
                      <div className="industry-icon-box">
                        <RealEstate className="industry-icons" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex industry-box">
                  <div className="industriesBox">
                    <p>Financial</p>
                    <div className="industriesBoxIconbg">
                      <div className="industry-icon-box">
                        <FinanceIcon className="industry-icons" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex industry-box">
                  <div className="industriesBox">
                    <p>Insurance</p>
                    <div className="industriesBoxIconbg">
                      <div className="industry-icon-box">
                        <Insurance className="industry-icons" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex industry-box">
                  <div className="industriesBox">
                    <p>Capital Markets</p>
                    <div className="industriesBoxIconbg">
                      <div className="industry-icon-box">
                        <OurRecentStory className="industry-icons" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-section-container third-main-section">
          <img src={star} alt="star" className="starImg" />
          <img src={star} alt="star" className="starImg2" />
          <div className="container-box">
            <div className="blog-section-container desktop-blog-section">
              <button
                className={`${
                  slideIndex == 0 ? "disabled-blog-button" : ""
                } left-side-blog-button side-blog-button`}
                onClick={prevSlide}
              >
                <Arrow className="blog-arrow" />
              </button>
              <button
                className={`${
                  slideIndex == 1 ? "disabled-blog-button" : ""
                } right-side-blog-button side-blog-button`}
                onClick={nextSlide}
              >
                <Arrow className="blog-arrow" />
              </button>
              <div className="third-section-container">
                <div className="text-center mb-3">
                  <h4 className="section-main-title">Our Recent Story</h4>
                  <p>
                    About customer success story, Unique Projects help customer
                    to compete in market, Teksible Stories
                  </p>
                </div>
                <div className="our-stories-container">
                  {blogData?.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className={`${
                          isVisibleBlog(index) ? "active-anim" : "slide"
                        } our-stories-box`}
                      >
                        <div className="blogMain">
                          <img
                            className="blogImg"
                            src={data?.image}
                            alt="img"
                          />
                          <div className="blogText">
                            <p>{data?.date}</p>
                            <h5>{data?.title}</h5>
                            <div className="blog-content-div">
                              {data?.detail.slice(0, 200) + "..."}
                            </div>
                            <Link to={data?.link} className="cta blogView">
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
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mobile-blog-container">
              <div className="third-section-container">
                <div className="mobile-container">
                  {blogData?.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="our-stories-box mobile-stories-box"
                      >
                        <div className="blogMain">
                          <img
                            className="blogImg"
                            src={data?.image}
                            alt="img"
                          />
                          <div className="blogText">
                            <p>{data?.date}</p>
                            <h5>{data?.title}</h5>
                            <div className="blog-content-div">
                              {data?.detail.slice(0, 200) + "..."}
                            </div>
                            <Link to={data?.link} className="cta blogView">
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
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-section-container newslatter newsletter-main">
          <div className="container-box">
            <div className="third-section-container newsletter-main-section">
              <div className="newsmain">
                <h6 className="section-main-title">
                  Book your Interested Session
                </h6>
                <div className="newsInput">
                  <input type="text" placeholder="Enter you business email" />
                  <button>Sign Up</button>
                </div>
                <p>
                  Book a free session with our Technical Expertise on your
                  Interested Technology what we serve
                </p>
              </div>
              <div className="newsImg">
                <img
                  className=""
                  src="https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
