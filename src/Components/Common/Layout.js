import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, currentPage, setCurrentPage }) => {
  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
