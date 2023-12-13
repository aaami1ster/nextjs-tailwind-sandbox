"use client";

import React from "react";

import Breadcrumb from "../Breadcrumb";
import clsx from "clsx";
import Dropdown from "../Dropdown";
import MySelectBox from "./MySelectBox";
import { FaCog, FaPrint } from "react-icons/fa";
import Button from "../Button";
import CPPager from "../CPPager";

type FormControlPanelProps = {};
const FormControlPanel = (props: FormControlPanelProps) => {
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
          <Breadcrumb />
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
            {/* <Dropdown icon={'fa-print'} title={'Print'}>
              </Dropdown> */}
            {/* <div className="o-dropdown dropdown inline-block o-dropdown--no-caret">
              <button
                className="dropdown-toggle btn btn-light"
                data-hotkey="u"
                tabIndex={0}
                aria-expanded="false"
              >
                <i className="me-md-1 fa fa-cog"></i>
                <span className="o_dropdown_title">Action</span>
              </button>
            </div> */}
          </div>
          <CPPager />
          <Button color="primary" outline={true}>{"New"}</Button>
          {/* <button
            type="button"
            className="bg-primary hover:bg-primary-hover uppercase text-white border-primary hover:border-primary-hover font-medium text-base border py-1 px-3 rounded"

            // className="btn btn-outline-primary o_form_button_create"
            data-hotkey="c"
          >
            New
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FormControlPanel;
