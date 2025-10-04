"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "@/data/navLinks.json";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative">
      {/* Hamburger for mobile */}
      <button
        className="lg:hidden flex items-center px-3 py-2 border rounded text-esn-dark-blue border-esn-dark-blue"
        onClick={() => setOpen(!open)}
        aria-label="Open navigation"
        aria-expanded={open}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Desktop nav (explicit Home + other links) */}
      <ul className="hidden lg:flex gap-6">
        {/* Explicit Home link so there's a visible button besides the logo */}
        <li key="/">
          {(() => {
            const active = isActive(pathname, "/");
            return (
              <Link
                href="/"
                aria-current={active ? "page" : undefined}
                className={`text-lg font-semibold transition ${
                  active ? "text-esn-cyan" : "text-esn-dark-blue hover:text-esn-cyan"
                }`}
              >
                Home
              </Link>
            );
          })()}
        </li>
        {navLinks.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-lg font-semibold transition ${
                  active ? "text-esn-cyan" : "text-esn-dark-blue hover:text-esn-cyan"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile nav dropdown */}
      {open && (
        <ul className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg flex flex-col z-50 lg:hidden">
          {/* Home link for mobile dropdown */}
          <li key="/">
            {(() => {
              const active = isActive(pathname, "/");
              return (
                <Link
                  href="/"
                  aria-current={active ? "page" : undefined}
                  className={`block px-4 py-2 transition ${
                    active ? "text-esn-cyan" : "text-esn-dark-blue hover:bg-esn-cyan/10"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              );
            })()}
          </li>
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`block px-4 py-2 transition ${
                    active ? "text-esn-cyan" : "text-esn-dark-blue hover:bg-esn-cyan/10"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}