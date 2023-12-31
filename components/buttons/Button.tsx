import clsx from "clsx";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

type Props = {
  type?: 'button' | 'link';
  className?: string;
  color?: "primary" | "secondary";
  outline?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  href?: Url;
};

const Button = ({
  type = 'button',
  className,
  color = "secondary",
  outline,
  onClick,
  href,
  children,
}: Props) => {
  const TheComponent = type === 'button' ? 'button' : Link;
  switch (color) {
    case "primary":
      return (
        <TheComponent
          type="button"
          className={clsx(
            className,
            `border uppercase font-medium text-base py-1 px-3 rounded`,
            {
              "bg-primary border-primary text-white": !outline,
              "bg-white border-primary text-primary": outline,

              "hover:bg-primary-hover hover:border-white hover:text-white": !outline,
              "hover:bg-primary hover:border-primary hover:text-white": outline,
            }
          )}
          data-hotkey="c"
          onClick={onClick}
          href={href || ""}
        >
          {children}
        </TheComponent>
      );
    case "secondary":
    default:
      return (
        <TheComponent
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
          onClick={onClick}
          href={href || ""}
        >
          {children}
        </TheComponent>
      );
  }
};

export default Button;
