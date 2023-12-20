import { scopedSlotType } from './types'

export const generateScopedSlots = (sc: scopedSlotType) => {
  // console.log('................................')
  const res: any = {}
  for (const key in sc) {
    if (Object.prototype.hasOwnProperty.call(sc, key)) {
      res[key] = (item: any) => <td>{sc[key](item)}</td>
    }
  }
  return res
}

export const createQuery = (subject: string, params: string[] = ['_id', 'name']) => {
  return `mutation ${subject}Create($createInput: Create${subject}Input!){
    data:${subject}Create(createInput: $createInput){${params.join()}}
  }`
}

export const updateQuery = (subject: string, params: string[] = ['_id', 'name']) => {
  return `mutation ${subject}Update($id: ID!, $updateInput: Update${subject}Input!){
      data:${subject}Update(id: $id, updateInput: $updateInput){${params.join()}}
    }
    `
}

export const importQuery = (
  subject: string,
  params: string[] = ['status', 'message', 'total', 'updated', 'created'],
) => {
  return `mutation ${subject}Import($importInput: [Update${subject}Input!]!){
      data:${subject}Import(importInput: $importInput){${params.join()}}
    }
    `
}

export const getOneQuery = (subject: string, params: string[] = ['_id', 'name']) => {
  return `query ${subject}FindById($id: String!){
    data:${subject}FindById(id: $id){${params.join()}}
  }
  `
}

export const getQuery = (
  key: string,
  params: string[] = ['_id', 'name', 'createdAt', 'updatedAt'],
  isElkAgg = false,
) => {
  // console.log(key)
  return `
    query ${key}List(
      $flatInput: [FilterObject!],
      $listInput: [FilterListObject!],
      $limit: Int!,
      $skip: Int!,
      ${isElkAgg ? '$after_key: AfterKeyObject,' : ''}
      $groupBy: String){
      data:${key}List(
        flatInput: $flatInput,
        listInput: $listInput,
        limit: $limit,
        skip: $skip,
        ${isElkAgg ? 'after_key: $after_key,' : ''}
        groupBy: $groupBy){
        data{${params.join()}},  ${isElkAgg ? 'after_key{item}' : ''}, total
      }
    }
  `
}

export const extractQuery = (key: string) => {
  // console.log(key)
  return `
      query ${key}Extract(
        $flatInput: [FilterObject!],
        $listInput: [FilterListObject!],
        $fieldsToExport: [ExportFieldType!]
        $importCompatibleExport: Boolean
        $limit: Int!, $skip: Int!){
        data:${key}Extract(
          flatInput: $flatInput,
          listInput: $listInput,
          fieldsToExport: $fieldsToExport,
          importCompatibleExport: $importCompatibleExport,
          limit: $limit, skip: $skip){ url }
      }
    `
}

export const aggQuery = (key: string, after_key = false) => {
  // console.log(key)
  return `
      query ${key}Agg(
        $flatInput: [FilterObject!],
        $listInput: [FilterListObject!],
        $groupBy: String,
        ${after_key ? '$after_key: AfterKeyObject,' : ''}
        $order: String,
        $limit: Int!, $skip: Int!){
        data:${key}Agg(
          flatInput: $flatInput,
          listInput: $listInput,
          groupBy: $groupBy,
          ${after_key ? 'after_key: $after_key,' : ''}
          order: $order,
          limit: $limit, skip: $skip){
            data {
              _id{_id, name},
              count
            },
            ${after_key ? 'after_key{item}' : ''}
            total
          }
      }
    `
}
