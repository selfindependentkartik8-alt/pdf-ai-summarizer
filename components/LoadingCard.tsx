export default function LoadingCard() {
  return (
    <div className="max-w-3xl mx-auto mt-10 rounded-3xl border border-violet-500/20 bg-zinc-900/70 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-violet-900/20">

      <div className="flex items-center gap-5">

        <div className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center text-3xl animate-pulse shadow-xl shadow-violet-700/40">

          🤖

        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">

            AI is reading your PDF...

          </h2>

          <p className="text-zinc-400 mt-2">

            Gemini AI is analyzing your document and generating
            a smart summary.

          </p>

        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">

          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 animate-pulse"></div>

        </div>

      </div>

      {/* Skeleton */}

      <div className="mt-8 space-y-4">

        <div className="h-4 rounded-full bg-zinc-800 animate-pulse"></div>

        <div className="h-4 w-5/6 rounded-full bg-zinc-800 animate-pulse"></div>

        <div className="h-4 w-4/6 rounded-full bg-zinc-800 animate-pulse"></div>

        <div className="h-4 w-3/6 rounded-full bg-zinc-800 animate-pulse"></div>

      </div>

      <p className="text-center text-violet-300 mt-8 text-sm animate-pulse">

        Please wait a few seconds...

      </p>

    </div>
  );
}