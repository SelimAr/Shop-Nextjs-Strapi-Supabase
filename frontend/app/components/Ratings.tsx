import React from "react";
import { Star } from "lucide-react";

export default function Ratings() {
  return (
    <div className="block font-arimo space-y-3">
      <div className="flex items-center space-x-3">
        <p className="font-semibold text-3xl">3.8</p>
        <Star size={25} className="" color="yellow" />
      </div>
      <div className="italic">Avis client</div>
    </div>
  );
}
