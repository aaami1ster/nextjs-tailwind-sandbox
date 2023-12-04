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
    name: "Employees",
    subject: "Employee",
    icon: "tower",
    class: "me-2 text-danger",
    tags: ["employees", "departments", "configuration"],
    menu: [
      {
        name: "Employees",
        subject: "Employee",
        to: "/employees",
        menu: [],
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
        to: "/configuration",
        menu: [],
      },
      {
        name: "Settings",
        subject: "Site",
        menu: [
          {
            name: "Site Settings",
            subject: "Site",
            menu: [
              {
                name: "Site Types",
                subject: "SiteType",
                to: "/sitetypes",
              },
              {
                name: "Site Sub-Types",
                subject: "SiteSubType",
                to: "/sitesubtypes",
              },
              {
                name: "Site Topologies",
                subject: "SiteTypology",
                to: "/sitetypologies",
              },
              {
                name: "Site Activity Status",
                subject: "SiteStatus",
                to: "/sitestatus",
              },
              {
                name: "Site Equipment Housing",
                subject: "SiteEquipmentHousing",
                to: "/siteequipments",
              },
              {
                name: "Power System Configurations",
                subject: "PowerConfig",
                to: "/powerconfigs",
              },
              {
                name: "Power Source Responsibilities",
                subject: "PowerResponse",
                to: "/powerresponses",
              },
              {
                name: "Has Remote Manag. System Options",
                subject: "RemoteSystem",
                to: "/remotesystems",
              },
              {
                name: "Site TRM Categories",
                subject: "TrmCategory",
                to: "/trmcategories",
              },
              {
                name: "Transmission Link Types",
                subject: "TrmType",
                to: "/trmtypes",
              },
              {
                name: "TCH Availability Ranks",
                subject: "TchRank",
                to: "/tchranks",
              },
              {
                name: "Value Based Ranks (VBS)",
                subject: "ValueRank",
                to: "/valueranks",
              },
              {
                name: "Has Security Gaurd Options",
                subject: "HasGuard",
                to: "/hasguards",
              },
              {
                name: "Fencing Types",
                subject: "FenceType",
                to: "/fencetypes",
              },
              {
                name: "Has Site Operator Options",
                subject: "HasOperator",
                to: "/hasoperators",
              },
              {
                name: "Landlord Categories",
                subject: "PropertyType",
                to: "/propertytypes",
              },
            ],
          },
          {
            name: "Location Settings",
            subject: "Location",
            menu: [
              {
                name: "Countries",
                subject: "Country",
                to: "/countries",
              },
              {
                name: "States",
                subject: "State",
                to: "/states",
              },
              {
                name: "Localities",
                subject: "Locality",
                to: "/localities",
              },
              {
                name: "Cities",
                subject: "City",
                to: "/cities",
              },
              // {
              //   name: 'Towns',
              //   subject: 'Town',
              //   to: '/towns',
              // },
              // {
              //   name: 'Hays',
              //   subject: 'Hay',
              //   to: '/hays',
              // },
              // {
              //   name: 'Regions',
              //   to: '/regions',
              // },
              {
                name: "Zones",
                subject: "Zone",
                to: "/zones",
              },
              {
                name: "FM Office",
                subject: "Office",
                to: "/offices",
              },
              {
                name: "Clusters",
                subject: "Cluster",
                to: "/clusters",
              },
              {
                name: "Population Densities",
                subject: "PopDensity",
                to: "/popdensities",
              },
            ],
          },
          {
            name: "Attribute Settings",
            subject: "SiteAttribute",
            menu: [
              {
                name: "Attributes",
                subject: "SiteAttribute",
                to: "/attrs",
              },
              {
                name: "Attribute Categories",
                subject: "SiteAttributeCategory",
                to: "/attrcategories",
              },
              {
                name: "Attribute Types",
                subject: "SiteAttrType",
                to: "/attrtypes",
              },
              {
                name: "Unit Of Meatures",
                subject: "Uom",
                to: "/uoms",
              },
            ],
          },
        ],
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
