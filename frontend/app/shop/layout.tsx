import React from "react";
import SearchBar from "../components/SearchBar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-5">
      <SearchBar />
      {children}
    </div>
  );
}
