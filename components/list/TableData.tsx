'use client';
import React from "react";

import { useRouter } from "next/navigation";

import { ConfigProps } from "@/lib/types";

type Props = {
    name: string;
    type?: string;
    config: ConfigProps;
    item: any;
};

const TableData = ({ name, type, config, item}: Props) => {
    const { push } = useRouter();
  return (
    <td
      key={name}
      className="truncate max-w-[94px] w-[94px]"
      data-tooltip-delay="1000"
      tabIndex={-1}
      data-tooltip={item[name]}
      title=""
      onClick={() => {
        push(`${config.path}/${item.id ? item.id : item.code}`);
      }}
    >
      {type === "text"
        ? item[name]
        : config.scopedSlots && config.scopedSlots[name]
        ? config.scopedSlots[name](item)
        : ""}
    </td>
  );
};

export default TableData;
