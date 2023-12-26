import { ConfigProps } from "@/lib/types";
import { employeeFields, employeeParams } from "./employee.fields";
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
  query Employees {
    data:employees {${employeeParams.join()}}
  }
`,
  getOneQuery: `
  query employee($code: ID!) {
    data:employee(code: $code) {${employeeParams.join()}}
  }
`, //getOneQuery("Employee", employeeParams),
  createQuery: createQuery("Employee", employeeParams),
  updateQuery: updateQuery("Employee", employeeParams),
  deleteQuery: "",
  aggQuery: aggQuery("Employee"),
  importQuery: importQuery("Employee"),
  exportQuery: extractQuery("Employee"),

  fields: employeeFields,
  subject: "Employee",
  app: "employee",
  path: "/employees",
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
  getVariables: "",
  //   ({ values, initialValues, id }: any) => {
  //     console.log("getVariables Employee");
  //     let variables: any = {};
  //     return variables;
  //   },
};

export default employeeConfigs;
