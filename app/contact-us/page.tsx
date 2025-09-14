export default function ContactUs() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-esn-dark-blue">Contact Us</h1>
        <p className="mt-3 text-lg text-gray-600">
          Questions about events, volunteering, the ESNcard, or partnerships? Reach out and we’ll get back to you.
        </p>
      </header>

      {/* Contact info + Socials + Form */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Info */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-esn-dark-blue mb-3">Get in touch</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              Email:{" "}
              <a
                href="mailto:esnleonardokortrijk@gmail.com"
                className="underline text-esn-dark-blue hover:text-esn-cyan"
              >
                esnleonardokortrijk@gmail.com
              </a>
            </li>
            <li>Response time: typically within 1–2 business days.</li>
          </ul>

          <h3 className="mt-6 text-xl font-semibold text-esn-dark-blue">Follow us</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="https://facebook.com/ErasmusatKortrijk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-[#1877F2] text-white hover:opacity-90 transition"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/esnleonardokortrijk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white hover:opacity-90 transition"
            >
              Instagram
            </a>
            <a
              href="https://linktr.ee/esnleonardokortrijk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md border border-esn-dark-blue text-esn-dark-blue hover:bg-esn-dark-blue hover:text-white transition"
            >
              Linktree
            </a>
          </div>
        </div>

        {/* Contact form (Formspree example) */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-esn-dark-blue mb-3">Send us a message</h2>
          <form
            action="https://formspree.io/f/xdkljqpb" // Replace with your Formspree ID
            method="POST"
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-esn-cyan"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-esn-cyan"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-esn-cyan"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-esn-cyan"
                placeholder="Write your message…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-esn-dark-blue text-white font-semibold hover:bg-esn-cyan transition"
            >
              Send message
            </button>
          </form>

          <p className="mt-3 text-xs text-gray-500">
            Prefer email? Write to{" "}
            <a
              href="mailto:esnleonardokortrijk@gmail.com"
              className="underline text-esn-dark-blue hover:text-esn-cyan"
            >
              esnleonardokortrijk@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}