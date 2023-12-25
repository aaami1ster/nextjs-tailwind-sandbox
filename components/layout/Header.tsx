"use client";
import React, { useContext, useEffect } from "react";
import UserAreaSelectBox from "@/components/dropdowns/UserAreaSelectBox";
import LanguageSelectBox from "@/components/dropdowns/LanguageSelectBox";
import AppsSelectBox from "../dropdowns/AppsSelectBox";
import { AppContext } from "@/context/AppContext";
import MenuSelectBox from "@/components/dropdowns/MenuSelectBox";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { apps } from "@/apps";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const pathname = usePathname();
  // console.log({ pathname })
  const { currentApp, setCurrentApp, setCurrentPathname } =
    useContext(AppContext);

  useEffect(() => {
    const spath = pathname.split("/");
    const tag = spath && spath[1] ? spath[1] : null;
    if (tag) {
      const cApp = apps.find((a) => a.tags.findIndex((t) => t === tag) >= 0);
      // console.log({ cApp });
      if (cApp && cApp.name !== currentApp.name) {
      }
      setCurrentApp(cApp);
      // setCurrentPathname(pathname);
    }
  }, [currentApp.name, pathname, setCurrentApp]);

  return (
    <>
      <div className="bg-primary flex justify-between items-center h-10 text-secondary sticky top-0 z-[9999] ">
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
    </>
  );
};

export default Header;
