"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Product from "./Product";
import ProductLists from "./ProductLists";

export default function RenderPoduct() {
  const pathname = usePathname();
  const paths = [
    { id: 1, pathEn: "laptops", pathFr: "ordinateurs portable" },
    { id: 2, pathEn: "smartphones", pathFr: "téléphones mobile" },
    { id: 3, pathEn: "accessories", pathFr: "accessoires" },
    { id: 4, pathEn: "review", pathFr: "panier" },
  ];
  const currentPath = paths.find(
    (path) => path.pathEn === pathname.split("/")[2]
  );

  return (
    <>
      {pathname === `/shop/${currentPath?.pathEn}` ? (
        <ProductLists path={currentPath?.pathFr} />
      ) : pathname === `/shop/productID` ? (
        <Product />
      ) : null}
    </>
  );
}
