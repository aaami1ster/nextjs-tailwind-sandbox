"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { FaAddressCard, FaCircle, FaPencilAlt, FaTrash } from "react-icons/fa";
import FormInput from "@/components/layout/forms/FormInput";
import FormGroup from "@/components/layout/forms/FormGroup";
import FormInnerGroup from "@/components/layout/forms/FormInnerGroup";
import Button from "@/components/Button";

type Props = { data: any };

const EmployeeFormView = ({ data }: Props) => {
  if (!data) {
    notFound();
  }
  return (
    <div className="flex flex-col">
      {/* form page */}
      <div className="relative flex-grow flex-shrink-0 basis-auto bg-[#f8f9fa] border-b border-solid border-b-[#dee2e6]">
        {/* status bar */}
        <div className="bg-white relative flex justify-between items-center border-b pl-4">
          <div className="o_statusbar_buttons flex align-items-center content-around flex-wrap">
            <Button>{"Launch Plan"}</Button>
          </div>
        </div>
        {/* form sheet */}
        <div
          className={
            "flex flex-col relative bg-white " +
            "border border-solid border-[#dee2e6] " +
            "shadow-lg w-full " +
            "p-6 " +
            "mx-auto " +
            "sm:px-8 sm:mx-auto sm:my-3 sm:max-w-[600px] " + // 640px
            "md:px-8 md:mx-auto md:my-3 md:max-w-[720px] " + // 768px
            "lg:px-8 lg:mx-auto lg:my-3 lg:max-w-[1000px] " + // 1024px
            "mw1200:px-8 mw1200:mx-auto mw1200:my-3 mw1200:max-w-[1140px] " + // 1200px
            "xl:px-8 xl:mx-auto xl:my-3 xl:max-w-[1250px] " + // 1280px
            "mw1400:px-8 mw1400:mx-auto mw1400:my-3 mw1400:max-w-[1320px] " // 1400px
          }
        >
          {/* button box */}
          <div className="mb-6 -mt-6 -ml-4 -mr-4 shadow-sm relative text-end">
            {/* <Button color="secondary" className="">
              <div className="flex gap-2">
                <FaAddressCard size={32} className="h-[44px] md:w-[20%]" />
                <div className="inline-block align-middle font-normal max-w-[70%] pr-[6px] leading-5">
                  <span className="leading-4">
                    <div className="o_field_widget o_readonly_modifier o_field_integer">
                      <span>2</span>
                    </div>
                  </span>
                  <span className="o_stat_text">Contacts</span>
                </div>
              </div>
            </Button> */}
            <button
              className={
                "h-[44px] md:w-[20%] bg-white " +
                "border-b border-solid border-b-[#dee2e6] " +
                "border-s border-s-[#dee2e6] " +
                "py-[0.375rem] px-3 " +
                "mb-0 " +
                "inline-block align-middle " +
                "flex-shrink-0 " +
                "text-start whitespace-nowrap " +
                "capitalize " +
                ""
              }
            >
              <div className="flex gap-2">
                <FaAddressCard size={32} className="" />
                <div className="inline-block align-middle font-normal max-w-[70%] pr-[6px] leading-5">
                  <span className="leading-4">
                    <div className="o_field_widget o_readonly_modifier o_field_integer">
                      <span>2</span>
                    </div>
                  </span>
                  <span className="o_stat_text">Contacts</span>
                </div>
              </div>
            </button>
          </div>

          {/* avatar */}
          <div className="flex items-start absolute top-[60px] right-[10px]">
            <div className="relative m-0">
              <div className="inline-block relative group">
                <div
                  aria-atomic="true"
                  className="flex justify-between absolute w-full bottom-0 opacity-0 group-hover:opacity-100"
                >
                  <span className="contents">
                    <button
                      className=" inline-block font-medium leading-6 border-0 rounded-[50%] m-1 p-1 w-[26px] h-[26px] cursor-pointer text-[#495057] bg-white"
                      data-tooltip="Edit"
                      aria-label="Edit"
                    >
                      <FaPencilAlt className=" text-center w-5" />
                    </button>
                  </span>
                  <button
                    className="inline-block font-medium leading-6 border-0 rounded-[50%] m-1 p-1 w-[26px] h-[26px] cursor-pointer text-center align-middle text-[#495057] bg-white"
                    data-tooltip="Clear"
                    aria-label="Clear"
                  >
                    <FaTrash className=" text-center w-4" />
                  </button>
                  <input id={'image'} type="file" className="hidden" accept="image/*" onChange={() => console.log('change...')}/>
                </div>
                <Image
                  width={90}
                  height={90}
                  className="img img-fluid max-w-[90px] max-h-[90px] align-top border border-solid border-[#dee2e6] h-auto"
                  alt="Binary file"
                  src={
                    data?.imageUrl ? data?.imageUrl : "/placehorder.png"
                  }
                />
              </div>
            </div>
            <div
              id="hr_presence_status"
              className={
                "flex items-end " +
                "absolute -top-[5px] -right-[5px] rounded-[50%] bg-white h-4 w-4 "
              }
            >
              {/* <small
                role="img"
                className="fa fa-fw fa-circle text-warning o_button_icon hr_presence"
                aria-label="To define"
                title="To define"
              /> */}
              <FaCircle
                className={
                  "text-center text-[#ffac00] " + // text-warning
                  "" + // o_button_icon
                  "" + // hr_presence
                  "align-middle"
                }
              />
            </div>
          </div>

          {/* title */}
          <div className="max-w-[75%] text-[#212529]">
            <h1
              className={
                "flex flex-row min-h-[55px] w-full leading-5 text-[1.1vw] font-medium "
              }
            >
              {/* <span className="me-2">
                <div className="o_widget o_widget_hr_employee_chat"></div>
              </span> */}
              {/* o_field_widget o_required_modifier o_field_char */}
              <div className={" text-[2.6rem] mb-[5px] w-full"}>
                <input
                  // o_input
                  className={
                    " bg-transparent w-full" +
                    " py-[2px] px-1 " +
                    "border-x-0 border-t-0 border-b border-transparent hover:border-[#71639e] "
                  }
                  id="name"
                  type="text"
                  autoComplete="off"
                  placeholder="Employee's Name"
                  value={data?.name}
                  onChange={() => console.log('change...')}
                />
              </div>
            </h1>
            <h2 className=" min-h-[42px] text-base/[1.2]">
              <div className="mb-[5px] inline-block w-full">
                <input
                  id={'jobPositin'}
                  className={
                    " bg-transparent w-full " +
                    " border-x-0 border-t-0 border-b border-transparent  " +
                    " hover:border-[#ccc] " +
                    " py-[2px] px-1 "
                  }
                  type="text"
                  autoComplete="off"
                  placeholder="Job Position"
                  value={data?.jobPosition}
                  onChange={() => console.log('change...')}
                />
              </div>
            </h2>

            {/* tags */}
            <div
              // o_field_widget o_field_many2many_tags
              className=" mb-[5px]"
            >
              <div className="o_field_tags d-inline-flex flex-wrap o_tags_input o_input">
                <div className="o_field_many2many_selection d-inline-flex w-full">
                  <div className="o_input_dropdown">
                    <div className="o-autoComplete dropdown">
                      <input
                        type="text"
                        // className="o-autoComplete--input o_input"
                        className={
                          " bg-transparent " +
                          "border-x-0 border-t-0 border-b border-transparent w-full " +
                          "hover:border-[#ccc] " +
                          "py-[2px] px-1"
                        }
                        autoComplete="off"
                        id="category_ids"
                        placeholder="Tags"
                        onChange={() => console.log('change...')}
                      />
                    </div>
                    <a
                      role="button"
                      className="o_dropdown_button"
                      draggable="false"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* group */}
          <FormGroup>
            <FormInnerGroup>
              <FormInput
                name={"workMobile"}
                label={"Work Mobile"}
                value={data.workMobile}
                type={"tel"}
                onchange={() => console.log("changed...")}
                className="group"
              />
              <FormInput
                name={"workPhone"}
                label={"Work Phone"}
                value={data.workPhone}
                type={"tel"}
                onchange={() => console.log("changed...")}
                className="group"
              />
              <FormInput
                name={"workEmail"}
                label={"Work Email"}
                value={data.workEmail}
                type={"email"}
                onchange={() => console.log("changed...")}
                className="group"
              />
            </FormInnerGroup>
            <FormInnerGroup>
              <FormInput
                id={"1"}
                name={"department"}
                label={"Department"}
                value={data?.department}
                type={"select"}
                subject={"Department"}
                onchange={() => console.log("changed...")}
                className="group"
              />

              <FormInput
                id={"1"}
                name={"jobPosition"}
                label={"Job Position"}
                value={data?.jobPosition}
                type={"select"}
                subject={"JobPosition"}
                onchange={() => console.log("changed...")}
                className="group"
              />

              <FormInput
                id={"1"}
                name={"manager"}
                label={"Manager"}
                value={data?.manager}
                type={"select"}
                subject={"Employee"}
                onchange={() => console.log("changed...")}
                className="group"
              />
              <FormInput
                id={"1"}
                name={"coach"}
                label={"Coach"}
                info={
                  '{"field":{"help":"Select the "Employee" who is the coach of this employee.\nThe "Coach" has no specific rights or responsibilities by default."}}'
                }
                value={data?.coach}
                type={"select"}
                subject={"Employee"}
                onchange={() => console.log("changed...")}
                className="group"
              />
            </FormInnerGroup>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default EmployeeFormView;
