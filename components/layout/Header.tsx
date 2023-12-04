"use client";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { IoAppsSharp } from "react-icons/io5";
import { MenuContext } from "@/context/MenuContext";
import UserAreaSelectBox from "./UserAreaSelectBox";
import LanguageSelectBox from "./LanguageSelectBox";
import AppsSelectBox from "./AppsSelectBox";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const { toggle } = useContext(MenuContext);
  return (
    <div className="bg-primary flex justify-between items-center pr-4 h-10 mb-4 text-secondary">
      {/* <button  className="text-secondary text-xl hover:bg-black/8">
        <IoAppsSharp />
      </button> */}
      <div className="flex justify-center items-center">
        <AppsSelectBox />
        <h1 className="text-[1.4rem]">Employees</h1>
      </div>
      <div>
        <div className="flex justify-center items-center gap-3">
          <LanguageSelectBox />
          <FaBars
            onClick={toggle}
            className="lg:hidden cursor-pointer"
          />
          <div>
            <UserAreaSelectBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
