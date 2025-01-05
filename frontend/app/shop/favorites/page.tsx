"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function FavoritesItems() {
  const supabase = createClient();
  const router = useRouter();
  const [isFavItems, setIsFavItems] = useState<any[]>([]);

  const getUid = async () => {
    try {
      const { data, error } = await supabase.from("favorites").select("uid");

      if (data) {
        setIsFavItems(data);
      } else if (error) {
        console.log(error);
      }
    } catch (error) {
      throw Error;
    }
  };

  useEffect(() => {
    getUid();
  }, [getUid]);

  return (
    <>
      {isFavItems.map((item: any) => (
        <div
          key={item.uid}
          onClick={() => router.push(`/shop/favorites/${item.uid}`)}
          className="bg-slate-300 rounded-md p-2 w-fit cursor-pointer"
        >
          {item.uid}
        </div>
      ))}
    </>
  );
}
