import clsx from "clsx";
import React from "react";

type Props = {
  className?: string;
  color?: "primary" | "secondary";
  outline?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

const Button = ({
  className,
  color = "secondary",
  outline,
  onClick,
  children,
}: Props) => {
  switch (color) {
    case "primary":
      return (
        <button
          type="button"
          className={clsx(
            className,
            `border uppercase  font-medium text-base py-1 px-3 rounded`,
            {
              "bg-primary border-primary text-white": !outline,
              "bg-white border-primary text-primary": outline,

              "hover:bg-primary-hover hover:border-white hover:text-white": !outline,
              "hover:bg-primary hover:border-primary hover:text-white": outline,
            }
          )}
          data-hotkey="c"
          onClick={onClick}
        >
          {children}
        </button>
      );
    case "secondary":
    default:
      return (
        <button
          type="button"
          className={clsx(
            className,
            `border uppercase  font-medium text-base py-1 px-3 rounded`,
            {
              "bg-white border-white text-[#66598f]": !outline,
              "bg-[#66598f] border-[#66598f] text-white": outline,

              "hover:bg-[#F8F9FC] hover:border-[#e9ecef] hover:text-[#564b79]": !outline,
              "hover:bg-white hover:border-white hover:text-[#66598f]": outline,
            }
          )}
          data-hotkey="c"
          onClick={() => console.log(`${color}: `)}
        >
          {children}
        </button>
      );
  }
};

export default Button;
