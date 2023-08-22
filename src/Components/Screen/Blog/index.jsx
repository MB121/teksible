import React from "react";
import Layout from "../../Common/Layout";
import Blog from "./Blog";

const BlogPage = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <Blog />
      </Layout>
    </>
  );
};

export default BlogPage;
