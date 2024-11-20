import React from "react";
import { ProductsType } from "@/type";
import Image from "next/image";
import img_test from "@/public/img_test.jpg";
import { Heart, HeartOff, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Product(props: ProductsType) {
  const { uid, title, description, price, media_single, media_slider } = props;
  return (
    <div
      key={uid}
      className="font-arimo bg-slate-300 w-full h-full block text-black "
    >
      <div className="flex justify-around space-x-10">
        <div>
          <Image
            src={media_single || img_test}
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
          <Button size="lg" className="w-full max-w-60">
            Ajouter au panier <ShoppingCart size={25} />
          </Button>
        </div>
      </div>
    </div>
  );
}
