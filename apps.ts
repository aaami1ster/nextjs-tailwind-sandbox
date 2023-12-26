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

  to: string; // default app route
};

export const apps: AppItemType[] = [
  {
    name: "Country",
    subject: "Country",
    icon: "bi-house",
    class: "me-2 text-danger",
    tags: ["countries"],
    to: "/countries",
    menu: [
      {
        name: "Countries",
        to: "/countries",
        menu: [],
      },
    ],
  },
  {
    name: "Employees",
    subject: "Employee",
    icon: "tower",
    class: "me-2 text-danger",
    tags: ["employees", "departments", "configuration"],
    to: "/employees",
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
              },
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
              },
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
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Discuss",
    subject: "Discuss",
    icon: "bi-house",
    class: "me-2 text-danger",
    tags: ["discuss"],
    to: "/discuss",
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
    to: "/apps",
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
    to: "/settings",
    menu: [
      {
        name: "General Settings",
        subject: "Setting",
        to: "/settings",
        menu: [],
      },
      {
        name: "Users & countries",
        subject: "User",
        menu: [
          {
            name: "Users",
            subject: "User",
            to: "/users",
            menu: [],
          },
          {
            name: "Countries",
            subject: "Country",
            to: "/countries",
            menu: [],
          },
        ],
      },
    ],
  },
];
