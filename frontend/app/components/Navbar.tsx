"use client";

import React from "react";
import { useActionState } from "react";
import { signout } from "../actions/auth";
import PathButton from "./PathButton";
import { Button } from "@/components/ui/button";
import { type User } from "@supabase/supabase-js";
import {
  Laptop,
  Smartphone,
  Headphones,
  ShoppingCart,
  UserRound,
  LogOut,
  Heart,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Navbar({ user }: { user: User | null }) {
  const [state, action, pending] = useActionState(signout, undefined);
  const pathMenu = [
    { id: 1, icon: <Laptop size={25} />, onPath: "/shop/laptops" },
    { id: 2, icon: <Smartphone size={25} />, onPath: "/shop/smartphones" },
    { id: 3, icon: <Headphones size={25} />, onPath: "/shop/accessories" },
  ];

  return (
    <div className="fixed m-auto inset-x-0 bottom-5 w-fit h-fit bg-black/10 p-1.5 space-x-5 flex items-center rounded-full backdrop-blur">
      {pathMenu.map((path) => (
        <div key={path.id} className="relative">
          <PathButton key={path.id} icon={path.icon} onPath={path.onPath} />
        </div>
      ))}
      <PathButton icon={<Heart size={25} />} onPath="/shop/favorites" />

      <Popover>
        <PopoverTrigger className="bg-transparent text-black hover:cursor-pointer hover:bg-black/15 p-1.5 rounded-full">
          <ShoppingCart size={25} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="text-xl font-semibold line-clamp-2 w-fit h-fit overflow">
            x3 Produits
          </div>
          <div className="max-w-fit max-h-44 overflow-y-auto">
            x1 MacBook Pro 14'
          </div>

          <PathButton
            onPath="/shop/review"
            className="bg-black/5 flex items-center mx-auto w-fit bottom-2 inset-x-0 absolute z-50"
          >
            Accéder au panier
          </PathButton>
        </PopoverContent>
      </Popover>

      <PathButton
        icon={<UserRound size={25} />}
        onPath={`${user ? "/account" : "/login"}`}
      >
        <span
          className={`${
            user ? "bg-green-500" : "bg-red-500"
          } absolute translate-x-1 -translate-y-8 w-3 h-3 rounded-full`}
        ></span>
      </PathButton>
      {user ? (
        <form action={action}>
          <Button
            disabled={pending}
            type="submit"
            className="bg-red-500/30 hover:bg-red-500/50 text-black hover:cursor-pointer p-1.5 rounded-full"
          >
            <LogOut size={25} />
          </Button>
        </form>
      ) : null}
    </div>
  );
}
