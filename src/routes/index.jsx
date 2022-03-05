import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeView from "../views/HomeView";
import ProfileView from "../views/ProfileView";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="/me" element={<ProfileView />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
