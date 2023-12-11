import { employees } from "@/employees";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { FaAddressCard, FaCircle, FaPencilAlt, FaTrash } from "react-icons/fa";

type Props = { id: string };

const FormView = ({ id }: Props) => {
  const employee = employees.find((e: any) => e.id === id);
  if (!employee) {
    notFound();
  }
  return (
    <div className="flex flex-col">
      {/* form page */}
      <div className="relative flex-grow flex-shrink-0 basis-auto bg-[#f8f9fa] border-b border-solid border-b-[#dee2e6]">
        {/* status bar */}
        <div className="bg-white relative flex justify-between items-center border-b">
          <div className="o_statusbar_buttons flex align-items-center align-content-around flex-wrap">
            <button className="btn btn-secondary">
              <span>Launch Plan</span>
            </button>
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
                  <input type="file" className="hidden" accept="image/*" />
                </div>
                <Image
                  width={90}
                  height={90}
                  className="img img-fluid max-w-[90px] max-h-[90px] align-top border border-solid border-[#dee2e6] h-auto"
                  alt="Binary file"
                  src={employee?.imageUrl}
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
                "flex flex-row min-h-[55px] w-full leading-5 text-[calc(1.35rem + 1.1vw)] font-medium "
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
                  value={employee?.name}
                />
              </div>
            </h1>
            <h2 className=" min-h-[42px] text-base/[1.2]">
              <div className="mb-[5px] inline-block w-full">
                <input
                  className={
                    " bg-transparent " +
                    "border-x-0 border-t-0 border-b border-transparent w-full " +
                    "hover:border-[#ccc] " +
                    "py-[2px] px-1"
                  }
                  type="text"
                  autoComplete="off"
                  placeholder="Job Position"
                  value={employee?.jobPosition}
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
          <div
            className={
              "" + // o_group
              " flex flex-wrap -mx-4" + // row
              " items-start" // align-items-start
            }
          >
            <div
              className={
                " mw576:grid-cols-[fit-content(150px),1fr] gap-y-2 gap-x-4 mb-2" + // o_inner_group
                " grid" + // grid
                " mw992:flex-grow-0  mw992:flex-shrink-0  mw992:basis-auto mw992:w-[50%]" + // col-lg-6
                " flex-shrink-0 w-full px-4" // .row > *
              }
            >
              <div className="flex mw576:contents flex-column mb-4">
                <div className="o_cell o_wrap_label flex-grow mw576:flex-grow-0 w-full break-words">
                  {/* o_form_label */}
                  <label
                    className=" font-medium mb-[5px] text-base inline-block break-words"
                    htmlFor="mobile_phone"
                  >
                    Work Mobile
                  </label>
                </div>
                <div className="o_cell o_wrap_input flex-grow mw576:flex-grow-0 break-words">
                  <div className="o_field_widget o_field_phone">
                    <div className="o_phone_content d-inline-flex w-full">
                      <input
                        className={
                          " bg-transparent " +
                          "border-x-0 border-t-0 border-b border-transparent w-full " +
                          "hover:border-[#ccc] " +
                          "py-[2px] px-1"
                        }
                        type="tel"
                        value={employee?.workMobile}
                        id="mobile_phone"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mw576:contents flex-column mb-4">
                <div className="o_cell o_wrap_label flex-grow mw576:flex-grow-0 w-full break-words">
                  <label
                    className=" font-medium mb-[5px] text-base inline-block break-words"
                    htmlFor="work_phone"
                  >
                    Work Phone
                  </label>
                </div>
                <div className="o_cell o_wrap_input flex-grow mw576:flex-grow-0 break-words">
                  <div id="work_phone" className="o_field_widget o_field_phone">
                    <div className="o_phone_content d-inline-flex w-full">
                      <input
                        className={
                          " bg-transparent " +
                          "border-x-0 border-t-0 border-b border-transparent w-full " +
                          "hover:border-[#ccc] " +
                          "py-[2px] px-1"
                        }
                        type="tel"
                        value={employee?.workPhone}
                        id="work_phone"
                      />
                      <a
                        className="o_phone_form_link ms-3 d-inline-flex align-items-center"
                        href="tel:(644)-169-1352"
                      >
                        <i className="fa fa-phone"></i>
                        <small className="fw-bold ms-1">Call</small>
                      </a>
                      <a
                        className="ms-3 d-inline-flex align-items-center o_field_phone_sms"
                        title="Send SMS Text Message"
                        href="sms:(644)-169-1352"
                      >
                        <i className="fa fa-mobile"></i>
                        <small className="fw-bold ms-1">SMS</small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mw576:contents flex-column mb-4">
                <div className="o_cell o_wrap_label flex-grow mw576:flex-grow-0 w-full break-words">
                  <label
                    className=" font-medium mb-[5px] text-base inline-block break-words"
                    htmlFor="work_email"
                  >
                    Work Email
                  </label>
                </div>
                <div className="o_cell o_wrap_input flex-grow mw576:flex-grow-0 break-words">
                  <div id="work_email" className="o_field_widget o_field_email">
                    <div className="d-inline-flex w-full">
                      <input
                        className={
                          " bg-transparent " +
                          "border-x-0 border-t-0 border-b border-transparent w-full " +
                          "hover:border-[#ccc] " +
                          "py-[2px] px-1"
                        }
                        type="email"
                        value={employee?.workEmail}
                        id="work_email"
                      />
                      <a
                        className="ms-3 d-inline-flex align-items-center"
                        href={`mailto:${employee?.workPhone}`}
                      >
                        <i
                          className="fa fa-envelope"
                          data-tooltip="Send Email"
                          aria-label="Send Email"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                " grid grid-rows-1 grid-cols-12" + // grid
                " mw576:grid-cols-[fit-content(150px),1fr] gap-y-2 gap-x-4 mb-2" + // o_inner_group
                " mw992:flex-grow-0  mw992:flex-shrink-0  mw992:basis-auto mw992:w-[50%]" + // col-lg-6
                " flex-shrink-0 w-full px-4" // .row > *
              }
            >
              <div className="flex mw576:contents flex-column mb-4">
                <div className="o_cell o_wrap_label flex-grow mw576:flex-grow-0 w-full break-words">
                  <label
                    className=" font-medium mb-[5px] text-base inline-block break-words"
                    htmlFor="department_id"
                  >
                    Department
                  </label>
                </div>
                <div className="o_cell o_wrap_input flex-grow mw576:flex-grow-0 break-words">
                  <div
                    id="department_id"
                    className="o_field_widget o_field_many2one"
                  >
                    <div className="o_field_many2one_selection">
                      <div className="o_input_dropdown">
                        <div className="o-autocomplete dropdown">
                          <input
                            type="text"
                            // className="o-autocomplete--input o_input"
                            className={
                              " bg-transparent " +
                              "border-x-0 border-t-0 border-b border-transparent w-full " +
                              "hover:border-[#ccc] " +
                              "py-[2px] px-1"
                            }
                            value={employee?.department}
                            autoComplete="off"
                            id="department_id"
                            placeholder=""
                          />
                        </div>
                        <a
                          role="button"
                          className="o_dropdown_button"
                          draggable="false"
                        ></a>
                      </div>
                      <button
                        type="button"
                        className="btn btn-secondary fa o_external_button fa-arrow-right"
                        tabIndex={-1}
                        draggable="false"
                        aria-label="Internal link"
                        data-tooltip="Internal link"
                      ></button>
                    </div>
                    <div className="o_field_many2one_extra"></div>
                  </div>
                </div>
              </div>
              <div className="flex mw576:contents flex-column mb-4">
                <div className="o_cell o_wrap_label flex-grow mw576:flex-grow-0 w-full break-words">
                  <label
                    className=" font-medium mb-[5px] text-base inline-block break-words"
                    htmlFor="job_id"
                  >
                    Job Position
                  </label>
                </div>
                <div className="o_cell o_wrap_input flex-grow mw576:flex-grow-0 break-words">
                  <div id="job_id" className="o_field_widget o_field_many2one">
                    <div className="o_field_many2one_selection">
                      <div className="o_input_dropdown">
                        <div className="o-autocomplete dropdown">
                          <input
                            type="text"
                            // className="o-autocomplete--input o_input"
                            className={
                              " bg-transparent " +
                              "border-x-0 border-t-0 border-b border-transparent w-full " +
                              "hover:border-[#ccc] " +
                              "py-[2px] px-1"
                            }
                            value={employee?.jobPosition}
                            autoComplete="off"
                            id="job_id"
                            placeholder=""
                          />
                        </div>
                        <a
                          role="button"
                          className="o_dropdown_button"
                          draggable="false"
                        ></a>
                      </div>
                      <button
                        type="button"
                        className="btn btn-secondary fa o_external_button fa-arrow-right"
                        tabIndex={-1}
                        draggable="false"
                        aria-label="Internal link"
                        data-tooltip="Internal link"
                      ></button>
                    </div>
                    <div className="o_field_many2one_extra"></div>
                  </div>
                </div>
              </div>
              <div className="flex mw576:contents flex-column mb-4">
                <div className="o_cell o_wrap_label flex-grow mw576:flex-grow-0 w-full break-words">
                  <label
                    className=" font-medium mb-[5px] text-base inline-block break-words"
                    htmlFor="parent_id"
                  >
                    Manager
                  </label>
                </div>
                <div className="o_cell o_wrap_input flex-grow mw576:flex-grow-0 break-words">
                  <div className="o_field_widget o_field_many2one">
                    <div className="o_field_many2one_selection">
                      <div className="o_input_dropdown">
                        <div className="o-autocomplete dropdown">
                          <input
                            type="text"
                            // className="o-autocomplete--input o_input"
                            className={
                              " bg-transparent " +
                              "border-x-0 border-t-0 border-b border-transparent w-full " +
                              "hover:border-[#ccc] " +
                              "py-[2px] px-1"
                            }
                            value={employee?.manager}
                            autoComplete="off"
                            id="parent_id"
                            placeholder=""
                          />
                        </div>
                        <a
                          role="button"
                          className="o_dropdown_button"
                          draggable="false"
                        ></a>
                      </div>
                    </div>
                    <div className="o_field_many2one_extra"></div>
                  </div>
                </div>
              </div>
              <div className="flex mw576:contents flex-column mb-4">
                <div className="o_cell o_wrap_label flex-grow mw576:flex-grow-0 w-full break-words">
                  <label
                    className=" font-medium mb-[5px] text-base inline-block break-words"
                    htmlFor="coach_id"
                  >
                    Coach
                    <sup
                      className="text-info p-1"
                      data-tooltip-template="web.FieldTooltip"
                      data-tooltip-info='{"field":{"help":"Select the \"Employee\" who is the coach of this employee.\nThe \"Coach\" has no specific rights or responsibilities by default."}}'
                      data-tooltip-touch-tap-to-show="true"
                    >
                      ?
                    </sup>
                  </label>
                </div>
                <div className="o_cell o_wrap_input flex-grow mw576:flex-grow-0 break-words">
                  <div
                    id="coach_id"
                    className="o_field_widget o_field_many2one"
                  >
                    <div className="o_field_many2one_selection">
                      <div className="o_input_dropdown">
                        <div className="o-autocomplete dropdown">
                          <input
                            type="text"
                            // className="o-autocomplete--input o_input"
                            className={
                              " bg-transparent " +
                              "border-x-0 border-t-0 border-b border-transparent w-full " +
                              "hover:border-[#ccc] " +
                              "py-[2px] px-1"
                            }
                            autoComplete="off"
                            id="coach_id"
                            placeholder=""
                          />
                        </div>
                        <a
                          role="button"
                          className="o_dropdown_button"
                          draggable="false"
                        ></a>
                      </div>
                    </div>
                    <div className="o_field_many2one_extra"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormView;
