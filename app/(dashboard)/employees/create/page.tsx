import FormControlPanel from "@/components/forms/FormControlPanel";
import React from "react";
import employeeConfigs from "../employee.config";
import EmployeeFormView from "../[id]/EmployeeFormView";

const page = () => {
  return (
    <>
      <FormControlPanel config={employeeConfigs}/>
      <main className="flex-1">
          <EmployeeFormView />
      </main>
    </>
  );
};

export default page;
