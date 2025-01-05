import React from "react";
import MediaCollection from "../components/MediaCollection";
import ProductCards from "../components/ProductCards";
import { ProductsType } from "@/type";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const shopDataURL = `http://localhost:1337/api/products?populate[media_single][fields][0]=url`;

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
  //console.log(getShopData.data);
  return (
    <div className="space-y-10 px-5">
      <div className="text-4xl mx-auto w-fit h-fit font-semibold font-psk">
        Vous L'imaginiez, il l'a fait.
      </div>

      <div
        className="grid grid-rows-2 grid-flow-col gap-3 justify-center items-center w-full h-fit max-w-[67rem] 
      mx-auto max-[1000px]:flex-wrap"
      >
        {getShopData.data.length > 0 &&
          getShopData.data.map((mediaLib: ProductsType) => (
            <MediaCollection key={mediaLib.uid} {...mediaLib} />
          ))}
        <div className="row-span-2 col-span-2 w-full h-fit">
          <Carousel sliderData={getShopData.data} />
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        {getShopData.data.length > 0 &&
          getShopData.data.map((product: ProductsType) => (
            <ProductCards key={product.uid} {...product} />
          ))}
      </div>
      <div className="mx-auto w-full max-w-4xl font-arimo">
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
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Ces produits sont ils aux normes européennes ?
            </AccordionTrigger>
            <AccordionContent>
              Oui, ces produits sont aux normes et standards européens.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}
