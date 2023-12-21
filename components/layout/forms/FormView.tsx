"use client";

import { notFound, usePathname } from "next/navigation";
import React, { useContext, useEffect } from "react";
import FormInput from "./FormInput";
import FormGroup from "./FormGroup";
import FormInnerGroup from "./FormInnerGroup";
import Button from "@/components/Button";
import { AppContext } from "@/context/AppContext";
import { ConfigProps } from "@/lib/types";

type Props = { config: ConfigProps; data: any };

const FormView = ({ config, data }: Props) => {
  const { currentPathname, setCurrentPathname } = useContext(AppContext);
  const pathname = usePathname();

  if (!data) {
    notFound();
  }

  useEffect(() => {
    if (currentPathname !== pathname) {
      setCurrentPathname(pathname);
    }
  }, [currentPathname, pathname, setCurrentPathname]);

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
          {/* title */}
          <div className="max-w-[75%] text-[#212529]">
            <h1
              className={
                "flex flex-row min-h-[55px] w-full leading-5 text-[1.1vw] font-medium "
              }
            >
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
                  onChange={() => console.log("change...")}
                />
              </div>
            </h1>
          </div>
          {}
          <FormGroup>
            <FormInnerGroup col={12}>
              {config.fields.filter((fld) => fld.name !== 'name' ).map((fld) => {
                return (
                  <FormInput
                    key={fld.name}
                    name={fld.name}
                    label={fld.label}
                    value={
                      fld.type === "text"
                        ? data[fld.name]
                        : config.scopedSlots && config.scopedSlots[fld.name]
                        ? config.scopedSlots[fld.name](data)
                        : ""
                    }
                    type={fld.type}
                    onchange={() => console.log("changed...")}
                    className="group"
                  />
                );
              })}
            </FormInnerGroup>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default FormView;
