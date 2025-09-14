import Link from "next/link";
import partners from "@/data/partners.json";

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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((p) => (
                    <Link
                        key={p.slug}
                        href={`/partners/${p.slug}`}
                        className="group rounded-lg border overflow-hidden shadow hover:shadow-md transition bg-white"
                    >
                        <div className="relative aspect-[16/9] bg-white">
                            <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
                                <img
                                    src={p.img || "/images/ESN_Leo_logo.png"}
                                    alt={p.title}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-esn-dark-blue group-hover:text-esn-cyan transition">
                                {p.title}
                            </h3>
                            {p.subtitle && <p className="text-sm text-gray-600 mt-1">{p.subtitle}</p>}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}