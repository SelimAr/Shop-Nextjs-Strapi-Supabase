"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

export default function page() {
  const router = useRouter();
  return (
    <div>
      <div>account</div>
      <button
        className="bg-black/10 p-1.5 rounded-full"
        onClick={() => router.push("/shop")}
      >
        <MoveLeft size={25} />
      </button>
    </div>
  );
}
