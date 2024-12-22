import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";

export default function ProductsCounter() {
  const [isCounter, setIsCounter] = useState(1);
  return (
    <div className="flex justify-center space-x-2.5">
      <Button
        children={<Minus size={25} />}
        onClick={() => setIsCounter(isCounter - 1)}
        disabled={isCounter < 1}
      />
      <Input
        className="border-black border p-2 rounded-md text-black text-lg text-center"
        defaultValue={isCounter}
      />
      <Button
        children={<Plus size={25} />}
        onClick={() => setIsCounter(isCounter + 1)}
        disabled={isCounter === 99}
      />
    </div>
  );
}
