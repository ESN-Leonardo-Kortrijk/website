const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf8Kho_f6zAQ6g3BiX8dQHEclCRvNC_5ZfgoFfDjHUKmbfvsw/viewform?embedded=true";

export default function ESNcard() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-esn-dark-blue">ESNcard</h1>
        <p className="mt-3 text-lg text-gray-600">
          Your key to student discounts, events, and the ESN community across Europe.
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Official website:{" "}
          <a
            href="https://esncard.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-esn-dark-blue hover:text-esn-cyan"
          >
            esncard.org
          </a>
        </p>
      </header>

      {/* Info */}
      <section className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-2xl font-bold text-esn-dark-blue mb-3">What is the ESNcard?</h2>
        <p className="text-gray-700">
          The ESNcard is a membership card for international and local students. It gives access to
          ESN events, local partner deals, and discounts with ESN partners across Europe.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-esn-dark-blue">Benefits</h3>
        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• Discounts at ESN partner venues in Kortrijk</li>
          <li>• Reduced prices for ESN events Partners</li>
          <li>• Access to ESN network perks across Europe</li>
          <li>• Valid for 12 months from activation</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-esn-dark-blue">How to get one</h3>
        <ol className="mt-3 list-decimal list-inside space-y-2 text-gray-700">
        <li>Fill in the request form below.</li>
        <li>We will contact you to arrange pickup and activation.</li>
        <li>
            Payment is done during pickup.
            <ul className="mt-2 list-disc list-inside pl-6 space-y-1">
            <li>Unless done through bank transfer.</li>
            <li>In this case pickup will be done after payment confirmation.</li>
            </ul>
        </li>
        <li>Activate your card online to start using it.</li>
        </ol>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={FORM_URL.replace("embedded=true", "usp=header")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-esn-dark-blue text-white font-semibold hover:bg-esn-cyan transition"
          >
            Open form in new tab
          </a>
          <a
            href="https://esncard.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-esn-dark-blue text-esn-dark-blue font-semibold hover:text-white hover:bg-esn-dark-blue transition"
          >
            Visit esncard.org
          </a>
        </div>
      </section>

      {/* Embedded Google Form */}
      <section className="bg-white rounded-lg shadow p-2">
        <iframe
          src={FORM_URL}
          title="ESNcard Request Form"
          className="w-full min-h-[900px] rounded-md"
          style={{ border: 0 }}
          loading="lazy"
        />
        <div className="text-sm text-gray-500 px-4 py-3">
          If the form does not load,{" "}
          <a
            href={FORM_URL.replace("embedded=true", "usp=header")}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-esn-dark-blue hover:text-esn-cyan"
          >
            open it in a new tab
          </a>
          .
        </div>
      </section>
    </div>
  );
}