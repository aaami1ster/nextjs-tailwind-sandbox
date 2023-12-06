"use client";

import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import MySelectBox from "./MySelectBox";

type ControlPanelProps = {
  children: React.ReactNode;
};
const ControlPanel = () => {
  return (
    <div className="flex flex-col bg-white w-screen">
      {/* cp top */}
      <div className="flex p-2">
        {/* breadcrump */}
        <div className="flex items-center flex-grow basis-0">
          <h1 className={`text-[#6c757d] text-lg`}>Employees</h1>
        </div>

        {/* search */}

        <div className="flex items-center flex-grow basis-0">
          <div className="relative flex flex-1 flex-shrink-0 focus-visible:outline-none">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
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
          <div
            className=""
            role="toolbar"
            aria-label="Main actions"
          >
            <button
              type="button"
              className="btn btn-primary o-kanban-button-new bg-primary hover:bg-primary-hover text-white border-primary hover:border-primary-hover font-medium text-base border py-1 px-3 rounded"
              accessKey="c"
              data-bounce-button=""
            >
              NEW
            </button>
          </div>
        </div>
        <div className="flex flex-grow basis-0 justify-between">
          {/* search options */}
          <div className="btn-group o_search_options flex gap-2" role="search">
            <MySelectBox title={"Filters"} menu={[]} />
            <MySelectBox title={"Group By"} menu={[]} />
            <MySelectBox title={"Favorites"} menu={[]} />
          </div>

          {/* search pagination */}
          <div className="" role="search">
            <nav
              className="content-center flex gap-2"
              aria-label="Pager"
            >
              <span className="o_pager_counter">
                <span className="o_pager_value d-inline-block border-bottom border-transparent mb-n1">
                  1-20
                </span>
                <span> / </span>
                <span className="o_pager_limit">20</span>
              </span>
              <span className="btn-group" aria-atomic="true">
                <button
                  type="button"
                  className="fa fa-chevron-left btn btn-secondary o_pager_previous px-2 rounded-start"
                  aria-label="Previous"
                  data-tooltip="Previous"
                  tabIndex={-1}
                  data-hotkey="p"
                  disabled
                ></button>
                <button
                  type="button"
                  className="fa fa-chevron-right btn btn-secondary o_pager_next px-2 rounded-end"
                  aria-label="Next"
                  data-tooltip="Next"
                  tabIndex={-1}
                  data-hotkey="n"
                  disabled
                ></button>
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
