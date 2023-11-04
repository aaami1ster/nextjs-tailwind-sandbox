"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";

import "/node_modules/flag-icons/css/flag-icons.min.css";

const languages = [
  { id: 1, flag: "fi fi-sa", route: "/ar" },
  { id: 2, flag: "fi fi-gb", route: "/en" },
];
type Props = {};

const LanguageSelectBox = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 cursor-pointer"
        >
          <BiWorld className="text-2xl cursor-pointer" />
        </div>
        <div
          className={`flex flex-col bg-sky-100 w-16 rounded-lg transition-all duration-200 overflow-hidden ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
          } absolute top-12 right-8`}
        >
          {languages.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setOpen(false);
              }}
              className={`flex justify-center items-center gap-x-2 px-2 py-1 hover:bg-sky-300 cursor-pointer`}
            >
              {/* <AiOutlineCheck className={`text-sky-300`} /> */}
              <Link href={item.route}><span className={item.flag}></span></Link>
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

export default LanguageSelectBox;
