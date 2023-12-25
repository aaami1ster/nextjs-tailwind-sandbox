import React from "react";
import ListControlPanel from "@/components/list/ListControlPanel";
import ListView from "@/components/list/Table";
import SearchPanel from "@/components/layout/SearchPanel";
import { getList } from "@/lib/api";
import countryConfigs from "./country.config";
import { Country } from "@/lib/types";

type Props = {};

const page = async (props: Props) => {
  console.log("data list...");
  let data: Country[] = [];

  data = await getList(countryConfigs.getListQuery);

  return (
    <>
      <ListControlPanel config={countryConfigs} />
      <main className="flex-1 flex">
        <SearchPanel config={countryConfigs} />
        <div className="flex-1">
          <ListView config={countryConfigs} data={data} />
        </div>
      </main>
    </>
  );
};

export default page;
