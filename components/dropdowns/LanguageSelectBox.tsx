"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BiWorld } from "react-icons/bi";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { MenuContext } from "@/context/MenuContext";

const languages = [
  { id: 1, flag: "fi fi-sa", route: "/ar" },
  { id: 2, flag: "fi fi-gb", route: "/en" },
];
type Props = {};

const LanguageSelectBox = (props: Props) => {
  const { open, setOpen } = useContext(MenuContext);

  return (
    <>
      <div className="flex flex-col justify-center items-center hover:bg-black-rgba relative z-30">
        <div
          onClick={() => {
            if (!open) {
              return setOpen("LanguageMenu");
            }
            if (open === "LanguageMenu") {
              return setOpen(false);
            } else {
              return setOpen("LanguageMenu");
            }
          }}
          className="p-2 cursor-pointer"
        >
          <BiWorld className="text-secondary text-2xl cursor-pointer" />
        </div>
        <div
          className={`flex flex-col bg-white w-20 rounded-b-sm transition-all duration-200 overflow-hidden ${
            open === "LanguageMenu" ? "opacity-100 h-auto" : "opacity-0 h-0"
          } absolute top-10 right-0  shadow-lg text-[#495057]`}
        >
          {languages.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setOpen(false);
              }}
              className={`flex justify-center items-center gap-x-2 px-2 py-1 hover:bg-black-rgba cursor-pointer`}
            >
              {/* <AiOutlineCheck className={`text-sky-300`} /> */}
              <Link href={item.route}>
                <span className={item.flag}></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LanguageSelectBox;
