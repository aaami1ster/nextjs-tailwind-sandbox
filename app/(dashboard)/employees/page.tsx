import ListControlPanel from "@/components/list/ListControlPanel";
import ListView from "@/components/list/Table";
import SearchPanel from "@/components/layout/SearchPanel";
import React from "react";
import { employeeFields } from "./employee.fields";
import { employees } from "@/data";
import employeeConfigs from "./employee.config";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <ListControlPanel config={employeeConfigs}/>
      <main className="flex-1 flex">
        <SearchPanel config={employeeConfigs}/>
        <div className="flex-1">
          <ListView config={employeeConfigs} data={employees}/>
        </div>
      </main>
    </>
  );
};

export default page;
