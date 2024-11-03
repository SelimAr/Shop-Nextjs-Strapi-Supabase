"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Product from "./Product";
import ProductLists from "./ProductLists";

export default function RenderPoduct() {
  const pathname = usePathname();
  const paths = ["laptops", "smartphones", "accessories", "review"];
  const currentPath = paths.find((path) => path === pathname.split("/")[2]);

  // commit test front

  return (
    <>
      {pathname === `/shop/${currentPath}` ? (
        <ProductLists />
      ) : pathname === `/shop/productID` ? (
        <Product />
      ) : null}
    </>
  );
}
