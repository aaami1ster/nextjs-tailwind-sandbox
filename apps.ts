export type AppMenuType = {
  name: string;
  to?: string;
  subject?: string;
  menu?: AppMenuType[];
};

export type AppItemType = {
  name: string;
  subject: string;
  icon: string;
  class: string;
  tags: string[];
  menu: AppMenuType[];
};

export const apps: AppItemType[] = [
  
  {
    name: "Employees",
    subject: "Employee",
    icon: "tower",
    class: "me-2 text-danger",
    tags: ["employees", "departments", "configuration"],
    menu: [
      {
        name: "Employees",
        subject: "Employee",
        menu: [
          {
            name: "Employees",
            subject: "Employee",
            to: "/employees",
            menu: [],
          },
        ],
      },
      {
        name: "Departments",
        subject: "Department",
        to: "/departments",
        menu: [],
      },
      {
        name: "Configuration",
        subject: "Configuration",
        menu: [
          {
            name: "Settings",
            subject: "Settings",
            to: "/settings",
            menu: [],
          },
          {
            name: "Employee",
            subject: "Employee",
            menu: [
              {
                name: "Departments",
                subject: "Departments",
                to: "/departments",
                menu: [],
              },
              {
                name: "Work Locations",
                subject: "WorkLocation",
                to: "/worklocations",
                menu: [],
              },
              {
                name: "Departure Reason",
                subject: "DepartureReason",
                to: "/departurereason",
                menu: [],
              }
            ],
          },
          {
            name: "Recruitment",
            subject: "Recruitment",
            menu: [
              {
                name: "Job Positions",
                subject: "JobPositions",
                to: "/jobpositions",
                menu: [],
              },
              {
                name: "Employment Types",
                subject: "EmploymentType",
                to: "/employmenttypes",
                menu: [],
              }
            ],
          },
          {
            name: "Activity Planning",
            subject: "ActivityPlanning",
            menu: [
              {
                name: "On/Off Boarding Plan",
                subject: "OnOffBoardingPlan",
                to: "/boardingplan",
                menu: [],
              }
            ],
          }
        ],
      }
    ],
  },
  {
    name: "Discuss",
    subject: "Discuss",
    icon: "bi-house",
    class: "me-2 text-danger",
    tags: ["discuss"],
    menu: [
      {
        name: "Discuss",
        to: "/discuss",
        menu: [],
      },
    ],
  },
  {
    name: "Apps",
    subject: "App",
    icon: "bi-cpu",
    class: "me-2 text-danger",
    tags: ["apps"],
    menu: [
      {
        name: "Apps",
        subject: "App",
        to: "/apps",
        menu: [],
      },
    ],
  },
  {
    name: "Settings",
    subject: "Setting",
    icon: "bi-cpu",
    class: "me-2 text-danger",
    tags: ["settings"],
    menu: [
      {
        name: "General Settings",
        subject: "Setting",
        to: "/settings",
        menu: [],
      },
      {
        name: "Users & companies",
        subject: "User",
        menu: [
          {
            name: "Users",
            subject: "User",
            to: "/users",
            menu: [],
          },
          {
            name: "Companies",
            subject: "Company",
            to: "/companies",
            menu: [],
          },
        ],
      },
    ],
  },
];
