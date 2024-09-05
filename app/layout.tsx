import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ESN Leonardo Kortrijk",
  description: "",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    } as Icon,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "relative"}>
        <Nav />        
        <div className="pt-20">{children}</div>
        </body>
    </html>
  );
}
