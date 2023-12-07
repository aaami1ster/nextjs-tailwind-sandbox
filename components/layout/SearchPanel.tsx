import React from "react";
import { FaUsers } from "react-icons/fa";

type Props = {};

const SearchPanel = (props: Props) => {
  return (
    <div className="w-[200px] bg-white ps-6 pb-12 pe-2 shrink-0 grow-0 border-r border-r-[#dee2e6] border-solid text-[1em]">
      <section className="relative">
        <header className="flex justify-start items-center text-center pt-4 pb-2 uppercase cursor-default">
          <FaUsers color={"#71639e"} size={"16"} className="me-2" />
          <b>Department</b>
        </header>
        <ul className=" rounded">
          <li className="text-[#212529] cursor-pointer border-0 ps-0 pe-2 py-1">
            <header className="flex items-center p-0 border-0 active:bg-[#d4ebfa] active:border-[#d4ebfa]">
              <div className="flex items-center overflow-hidden w-full cursor-pointer mb-0 hover:bg-black-rgba">
                <button className="w-[1.5rem] p-0 flex-shrink-0 text-center"></button>
                <span
                  className="text-[#212529] truncate font-medium"
                  data-tooltip="All"
                >
                  All
                </span>
              </div>
            </header>
          </li>
          <li className="text-[#212529] cursor-pointer border-0 ps-0 pe-2 py-1">
            <header className="flex items-center p-0 border-0 active:bg-[#d4ebfa] active:border-[#d4ebfa] hover:bg-black-rgba">
              <div className="flex items-center overflow-hidden w-full cursor-pointer mb-0 ">
                <button className="w-[1.5rem] p-0 flex-shrink-0 text-center"></button>
                <span
                  className="text-[#212529] truncate"
                  data-tooltip="Administration"
                  title=""
                >
                  Administration
                </span>
              </div>
              <small className="text-[#495057c2] mx-2 font-medium text-sm">
                1
              </small>
            </header>
          </li>
          <li className="text-[#212529] cursor-pointer border-0 ps-0 pe-2 py-1">
            <header className="flex items-center p-0 border-0 active:bg-[#d4ebfa] active:border-[#d4ebfa] hover:bg-black-rgba">
              <div className="flex items-center overflow-hidden w-full cursor-pointer mb-0">
                <button className="w-[1.5rem] p-0 flex-shrink-0 text-center"></button>
                <span
                  className="text-[#212529] truncate"
                  data-tooltip="Management"
                >
                  Management
                </span>
              </div>
              <small className="o_search_panel_counter text-muted mx-2 fw-bold">
                2
              </small>
            </header>
          </li>
          <li className="text-[#212529] cursor-pointer border-0 ps-0 pe-2 py-1">
            <header className="flex items-center p-0 border-0 active:bg-[#d4ebfa] active:border-[#d4ebfa] hover:bg-black-rgba">
              <div className="flex items-center overflow-hidden w-full cursor-pointer mb-0">
                <button className="w-[1.5rem] p-0 flex-shrink-0 text-center"></button>
                <span
                  className="text-[#212529] truncate"
                  data-tooltip="Professional Services"
                >
                  Professional Services
                </span>
              </div>
              <small className="o_search_panel_counter text-muted mx-2 fw-bold">
                5
              </small>
            </header>
          </li>
          <li className="text-[#212529] cursor-pointer border-0 ps-0 pe-2 py-1">
            <header className="flex items-center p-0 border-0 active:bg-[#d4ebfa] active:border-[#d4ebfa] hover:bg-black-rgba text-900 fw-bold">
              <div className="flex items-center overflow-hidden w-full cursor-pointer mb-0">
                <button className="w-[1.5rem] p-0 flex-shrink-0 text-center">
                  <i className="fa fa-caret-right ms-1"></i>
                </button>
                <span
                  className="text-[#212529] truncate"
                  data-tooltip="Research &amp; Development"
                  title=""
                >
                  Research &amp; Development
                </span>
              </div>
              <small className="o_search_panel_counter text-muted mx-2 fw-bold">
                9
              </small>
            </header>
          </li>
          <li className="text-[#212529] cursor-pointer border-0 ps-0 pe-2 py-1">
            <header className="flex items-center p-0 border-0 active:bg-[#d4ebfa] active:border-[#d4ebfa] hover:bg-black-rgba">
              <div className="flex items-center overflow-hidden w-full cursor-pointer mb-0">
                <button className="w-[1.5rem] p-0 flex-shrink-0 text-center"></button>
                <span
                  className="text-[#212529] truncate"
                  data-tooltip="Sales"
                  title=""
                >
                  Sales
                </span>
              </div>
              <small className="o_search_panel_counter text-muted mx-2 fw-bold">
                3
              </small>
            </header>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SearchPanel;
