import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeView from "../views/HomeView";
import ProfileView from "../views/ProfileView";
import EstimateView from "../views/EstimateView";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="/me" element={<ProfileView />} />
        <Route path="/estimate" element={<EstimateView />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
