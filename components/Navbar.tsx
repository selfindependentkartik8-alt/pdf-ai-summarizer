import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 max-w-6xl mx-auto px-6">

      <div className="flex items-center justify-between rounded-2xl border border-violet-500/20 bg-zinc-900/70 backdrop-blur-xl px-6 py-4 shadow-xl shadow-violet-900/20">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <Image
            src="/logo.jpeg"
            alt="KrishAIWorks"
            width={45}
            height={45}
            className="rounded-xl"
          />

          <div>

            <h1 className="text-xl font-bold text-violet-300">
              KrishAIWorks
            </h1>

            <p className="text-xs text-zinc-400">
              AI Solutions That Work
            </p>

          </div>

        </div>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-8 text-zinc-300">

          <a
            href="#"
            className="hover:text-violet-300 transition duration-300"
          >
            Home
          </a>

          <a
            href="#how-to-use"
            className="hover:text-violet-300 transition duration-300"
          >
            How to Use
          </a>

          <a
            href="#faq"
            className="hover:text-violet-300 transition duration-300"
          >
            FAQ
          </a>

          <a
            href="https://instagram.com/krishaiworks"
            target="_blank"
            className="hover:text-violet-300 transition duration-300"
          >
            Instagram
          </a>

        </div>

      </div>

    </nav>
  );
}