import React from "react";
import Layout from "../../Common/Layout";
import Career from "./Career";

const ContactPage = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <Career />
      </Layout>
    </>
  );
};

export default ContactPage;
