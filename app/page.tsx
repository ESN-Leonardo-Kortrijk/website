import Image from "next/image";
import Link from "next/link";
import partners from "@/data/partners.json";

type Partner = {
  slug: string;
  title: string;
  subtitle?: string;
  img?: string;
};

function pickRandom<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(n, copy.length));
}


export default async function Home() {
  // Random 3 partners from JSON
  const featuredPartners = pickRandom(partners as Partner[], 3);

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-esn-cyan/10 via-white to-esn-dark-blue/10 ring-1 ring-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-esn-dark-blue">
                Welcome to ESN Leonardo Kortrijk
              </h1>
              <p className="mt-4 text-gray-700">
                Join events, discover the city, and enjoy student benefits with the ESNcard.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/esncard"
                  className="px-5 py-3 rounded-md bg-esn-dark-blue text-white font-semibold hover:bg-esn-cyan transition"
                >
                  Get your ESNcard
                </Link>
                <Link
                  href="/calendar"
                  className="px-5 py-3 rounded-md border border-esn-dark-blue text-esn-dark-blue font-semibold hover:bg-esn-dark-blue hover:text-white transition"
                >
                  View calendar
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center">
              <Image
                src="/images/ESN_Leo_logo.png"
                alt="ESN Leonardo Kortrijk"
                width={360}
                height={360}
                className="h-48 w-auto md:h-64"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner highlights (random 3) with dynamic logo sizing */}
      <section className="mx-auto max-w-6xl px-4 mt-12 mb-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-esn-dark-blue">Our partners</h2>
          <Link href="/partners" className="text-esn-dark-blue underline hover:text-esn-cyan">
            View all
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featuredPartners.map((p) => (
            <Link
              key={p.slug}
              href={`/partners/${p.slug}`}
              className="group rounded-lg overflow-hidden shadow hover:shadow-md transition bg-white"
            >
              <div className="relative aspect-[16/9] bg-white">
                <div className="absolute inset-0 flex items-center justify-center p-2">
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
      </section>
    </main>
  );
}