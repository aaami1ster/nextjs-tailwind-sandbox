"use client";
import Link from "next/link";
import React, { useState } from "react";
// import { BiWorld } from "react-icons/bi";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { IoAppsSharp } from "react-icons/io5";

const apps = [
  { id: 1, label: 'Discuss', icon: "fi fi-sa", route: "/" },
  { id: 2, label: 'Employees', icon: "fi fi-gb", route: "/employees" },
  { id: 3, label: 'Apps', icon: "fi fi-gb", route: "/employees" },
  { id: 4, label: 'Settings', icon: "fi fi-gb", route: "/employees" },
];
type Props = {};

const AppsSelectBox = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-content hover:bg-black-rgba items-center relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 cursor-pointer"
        >
          <IoAppsSharp className="text-secondary hover:text-white text-2xl cursor-pointer"/>
        </div>
        <div
          className={`flex flex-col bg-white w-40 transition-all duration-200 overflow-hidden ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
          } absolute top-10 left-0 shadow-lg text-[#495057]`}
        >
          {apps.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setOpen(false);
              }}
              className={`flex justify-center items-center gap-x-2 px-2 py-1 hover:bg-sky-300 cursor-pointer`}
            >
              <div className="flex flex-row min-w-[10rem]">
                <Link href={item.route} className="pl-5 pr-5">{item.label}</Link>
                {/* <span className={item.icon}></span> */}
              </div>
              {/* <Link href={item.route}><span className={item.icon}></span></Link> */}
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`bg-gray-100 opacity-50 fixed inset-0 z-0 ${
          open ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default AppsSelectBox;
