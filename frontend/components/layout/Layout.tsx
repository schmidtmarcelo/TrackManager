import React from "react";
import Sidebar from "./Sidebar";

type LayoutChildren = {
  children: any;
}

const Layout = ({ children }: LayoutChildren) => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="bg-primary flex-1 p-4 text-white  ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
