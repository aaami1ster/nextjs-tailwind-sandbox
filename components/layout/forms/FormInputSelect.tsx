import React, { useState } from "react";
import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa";
import { FieldType, departments, employees, jobPositions } from "@/data";

type Props = FieldType & {
  onchange: any;
};

const FormInputSelect = ({ id, name, value, model, type, onchange }: Props) => {
  const [open, setOpen] = useState(false);
  let list: any[] = [];
  switch (model) {
    case 'Employee':
      list = employees;
      break;
    case 'Department':
      list = departments;
      break;
    case 'JobPosition':
      list = jobPositions;
      break;
    default:
      break;
  }
  return (
    <div
      className={clsx(
        "", // o_cell
        "", // o_wrap_input
        "flex-grow mw576:flex-grow-0 break-words"
      )}
    >
      <div
        id={name}
        className={clsx(
          " flex self-start w-full mb-[5px] ", // o_field_widget
          " flex-col inline-flex" // o_field_many2one
        )}
      >
        {/* o_field_many2one_selection */}
        <div className=" flex w-full">
          {/* o_input_dropdown */}
          <div className=" flex-grow flex-shrink basis-auto relative w-full">
            <div
              className={clsx(
                " ", // o-autocomplete
                "relative" // dropdown
              )}
            >
              <input
                type="text"
                // o-autocomplete--input
                // o_input
                className={clsx(
                  " w-full",
                  "bg-transparent outline-none",
                  "border-x-0 border-t-0 border-b border-transparent w-full",
                  "group-hover:border-[#ccc] focus:show-list",
                  "py-[2px] px-1"
                )}
                value={value}
                onChange={() => console.log("change")}
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
                autoComplete="off"
                id={id}
                placeholder=""
              />
              {/* style="position: fixed; top: 352.195px; left: 606.805px;" */}
              {open ? (
                <ul
                  className={clsx(
                    // " fixed", // style
                    " max-h-52", // "o-autocomplete--dropdown-menu",
                    " absolute z-[1000] min-w-[10rem] py-2 px-0 text-base text-[#495057] text-left bg-white border border-solid border-[#dee2e6] rounded-b-sm shadow", // "dropdown-menu",
                    "", // "ui-widget",
                    " max-h-[50vh] max-w-[600px] overflow-x-hidden overflow-y-auto", // "ui-autocomplete",
                    " ps-2 pe-2"
                  )}
                >
                  {list.map((item) => (
                    <li
                      key={item.id}
                      className={clsx(
                        "hover:bg-black-rgba focus:bg-black-rgba",
                        "", // o-autocomplete--dropdown-item
                        "" // ui-menu-item
                      )}
                    >
                      <a
                        href="#"
                        className={clsx(
                          "dropdown-item",
                          "ui-menu-item-wrapper",
                          "truncate"
                          // "ui-state-active"
                        )}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <a
              role="button"
              // o_dropdown_button
              className={clsx(
                " absolute top-[2px] left-auto bottom-[1px] right-1 pointer-events-none cursor-pointer hover:text-[#66598f]",
                "after:invisible after:group-hover:visible after:w-0 after:h-0 after:inline-block after:border-x-4 after:border-solid after:border-x-transparent after:border-b-0 after:border-t-4 after:border-t-[#71639e] after:align-middle"
              )}
              draggable="false"
            ></a>
          </div>
          <button
            type="button"
            className={clsx(
              " inline-block font-medium leading-[1.5] text-center align-middle rounded-s bg-white", // btn btn-secondary
              "invisible group-hover:visible flex-grow-0 flex-shrink-0 basis-auto p-0 ml-[2px] text-lg text-[#7C7BAD]" // o_external_button
            )}
            tabIndex={-1}
            draggable="false"
            aria-label="Internal link"
            data-tooltip="Internal link"
          >
            <FaArrowRight />
          </button>
        </div>
        <div
          className={clsx(
            "" // o_field_many2one_extra
          )}
        ></div>
      </div>
    </div>
  );
};

export default FormInputSelect;
