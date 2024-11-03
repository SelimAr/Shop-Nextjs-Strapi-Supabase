import React from "react";
import Image from "next/image";
import img_test from "@/public/img_test.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProductCards from "../components/ProductCards";
import { ProductsType } from "@/type";

const shopDataURL = `http://localhost:1337/api/product-names`;

const Options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `bearer ${process.env.STRAPI_API_KEY}`,
  },
};

async function fetchShopData() {
  const res = await fetch(shopDataURL, Options);
  if (!res) {
    return console.log(Error);
  }
  return res.json();
}

export default async function page() {
  const getShopData = await fetchShopData();
  //console.log(getData);
  return (
    <div className="space-y-8">
      <div className="text-4xl mx-auto w-fit h-fit font-semibold font-psk">
        Vous L'imaginiez, il l'a fait.
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-3 w-fit h-fit mx-auto ">
        <div className="row-span-1 col-span-1 cursor-pointer">
          <Image
            src={img_test}
            alt="test"
            width={250}
            height={250}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="row-span-1 col-span-1 cursor-pointer">
          <Image
            src={img_test}
            alt="test"
            width={250}
            height={250}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="row-span-1 col-span-1 cursor-pointer">
          <Image
            src={img_test}
            alt="test"
            width={250}
            height={250}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="row-span-1 col-span-1 cursor-pointer">
          <Image
            src={img_test}
            alt="test"
            width={250}
            height={250}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="row-span-2 col-span-2 w-fit h-fit">
          <Image
            src={img_test}
            alt="test"
            width={525}
            height={525}
            className=" rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        {/*{getShopData?.map((product: ProductsType) => (
          <ProductCards key={product.product_id} />
        ))}*/}
      </div>
      <div className="mx-auto w-full max-w-xl font-arimo">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Ces produits sont ils aux normes européennes ?
            </AccordionTrigger>
            <AccordionContent>
              Oui, ces produits sont aux normes et standards européens.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Ces produits sont ils aux normes européennes ?
            </AccordionTrigger>
            <AccordionContent>
              Oui, ces produits sont aux normes et standards européens.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
