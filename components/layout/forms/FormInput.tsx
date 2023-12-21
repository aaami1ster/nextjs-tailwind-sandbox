import React from "react";
import FormInputLabel from "./FormInputLabel";
import FormInputInput from "./FormInputInput";
import FormInputSelect from "./FormInputSelect";
import FormInputSelectMany from "./FormInputSelectMany";
import clsx from "clsx";
import { FieldDefType } from "@/lib/types";

type Props = FieldDefType & {
  id?: string;
  name?: string;
  label?: string;
  info?: string;
  subject?: string;
  value?: string;
  type?: string;
  onchange: any;
  className?: string;
};

const FormInput = ({
  id,
  name,
  label,
  info,
  subject,
  value,
  type,
  onchange,
  className,
}: Props) => {
  return (
    <div
      className={clsx(className || "", "flex mw576:contents flex-column mb-4")}
    >
      <FormInputLabel id={id} name={name} label={label} info={info} />
      {type === "select" ? (
        <FormInputSelect
          id={id}
          name={name}
          label={label}
          subject={subject}
          value={value}
          type={type}
          onchange={onchange}
        />
      ) : type === "select_many" ? (
        <FormInputSelectMany
          // id={name}
          name={name}
          label={label}
          // subject={subject}
          value={value}
          type={type}
          onchange={onchange}
        />
      ) : (
        <FormInputInput
          // id={name}
          name={name}
          label={label}
          value={value}
          type={type}
          onchange={onchange}
          className={className}
        />
      )}
    </div>
  );
};

export default FormInput;
