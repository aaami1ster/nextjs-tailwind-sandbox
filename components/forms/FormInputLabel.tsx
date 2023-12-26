import React from "react";

type Props = {
  id?: string;
  name: string;
  label?: string;
  info?: string;
};

const FormInputLabel = ({ id, name, label, info }: Props) => {
  return (
    <div className="o_cell o_wrap_label flex-grow mw576:flex-grow-0 w-full break-words">
      <label
        id={id}
        className=" font-medium mb-[5px] text-base inline-block break-words"
        htmlFor={name}
      >
        {label
          ? label
          : (name[0].toUpperCase() + name.slice(1, name.length)).replace(
              /([a-z0-9])([A-Z])/g,
              "$1 $2"
            )}
        {/* <div className="p-10">
          <div className="group relative w-max">
            <button>Click me!</button>
            <span className="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100">
              This is a button.
            </span>
          </div>
        </div> */}
        {info ? (
          <>
            <sup
              className=" relative text-xs -top-[0.5em] text-[#0180a5] p-1 leading-[0] align-baseline"
              data-tooltip-target="tooltip-info"
            >
              ?
            </sup>
            <div
              id="tooltip-info"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              {info}
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            {/* <!-- Padding so you can see the tooltip. --> */}
            {/* https://benborgers.com/posts/tailwind-tooltip */}
            {/* <div className="p-10">
              <div className="group relative w-max">
                <button>Click me!</button>
                <span className="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100">
                  This is a button.
                </span>
              </div>
            </div> */}
          </>
        ) : null}
      </label>
    </div>
  );
};

export default FormInputLabel;
