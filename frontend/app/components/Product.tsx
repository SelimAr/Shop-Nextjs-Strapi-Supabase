import React from "react";
import { ProductsType } from "@/type";

export default function Product(props: ProductsType) {
  const { uid, title } = props;
  return (
    <div key={uid} className="font-arimo text-black">
      nom du produit: {title}
    </div>
  );
}
