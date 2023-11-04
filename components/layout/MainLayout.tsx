import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";

type MainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <Header />
      <div className="flex justify-start items-start">
        <SideBar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
