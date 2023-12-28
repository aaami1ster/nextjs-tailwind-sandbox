import moment from "moment";

export const getCountryScopedSlots = ({ key, value }: any) => {
  switch (key) {
    case 'continent':
      return value && value.name ? value.name : "";
    case 'createdAt':
    case 'updatedAt':
      return value ? moment(value).format() : ""
    default:
      return value;
  }
}

export const getEmployeeScopedSlots = ({ key, value }: any) => {
  switch (key) {
    case 'manager':
      return value && value.name ? value.name : "";

    case 'createdAt':
    case 'updatedAt':
      return value ? moment(value).format() : ""
    default:
      return value;
  }

}
