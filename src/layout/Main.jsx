import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex flex-col p-4 bg-emerald-100">
      <Outlet />
    </div>
  );
};

export default Main;
