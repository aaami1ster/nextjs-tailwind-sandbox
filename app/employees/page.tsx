import ListControlPanel from "@/components/layout/ListControlPanel";
import ListView from "@/components/layout/ListView";
import SearchPanel from "@/components/layout/SearchPanel";
import React from "react";
import { employeeFields } from "./employeeFields";
import { employees } from "@/data";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <ListControlPanel />
      <main className="flex-1 flex">
        <SearchPanel />
        <div className="flex-1">
          <ListView fields={employeeFields} data={employees}/>
        </div>
      </main>
    </>
  );
};

export default page;
