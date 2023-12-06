"use client";
import { MenuContext } from "@/context/MenuContext";
import Link from "next/link";
import React, { useContext, useState } from "react";

type MenuItemProps = { name: string; to?: string; menu?: MenuItemProps[] };
type Props = {
  title: string;
  menu: MenuItemProps[];
};

const MenuSelectBox = (props: Props) => {
  const { open, setOpen } = useContext(MenuContext);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative z-30">
        <div
          onClick={() => {
            if (!open) {
              return setOpen(props.title);
            }
            if (open === props.title) {
              return setOpen(false);
            } else {
              return setOpen(props.title);
            }
          }}
          className="p-2 cursor-pointer hover:bg-black-rgba"
        >
          {props.title}
        </div>
        <div
          className={`flex flex-col bg-white w-40 rounded-b-sm transition-all duration-200 overflow-hidden ${
            open === props.title ? "opacity-100 h-auto" : "opacity-0 h-0"
          } absolute top-10 left-0  shadow-lg text-[#495057] overflow-scroll`}
        >
          {props.menu.map((item: MenuItemProps, key: number) => {
            if (item.to) {
              return (
                <div
                  key={`${item.name}${key}`}
                  onClick={() => {
                    setOpen(false);
                  }}
                  className={`flex justify-start items-center gap-x-2 px-2 py-1 hover:bg-black-rgba focus:bg-black-rgba cursor-pointer`}
                >
                  <Link className="text-xs" href={item.to}>
                    {item.name}
                  </Link>
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
                  {mItem.to ? (
                    <Link className="text-xs font-sm" href={mItem.to}>
                      {mItem.name}
                    </Link>
                  ) : (
                    <h1 className="font-semibold ms-1" key={key}>
                      {mItem.name}
                    </h1>
                  )}
                </div>
              ));
              return [
                <h1 className="text-[#6c757d] ms-1" key={`${item.name}${key}`}>
                  {item.name}
                </h1>,
                ...list,
              ];
            }
            return (
              <h1 className="text-[#6c757d] ms-1" key={`${item.name}${key}`}>
                {item.name}
              </h1>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuSelectBox;
