import Link from "next/link";
import partners from "@/data/partners.json";
import PartnersFilter from "@/components/PartnersFilter";

type Partner = {
    slug: string;
    title: string;
    subtitle?: string;
    img?: string; // e.g. "/images/partners/Howest.jpg"
    links?: Record<string, string>;
    content?: string; // optional markdown
};

export default function PartnersPage() {
    const list = (partners as Partner[]).slice().sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-10">
            <header className="mb-8">
                <h1 className="text-3xl font-extrabold text-esn-dark-blue">Partners</h1>
                <p className="mt-2 text-gray-600">Discover our local and academic partners.</p>
            </header>

            {/* Use client-side filter component for interactive filtering */}
            <PartnersFilter partners={list} />
        </div>
    );
}