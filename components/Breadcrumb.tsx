import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { FaCloudUploadAlt, FaUndo } from "react-icons/fa";

type BreadcrumbRouterProps = {
  title?: string;
  containerClasses?: string;
  listClasses?: string;
  capitalizeLinks?: boolean;
};

const Breadcrumb = ({
  title,
  containerClasses,
  listClasses,
  capitalizeLinks = true,
}: BreadcrumbRouterProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  let items: any[] | null = null;
  if (pathNames) {
    items = pathNames.map((link, index) => {
      let href = `/${pathNames.slice(0, index + 1).join("/")}`;
      let itemClasses = paths === href ? "text-[#6c757d]" : "text-[#66598f]";
      let itemLink = capitalizeLinks
        ? link[0].toUpperCase() + link.slice(1, link.length)
        : link;
      return (
        <React.Fragment key={index}>
          <li
            className={clsx(
              listClasses,
              " inline-block max-w-full whitespace-nowrap overflow-hidden text-ellipsis align-top",
              "flex items-center",
              "pl-2", // breadcrumb-item
              {
                " before:float-left before:pr-2 before:text-[#6c757d] before:content-['/']":
                  index !== 0 && pathNames.length === index + 1,
              },
              itemClasses
            )}
          >
            <Link href={href}>
              {pathNames.length === index + 1 && title ? title : itemLink}
            </Link>
          </li>
        </React.Fragment>
      );
    });
  }

  return (
    <ol
      className={clsx(
        containerClasses,
        "flex text-[18px] min-w-0 flex-wrap bg-white ps"
      )}
    >
      {items}
    </ol>
  );
};

export default Breadcrumb;
