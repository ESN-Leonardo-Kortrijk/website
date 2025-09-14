import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import partners from "@/data/partners.json";

type Partner = {
    slug: string;
    title: string;
    subtitle?: string;
    img?: string;
    date?: string;
    links?: Record<string, string>;
    content?: string; // optional markdown stored in JSON
};

function getPartner(slug: string): Partner | undefined {
    return (partners as Partner[]).find((p) => p.slug === slug);
}

export function generateStaticParams() {
    return (partners as Partner[]).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const p = getPartner(params.slug);
    if (!p) return { title: "Partner not found" };
    return { title: `${p.title} — Partner`, description: p.subtitle };
}

export default function PartnerPage({ params }: { params: { slug: string } }) {
    const p = getPartner(params.slug);
    if (!p) return notFound();

    const entries = Object.entries(p.links ?? {});

    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-10">
            <Link href="/partners" className="text-esn-dark-blue underline hover:text-esn-cyan">
                ← Back to partners
            </Link>

            <header className="mt-4 mb-8">
                <h1 className="text-3xl font-extrabold text-esn-dark-blue">{p.title}</h1>
                {p.subtitle && <p className="mt-2 text-gray-600">{p.subtitle}</p>}
                {p.date && <p className="text-sm text-gray-500 mt-1">{p.date}</p>}
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Logo / image (no border/shadow/background) */}
                <div className="lg:col-span-1 self-start">
                    <div className="relative aspect-[16/9] bg-transparent border-0 ring-0 shadow-none rounded-none">
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <img
                                src={p.img || "/images/ESN_Leo_logo.png"}
                                alt={p.title}
                                className="max-w-full max-h-full object-contain border-0 ring-0 shadow-none outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-2">
                    {entries.length > 0 && (
                        <div className="mb-6 flex flex-wrap gap-3">
                            {entries.map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 rounded-md border border-esn-dark-blue text-esn-dark-blue hover:bg-esn-dark-blue hover:text-white transition"
                                >
                                    {label.charAt(0).toUpperCase() + label.slice(1)}
                                </a>
                            ))}
                        </div>
                    )}

                    {p.content ? (
                        <article className="prose">
                            <ReactMarkdown>{p.content}</ReactMarkdown>
                        </article>
                    ) : (
                        <p className="text-gray-700">More information coming soon.</p>
                    )}
                </div>
            </div>
        </div>
    );
}