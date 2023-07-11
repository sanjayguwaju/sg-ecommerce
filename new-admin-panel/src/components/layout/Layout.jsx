import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "250px" }}>
        <Sidebar />
      </div>
      <div style={{ flexGrow: 1 }}>
        <Navbar style={{ backgroundColor: "#333", color: "#fff" }} />
        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;