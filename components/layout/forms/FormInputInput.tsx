import React from "react";
import { FaEnvelope, FaMobile, FaPhone } from "react-icons/fa";
import clsx from "clsx";
import { FieldDefType } from "@/lib/types";

type Props = FieldDefType & {
  id?: string;
  value?: string;
  subject?: string;
  onchange: any;
  className?: string;
};

const FormInputInput = ({ name, value, type, onchange, className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        " ", // o_cell o_wrap_input
        " flex-grow mw576:flex-grow-0 break-words "
      )}
    >
      <div
        // id={name}
        className={clsx(
          "flex self-start w-full mb-[5px]", // o_field_widget
          { " ": type === "email" }, // o_field_email
          { " break-all": type === "tel" } // o_field_phone
        )}
      >
        <div
          className={clsx(
            { " ": type === "tel" }, // o_phone_content
            " inline-flex w-full "
          )}
        >
          <input
            className={clsx(
              " bg-transparent focus-visible:outline-none",
              " border-x-0 border-t-0 border-b border-transparent w-full ",
              " group-hover:border-b-[#ccc] ",
              " py-[2px] px-1 "
            )}
            type={type}
            value={value}
            onChange={onchange}
            name={name}
          />
          {type === "email" && value ? (
            <a
              className={clsx(
                "ms-3 inline-flex items-center",
                "opacity-0 group-hover:opacity-100"
              )}
              href={`mailto:${value}`}
            >
              <FaEnvelope data-tooltip="Send Email" aria-label="Send Email" />
            </a>
          ) : null}
          {type === "tel" && value ? (
            <>
              <a
                className={clsx(
                  "ms-3 inline-flex items-center",
                  " text-[#66598f]", // o_phone_form_link
                  "opacity-0 group-hover:opacity-100 group-focus:opacity-100"
                )}
                href={`tel:${value}`}
              >
                <FaPhone />
                <small className="break-normal text-sm font-medium ms-1">Call</small>
              </a>
              <a
                className={clsx(
                  "ms-3 inline-flex items-center",
                  "text-[#66598f]",
                  "", // o_field_phone_sms
                  "opacity-0 group-hover:opacity-100"
                )}
                title="Send SMS Text Message"
                href={`tel:${value}`}
              >
                {/* <i className="fa fa-mobile"></i> */}
                <FaMobile />
                <small className="break-normal text-sm font-medium ms-1">SMS</small>
              </a>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FormInputInput;
