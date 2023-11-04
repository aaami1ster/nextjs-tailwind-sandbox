"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const actions = [
  { id: 1, label: "Profile", route: "/users/profile" },
  { id: 2, label: "Transactions", route: "/users/transactions" },
  { id: 3, label: "Log Out", route: "/users/logout" },
];
type Props = {};

const UserAreaSelectBox = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 cursor-pointer"
        >
          <span className="border-2 border-blue-500 p-1 rounded-lg">
            Abdalla Misbah
          </span>
        </div>
        <div
          className={`flex flex-col bg-sky-100 w-40 my-2 rounded-lg transition-all duration-200 overflow-hidden ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
          } absolute top-12 right-0`}
        >
          {actions.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setOpen(false);
              }}
              className={`flex justify-start items-center gap-x-2 px-2 py-1 hover:bg-sky-300 cursor-pointer`}
            >
              {/* <AiOutlineCheck className={`text-sky-300`} /> */}
              <Link href={item.route}>{item.label}</Link>
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

export default UserAreaSelectBox;
