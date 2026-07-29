export default function Header() {
  return (
    <header className="text-center mb-14">

      <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-400 mb-8">

        🤖 Powered by Gemini AI

      </div>

      <div className="-mt-2 mb-6 text-center">
  <p className="text-[11px] text-violet-300 tracking-wide">
    Built by <span className="font-semibold text-violet-200">KrishAIWorks</span>
  </p>
</div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">

        PDF AI

        <span className="text-violet-400"> Summarizer</span>

      </h1>

      <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-8">

        Upload any PDF and get an instant AI-generated summary,
        key insights, important points and conclusions in seconds.

      </p>

    </header>
  );
}