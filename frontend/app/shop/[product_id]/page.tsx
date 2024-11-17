import React, { use } from "react";
import { ProductsType } from "@/type";
import Product from "@/app/components/Product";
import ProductCards from "@/app/components/ProductCards";

export default async function page({
  params,
}: {
  params: Promise<{ product_id: string }>;
}) {
  const uid = (await params).product_id;
  const productDataURL = `http://localhost:1337/api/products?filters[uid][$eq]=${uid}`;

  const Options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `bearer ${process.env.STRAPI_API_KEY}`,
    },
  };

  async function fetchProductData() {
    const res = await fetch(productDataURL, Options);
    if (!res) {
      return console.log(Error);
    }
    return res.json();
  }

  const getProductData = await fetchProductData();
  //console.log(getProductData.data);

  return (
    <div>
      {getProductData.data?.length > 0 &&
        getProductData.data.map((product: ProductsType) => (
          <Product key={product.uid} {...product} />
        ))}
      <div className="text-red-500">{uid}</div>
    </div>
  );
}
