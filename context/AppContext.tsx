"use client";

import { AppItemType, apps } from "@/apps";
import { ReactNode, createContext, useState } from "react";

export const AppContext = createContext<{
  currentApp: AppItemType;
  setCurrentApp: any;
  pathname: string;
  setPathname: any;
}>({
  currentApp: apps[0],
  setCurrentApp: () => {},
  pathname: "",
  setPathname: () => {},
});

type AppContextProviderProps = { children: React.ReactNode };

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [currentApp, setCurrentApp] = useState(apps[0]);
  const [pathname, setPathname] = useState("");

  return (
    <AppContext.Provider
      value={{ currentApp, setCurrentApp, pathname, setPathname }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
