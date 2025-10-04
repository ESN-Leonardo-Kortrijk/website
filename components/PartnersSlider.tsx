"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type Partner = {
    slug: string;
    title: string;
    subtitle?: string;
    img?: string;
};

export default function PartnersSlider({ partners }: { partners: Partner[] }) {
    const [startIndex, setStartIndex] = useState(0);
    const [visible, setVisible] = useState(3);
    const [isPaused, setIsPaused] = useState(false);
    const total = partners.length;

    useEffect(() => {
        function update() {
            const w = window.innerWidth;
            setVisible(w >= 768 ? 3 : 1);
        }
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => {
        if (isPaused || total <= 1) return;
        const t = window.setInterval(() => setStartIndex((s) => (s + 1) % total), 3000);
        return () => window.clearInterval(t);
    }, [isPaused, total]);

    if (total === 0) return null;

    const prev = () => setStartIndex((s) => (s - 1 + total) % total);
    const next = () => setStartIndex((s) => (s + 1) % total);

    // compute visible slice
    const items = Array.from({ length: Math.min(visible, total) }).map((_, i) => partners[(startIndex + i) % total]);

    return (
        <div
            className="w-full rounded-lg bg-white p-4 md:p-6 shadow"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="flex items-center gap-3">
                <button aria-label="Previous" onClick={prev} className="p-2 md:p-3 rounded-full hover:bg-gray-100">
                    ‹
                </button>

                <div className="flex gap-6 flex-1 justify-center">
                    {items.map((p) => (
                        <Link key={p.slug} href={`/partners/${p.slug}`} className="flex-1 text-center">
                            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto flex items-center justify-center overflow-hidden bg-white">
                                <img src={p.img || "/images/ESN_Leo_logo.png"} alt={p.title} className="max-w-full max-h-full object-contain" />
                            </div>
                            <h3 className="text-base md:text-lg font-semibold text-esn-dark-blue mt-3">{p.title}</h3>
                            {p.subtitle && <p className="text-sm text-gray-600 mt-1">{p.subtitle}</p>}
                        </Link>
                    ))}
                </div>

                <button aria-label="Next" onClick={next} className="p-2 md:p-3 rounded-full hover:bg-gray-100">
                    ›
                </button>
            </div>
        </div>
    );
}
