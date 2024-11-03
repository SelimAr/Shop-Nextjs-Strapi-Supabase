"use client";

import React from "react";
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
  const pathMenu = [
    { id: 1, icon: <Laptop size={25} />, onPath: "/shop/laptops" },
    { id: 2, icon: <Smartphone size={25} />, onPath: "/shop/smartphones" },
    { id: 3, icon: <Headphones size={25} />, onPath: "/shop/accessories" },
    { id: 4, icon: <ShoppingCart size={25} />, onPath: "/shop/review" },
    { id: 5, icon: <UserRound size={25} />, onPath: "/account" },
  ];

  return (
    <div className="fixed m-auto inset-x-0 bottom-5 w-fit h-fit bg-black/10 p-1.5 space-x-5 flex items-center rounded-full backdrop-blur">
      {pathMenu.map((path) => (
        <div key={path.id} className="relative">
          <PathButton key={path.id} icon={path.icon} onPath={path.onPath} />
          {path.id === 5 && (
            <div className="absolute translate-x-6 -translate-y-10 bg-green-500 w-3 h-3 rounded-full"></div>
          )}
        </div>
      ))}
      <button className="text-black hover:cursor-pointer hover:bg-black/15 p-1.5 rounded-full">
        <LogIn size={25} />
      </button>
    </div>
  );
}
