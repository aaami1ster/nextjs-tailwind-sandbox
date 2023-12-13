import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FaCloudUploadAlt, FaUndo } from "react-icons/fa";

type Props = {
    active?: boolean;
};

const Breadcrumb = ({ active }: Props) => {
  return (
    <ol className="flex text-[18px] min-w-0 flex-wrap bg-white ps">
      <li
        className={clsx(
          " inline-block max-w-full whitespace-nowrap overflow-hidden text-ellipsis align-top",
          "", // breadcrumb-item
          "" // o_back_button
        )}
        data-hotkey="b"
      >
        <Link href="/employees" className={clsx("text-[#66598f]", "")}>
          Employees
        </Link>
      </li>
      <li
        className={clsx(
          " inline-block max-w-full whitespace-nowrap overflow-hidden text-ellipsis align-top",
          "flex items-center",
          "pl-2", // breadcrumb-item
          " before:float-left before:pr-2 before:text-[#6c757d] before:content-['/']",
          { "text-[#6c757d]": active } // "active"
        )}
      >
        <span className="truncate">Eli Lambert</span>

        <div className="o_form_status_indicator md:flex md:ms-1">
          <div className="o_form_status_indicator_buttons flex invisible">
            <button
              type="button"
              className="o_form_button_save btn btn-light py-0"
              data-hotkey="s"
              data-tooltip="Save manually"
              aria-label="Save manually"
            >
              {/* <i className="fa fa-cloud-upload fa-fw"></i> */}
              <FaCloudUploadAlt />
            </button>
            <button
              type="button"
              className="o_form_button_cancel btn btn-light py-0"
              data-hotkey="j"
              data-tooltip="Discard changes"
              aria-label="Discard changes"
            >
              {/* <i className="fa fa-undo fa-fw"></i> */}
              <FaUndo />
            </button>
          </div>
        </div>
      </li>
    </ol>
  );
};

export default Breadcrumb;
