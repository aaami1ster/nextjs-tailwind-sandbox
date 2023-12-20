import FormControlPanel from "@/components/layout/FormControlPanel";
import EmployeeFormView from "./EmployeeFormView";
import React from "react";
import { employees } from "@/data";

const page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const employee = employees.find((e) => e.id === id);
  return (
    <>
      <FormControlPanel />
      <main className="flex-1">
          <EmployeeFormView data={employee}/>
      </main>
    </>
  );
};

export default page;
