import React from "react";
import Image from "next/image";
import { ProductsType } from "@/type";

export default function MediaCollection(props: ProductsType) {
  const { uid, title, media_single } = props;
  return (
    <div key={uid} className="row-span-1 col-span-1 cursor-pointer">
      <Image
        src={`http://localhost:1337${media_single.url}`}
        alt={title}
        width={232}
        height={200}
        className="object-cover rounded-lg"
      />
    </div>
  );
}
