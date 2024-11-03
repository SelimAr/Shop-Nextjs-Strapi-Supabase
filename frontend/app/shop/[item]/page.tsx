"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { MoveLeft } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import RenderPoduct from "@/app/components/RenderPoduct";

export default function page() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div>
      <button
        className="bg-black/10 p-1.5 rounded-full hover:bg-black/15"
        onClick={() => router.push("/shop")}
      >
        <MoveLeft size={25} />
      </button>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{pathname}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <RenderPoduct />
    </div>
  );
}
