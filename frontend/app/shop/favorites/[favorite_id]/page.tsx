import React from "react";
import { ProductsType } from "@/type";
import Product from "@/app/components/Product";

export default async function page({
  params,
}: {
  params: Promise<{ favorite_id: number }>;
}) {
  const uid = (await params).favorite_id;

  const favProductDataURL = `http://localhost:1337/api/products?filters[uid][$eq]=${uid}`;

  const Options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `bearer ${process.env.STRAPI_API_KEY}`,
    },
  };

  async function fetchFavProductData() {
    const res = await fetch(favProductDataURL, Options);
    if (!res) {
      return console.log(Error);
    }
    return res.json();
  }

  const getFavProductData = await fetchFavProductData();
  //console.log(getProductData.data);
  return (
    <>
      {getFavProductData.data?.length > 0 &&
        getFavProductData.data.map((product: ProductsType) => (
          <Product key={product.uid} {...product} />
        ))}
    </>
  );
}
