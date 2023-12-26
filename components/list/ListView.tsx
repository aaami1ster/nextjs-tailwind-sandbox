import { ConfigProps } from "@/lib/types";
import React from "react";
import ListControlPanel from "./ListControlPanel";
import Table from "./Table";
import SearchPanel from "../layout/SearchPanel";
import { getList } from "@/lib/api";

type Props = {
  config: ConfigProps;
};

const ListView = async ({ config }: Props) => {
  const data = await getList(config.getListQuery);
  return (
    <>
      <ListControlPanel config={config} />
      <main className="flex-1 flex">
        <SearchPanel config={config} />
        <div className="flex-1">
          <Table config={config} data={data} />
        </div>
      </main>
    </>
  );
};

export default ListView;
