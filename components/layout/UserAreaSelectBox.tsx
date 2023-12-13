"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { MenuContext } from "@/context/MenuContext";

const actions = [
  { id: 1, label: "Documentation", route: "/" },
  { id: 2, label: "Support", route: "/" },
  { id: 3, label: "Shortcuts", route: "/" },
  { id: 3, label: "break", route: "/" },
  { id: 4, label: "My Profile", route: "/users/profile" },
  { id: 5, label: "My odoo.com account", route: "www.odoo.com" },
  { id: 6, label: "Log Out", route: "/users/logout" },
];
type Props = {};

const UserAreaSelectBox = (props: Props) => {
  const { open, setOpen } = useContext(MenuContext);

  return (
    <>
      <div className="flex hover:bg-black-rgba flex-col justify-center items-center z-30">
        <div
          onClick={() => {
            if (!open) {
              return setOpen('UserAreaMenu');
            }
            if (open === 'UserAreaMenu') {
              return setOpen(false);
            } else {
              return setOpen('UserAreaMenu');
            }
          }}
          className="py-2 px-4 cursor-pointer"
        >
          <div className="flex flex-row items-center justify-between">
            <Image
              src={"/image.jpeg"}
              alt={`'s profile picture`}
              className="mr-2 rounded-full"
              width={32}
              height={32}
            />
            <span className="hidden lg:block">Abdalla Misbah</span>
          </div>
        </div>
        <div
          className={`flex flex-col bg-white w-48 rounded-b-sm transition-all duration-200 overflow-hidden ${
            open == 'UserAreaMenu' ? "opacity-100 h-auto" : "opacity-0 h-0"
          } absolute top-10 right-0 shadow-lg text-[#495057]`}
        >
          {actions.map((item) =>
            item.label === "break" ? (
              <div
                key={`${item.id}$`}
                role="separator"
                className="h-0 my-2 overflow-hidden border-t-slate-300 border-t-[1px]"
              ></div>
            ) : (
              <div
                key={item.id}
                onClick={() => {
                  setOpen(false);
                }}
                className={`flex justify-start items-center gap-x-2 px-2 py-1 hover:bg-black-rgba cursor-pointer`}
              >
                <Link className="text-xs" href={item.route}>{item.label}</Link>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default UserAreaSelectBox;
