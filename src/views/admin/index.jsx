import React from "react";
import { Outlet } from "react-router-dom";

const AdminRoute = () => {
  return (
    <div className="safe" style={{ marginTop: 120, padding: 20 }}>
      <Outlet />
    </div>
  );
};

export default AdminRoute;
