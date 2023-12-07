import React from "react";
import { FaAngleUp } from "react-icons/fa";

type Props = {};

const ListView = (props: Props) => {
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
                  id="checkbox-comp-1"
                />
                <label
                  className=""
                  htmlFor="checkbox-comp-1"
                ></label>
              </div>
            </th>
            <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              data-name="name"
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1  pe-2">
                  Employee Name
                </span>
                <FaAngleUp className="opacity-0 group-hover:opacity-75"/>
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th>
            <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              data-name="work_phone"
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1  pe-2">
                  Work Phone
                </span>
                <FaAngleUp className="opacity-0 group-hover:opacity-75"/>
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th>
            <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              data-name="work_email"
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1  pe-2">
                  Work Email
                </span>
                <FaAngleUp className="opacity-0 group-hover:opacity-75"/>
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th>
            <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              data-name="activity_ids"
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1 pe-2">
                  Activities
                </span>
                <FaAngleUp className="opacity-0 group-hover:opacity-75"/>
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th>
            <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              data-name="activity_date_deadline"
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1  pe-2">
                  Next Activity Deadline
                </span>
                <FaAngleUp className="opacity-0 group-hover:opacity-75"/>
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th>
            <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              data-name="department_id"
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1  pe-2">
                  Department
                </span>
                <FaAngleUp className="opacity-0 group-hover:opacity-75"/>
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th>
            <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              data-name="job_id"
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1  pe-2">
                  Job Position
                </span>
                <FaAngleUp className="opacity-0 group-hover:opacity-75"/>
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th>
            <th
              data-tooltip-delay="1000"
              tabIndex={-1}
              data-name="parent_id"
              className="group px-1 py-3 align-middle relative cursor-pointer max-w-[94px] w-[94px] border-l border-solid border-l-[#dee2e6]"
            >
              <div className="flex">
                <span className="block min-w-0 truncate flex-grow-1  pe-2">
                  Manager
                </span>
                <FaAngleUp className="opacity-0 group-hover:opacity-75"/>
              </div>
              <span className="cursor-col-resize absolute top-0 end-0 bottom-0 ps-1 bg-[#00000040] opacity-0 hover:opacity-50 z-1"></span>
            </th>
            {/* <th
              className="w-[32px] min-w-[32px] o_list_controller o_list_actions_header"
            >
              <div className="o-dropdown dropdown o_optional_columns_dropdown text-center border-top-0 o-dropdown--no-caret">
                <button
                  className="dropdown-toggle btn p-0"
                  tabIndex={-1}
                  aria-expanded="false"
                >
                  <i className="o_optional_columns_dropdown_toggle oi oi-fw oi-settings-adjust"></i>
                </button>
              </div>
            </th> */}
          </tr>
        </thead>
        <tbody></tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default ListView;
