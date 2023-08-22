import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "./Components/Common/Loader";
const HomePage = lazy(() => import("./Components/Screen/Home/index"));
const AboutPage = lazy(() => import("./Components/Screen/AboutUs/index"));
const ServicesPage = lazy(() => import("./Components/Screen/Services/index"));
const ManagedService = lazy(() =>
  import("./Components/Screen/Services/ManagedService")
);
const Devops = lazy(() => import("./Components/Screen/Services/DevOps"));
const InfraAsCode = lazy(() =>
  import("./Components/Screen/Services/InfraAsCode")
);
const InfoSecurity = lazy(() =>
  import("./Components/Screen/Services/InfoSecurity")
);
const ITAutomation = lazy(() =>
  import("./Components/Screen/Services/ITAutomation")
);
const NextGenDataVisulization = lazy(() =>
  import("./Components/Screen/Services/NextGenDataVisulization")
);
const ITInfra = lazy(() =>
  import("./Components/Screen/Services/ITInfrastructure")
);
const DataNet = lazy(() =>
  import("./Components/Screen/Services/DataNetworking")
);
const ITAuditing = lazy(() =>
  import("./Components/Screen/Services/ITAuditing")
);
const BlogPage = lazy(() => import("./Components/Screen/Blog/index"));
const ContactPage = lazy(() => import("./Components/Screen/Contact/index"));
const CareerPage = lazy(() => import("./Components/Screen/Career/index"));
const Blog1 = lazy(() => import("./Components/Screen/Blog/Blog1"));
const Blog2 = lazy(() => import("./Components/Screen/Blog/Blog2"));
const Blog3 = lazy(() => import("./Components/Screen/Blog/Blog3"));
const Blog4 = lazy(() => import("./Components/Screen/Blog/Blog4"));
const Blog5 = lazy(() => import("./Components/Screen/Blog/Blog5"));

const AppRoutes = () => {
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname.toString().includes("services")) {
      setCurrentPage("/services");
    } else if (location?.pathname.toString().includes("blog")) {
      setCurrentPage("/blog");
    } else {
      setCurrentPage(location.pathname);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/aboutus"
          element={
            <AboutPage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/services"
          element={
            <ServicesPage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/services/managedservice"
          element={
            <ManagedService
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/services/devops"
          element={
            <Devops currentPage={currentPage} setCurrentPage={setCurrentPage} />
          }
        />
        <Route
          path="/services/cloudtransformation"
          element={
            <InfraAsCode
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/services/nextgendatavisualization"
          element={
            <NextGenDataVisulization
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/services/informationsecurity"
          element={
            <InfoSecurity
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/services/itautomation"
          element={
            <ITAutomation
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/services/itinfrastructure"
          element={
            <ITInfra
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/services/datanetworking"
          element={
            <DataNet
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/services/itauditing"
          element={
            <ITAuditing
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/blog"
          element={
            <BlogPage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/blog/1"
          element={
            <Blog1 currentPage={currentPage} setCurrentPage={setCurrentPage} />
          }
        />
        <Route
          path="/blog/2"
          element={
            <Blog2 currentPage={currentPage} setCurrentPage={setCurrentPage} />
          }
        />
        <Route
          path="/blog/3"
          element={
            <Blog3 currentPage={currentPage} setCurrentPage={setCurrentPage} />
          }
        />
        <Route
          path="/blog/4"
          element={
            <Blog4 currentPage={currentPage} setCurrentPage={setCurrentPage} />
          }
        />
        <Route
          path="/blog/5"
          element={
            <Blog5 currentPage={currentPage} setCurrentPage={setCurrentPage} />
          }
        />
        <Route
          path="/contact"
          element={
            <ContactPage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/career"
          element={
            <CareerPage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="*"
          exact={true}
          component={
            <HomePage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
