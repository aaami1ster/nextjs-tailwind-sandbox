import { FieldDefType } from "@/lib/types";
import { string } from "yup";

export const employeeFormicInitialValues = {
  id: (item: any) => (item.id ? item.id : ""),
  name: (item: any) => (item.name ? item.name : ""),
};

export const employeeValidationSchemaObj = {
  id: string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  name: string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
};

export const employeeParams = [
  "id",
  "name",
  "workMobile",
  "workPhone",
  "workEmail",
  "department",
  "jobPosition",
  "manager",
  "coach",
];
export const employeeFields: FieldDefType[] = [
  {
    name: "id",
    label: "ID",
    // info: "",
    type: "text", //"text" | "tel" | "email" | "select" | "select_many";
    // subject: "", // "Employee" | "Department" | "JobPosition" | "Country";
  },
  {
    name: "name",
    label: "Name",
    type: "text",
    listView: true,
    editable: true,
  },
  {
    name: "workMobile",
    label: "Work Mobile",
    type: "text",
    listView: true,
    editable: true,
  },
  {
    name: "workPhone",
    label: "Work Phone",
    type: "text",
    listView: true,
    editable: true,
  },
  {
    name: "workEmail",
    label: "Work Email",
    type: "text",
    listView: true,
    editable: true,
  },
  {
    name: "department",
    label: "Department",
    type: "text",
    listView: true,
    editable: true,
  },
  {
    name: "jobPosition",
    label: "Job Position",
    type: "text",
    listView: true,
    editable: true,
  },
  {
    name: "manager",
    label: "Manager",
    type: "text",
    listView: true,
    editable: true,
  },
  {
    name: "coach",
    label: "Coach",
    type: "text",
    listView: true,
    editable: true,
  },
];
