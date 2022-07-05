import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
   return (
      <>
         <Topbar />
         <div className="container">
            <Sidebar />
            <Outlet />
         </div>
      </>
   );
};

export default Layout;
