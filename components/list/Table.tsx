"use client";

import React, { useContext } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { AppContext } from "@/context/AppContext";
import { ConfigProps } from "@/lib/types";
type Props = {
  config: ConfigProps;
  data: any[];
};

const Table = ({ config, data }: Props) => {
  // console.log(config.scopedSlots)
  const { currentApp } = useContext(AppContext);
  // console.log({ length: data.length })
  const { push } = useRouter();
  return (
    <div className="max-h-full relative flex" tabIndex={-1}>
      <table className=" table-fixed bg-white border-collapse relative flex-1 border-b">
        <thead className="bg-[#e9ecef] text-[#212529] py-4">
          <tr>
            <th
              className="p-4 py-4 align-middle pe-1 cursor-pointer w-10"
              tabIndex={-1}
            >
              <div className="flex">
                <input
                  type="checkbox"
                  className=""
                  id="checkbox-comp"
                  defaultValue={""}
                />
                <label className="" htmlFor="checkbox-comp-1"></label>
              </div>
            </th>
            {config.fields
              .filter((fld) => fld.listView)
              .map((fld) => {
                return (
                  <th
                    key={fld.name}
                    data-tooltip-delay="1000"
                    tabIndex={-1}
                    className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
                  >
                    <div className="flex">
                      <span className="block min-w-0 truncate flex-grow-1  pe-2">
                        {fld.label}
                      </span>
                      <FaAngleDown className="opacity-0 group-hover:opacity-75" />
                    </div>
                    <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
                  </th>
                );
              })}
            <th className="w-[32px] min-w-[32px] o_list_controller o_list_actions_header">
              <div className="o-dropdown dropdown o_optional_columns_dropdown text-center border-top-0 o-dropdown--no-caret">
                <button
                  className="dropdown-toggle btn p-0"
                  tabIndex={-1}
                  aria-expanded="false"
                >
                  <i className="o_optional_columns_dropdown_toggle oi oi-fw oi-settings-adjust"></i>
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr
                  key={item.id ? item.id : item.code}
                  className=" border-b-[1px] cursor-pointer hover:bg-[#0000000e]"
                  data-id={`datapoint_${index}`}
                  onClick={() => {
                    push(`${currentApp.to}/${item.id ? item.id : item.code}`);
                  }}
                >
                  <td className=" pl-4 w-10" tabIndex={-1}>
                    <div className="">
                      <input
                        type="checkbox"
                        className="cursor-pointer"
                        id={`checkbox-comp-${index}`}
                        defaultValue={""}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`checkbox-comp-${index}`}
                      ></label>
                    </div>
                  </td>
                  {config.fields
                    .filter((fld) => fld.listView)
                    .map((fld) => {
                      return (
                        <td
                          key={fld.name}
                          className="truncate max-w-[94px] w-[94px]"
                          data-tooltip-delay="1000"
                          tabIndex={-1}
                          data-tooltip={item[fld.name]}
                          title=""
                        >
                          {fld.type === "text"
                            ? item[fld.name]
                            : config.scopedSlots && config.scopedSlots[fld.name]
                            ? config.scopedSlots[fld.name](item)
                            : ""}
                        </td>
                      );
                    })}
                  <td tabIndex={-1}></td>
                </tr>
              );
            })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default Table;
