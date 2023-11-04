"use client";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { MenuContext } from "@/context/MenuContext";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const { toggle } = useContext(MenuContext);
  return (
    <div className="bg-white flex justify-between items-center px-4 h-12 mb-4">
      <div>Brand</div>
      <div>
        <div className="flex justify-center gap-4">
          <BiWorld className="cursor-pointer" />
          <FaBars  onClick={toggle} className="lg:hidden cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
