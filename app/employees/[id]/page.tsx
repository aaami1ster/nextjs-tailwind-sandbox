import FormControlPanel from "@/components/layout/FormControlPanel";
import FormView from "@/components/layout/forms/FormView";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return (
    <>
      <FormControlPanel />
      <main className="flex-1">
          <FormView id={id} />
      </main>
    </>
  );
};

export default page;
