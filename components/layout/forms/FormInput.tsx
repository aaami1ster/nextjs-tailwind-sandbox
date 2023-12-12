import React from "react";
import FormInputLabel from "./FormInputLabel";
import FormInputInput from "./FormInputInput";
import FormInputSelect from "./FormInputSelect";
import FormInputSelectMany from "./FormInputSelectMany";
import clsx from "clsx";
import { FieldType } from "@/data";

type Props = FieldType & {
  onchange: any;
  className?: string;
};

const FormInput = ({
  id,
  name,
  label,
  info,
  model,
  value,
  type,
  onchange,
  className,
}: Props) => {
  return (
    <div
      className={clsx(className || "", "flex mw576:contents flex-column mb-4")}
    >
      <FormInputLabel name={name} label={label} info={info} />
      {type === "select" ? (
        <FormInputSelect
          id={id}
          name={name}
          label={label}
          model={model}
          value={value}
          type={type}
          onchange={onchange}
        />
      ) : type === "select_many" ? (
        <FormInputSelectMany
          name={name}
          label={label}
          model={model}
          value={value}
          type={type}
          onchange={onchange}
        />
      ) : (
        <FormInputInput
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
