import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Homepage/Global/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <nav>
          <h1>Nav bard</h1>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
