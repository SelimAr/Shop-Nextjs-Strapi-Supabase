import React, { useState } from "react";
import Link from "next/link";
import { footerLinks } from "@/lib/footerLinks";

export default function Footer() {
  return (
    <footer className="w-full flex justify-around">
      {footerLinks.map((links) => (
        <ul key={links.id} className="block space-y-3">
          <p className="font-semibold text-xl">{links.name}</p>
          {links.subName.map((subLinks) => (
            <Link
              key={subLinks.id}
              href={subLinks.name.toLowerCase()}
              className="block"
            >
              {subLinks.name}
            </Link>
          ))}
        </ul>
      ))}
    </footer>
  );
}
