import React from "react";
import Router from "../routers";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
    <Header />
    <Router />
    <Footer />
    </>
  );
}

export default Layout;