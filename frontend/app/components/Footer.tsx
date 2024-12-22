import React from "react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    {
      id: 1,
      name: "Contacts",
      subName: [
        { id: 1, name: "Instagram" },
        { id: 2, name: "Facebook" },
        { id: 3, name: "Linkedin" },
      ],
    },
    {
      id: 2,
      name: "Security",
      subName: [
        { id: 1, name: "Centre de securité" },
        { id: 2, name: "Politique de confidentialité" },
        { id: 3, name: "Conditions générale d'utilisation" },
      ],
    },
    {
      id: 3,
      name: "Accès aux entreprises",
      subName: [
        { id: 1, name: "Professionnels" },
        { id: 2, name: "Grandes écoles" },
        { id: 3, name: "Standards de gouvernances" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-slate-300 flex justify-around">
      {/*{footerLinks.map((link) => (
        <div key={link.id} className="block">
          {link.name}

          {footerLinks.map( subLink => subLink.map( link ))}

          {/*<Link href={link.subName.name} className="underline">
            {link.subName.name}
          </Link>
        </div>
      ))}*/}
    </footer>
  );
}
