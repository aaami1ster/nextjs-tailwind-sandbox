"use client";

import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

type ControlPanelProps = {
  children: React.ReactNode;
};
const ControlPanel = () => {
  return (
    <div className="o_control_panel flex flex-col bg-white w-screen">
      {/* cp top */}
      <div className="o_cp_top flex p-2">
        {/* breadcrump */}
        <div className="flex items-center flex-grow basis-0">
          <h1 className={`text-[#6c757d] text-lg`}>Employees</h1>
        </div>

        {/* search */}
        {/* <div className="flex items-center flex-grow basis-0"> */}
        <div className="relative flex flex-1 flex-shrink-0 focus-visible:outline-none">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="peer block w-full border-b border-gray-200 py-[9px] pl-1 text-sm placeholder:text-gray-500 focus-visible:outline-none"
            placeholder={"Search..."}
            onChange={(e) => {
              console.log("changed.");
              // handleSearch(e.target.value);
            }}
            defaultValue={"" /* searchParams.get("query")?.toString() */}
          />
          <HiMagnifyingGlass className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
        {/* </div> */}
      </div>

      {/* cp bottom */}
      <div className="o_cp_bottom flex  p-2">
        <div className="o_cp_bottom_left flex flex-grow basis-0">
          <div
            className="o_cp_buttons d-flex align-items-baseline"
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
        <div className="o_cp_bottom_right flex flex-grow basis-0 justify-between">
          {/* search options */}
          <div
            className="btn-group o_search_options position-static flex gap-2"
            role="search"
          >
            <div className="o-dropdown dropdown o_filter_menu btn-group o-dropdown--no-caret">
              <button
                className="dropdown-toggle btn btn-light"
                tabIndex={0}
                aria-expanded="false"
              >
                <i className="me-1 fa fa-filter"></i>
                <span className="o_dropdown_title">Filters</span>
              </button>
            </div>
            <div className="o-dropdown dropdown o_group_by_menu btn-group o-dropdown--no-caret">
              <button
                className="dropdown-toggle btn btn-light"
                tabIndex={0}
                aria-expanded="false"
              >
                <i className="me-1 oi oi-group"></i>
                <span className="o_dropdown_title">Group By</span>
              </button>
            </div>
            <div className="o-dropdown dropdown o_favorite_menu btn-group o-dropdown--no-caret">
              <button
                className="dropdown-toggle btn btn-light"
                tabIndex={0}
                aria-expanded="false"
              >
                <i className="me-1 fa fa-star"></i>
                <span className="o_dropdown_title">Favorites</span>
              </button>
            </div>
          </div>

          {/* search pagination */}
          <div className="o_cp_pager" role="search">
            <nav
              className="o_pager align-items-center d-flex gap-2"
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
          {/* <nav className="btn-group o_cp_switch_buttons">
            <button
              className="btn btn-light o_switch_view o_kanban oi oi-view-kanban active"
              data-tooltip="Kanban"
            ></button>
            <button
              className="btn btn-light o_switch_view o_list oi oi-view-list"
              data-tooltip="List"
              title=""
            ></button>
            <button
              className="btn btn-light o_switch_view o_activity fa fa-clock-o"
              data-tooltip="Activity"
            ></button>
          </nav> */}
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
