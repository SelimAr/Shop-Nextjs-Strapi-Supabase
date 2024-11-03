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

export default function ProductCards() {
  const router = useRouter();
  // test front
  return (
    <Card onClick={() => router.push("/shop/productID")}>
      <CardHeader>
        <CardTitle>Iphone 16 Pro</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={img_test}
          alt="test"
          width={200}
          height={250}
          className="objet-cover rounded-lg"
        />
      </CardContent>
      <CardFooter>
        <CardDescription>Ceci est un iphone 16 Pro</CardDescription>
        <p>1300€</p>
      </CardFooter>
    </Card>
  );
}
