import clsx from "clsx";
import React from "react";

type Props = {
  className?: string;
  color?: "primary" | "secondary";
  outline?: boolean;
  children?: React.ReactNode;
};

const Button = ({
  className,
  color = "secondary",
  outline,
  children,
}: Props) => {
  let bgColor = "white";
  let borderColor = "white";
  let txtColor = "[#66598f]";

  let bgColorHover = "[#F8F9FC]";
  let borderColorHover = "[#e9ecef]";
  let txtColorHover = "[#564b79]";

  switch (color) {
    case "primary":
      bgColor = color;
      borderColor = color;
      txtColor = "white";

      bgColorHover = "primary-hover";
      borderColorHover = "white";
      txtColorHover = "white";
      break;
    default:
      break;
  }
  let classes: string[] = [
    `border`,
    `uppercase  font-medium text-base`,
    `py-1 px-3`,
    `rounded`,
    `border-${borderColor}`,
    `bg-${bgColor}`,
    `text-${txtColor}`,
    `hover:border-${borderColorHover}`,
    `hover:bg-${bgColorHover}`,
    `hover:text-${txtColorHover}`,
  ];
  if (outline) {
    classes.push(
      `bg-white`,
      `text-${bgColor}`,
      `hover:bg-${bgColor} hover:text-white`
    );
  }

  console.log(`${color}: `, clsx(...classes));
  return (
    <button
      type="button"
      className={`${classes.join(" ")} ${className ? className : ""}`}
      data-hotkey="c"
    >
			{children}
    </button>
  );
};

export default Button;