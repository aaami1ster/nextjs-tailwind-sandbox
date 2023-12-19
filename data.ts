export type FieldType = {
  id?: string;
  name: string;
  label: string;
  info?: string;
  value?: string;
  type: "text" | "tel" | "email" | "select" | "select_many";
  model?: "Employee" | "Department" | "JobPosition" | "Country";
};

export const employees: {
  id: string;
  name: string;
  workPhone: string;
  workMobile?: string;
  workEmail: string;
  department: string;
  jobPosition: string;
  coach?: string;
  manager: string;
  imageUrl: string;
}[] = [
  {
    id: "1",
    name: "Abigail Peterson",
    workPhone: "(482)-233-3393",
    workEmail: "abigail.peterson39@example.com",
    department: "Professional Services",
    jobPosition: "Consultant",
    manager: "",
    imageUrl: "/1.jpeg",
  },
  {
    id: "2",
    name: "anita oliver",
    workPhone: "(538)-497-4804",
    workEmail: "anita.oliver32@example.com",
    department: "Research & Development / R&D USA",
    jobPosition: "Experienced Developer",
    manager: "Ronnie Hart",
    imageUrl: "/2.jpg",
  },
  {
    id: "3",
    name: "Audrey Peterson",
    workPhone: "(203)-276-7903",
    workEmail: "audrey.peterson25@example.com",
    department: "Professional Services",
    jobPosition: "Consultant",
    manager: "Mitchell Admin",
    imageUrl: "/3.jpg",
  },
];

export const departments: { id: string; name: string }[] = [
  { id: "1", name: "Administration" },
  {
    id: "2",
    name: "Research &amp; Development / R&amp;D USA / Long Term Projects",
  },
  { id: "3", name: "Management" },
  { id: "4", name: "Professional Services" },
  { id: "5", name: "Research &amp; Development / R&amp;D USA" },
  { id: "6", name: "Research &amp; Development" },
  { id: "7", name: "Sales" },
];

export const jobPositions: { id: string; name: string }[] = [
  { id: "1", name: "Chief Executive Officer" },
  {
    id: "2",
    name: "Consultant",
  },
  { id: "3", name: "Experienced Developer" },
  { id: "4", name: "Marketing and Community Manager" },
  { id: "5", name: "Chief Technical Officer" },
  { id: "6", name: "Human Resources Manager" },
  { id: "7", name: "Trainee" },
];
