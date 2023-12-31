"use client";
// import Link from "next/link";
import React, { useContext, useState } from "react";
// import { BiWorld } from "react-icons/bi";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { IoAppsSharp } from "react-icons/io5";
import { AppContext } from "@/context/AppContext";
import { apps } from "@/apps";
import { MenuContext } from "@/context/MenuContext";
import { useRouter } from "next/navigation";

type Props = {};

const AppsSelectBox = (props: Props) => {
  const { setCurrentApp } = useContext(AppContext);
  const { open, setOpen } = useContext(MenuContext);

  // const pathname = usePathname();
  const { push } = useRouter();

  return (
    <>
      <div className="flex flex-col justify-content hover:bg-black-rgba items-center relative z-30">
        <div
          onClick={() => {
            if (!open) {
              return setOpen("AppsMenu");
            }
            if (open === "AppsMenu") {
              return setOpen(false);
            } else {
              return setOpen("AppsMenu");
            }
          }}
          className="py-2 px-4 cursor-pointer"
        >
          <IoAppsSharp className="text-secondary hover:text-white text-2xl cursor-pointer" />
        </div>
        <div
          className={`flex flex-col bg-white w-40 transition-all duration-200 overflow-hidden ${
            open === "AppsMenu" ? "opacity-100 h-auto" : "opacity-0 h-0"
          } absolute top-10 left-0 shadow-lg text-[#495057]`}
        >
          {apps.map((item) => (
            <div
              key={`${item.name}`}
              onClick={() => {
                setOpen(false);
              }}
              className={`flex justify-center items-center gap-x-2 px-2 py-1 hover:bg-black-rgba focus:bg-black-rgba cursor-pointer`}
            >
              <div
                className="flex flex-row min-w-[10rem]"
                onClick={() => {
                  console.log(item);
                  setCurrentApp(item);
                  push(`${item.to}`);
                }}
              >
                <span className="pl-5 pr-5">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppsSelectBox;
