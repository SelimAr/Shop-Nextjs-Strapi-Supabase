import type { Metadata } from "next";
import { Arimo, Playwrite_SK } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const arimo = Arimo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-arimo",
});

const psk = Playwrite_SK({
  weight: ["400"],
  variable: "--font-psk",
});

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arimo.variable} ${psk.variable} block mx-auto w-full max-w-6xl p-2 my-5 `}
      >
        {children}
        <Navigation />
      </body>
    </html>
  );
}
