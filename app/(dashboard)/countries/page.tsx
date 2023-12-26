import React from "react";
import countryConfigs from "./country.config";

import ListView from "@/components/list/ListView";

type Props = {};

const page = async (props: Props) => {
  console.log("data list...");

  return <ListView config={countryConfigs} />;
};

export default page;
