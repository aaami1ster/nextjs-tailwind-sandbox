import React from "react";

type Props = { children: React.ReactNode };

const FormInnerGroup = ({ children }: Props) => {
  return (
    <div
      className={
        " mw576:grid-cols-[fit-content(150px),1fr] gap-y-2 gap-x-4 mb-2" + // o_inner_group
        " grid" + // grid
        " mw992:flex-grow-0  mw992:flex-shrink-0  mw992:basis-auto mw992:w-[50%]" + // col-lg-6
        " flex-shrink-0 w-full px-4" // .row > *
      }
    >
      {children}
    </div>
  );
};

export default FormInnerGroup;
