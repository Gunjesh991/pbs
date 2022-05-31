import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeView from "../views/HomeView";
import ProfileView from "../views/ProfileView";
import EstimateView from "../views/EstimateView";
import BookView from "../views/BookView";
import PortfolioView from "../views/PortfolioView";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="/me" element={<ProfileView />} />
        <Route path="/portfolio" element={<PortfolioView />} />
        <Route path="/estimate" element={<EstimateView />} />
        <Route path="/hire" element={<BookView />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
