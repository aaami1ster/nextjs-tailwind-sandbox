import ListControlPanel from "@/components/layout/ListControlPanel";
import ListView from "@/components/layout/ListView";
import SearchPanel from "@/components/layout/SearchPanel";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <ListControlPanel />
      <main className="flex-1 flex">
        <SearchPanel />
        <div className="flex-1">
          <ListView />
        </div>
      </main>
    </>
  );
};

export default page;
