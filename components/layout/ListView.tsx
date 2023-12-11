"use client";

import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { employees } from "@/employees";
type Props = {};

const ListView = (props: Props) => {
  const { replace } = useRouter();
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
                <input type="checkbox" className="" id="checkbox-comp-1" />
                <label className="" htmlFor="checkbox-comp-1"></label>
              </div>
            </th>
            {[
              "Employee Name",
              "Work Phone",
              "Work Email",
              "Activities",
              "Next Activity",
              "Department",
              "Job Positin",
              "Manager",
            ].map((title) => {
              return (
                <th
                  key={title}
                  data-tooltip-delay="1000"
                  tabIndex={-1}
                  className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
                >
                  <div className="flex">
                    <span className="block min-w-0 truncate flex-grow-1  pe-2">
                      {title}
                    </span>
                    <FaAngleDown className="opacity-0 group-hover:opacity-75" />
                  </div>
                  <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
                </th>
              );
            })}

            {/* <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1  pe-2">
                  Employee Name
                </span>
                <FaAngleDown className="opacity-0 group-hover:opacity-75" />
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th> */}
            {/* <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1  pe-2">
                  Work Phone
                </span>
                <FaAngleDown className="opacity-0 group-hover:opacity-75" />
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th>
            <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1  pe-2">
                  Work Email
                </span>
                <FaAngleDown className="opacity-0 group-hover:opacity-75" />
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th>
            <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1 pe-2">
                  Activities
                </span>
                <FaAngleDown className="opacity-0 group-hover:opacity-75" />
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th>
            <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1  pe-2">
                  Next Activity Deadline
                </span>
                <FaAngleDown className="opacity-0 group-hover:opacity-75" />
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th>
            <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1  pe-2">
                  Department
                </span>
                <FaAngleDown className="opacity-0 group-hover:opacity-75" />
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th>
            <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1  pe-2">
                  Job Position
                </span>
                <FaAngleDown className="opacity-0 group-hover:opacity-75" />
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th>
            <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1  pe-2">
                  Manager
                </span>
                <FaAngleDown className="opacity-0 group-hover:opacity-75" />
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th> */}
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
          {employees.map((employee, index) => {
            return (
              <tr
                key={employee.id}
                className=" border-b-[1px] cursor-pointer hover:bg-[#0000000e]"
                data-id={`datapoint_${index}`}
                onClick={() => {
                  replace(`/employees/${employee.id}`);
                }}
              >
                <td className=" pl-4 w-10" tabIndex={-1}>
                  <div className="">
                    <input
                      type="checkbox"
                      className="cursor-pointer"
                      id={`checkbox-comp-${index}`}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`checkbox-comp-${index}`}
                    ></label>
                  </div>
                </td>
                <td
                  className="truncate max-w-[94px] w-[94px]"
                  data-tooltip-delay="1000"
                  tabIndex={-1}
                  data-tooltip={employee.name}
                  title=""
                >
                  {employee.name}
                </td>
                <td
                  className="truncate max-w-[94px] w-[94px]"
                  data-tooltip-delay="1000"
                  tabIndex={-1}
                  data-tooltip={employee.workPhone}
                  title=""
                >
                  {employee.workPhone}
                </td>
                <td
                  className="truncate max-w-[94px] w-[94px]"
                  data-tooltip-delay="1000"
                  tabIndex={-1}
                  data-tooltip={employee.workEmail}
                >
                  {employee.workEmail}
                </td>
                <td
                  className="truncate max-w-[94px] w-[94px]"
                  data-tooltip-delay="1000"
                  tabIndex={-1}
                  data-tooltip="No records"
                >
                  <div className="o_field_widget o_field_list_activity">
                    <a className="o_ActivityButtonView" role="button">
                      <i
                        className="o_ActivityButtonView_icon fa fa-fw fa-lg text-muted fa-clock-o"
                        role="img"
                      ></i>
                    </a>
                    <span className="o_ListFieldActivityView_summary"></span>
                  </div>
                </td>
                <td
                  className="truncate max-w-[94px] w-[94px]"
                  data-tooltip-delay="1000"
                  tabIndex={-1}
                >
                  <div className="o_field_widget o_readonly_modifier o_field_empty o_field_remaining_days">
                    <div title=""></div>
                  </div>
                </td>
                <td
                  className="truncate max-w-[94px] w-[94px]"
                  data-tooltip-delay="1000"
                  tabIndex={-1}
                  data-tooltip={employee.department}
                >
                  {employee.department}
                </td>
                <td
                  className="truncate max-w-[94px] w-[94px]"
                  data-tooltip-delay="1000"
                  tabIndex={-1}
                  data-tooltip={employee.jobPosition}
                >
                  {employee.jobPosition}
                </td>
                <td
                  className="truncate max-w-[94px] w-[94px]"
                  data-tooltip-delay="1000"
                  tabIndex={-1}
                  data-tooltip={employee.manager}
                >
                  {employee.manager}
                </td>
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

export default ListView;
