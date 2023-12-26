import React, { Suspense } from "react";
import FormControlPanel from "@/components/forms/FormControlPanel";
import Form from "@/components/forms/Form";
import { getOne } from "@/lib/api";
import { notFound } from "next/navigation";
import { ConfigProps } from "@/lib/types";

type Props = { config: ConfigProps; id: string; variables: any; };

const page = async ({ id, config, variables }: Props) => {
  const data = await getOne(config.getOneQuery, variables);
  if (!data) {
    notFound();
  }
  return (
    <>
      <FormControlPanel
        config={config}
        id={id}
        title={data.name}
      />
      <main className="flex-1">
        <Suspense fallback={<div>loading...</div>}>
          <Form config={config} variables={variables} />
        </Suspense>
      </main>
    </>
  );
};

export default page;
