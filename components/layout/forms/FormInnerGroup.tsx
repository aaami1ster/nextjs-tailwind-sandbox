import clsx from "clsx";
import React from "react";

type Props = { children: React.ReactNode, col?: number; };

const FormInnerGroup = ({ children, col = 6 }: Props) => {
  return (
    <div
      className={clsx(
        "grid", // grid
        "flex-shrink-0 w-full px-4", // .row > *
        "mw576:grid-cols-[fit-content(150px),1fr] gap-y-2 gap-x-4 mb-2", // o_inner_group
        "mw992:flex-grow-0  mw992:flex-shrink-0  mw992:basis-auto", 
        { "mw992:w-[50%]": col === 6 }, // col-lg-6
        { "mw992:w-[100%]": col === 12 }// col-lg-6
      )}
    >
      {children}
    </div>
  );
};

export default FormInnerGroup;
