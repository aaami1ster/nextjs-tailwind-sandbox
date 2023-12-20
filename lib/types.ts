export type FilterObject = {
  value: any;
  value2?: any;
  name: string;
  operator?: string;
  type?: string;
  valueLabel?: string;
};

export type scopedSlotType = {
  [key: string]: any;
};

export type fieldsToListType = {
  key: string;
  _classes?: string;
  label: string;
};

export type AutocompleteItem = {
  nameLabel: string;
  name: string;
  operator: string;
};
export type DefaultGroupItem = { label: string; value: string };

export type DefaultFilterItem = {
  name: string;
  operator?: string;
  label: string;
  value: string;
  value2?: string;
  type?: string;
  theFilters?: string;
};

export type FieldDefType = {
  name: string;
  label: string;
  type?: string;
  subType?: string;
  queryLabel?: string;
  listView?: boolean;
  fields?: FieldDefType[];
  renderLabel?: any;
  editable?: boolean;
  required?: boolean;
  header?: boolean; // the field that will be shown on top as a title. default header is name
  dependsOn?: string;
  readonly?: boolean;
  sorter?: boolean;
  filterValue?: string;
  optionValue?: string; // option value to be set in option value
  optionLabel?: string;
  optionType?: string;
  scopedSlots?: any;
  vals?: (string | number)[];
  flatInput?: FilterObject[];
  defalultFilterOption?: {
    value: string;
    label: string;
  };
  params?: string[];
  dependsOnFilerValue?: string;
  importable?: boolean;
};

export type ConfigProps = {
  getListQuery: string;
  getOneQuery: string;
  createQuery: string;
  updateQuery: string;
  deleteQuery?: string;
  aggQuery: string;
  exportQuery: string;
  importQuery: string;

  fields: FieldDefType[];
  fieldsToList?: { key: string; label: string }[];
  exportFields?: FieldDefType[];
  subject: string;
  app: string;
  path: string;

  autocompleteList: AutocompleteItem[];
  defaultFilters: DefaultFilterItem[];
  defaultGroups: DefaultGroupItem[];

  enableMap: boolean;
  enableChart: boolean;

  hideCreate: boolean;
  hideImport: boolean;
  xlsx: boolean;

  enableActions?: boolean;

  scopedSlots?: any;
  // _scopedSlots: any;
  filtersName: string[];

  // flatFilters: any[]

  disableEdit?: boolean;

  validationSchemaObj?: any;
  getVariables: any;
};

export type ExportProps = {
  query: string;
  subject: string;
  disable: boolean;
  fields: FieldDefType[];
  flatInput: any[];

  dispatch: any;

  siteInput?: any[];
  groupBy?: any[];
  attrInput?: any[];
  cellInput?: any[];
  farInput?: any[];
  itemFlatInput?: any[];
  itemCommodityInput?: any[];
  pmInput?: any[];

  startDate?: any;
  start?: any;
  end?: any;
  pmGroupBy?: any;
  pmInterval?: any;
  hmPageSize?: number;
  pmAfterKey?: any;
  pmChartPageSize?: number;
  pmChartGroupBy?: any;
  pmChartInterval?: any;
};

type Continent = {
  code: string;
  countries: Country[];
  name: string;
};

type Language = {
  code: string;
  name: string;
  native: string;
  rtl: boolean;
};

type State = {
  code: string;
  country: Country;
  name: string;
};

export type Country = {
  awsRegion: string;
  capital: string;
  code: string;
  continent: Continent;
  currencies: [string];
  currency: string;
  emoji: string;
  emojiU: string;
  languages: Language[];
  name: string;
  native: string;
  phone: string;
  phones: string[];
  states: State[];
};
