"use client";
import { useState } from "react";
import navLinks from "@/data/navLinks.json";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Hamburger for mobile */}
      <button
        className="lg:hidden flex items-center px-3 py-2 border rounded text-esn-dark-blue border-esn-dark-blue"
        onClick={() => setOpen(!open)}
        aria-label="Open navigation"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Desktop nav */}
      <ul className="hidden lg:flex gap-6">
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-lg font-semibold text-esn-dark-blue hover:text-esn-cyan transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile nav dropdown */}
      {open && (
        <ul className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg flex flex-col z-50 lg:hidden">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-4 py-2 text-esn-dark-blue hover:bg-esn-cyan/10"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}