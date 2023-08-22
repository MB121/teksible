import React from "react";
import Layout from "../../Common/Layout";
import Contact from "./Contact";

const ContactPage = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <Contact />
      </Layout>
    </>
  );
};

export default ContactPage;
