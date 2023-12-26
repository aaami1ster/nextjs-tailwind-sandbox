import { string } from "yup";

import { FieldDefType } from "@/lib/types";

export const countryFormicInitialValues = {
  name: (item: any) => (item.name ? item.name : ""),
  code: (item: any) => (item.code ? item.code : ""),
};

export const countryValidationSchemaObj = {
  name: string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  code: string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
};

export const countryParams = [
  "name",
  "code",
  "awsRegion",
  "capital",
  "continent{name}",
  // 'currencies',
  "currency",
  "emoji",
  // 'emojiU',
  // 'languages{name}',
  "native",
  "phone",
  // 'phones',
  // 'states{name}'
];

export const countryFields: FieldDefType[] = [
  // {
  //   name: "id",
  //   label: "ID",
  //   // info: "",
  //   type: "text"
  // },
  {
    name: "emoji",
    label: "Emoji",
    type: "text",
    listView: true,
    editable: true,
  },
  {
    name: "name",
    label: "Name",
    type: "text",
    listView: true,
    editable: true,
  },
  {
    name: "native",
    label: "Native",
    type: "text",
    listView: true,
    editable: true,
  },
  {
    name: "capital",
    label: "Capital",
    type: "text",
    listView: true,
    editable: true,
  },
  {
    name: "code",
    label: "Code",
    type: "text",
    listView: true,
    editable: true,
  },
  {
    name: "currency",
    label: "Currency",
    type: "text",
    listView: true,
    editable: true,
  },
  {
    name: "continent",
    label: "Continent",
    type: "object",
    listView: true,
    editable: true,
  },
  {
    name: "currencies",
    label: "Currencies",
    type: "text_array",
    listView: false,
    editable: false,
  },
  {
    name: "emojiU",
    label: "EmojiU",
    type: "text",
    listView: false,
    editable: false,
  },
  {
    name: "languages",
    label: "Languages",
    type: "object_array",
    listView: false,
    editable: false,
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
    listView: true,
    editable: true,
  },
  {
    name: "phones",
    label: "Phones",
    type: "text_array",
    listView: false,
    editable: false,
  },
  {
    name: "states",
    label: "States",
    type: "object_array",
    listView: false,
    editable: false,
  },
];
