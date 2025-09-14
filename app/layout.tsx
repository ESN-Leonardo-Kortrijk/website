import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className + " font-lato relative"}>
        {/* Responsive top color bar with small white gaps, disappears on scroll */}
        <div
          className="flex w-full h-2 fixed top-0 left-0 z-50 transition-opacity duration-300"
          id="color-bar"
        >
          <div className="flex-1 bg-[#00aeef]" />
          <div className="w-0.5 bg-white" />
          <div className="flex-1 bg-[#ec008c]" />
          <div className="w-0.5 bg-white" />
          <div className="flex-1 bg-[#7ac143]" />
          <div className="w-0.5 bg-white" />
          <div className="flex-1 bg-[#f47b20]" />
          <div className="w-0.5 bg-white" />
          <div className="flex-1 bg-[#2e3192]" />
        </div>
        {/* Header with logo and navbar */}
        <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-white z-40 shadow" style={{ marginTop: 0 }}>
          {/* Logo top-left */}
          <a href="/" className="flex items-center">
            <Image
              src="/images/ESN_Leo_logo.png"
              alt="ESN Leonardo Kortrijk Logo"
              width={200}
              height={200}
              className="h-20 w-auto"
              priority
            />
          </a>
          {/* Responsive Navbar */}
        </header>
        {/* Social media floating balls */}
        <div className="fixed right-6 top-1/2 z-40 flex flex-col gap-4 -translate-y-1/2">
          <a
            href="https://facebook.com/ErasmusatKortrijk"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white group-hover:text-esn-cyan" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12" />
              </svg>
            </div>
          </a>
          <a
            href="https://instagram.com/esnleonardokortrijk"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-12 h-12 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white group-hover:text-esn-cyan" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </div>
          </a>
          <a
            href="https://linktr.ee/esnleonardokortrijk"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 417 512.238"
                className="w-full h-full"
              >
                <path
                  fill="#43E660"
                  fillRule="nonzero"
                  d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"
                />
              </svg>
            </div>
          </a>
        </div>
        {/* Page content with top padding for header */}
        <div className="pt-32 font-kelson_sans">{children}</div>
      </body>
    </html>
  );
}