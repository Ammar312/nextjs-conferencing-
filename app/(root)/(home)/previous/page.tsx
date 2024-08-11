import CallList from "@/components/CallList";
import React from "react";

const PreviousPage = () => {
  return (
    <section className="flex flex-col gap-10 size-full text-white">
      <h1 className="text-3xl font-bold">Previous Calls</h1>
      <CallList type="ended" />
    </section>
  );
};

export default PreviousPage;