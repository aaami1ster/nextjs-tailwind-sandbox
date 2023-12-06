"use client";

import { createContext, useState } from "react";

export const MenuContext = createContext<{
  open: string | null;
  setOpen: any;
}>({ open: null, setOpen: () => {}});

type MenuContextProviderProps = { children: React.ReactNode };

const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
  const [open, setOpen] = useState(null);

  return <MenuContext.Provider value={{open, setOpen}}>{children}</MenuContext.Provider>
};

export default MenuContextProvider;