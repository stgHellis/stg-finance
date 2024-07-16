import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};
const Page = () => {
  return (
    <div>
      <p className="text-3xl font-bold">Customers Page</p>
    </div>
  );
};

export default Page;
