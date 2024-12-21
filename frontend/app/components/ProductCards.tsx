"use client";

import React from "react";
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
  const { uid, title, description, media_single, media_slider, price } = props;
  const imgURL = "http://localhost:1337" + media_single.url;

  return (
    <Card
      key={uid}
      onClick={() => router.push(`/shop/${uid}?product=${title}`)}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={imgURL}
          alt={title}
          width={200}
          height={250}
          className="objet-cover rounded-lg mx-auto"
        />
      </CardContent>
      <CardFooter>
        <CardDescription>{description}</CardDescription>
        <p>{price}€</p>
      </CardFooter>
    </Card>
  );
}
