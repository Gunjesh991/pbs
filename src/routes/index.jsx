import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeView from "../views/HomeView";
import ProfileView from "../views/ProfileView";
import EstimateView from "../views/EstimateView";
import BookView from "../views/BookView";
import PortfolioView from "../views/PortfolioView";
import AdminRoute from "../views/admin";
import Photographers from "../views/admin/Photographers";
import PhotographerList from "../views/admin/Photographers/list";
import Register from "../views/admin/Photographers/register";
import PhotographerListView from "../views/PhotographerListView";
import EditPhotographer from "../views/admin/Photographers/edit";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="/photographers" element={<PhotographerListView />} />
        <Route path="/photographers/:id" element={<ProfileView />} />
        <Route path="/portfolio" element={<PortfolioView />} />
        <Route path="/estimate" element={<EstimateView />} />
        <Route path="/hire" element={<BookView />} />

        {/* admin */}
        <Route path="admin" element={<AdminRoute />}>
          <Route path="photographers" element={<Photographers />}>
            <Route index element={<PhotographerList />} />
            <Route path="edit/:id" element={<EditPhotographer />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
