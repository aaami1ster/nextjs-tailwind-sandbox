'use client';

import React, { useContext } from "react";
import Header from "./Header";
import ControlPanel from "./ControlPanel";
import { MenuContext } from "@/context/MenuContext";

type MainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  const { open, setOpen } = useContext(MenuContext);
  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <Header />
      <ControlPanel />
      <div className="flex flex-col justify-start items-start">
        
        <main className="flex-1">{children}</main>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`bg-gray-100 opacity-0 fixed inset-0 z-0 ${
          open ? "block" : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default MainLayout;
