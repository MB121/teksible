import React from "react";
import Layout from "../../Common/Layout";
import Home from "./Home";

const HomePage = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <Home />
      </Layout>
    </>
  );
};

export default HomePage;
