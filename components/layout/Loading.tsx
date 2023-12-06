"use client";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

export default function Loading() {
  return (
    <IconContext.Provider value={{ className: "animate-spin" }}>
      <div>
        <AiOutlineLoading3Quarters size={"3.5rem"} />
      </div>
    </IconContext.Provider>
  );
}
