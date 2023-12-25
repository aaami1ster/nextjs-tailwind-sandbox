import FormControlPanel from "@/components/forms/FormControlPanel";
import EmployeeFormView from "./EmployeeFormView";
import React from "react";
import { employees } from "@/data";
import employeeConfigs from "../employee.config";
import { notFound } from "next/navigation";

const page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const employee = employees.find((e) => e.id === id);

  if (!employee) {
    notFound();
  }
  return (
    <>
      <FormControlPanel config={employeeConfigs} id={id} title={employee?.name}/>
      <main className="flex-1">
          <EmployeeFormView data={employee}/>
      </main>
    </>
  );
};

export default page;
