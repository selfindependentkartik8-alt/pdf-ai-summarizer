export default function HowToUse() {

  const steps = [
    {
      number: "01",
      title: "Upload PDF",
      desc: "Choose any PDF document from your device.",
    },
    {
      number: "02",
      title: "AI Processing",
      desc: "Gemini AI reads and understands your document.",
    },
    {
      number: "03",
      title: "Get Summary",
      desc: "Receive a clear, concise AI-generated summary.",
    },
    {
      number: "04",
      title: "Copy or Download",
      desc: "Copy the summary or download it instantly.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-24">

      <h2 className="text-4xl font-bold text-center text-white">

        How to Use

      </h2>

      <p className="text-center text-zinc-400 mt-4 mb-14">

        Get your PDF summarized in just four simple steps.

      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {steps.map((step) => (

          <div
            key={step.number}
            className="rounded-3xl border border-violet-500/20 bg-zinc-900/70 backdrop-blur-xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-violet-900/20"
          >

            <div className="text-5xl font-bold text-violet-400">

              {step.number}

            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white">

              {step.title}

            </h3>

            <p className="mt-4 text-zinc-400 leading-7">

              {step.desc}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}