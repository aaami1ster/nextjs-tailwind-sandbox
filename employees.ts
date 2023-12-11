export const employees: {
  id: string;
  name: string;
  workPhone: string;
  workMobile?: string;
  workEmail: string;
  department: string;
  jobPosition: string;
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
