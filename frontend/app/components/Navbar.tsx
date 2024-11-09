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
} from "lucide-react";
import PathButton from "./PathButton";

export default function Navbar() {
  const [isShopppingCart, setIsShopppingCart] = useState(false);
  const pathMenu = [
    { id: 1, icon: <Laptop size={25} />, onPath: "/shop/laptops" },
    { id: 2, icon: <Smartphone size={25} />, onPath: "/shop/smartphones" },
    { id: 3, icon: <Headphones size={25} />, onPath: "/shop/accessories" },
  ];

  /**
   * TODO: Install Redux for global state store (shopping cart)
   * TODO: Get out ShoppingCart Item & UserRound Item of navbar for interact with modal and auth
   */

  return (
    <div className="fixed m-auto inset-x-0 bottom-5 w-fit h-fit bg-black/10 p-1.5 space-x-5 flex items-center rounded-full backdrop-blur">
      {pathMenu.map((path) => (
        <div key={path.id} className="relative">
          <PathButton key={path.id} icon={path.icon} onPath={path.onPath} />
        </div>
      ))}
      <button
        onClick={() => setIsShopppingCart(!isShopppingCart)}
        className="text-black hover:cursor-pointer hover:bg-black/15 p-1.5 rounded-full"
      >
        <ShoppingCart size={25} />
      </button>
      {isShopppingCart ? (
        <div className="absolute -translate-y-12 translate-x-40 border border-black rounded-lg p-1">
          <PathButton icon={<ShoppingCart size={25} />} onPath="/shop/review" />
        </div>
      ) : null}
      <PathButton icon={<UserRound size={25} />} onPath="/account">
        <span className="absolute translate-x-1 -translate-y-8 bg-green-500 w-3 h-3 rounded-full"></span>
      </PathButton>
      <button className="text-black hover:cursor-pointer hover:bg-black/15 p-1.5 rounded-full">
        <LogIn size={25} />
      </button>
    </div>
  );
}
