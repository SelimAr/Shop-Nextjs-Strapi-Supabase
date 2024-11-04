"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import img_test from "@/public/img_test.jpg";
import { useRouter } from "next/navigation";
import { ProductsType } from "@/type";

export default function ProductCards(props: ProductsType) {
  const router = useRouter();
  const {
    product_id,
    product_name,
    product_desc,
    product_img_slider,
    product_img_single,
    product_price,
  } = props;

  return (
    <Card key={product_id} onClick={() => router.push(`/shop/${product_name}`)}>
      <CardHeader>
        <CardTitle>{product_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={product_img_single || img_test}
          alt={product_name}
          width={200}
          height={250}
          className="objet-cover rounded-lg mx-auto"
        />
      </CardContent>
      <CardFooter>
        <CardDescription>{product_desc}</CardDescription>
        <p>{product_price}€</p>
      </CardFooter>
    </Card>
  );
}
