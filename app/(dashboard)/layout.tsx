"use client";

import React, { useContext } from "react";
import MenuContextProvider from "@/context/MenuContext";
import AppContextProvider from "@/context/AppContext";
import { lusitana } from "@/components/fonts";
import { MenuContext } from "@/context/MenuContext";
import Header from "@/components/layout/Header";

type MainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  const { open, setOpen } = useContext(MenuContext);
  return (
    <body
      className={`${lusitana.className} text-sm font-normal text-[#495057]`}
    >
      <AppContextProvider>
        <MenuContextProvider>
          {/* <MainLayout> */}
            <div className="flex flex-col bg-gray-100 w-screen min-h-screen text-[#495057]">
              <Header />
              {children}
              <div
                onClick={() => setOpen(false)}
                className={`bg-gray-100 opacity-0 fixed inset-0 z-0 ${
                  open ? "block" : "hidden"
                }`}
              ></div>
            </div>
          {/* </MainLayout> */}
        </MenuContextProvider>
      </AppContextProvider>
    </body>
  );
};

export default MainLayout;
