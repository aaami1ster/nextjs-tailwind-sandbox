import { ConfigProps } from "@/lib/types";
import {
  employeeFields,
  employeeParams,
} from "./employee.fields";
import {
  createQuery,
  extractQuery,
  getOneQuery,
  getQuery,
  updateQuery,
  aggQuery,
  importQuery,
} from "@/lib/utils";
import { employeeScopedSlots } from "@/lib/scopeSlots";

const employeeConfigs: ConfigProps = {
  getListQuery: `
  query Countries {
    data:countries {${employeeParams.join()}}
  }
`,
  getOneQuery: `
  query employee($code: ID!) {
    data:employee(code: $code) {${employeeParams.join()}}
  }
`, //getOneQuery("Country", employeeParams),
  createQuery: createQuery("Country", employeeParams),
  updateQuery: updateQuery("Country", employeeParams),
  deleteQuery: "",
  aggQuery: aggQuery("Country"),
  importQuery: importQuery("Country"),
  exportQuery: extractQuery("Country"),

  fields: employeeFields,
  subject: "Country",
  app: "employee",
  path: "/countries",
  autocompleteList: [
    { name: "name", nameLabel: "name", operator: "=" },
    { name: "code", nameLabel: "code", operator: "=" },
  ],
  defaultFilters: [],
  defaultGroups: [],
  enableMap: false,
  enableChart: false,

  hideCreate: false,
  hideImport: false,
  xlsx: true,
  scopedSlots: employeeScopedSlots,
  filtersName: ["flatFilters"],

  // form
  disableEdit: false,
  getVariables: '',
//   ({ values, initialValues, id }: any) => {
//     console.log("getVariables Country");
//     let variables: any = {};
//     return variables;
//   },
};

export default employeeConfigs;
