import FormView from "@/components/layout/FormView";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return (
    <div className="flex-1">
      <FormView id={id} />
    </div>
  );
};

export default page;
