// src/app/layout.tsx
"use client"; // Mark this component as a client component

import "./globals.css";
import { Poppins } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { metadata } from "./metadata"; // Import metadata

const poppins_init = Poppins({
  subsets: [],
  variable: "--font-poppins",
  weight: ["300"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of animations
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <title>
          {typeof metadata.title === "string"
            ? metadata.title
            : "Default Title"}
        </title>
        <meta name="description" content={metadata.description || ""} />
        
      </head>
      <body className={poppins_init.variable}>{children}</body>
    </html>
  );
}
