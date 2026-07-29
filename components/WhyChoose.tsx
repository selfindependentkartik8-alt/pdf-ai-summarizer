export default function WhyChoose() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Generate AI summaries within seconds.",
    },
    {
      icon: "🔒",
      title: "Secure",
      desc: "Your PDF is processed safely and privately.",
    },
    {
      icon: "🤖",
      title: "Powered by Gemini AI",
      desc: "Accurate and intelligent summaries.",
    },
    {
      icon: "📄",
      title: "Simple & Easy",
      desc: "Upload, summarize and download in one click.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-20">

      <h2 className="text-4xl font-bold text-center text-white">
        Why Choose <span className="text-violet-400">KrishAIWorks?</span>
      </h2>

      <p className="text-center text-zinc-400 mt-4 mb-12">
        Smart AI tools designed to save your time and boost productivity.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-3xl border border-violet-500/20 bg-zinc-900/70 backdrop-blur-xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-violet-900/20"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>

            <h3 className="text-xl font-semibold text-white">
              {feature.title}
            </h3>

            <p className="text-zinc-400 mt-3 text-sm leading-6">
              {feature.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}