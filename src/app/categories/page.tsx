"use client";

import { useGetProductsQuery } from "@/services/fakeStoreApi";
import { DataTable } from "./data-table";
import { columns } from "./columns";


export default function ProductList() {
  const { data, isLoading, error } = useGetProductsQuery();

  console.log("Data:", data);
  console.log("Loading:", isLoading);
  console.log("Error:", error);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products</p>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data??[]}/>
      {/* <DataTable columns={columns(router)} data={data}/> */}
    </div>
  );
}