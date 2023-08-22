import React from "react";
import Layout from "../../Common/Layout";
import About from "./About";

const AboutPage = ({  currentPage, setCurrentPage }) => {
  return (
    <>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <About />
      </Layout>
    </>
  );
};

export default AboutPage;