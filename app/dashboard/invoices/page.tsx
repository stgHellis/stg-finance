import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoices",
};

export default async function Page() {
  return (
    <div>
      <p className="text-3xl font-bold">Invoices Page</p>
    </div>
  );
}
