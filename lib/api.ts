import createApolloClient from "@/apollo.client";
import { gql } from "@apollo/client";

export async function getCountries() {
  console.log("getCountries...");
  let countries: any[] = [];

  try {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query Countries {
          countries {
            code
            name
            currency
            emoji
          }
        }
      `,
    });

    countries = data.countries.slice(0, 4);
    console.log(countries);
  } catch (error) {}

  return countries;
}

export async function getCountry(code: string) {
  console.log("getCountry...");
  let country: any;

  try {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query country($code: ID!) {
          country(code: $code) {
            code
            name
            currency
            emoji
          }
        }
      `,
      variables: { code },
    });

    country = data.country;
    console.log(data);
  } catch (error) {}

  return country;
}
