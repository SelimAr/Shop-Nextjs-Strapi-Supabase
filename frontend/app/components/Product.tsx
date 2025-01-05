"use client";

import React from "react";
import { ProductsType } from "@/type";
import Image from "next/image";
import { Heart, HeartOff, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Ratings from "./Ratings";
import { Textarea } from "@/components/ui/textarea";
import ProductsCounter from "./ProductsCounter";

export default function Product(props: ProductsType) {
  const { uid, title, description, price, media_single, media_slider } = props;
  const imgURL = "http://localhost:1337" + media_single.url;
  return (
    <div
      key={uid}
      className="font-arimo px-14 space-y-5 w-full h-full block text-black "
    >
      <div className="flex justify-between">
        <div>
          <Image
            src={imgURL}
            alt={title}
            width={1920}
            height={1080}
            className="rounded-xl max-w-2xl"
          />
        </div>
        <div className="block space-y-3 w-full max-w-60">
          <p className="text-3xl w-full">{title}</p>
          <p className="text-2xl font-semibold">{price}€</p>
          <p className="text-md">{description}</p>
          {/* Insert uid with sb function when click */}
          <Button size="lg" className="w-full max-w-60">
            Favoris <Heart size={25} />
          </Button>
          <ProductsCounter />
          <Button size="lg" className="w-full max-w-60">
            Ajouter au panier <ShoppingCart size={25} />
          </Button>
        </div>
      </div>
      <div className="space-y-5">
        <Ratings />
        <form className="space-y-3">
          <Textarea />
          <Button>Commenter</Button>
        </form>
      </div>
    </div>
  );
}
