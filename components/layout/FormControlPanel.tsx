"use client";

import React from "react";

import Breadcrumb from "../Breadcrumb";
import clsx from "clsx";
import Dropdown from "../Dropdown";
import MySelectBox from "./MySelectBox";
import { FaCog, FaPrint } from "react-icons/fa";
import Button from "../Button";
import CPPager from "../CPPager";

type FormControlPanelProps = {
  id: string;
  title: string;
};
const FormControlPanel = ({ id, title }: FormControlPanelProps) => {
  return (
    // control_panel
    <div className="flex flex-col bg-white w-screen border-b border-b-[#dee2e6] border-solid z-[99] [&>div]:min-h-[33px] py-2 px-4">
      {/* cp top */}
      <div className="flex">
        <div
          className={clsx(
            "w-full md:w-[50%]", // o_cp_top_left
            "flex flex-grow items-center"
          )}
        >
          <Breadcrumb title={title}/>
        </div>
        {/* o_cp_bottom_right */}
        <div
          className={clsx(
            " flex flex-wrap", // o_cp_bottom_right
            // " w-full md:w-[50%]", // o_cp_bottom_right
            "md:gap-x-4 flex-shrink-0 w-auto justify-between items-center"
          )}
        >
          <div className="flex">
          <MySelectBox Icon={FaPrint} title="Print" menu={[{ name: 'Print Badge' }]} />
          <MySelectBox Icon={FaCog} title="Actions" menu={[{ name: 'Archive' }, { name: 'Duplicate' }, { name: 'Delete' }, { name: 'Create User' }]} />
          </div>
          <CPPager />
          <Button color="primary" outline={true}>{"New"}</Button>
        </div>
      </div>
    </div>
  );
};

export default FormControlPanel;
