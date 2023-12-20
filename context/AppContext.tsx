"use client";

import { AppItemType, apps } from "@/apps";
import { ReactNode, createContext, useState } from "react";

export const AppContext = createContext<{
  currentApp: AppItemType;
  setCurrentApp: any;
  currentPathname: string;
  setCurrentPathname: any;
}>({
  currentApp: apps[0],
  setCurrentApp: () => {},
  currentPathname: "",
  setCurrentPathname: () => {},
});

type AppContextProviderProps = { children: React.ReactNode };

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [currentApp, setCurrentApp] = useState(apps[0]);
  const [currentPathname, setCurrentPathname] = useState("");

  return (
    <AppContext.Provider
      value={{ currentApp, setCurrentApp, currentPathname, setCurrentPathname }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
