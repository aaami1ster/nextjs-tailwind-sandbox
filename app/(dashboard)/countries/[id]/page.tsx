import React, { Suspense } from "react";
import FormControlPanel from "@/components/forms/FormControlPanel";
import Form from "@/components/forms/Form";
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
      <FormControlPanel
        config={countryConfigs}
        id={country.code}
        title={country.name}
      />
      <main className="flex-1">
        <Suspense fallback={<div>loading...</div>}>
          <Form config={countryConfigs} variables={{ code: id }} />
        </Suspense>
      </main>
    </>
  );
};

export default page;
