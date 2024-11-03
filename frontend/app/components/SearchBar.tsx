import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="flex w-full max-w-2xl items-center space-x-2 mx-auto font-arimo">
      <Input type="email" placeholder="Recherchez un produit..." />
      <Button type="submit">
        <Search size={25} />
      </Button>
    </form>
  );
}
