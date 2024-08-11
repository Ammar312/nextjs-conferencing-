import CallList from "@/components/CallList";
import React from "react";

const UpcomingPage = () => {
  return (
    <section className="flex flex-col gap-10 size-full text-white">
      <h1 className="text-3xl font-bold">Upcoming Meeting</h1>
      <CallList type="upcoming" />
    </section>
  );
};

export default UpcomingPage;