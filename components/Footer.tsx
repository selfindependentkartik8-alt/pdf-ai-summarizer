import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-violet-500/20 bg-zinc-950/60 backdrop-blur-xl">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo & Brand */}

          <div className="flex items-center gap-3">

            <Image
              src="/logo.jpeg"
              alt="KrishAIWorks"
              width={45}
              height={45}
              className="rounded-xl"
            />

            <div>

              <h2 className="text-xl font-bold text-violet-300">
                KrishAIWorks
              </h2>

              <p className="text-zinc-400 text-sm">
                AI Solutions That Work
              </p>

            </div>

          </div>

          {/* Links */}

          <div className="flex gap-6 text-zinc-400 text-sm">

            <a href="#" className="hover:text-violet-300 transition">
              Home
            </a>

            <a href="#how-to-use" className="hover:text-violet-300 transition">
              How to Use
            </a>

            <a href="#faq" className="hover:text-violet-300 transition">
              FAQ
            </a>

            <a
              href="https://instagram.com/krishaiworks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-300 transition"
            >
              @krishaiworks
            </a>

          </div>

        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center">

          <p className="text-zinc-500 text-sm">
            © 2026 KrishAIWorks. All Rights Reserved.
          </p>

          <p className="text-zinc-600 text-xs mt-2">
            Built with ❤️ using Next.js, n8n & Gemini AI
          </p>

        </div>

      </div>

    </footer>
  );
}