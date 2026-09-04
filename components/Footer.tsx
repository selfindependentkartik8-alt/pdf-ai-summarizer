"use client";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black px-4 py-12">
      <div className="mx-auto w-[94%] max-w-7xl">

        {/* =====================================================
            RELATED TOOLS
            ===================================================== */}
        <div className="mb-10">
          <div className="mb-7 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400/70">
              Explore More
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              More PDF & AI Tools
            </h3>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/40">
              Explore more useful tools from KrishAIWorks to work smarter
              with PDFs, documents, and AI.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* PDF Compressor */}
            <a
              href="https://pdfcompressor.krishaiworks.com/"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/30 hover:bg-red-400/[0.05]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/10 text-lg">
                📄
              </div>

              <h4 className="font-semibold text-white transition-colors group-hover:text-red-300">
                PDF Compressor
              </h4>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Compress PDF files and reduce their size quickly.
              </p>
            </a>

            {/* PDF Merger & Splitter */}
            <a
              href="https://pdfmergersplitter.krishaiworks.com/"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/30 hover:bg-red-400/[0.05]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/10 text-lg">
                📚
              </div>

              <h4 className="font-semibold text-white transition-colors group-hover:text-red-300">
                PDF Merger &amp; Splitter
              </h4>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Merge multiple PDFs or split documents into separate files.
              </p>
            </a>

            {/* PDF to JPG/PNG */}
            <a
              href="https://imageresizercompressor.krishaiworks.com/"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/30 hover:bg-red-400/[0.05]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/10 text-lg">
                🖼️
              </div>

              <h4 className="font-semibold text-white transition-colors group-hover:text-red-300">
                Image Resizer &amp; Compressor
              </h4>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Resize and compress images without complicated tools.
              </p>
            </a>

            {/* AI Study Assistant */}
            <a
              href="https://aistudyassistant.krishaiworks.com/"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/30 hover:bg-red-400/[0.05]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/10 text-lg">
                🎓
              </div>

              <h4 className="font-semibold text-white transition-colors group-hover:text-red-300">
                AI Study Assistant
              </h4>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Study smarter with AI-powered help for your learning.
              </p>
            </a>

          </div>
        </div>

        {/* =====================================================
            FOOTER BOTTOM
            ===================================================== */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">

          <div className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="KrishAIWorks"
              className="
                h-12
                w-12
                rounded-full
                border border-red-400/20
                object-cover
              "
            />

            <div>
              <p className="font-bold text-white">
                KrishAIWorks
              </p>

              <p className="text-xs text-white/35">
                AI Solutions That Work
              </p>
            </div>
          </div>

          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} KrishAIWorks. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}