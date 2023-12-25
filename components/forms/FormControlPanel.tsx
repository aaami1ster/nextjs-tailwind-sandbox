"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import clsx from "clsx";
import Breadcrumb from "../Breadcrumb";
import MySelectBox from "../dropdowns/MySelectBox";
import { FaCloudUploadAlt, FaCog, FaPrint, FaUndo } from "react-icons/fa";
import Button from "../buttons/Button";
import CPPager from "../CPPager";
import { ConfigProps } from "@/lib/types";

type FormControlPanelProps = {
  config: ConfigProps;
  id?: string;
  title?: string;
};
const FormControlPanel = ({ config, id, title }: FormControlPanelProps) => {
  const { push } = useRouter();
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
          <Breadcrumb title={title || 'New'} />
          <div
            className={clsx(
              " whitespace-nowrap",
              "", // o_form_status_indicator
              "md:flex md:ms-1"
            )}
          >
            <div
              className={clsx(
                "", // o_form_status_indicator_buttons
                "flex"
              )}
            >
              <button
                type="button"
                className={clsx(
                  "",
                  "", // o_form_button_save
                  "inline-block font-light text-center align-middle cursor-pointer select-none border border-solid border-transparent py-[0.375rem] px-3 text-xs rounded transition", // btn
                  " bg-white border-white text-[#495057]", // btn-light
                  "py-0"
                )}
                data-hotkey="s"
                data-tooltip="Save manually"
                aria-label="Save manually"
                title=""
              >
                {/* <i className="fa fa-cloud-upload fa-fw"></i> */}
                <FaCloudUploadAlt />
              </button>
              <button
                type="button"
                className={clsx(
                  "", //o_form_button_cancel
                  "inline-block font-light text-center align-middle cursor-pointer select-none border border-solid border-transparent py-[0.375rem] px-3 text-xs rounded transition", // btn
                  " bg-white border-white text-[#495057]", // btn-light
                  "py-0"
                )}
                data-hotkey="j"
                data-tooltip="Discard changes"
                aria-label="Discard changes"
                title=""
              >
                {/* <i className="fa fa-undo fa-fw"></i> */}
                <FaUndo />
              </button>
            </div>
          </div>
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
            <MySelectBox
              Icon={FaPrint}
              title="Print"
              menu={[{ name: "Print Badge" }]}
            />
            <MySelectBox
              Icon={FaCog}
              title="Actions"
              menu={[
                { name: "Archive" },
                { name: "Duplicate" },
                { name: "Delete" },
                { name: "Create User" },
              ]}
            />
          </div>
          { id ? <CPPager /> : null}
          <Button color="primary" outline={true} onClick={() => push(`${config.path}/create`)}>
            New
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormControlPanel;
