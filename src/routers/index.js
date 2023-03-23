import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Tours from "../pages/Tours";
import Register from "../pages/Register";
import ThankYou from "../pages/ThankYou";
import ToursDetails from "../pages/ToursDetails";
import SearchResultLists from "../pages/SearchResultList";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<ToursDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultLists />} />
    </Routes>
  );
};

export default Router;
