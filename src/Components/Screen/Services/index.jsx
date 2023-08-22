import React from "react";
import Layout from "../../Common/Layout";
import Services from "./Services";

const ServicesPage = ({  currentPage, setCurrentPage }) => {
  return (
    <>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <Services />
      </Layout>
    </>
  );
};

export default ServicesPage;