"use client";

import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
  FaChevronLeft,
  FaChevronRight,
  FaLayerGroup,
  FaStar,
} from "react-icons/fa";
import { useRouter } from 'next/navigation';
import FiltersDropDown from "@/components/dropdowns/FiltersDropDown";
import GroupByDropDown from "@/components/dropdowns/GroupByDropDown";
import Button from "../buttons/Button";
import { ConfigProps } from "@/lib/types";
import Breadcrumb from "../Breadcrumb";

type Props = { config: ConfigProps };
const ListControlPanel = ({ config }: Props) => {
  const { push } = useRouter();
  return (
    <div className="flex flex-col bg-white w-screen border-b border-b-[#dee2e6] border-solid z-[99]">
      {/* cp top */}
      <div className="flex p-2">
        {/* breadcrump */}
        <div className="flex items-center flex-grow basis-0">
          <Breadcrumb />
          {/* <h1 className={`text-[#6c757d] text-lg`}>Employees</h1> */}
        </div>

        {/* search */}

        <div className="flex items-center flex-grow basis-0">
          <div className="relative flex flex-1 flex-shrink-0 focus-visible:outline-none">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              id="search"
              className="w-full border-b border-gray-200 py-[9px] pl-1 text-sm placeholder:text-gray-500 focus-visible:outline-none"
              placeholder={"Search..."}
              onChange={(e) => {
                console.log("changed.");
                // handleSearch(e.target.value);
              }}
              defaultValue={""}
            />
            <HiMagnifyingGlass className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>

      {/* cp bottom */}
      <div className="flex  p-2">
        <div className="flex flex-grow basis-0">
          <div className="" role="toolbar" aria-label="Main actions">
            <Button color="primary" onClick={() => push(`${config.path}/create`)}>New</Button>
          </div>
        </div>
        <div className="flex flex-grow basis-0 justify-between">
          {/* search options */}
          <div className="btn-group o_search_options flex gap-2" role="search">
            {/* <MySelectBox title={"Filters"} menu={[]} /> */}
            <FiltersDropDown />
            <GroupByDropDown icon={FaLayerGroup} />
            <GroupByDropDown icon={FaStar} />
          </div>

          {/* search pagination */}
          <div
            className="flex items-center justify-center pl-1 text-center select-none relative"
            role="search"
          >
            <nav className="flex items-center gap-2 end-0" aria-label="Pager">
              <span className="">
                <span className="o_pager_value inline-block border-bottom border-transparent mb-n1">
                  1-20
                </span>
                <span> / </span>
                <span className="o_pager_limit">20</span>
              </span>
              <span
                className="inline-flex relative align-middle text-center"
                aria-atomic="true"
              >
                <FaChevronLeft
                  size={12}
                  type="button"
                  // className="btn btn-secondary o_pager_previous px-2 rounded-start"
                  aria-label="Previous"
                  data-tooltip="Previous"
                  tabIndex={-1}
                  data-hotkey="p"
                  disabled
                />
                <FaChevronRight
                  size={12}
                  type="button"
                  // className="fa fa-chevron-right btn btn-secondary o_pager_next px-2 rounded-end"
                  aria-label="Next"
                  data-tooltip="Next"
                  tabIndex={-1}
                  data-hotkey="n"
                  disabled
                />
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListControlPanel;
