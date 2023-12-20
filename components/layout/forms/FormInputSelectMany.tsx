import React from "react";
import { FaMobile, FaPhone } from "react-icons/fa";
import clsx from "clsx";
import { FieldDefType } from "@/lib/types";

type Props = FieldDefType & {
  value?: string;
  onchange: any;
};

const FormInputSelectMany = ({ name, value, type, onchange }: Props) => {
  return (
    <div
      className={
        " " + // o_cell o_wrap_input
        " flex-grow mw576:flex-grow-0 break-words "
      }
    >
      <div
        // id={name}
        className={clsx(
          " flex self-start w-full mb-[5px] ", // o_field_widget
          " ", // o_field_email
          " ", // o_field_phone
        )}
      >
        <div
          className={
            " " + // o_phone_content
            " inline-flex w-full "
          }
        >
          <input
            className={
              " bg-transparent " +
              "border-x-0 border-t-0 border-b border-transparent w-full " +
              "hover:border-[#ccc] " +
              "py-[2px] px-1"
            }
            type={type}
            value={value}
            onChange={onchange}
            name={name}
            defaultValue={""}
          />
          {type === "email" ? (
            <a
              className="ms-3 d-inline-flex align-items-center"
              href={`mailto:${name}`}
            >
              <i
                className="fa fa-envelope"
                data-tooltip="Send Email"
                aria-label="Send Email"
              ></i>
            </a>
          ) : null}
          {type === "tel" ? (
            <>
              <a
                className={
                  " " + // o_phone_form_link
                  "ms-3 inline-flex items-center"
                }
                href={`tel:${value}`}
              >
                {/* <i className="fa fa-phone"></i> */}
                <FaPhone />
                <small className="fw-bold ms-1">Call</small>
              </a>
              <a
                className="ms-3 d-inline-flex align-items-center o_field_phone_sms"
                title="Send SMS Text Message"
                href={`tel:${value}`}
              >
                {/* <i className="fa fa-mobile"></i> */}
                <FaMobile />
                <small className="fw-bold ms-1">SMS</small>
              </a>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FormInputSelectMany;
