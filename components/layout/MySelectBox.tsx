"use client";
import Link from "next/link";
import React, { useState } from "react";

type MenuItemProps = { name: string; to?: string; menu?: MenuItemProps[]; }
type Props = {
  Icon?: any;
  title: string;
  menu: MenuItemProps[];
};

const MySelectBox = ({ Icon, title, menu }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 cursor-pointer hover:bg-black-rgba flex items-center gap-1"
        >
          {
            Icon ? <Icon /> : null
          }
          <span>{title}</span>
        </div>
        <div
          className={`flex flex-col bg-white w-40 rounded-b-sm transition-all duration-200 overflow-hidden ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
          } absolute top-10 left-0  shadow-lg text-[#495057] overflow-scroll`}
        >
          {menu.map((item: MenuItemProps, key: number) => {
            if (item.to) {
              return (
                <div
                  key={`${item.name}${key}`}
                  onClick={() => {
                    setOpen(false);
                  }}
                  className={`flex justify-start items-center gap-x-2 px-2 py-1 hover:bg-black-rgba focus:bg-black-rgba cursor-pointer`}
                >
                  <Link className="text-xs" href={item.to}>{item.name}</Link>
                </div>
              );
            }
            if (item.menu && item.menu.length) {
              const list = item.menu.map((mItem: any, mKey: number) => (
                <div
                  key={`${mItem.name}${mItem.to ? mItem.to : mKey}`}
                  onClick={() => {
                    setOpen(false);
                  }}
                  className={`flex justify-start items-start gap-x-2 pl-4 py-1 hover:bg-black-rgba focus:bg-black-rgba cursor-pointer`}
                >
                  {mItem.to ? <Link className="text-xs font-sm" href={mItem.to}>{mItem.name}</Link> : <h1 className="font-semibold ms-1" key={key}>{mItem.name}</h1>}
                </div>
              ));
              return [<h1 className="text-[#6c757d] ms-1" key={`${item.name}${key}`}>{item.name}</h1>, ...list];
            }
            return <h1 className="text-[#6c757d] ms-1" key={`${item.name}${key}`}>{item.name}</h1>
          })}
        </div>
      </div>
      {/* <div
        onClick={() => setOpen(false)}
        className={`bg-gray-100 opacity-50 fixed inset-0 z-0 ${
          open ? "block" : "hidden"
        }`}
      ></div> */}
    </>
  );
};

export default MySelectBox;
