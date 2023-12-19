import ListControlPanel from "@/components/layout/ListControlPanel";
import ListView from "@/components/layout/ListView";
import SearchPanel from "@/components/layout/SearchPanel";
import React, { useContext } from "react";
import { countryFields } from "./countryFields";
import { getCountries } from "@/lib/api";
import {AppContext} from "@/context/AppContext";

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

type Country = {
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

type Props = {
  countries: {
    code: string;
    name: string;
    emoji: string;
  }[];
};

const page = async (props: Props) => {
  console.log("countries...");
  const countries = await getCountries();
  return (
    <>
      <ListControlPanel />
      <main className="flex-1 flex">
        <SearchPanel />
        <div className="flex-1">
          <ListView fields={countryFields} data={countries} />
        </div>
      </main>
    </>
  );
};

// export async function getStaticProps() {
//   console.log("getInitialProps...");
//   let countries: any[] = [];

//   try {
//     const client = createApolloClient();
//     const { data } = await client.query({
//       query: gql`
//         query Countries {
//           countries {
//             code
//             name
//             emoji
//           }
//         }
//       `,
//     });

//     countries = data.countries.slice(0, 4);
//     console.log(countries);
//   } catch (error) {}

//   return { countries };
// };

export default page;
