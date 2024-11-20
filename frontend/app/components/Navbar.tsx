"use client";

import React, { useState } from "react";
import {
  Laptop,
  Smartphone,
  Headphones,
  ShoppingCart,
  UserRound,
  LogIn,
  LogOut,
  Heart,
} from "lucide-react";
import PathButton from "./PathButton";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isShopppingCart, setIsShopppingCart] = useState(false);
  const pathMenu = [
    { id: 1, icon: <Laptop size={25} />, onPath: "/shop/laptops" },
    { id: 2, icon: <Smartphone size={25} />, onPath: "/shop/smartphones" },
    { id: 3, icon: <Headphones size={25} />, onPath: "/shop/accessories" },
  ];

  /**
   * TODO: Install Redux for global state store (shopping cart)
   * !test: try to put onPath attr on Button comp
   */

  return (
    <div className="fixed m-auto inset-x-0 bottom-5 w-fit h-fit bg-black/10 p-1.5 space-x-5 flex items-center rounded-full backdrop-blur">
      {pathMenu.map((path) => (
        <div key={path.id} className="relative">
          <PathButton key={path.id} icon={path.icon} onPath={path.onPath} />
        </div>
      ))}
      <PathButton icon={<Heart size={25} />} onPath="/shop/favorites" />
      <Button
        onClick={() => setIsShopppingCart(!isShopppingCart)}
        className="bg-transparent text-black hover:cursor-pointer hover:bg-black/15 p-1.5 rounded-full"
      >
        <ShoppingCart size={25} />
      </Button>
      {isShopppingCart ? (
        <div
          className="absolute bottom-14 left-16 rounded-lg border border-zinc-200 bg-white w-fit h-fit
        max-w-56 p-2 font-arimo block space-y-2"
        >
          <div className="text-xl font-semibold line-clamp-2 w-fit h-fit overflow">
            x3 Produits
          </div>
          <div className="max-w-fit max-h-44 overflow-y-auto">
            {/* List of shop cart products */}a word that refers to a lung
            disease contracted from the inhalation of very fine silica
            particles, specifically from a volcano; medically, it is the same as
            silicosis. fezf feef fe fe f ef ezfezfez it is the same as
            silicosis. fezf feef fe fe f ef ezfezfez
          </div>

          <PathButton
            onPath="/shop/review"
            className="bg-black/5 flex items-center mx-auto"
          >
            Accéder au panier
          </PathButton>
        </div>
      ) : null}
      <PathButton icon={<UserRound size={25} />} onPath="/account">
        <span className="absolute translate-x-1 -translate-y-8 bg-green-500 w-3 h-3 rounded-full"></span>
      </PathButton>
      <Button className="bg-transparent text-black hover:cursor-pointer hover:bg-black/15 p-1.5 rounded-full">
        <LogIn size={25} />
      </Button>
    </div>
  );
}
