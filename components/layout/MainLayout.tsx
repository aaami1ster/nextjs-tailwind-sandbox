import React from "react";
import Header from "./Header";
import ControlPanel from "./ControlPanel";

type MainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <Header />
      <div className="flex flex-col justify-start items-start">
        <ControlPanel />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
