import React from "react";
import star from "../../../assets/images/star.png";
import { ReactComponent as ManagedService } from "../../../assets/svg/managed-service.svg";
import { ReactComponent as Devops } from "../../../assets/svg/devops.svg";
import { ReactComponent as DataNetwork } from "../../../assets/svg/infra-as-code.svg";
import { ReactComponent as Auditing } from "../../../assets/svg/it-auditing.svg";
import { ReactComponent as InfraAsCode } from "../../../assets/svg/data-networking.svg";
import { ReactComponent as SecurityEdge } from "../../../assets/svg/security.svg";
import { ReactComponent as Automation } from "../../../assets/svg/automation.svg";
import { ReactComponent as InfraStructure } from "../../../assets/svg/infrastructure.svg";
import { Link } from "react-router-dom";
const Services = () => {
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
  return (
    <>
      <div>
        <div className="main-section-container third-main-section main-herder-section">
          <div className="container-box">
            <div className="third-section-container">
              <div className="text-center mb-3">
                <h4 className="section-main-title main-herder-text">
                  <span>Services</span> We can <span>Help</span> you with
                </h4>
                <p>
                  Analyze, Customized plan, Implement, Optimize & Post
                  Implementation 24x7 Support
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
              <div className="services-main-container">
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
      </div>
    </>
  );
};

export default Services;
