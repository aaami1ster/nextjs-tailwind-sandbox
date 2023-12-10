import FormView from "@/components/layout/FormView";
import SearchPanel from "@/components/layout/SearchPanel";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      {/* <SearchPanel /> */}
      <div className="flex-1">
        <FormView />
      </div>
    </>
  );
};

export default Home;
