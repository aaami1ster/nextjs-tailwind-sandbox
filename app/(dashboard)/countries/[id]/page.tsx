import React from "react";
import FormControlPanel from "@/components/layout/FormControlPanel";
import FormView from "@/components/layout/forms/FormView";
import { getOne } from "@/lib/api";
import countryConfigs from "../country.config";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const country = await getOne(countryConfigs.getOneQuery, { code: id });
  if (!country) {
    notFound();
  }
  return (
    <>
      <FormControlPanel config={countryConfigs} id={country.code} title={country.name} />
      <main className="flex-1">
          <FormView config={countryConfigs} data={country} />
      </main>
    </>
  );
};

export default page;
