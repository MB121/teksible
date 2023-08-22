import React from "react";
import HomeImage from "../../../assets/images/home-illu.gif";
const About = () => {
  return (
    <>
      <div>
        <div className="main-section-container third-main-section main-herder-section">
          <div className="container-box">
            <div className="third-section-container">
              <div className="text-center mb-3">
                <h4 className="section-main-title main-herder-text">
                  <span>About</span> Us
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="main-section-container pb-5 second-main-section">
          <div className="ring-orange ring-orange2"></div>
          <div className="black-orange black-orange2"></div>
          <div className="container-box">
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
                </div>
              </div>
            </div>
            <div className="second-section-container aboutu-bottom">
              <div>
                <h4 className="section-main-title main-herder-text">
                  Our <span>History</span>
                </h4>
                <p>
                  Whether you need help with designing and implementing a new IT
                  infrastructure, upgrading your data networking capabilities,
                  or improving your information security posture, Teksible has
                  the expertise and resources to help. We are dedicated to
                  staying at the forefront of the latest technological
                  advancements, and we are constantly exploring new ways to help
                  our clients stay ahead of the competition.
                </p>
              </div>
              <div>
                <h4 className="section-main-title main-herder-text">
                  Our <span>Mission</span>
                </h4>
                <p>
                  We believe that building strong relationships with our clients
                  is key to our success. We take the time to understand your
                  business and IT goals and work with you to develop a tailored
                  solution that meets your needs and budget. We believe in
                  transparency and honesty and will always keep you informed
                  about the progress of your project.
                </p>
              </div>
              <div>
                <h4 className="section-main-title main-herder-text">
                  Who <span>We Are</span>
                </h4>
                <p>
                  Our mission is to provide our clients with the highest quality
                  technology solutions that enable them to achieve their
                  business objectives. We strive to be a trusted partner and
                  advisor, and to build long-lasting relationships with our
                  clients based on mutual trust and respect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
