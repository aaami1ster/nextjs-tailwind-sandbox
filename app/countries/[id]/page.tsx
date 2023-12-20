import FormControlPanel from "@/components/layout/FormControlPanel";
import FormView from "@/components/layout/forms/FormView";
import { getCountry } from "@/lib/api";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const country = await getCountry(id);
  return (
    <>
      <FormControlPanel id={country.code} title={country.name} />
      <main className="flex-1">
          <FormView data={country} />
      </main>
    </>
  );
};

export default page;
