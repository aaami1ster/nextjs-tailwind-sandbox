import createApolloClient from "@/apollo.client";
import { gql } from "@apollo/client";

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

export async function getList(aquery: string) {
  console.log("getList...");
  // console.log(aquery)
  let res: any[] = [];

  try {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`${aquery}`,
    });
    console.log(data);
    res = data.data.slice(0, 4);
    
  } catch (error) {
    console.error(error);
  }

  return res;
}

export async function getOne(aquery: string, variables: any) {
  console.log("getOne...");
  let res: any;

  try {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`${aquery}`,
      variables,
    });

    res = data.data;
    // console.log(data);
  } catch (error) {}

  return res;
}
