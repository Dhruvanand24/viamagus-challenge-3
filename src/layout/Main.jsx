import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex flex-col w-screen p-4">
      <Outlet />
    </div>
  );
};

export default Main;
