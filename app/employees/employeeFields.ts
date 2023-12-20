import { FieldDefType } from "@/lib/types";

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
    type: "text"
  },
  {
    name: "capital",
    label: "Capital",
    type: "text"
  },
  {
    name: "code",
    label: "Code",
    type: "text"
  },
  {
    name: "currency",
    label: "Currency",
    type: "text"
  },
  {
    name: "emoji",
    label: "Emoji",
    type: "text"
  },
];
