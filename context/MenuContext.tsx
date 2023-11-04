"use client";

import { ReactNode, createContext, useState } from "react";

export const MenuContext = createContext({ open: false, toggle: () => {}});

type MenuContextProviderProps = { children: React.ReactNode };

const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    console.log({ open: !open });
    setOpen((prev) => !prev);
  }

  return <MenuContext.Provider value={{open, toggle}}>{children}</MenuContext.Provider>
};

export default MenuContextProvider;