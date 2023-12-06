"use client";
import React, { useContext } from "react";
import UserAreaSelectBox from "./UserAreaSelectBox";
import LanguageSelectBox from "./LanguageSelectBox";
import AppsSelectBox from "./AppsSelectBox";
import { AppContext } from "@/context/AppContext";
import MenuSelectBox from "./MenuSelectBox";
import Link from "next/link";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const { currentApp } = useContext(AppContext);
  return (
    <div>
    <div className="bg-primary flex justify-between items-center h-10 text-secondary sticky top-0">
      <div className="flex justify-center items-center gap-3">
        <AppsSelectBox />
        <h1 className="text-[1.4rem]">
          {currentApp ? currentApp.name : "Xxxxxx"}
        </h1>
        <div className="flex justify-content h-10">
          {currentApp.menu.map((item: any, key: number) => {
            if (!item.menu || item.menu.length <= 0) {
              return (
                <Link
                  key={key}
                  href={item.to}
                  className="flex justify-content cursor-pointer hover:bg-black-rgba items-center h-full px-2"
                >
                  {item.name}
                </Link>
              );
            }
            return (
              <MenuSelectBox key={key} title={item.name} menu={item.menu} />
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center gap-3">
          <LanguageSelectBox />
          <UserAreaSelectBox />
          {/* <UserAreaSelectBox2 /> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
