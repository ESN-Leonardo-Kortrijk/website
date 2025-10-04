"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type Partner = {
  slug: string;
  title: string;
  img?: string;
  affiliation?: string | null;
  category?: string | null;
  tags?: string[];
  promoted?: boolean;
  deal?: string;
  subtitle?: string;
};

export default function PartnersFilter({ partners }: { partners: Partner[] }) {
  const [filter, setFilter] = useState<string>("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: partners.length, Howest: 0, Vives: 0, Promoted: 0, Other: 0 };
    partners.forEach((p) => {
      if (p.affiliation === "Howest") c.Howest++;
      else if (p.affiliation === "Vives") c.Vives++;
      else c.Other++;
      if (p.promoted) c.Promoted++;
    });
    return c;
  }, [partners]);

  const filtered = partners.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Howest") return p.affiliation === "Howest";
    if (filter === "Vives") return p.affiliation === "Vives";
    if (filter === "Promoted") return !!p.promoted;
    if (filter === "Other") return !p.affiliation || (p.affiliation !== "Howest" && p.affiliation !== "Vives");
    return true;
  });

  const chips = [
    { key: "All", label: `All (${counts.All})` },
    { key: "Howest", label: `Howest (${counts.Howest})` },
    { key: "Vives", label: `Vives (${counts.Vives})` },
    { key: "Promoted", label: `Promoted (${counts.Promoted})` },
    { key: "Other", label: `Other (${counts.Other})` },
  ];

  return (
    <div>
      <div className="flex gap-2 flex-wrap mb-6">
        {chips.map((c) => (
          <button
            key={c.key}
            onClick={() => setFilter(c.key)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
              filter === c.key ? "bg-esn-cyan text-white" : "border border-gray-200 text-esn-dark-blue"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <Link key={p.slug} href={`/partners/${p.slug}`} className="group block rounded shadow p-4 bg-white">
            <div className="aspect-[16/9] bg-white mb-3 flex items-center justify-center">
              <img src={p.img || "/images/ESN_Leo_logo.png"} alt={p.title} className="max-w-full max-h-full" />
            </div>
            <h3 className="font-semibold text-esn-dark-blue">{p.title}</h3>
            {p.subtitle && <p className="text-sm text-gray-600">{p.subtitle}</p>}
            {p.deal && (
              <div className="mt-2 inline-block px-2 py-1 text-xs bg-esn-cyan/10 text-esn-dark-blue rounded">
                {p.deal}
              </div>
            )}
            {p.affiliation && <div className="mt-2 text-xs text-gray-400">Affiliation: {p.affiliation}</div>}
          </Link>
        ))}
      </div>
    </div>
  );
}
