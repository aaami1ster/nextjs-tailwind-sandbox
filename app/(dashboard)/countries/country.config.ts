import { ConfigProps } from "@/lib/types";
import {
  countryFields,
  countryParams,
} from "./country.fields";
import {
  createQuery,
  extractQuery,
  getOneQuery,
  getQuery,
  updateQuery,
  aggQuery,
  importQuery,
} from "@/lib/utils";
import { countryScopedSlots } from "@/lib/scopeSlots";

const countryConfigs: ConfigProps = {
  getListQuery: `
  query Countries {
    data:countries {${countryParams.join()}}
  }
`,
  getOneQuery: `
  query country($code: ID!) {
    data:country(code: $code) {${countryParams.join()}}
  }
`, //getOneQuery("Country", countryParams),
  createQuery: createQuery("Country", countryParams),
  updateQuery: updateQuery("Country", countryParams),
  deleteQuery: "",
  aggQuery: aggQuery("Country"),
  importQuery: importQuery("Country"),
  exportQuery: extractQuery("Country"),

  fields: countryFields,
  subject: "Country",
  app: "country",
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
  scopedSlots: countryScopedSlots,
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

export default countryConfigs;
