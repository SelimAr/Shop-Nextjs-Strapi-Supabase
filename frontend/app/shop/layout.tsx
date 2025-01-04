import React from "react";
import SearchBar from "../components/SearchBar";
import BreadCrumb from "../components/BreadCrumb";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-5 mb-14">
      <SearchBar />
      <BreadCrumb />
      {children}
    </div>
  );
}
