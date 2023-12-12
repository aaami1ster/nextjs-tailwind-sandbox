import React from "react";

type FormGroupProps = {
  children: React.ReactNode;
};

const FormGroup = ({ children }: FormGroupProps) => {
  return (
    <div
      className={
        "" + // o_group
        " flex flex-wrap -mx-4" + // row
        " items-start" // align-items-start
      }
    >
      {children}
    </div>
  );
};

export default FormGroup;
