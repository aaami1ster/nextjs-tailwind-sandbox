"use client";
import React, { useContext } from "react";
import Header from "./Header";
import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { SiHelpscout, SiSinglestore } from "react-icons/si";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

import Link from "next/link";
import { MenuContext } from "@/context/MenuContext";
type MainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  const { open } = useContext(MenuContext);
  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <Header />
      <div className="flex justify-start items-start">
        <aside
          className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${
            open ? "w-60 p-4" : "w-0"
          } lg:w-60 lg:p-4`}
        >
          <ul>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-500 rounded-xl p-2">
              <AiOutlineHome className="mr-2" />
              <Link href={"/"}>Home</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-500 hover:cursor-pointer rounded-xl p-2">
              <GrProjects className="mr-2" />
              <h3 className="flex-1">Projects</h3>
              <FaAngleRight />
            </li>
            <li className="w-full flex flex-col justify-start items-center hover:bg-blue-200 hover:text-blue-500 hover:cursor-pointer rounded-xl p-2">
              <div className="w-full flex justify-start items-center">
                <FaCheck className="mr-2" />
                <h3 className="flex-1">Singular</h3>
                <FaAngleRight />
              </div>
              <ul className="ml-8 mt-4">
                <li className="flex justify-center items-center gap-3">
                  <SiSinglestore className="mr-2"/>
                  <Link className="flex-1" href={"/singular/selectbox"}>Select Box</Link>
                </li>
              </ul>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-500 hover:cursor-pointer rounded-xl p-2">
              <FaCheckDouble className="mr-2" />
              <h3 className="flex-1">Complex</h3>
              <FaAngleRight />
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-500 rounded-xl p-2">
              <SiHelpscout className="mr-2" />
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-500 rounded-xl p-2">
              <FiPhoneCall className="mr-2" />
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
