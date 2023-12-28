"use client";

import React, { useContext } from 'react'
import { MenuContext } from "@/context/MenuContext";

const OutDivDropDownMouseClick = () => {
    const { open, setOpen } = useContext(MenuContext);
  return (
    <div
    onClick={() => setOpen(false)}
    className={`bg-gray-100 opacity-0 fixed inset-0 z-0 ${
      open ? "block" : "hidden"
    }`}
  ></div>
  )
}

export default OutDivDropDownMouseClick