import React from "react";
import Image from "next/image";
import { ProductsType } from "@/type";

export default function MediaCollection(props: ProductsType) {
  const { uid, title, media_single } = props;
  const imgURL = "http://localhost:1337" + media_single.url;
  return (
    <div key={uid} className="row-span-1 col-span-1 cursor-pointer">
      <Image
        src={imgURL}
        alt={title}
        width={250}
        height={250}
        className="object-cover rounded-lg"
      />
    </div>
  );
}
