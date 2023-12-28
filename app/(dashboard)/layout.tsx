
import React from "react";
import MenuContextProvider from "@/context/MenuContext";
import AppContextProvider from "@/context/AppContext";
import { lusitana } from "@/components/fonts";
import Header from "@/components/layout/Header";
import OutDivDropDownMouseClick from "./OutDivDropDownMouseClick";

type MainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
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
              <OutDivDropDownMouseClick />
            </div>
          {/* </MainLayout> */}
        </MenuContextProvider>
      </AppContextProvider>
    </body>
  );
};

export default MainLayout;
