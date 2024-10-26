import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: "100"
});

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
      <body className={lato.className + "font-lato relative"}>
        {/* <Nav />         */}
        <div className="pt-20 font-kelson_sans">{children}</div>
        </body>
    </html>
  );
}
