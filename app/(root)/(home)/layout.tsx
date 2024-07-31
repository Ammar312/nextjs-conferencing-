import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "YOOM",
  description: "A workspace for your team, powered by Stream Chat and Clerk.",
};
const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      Navbar
      <div className="flex">
        Sidebar
        <section className="min-h-screen flex flex-col flex-1 px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
