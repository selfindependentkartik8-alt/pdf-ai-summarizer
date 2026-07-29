"use client";

import { useState } from "react";

export default function FAQ() {

  const faqs = [
    {
      question: "Is my PDF secure?",
      answer:
        "Yes. Your PDF is processed securely and is never permanently stored.",
    },
    {
      question: "Which AI model is used?",
      answer:
        "We use Google's Gemini AI to generate accurate summaries.",
    },
    {
      question: "Can I summarize large PDFs?",
      answer:
        "Yes. Large documents are supported, although processing may take a little longer.",
    },
    {
      question: "Is this tool free?",
      answer:
        "Yes. You can use the PDF AI Summarizer for free.",
    },
    {
      question: "Can I download my summary?",
      answer:
        "Absolutely. You can copy or download your AI-generated summary.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="max-w-4xl mx-auto mt-24">

      <h2 className="text-4xl font-bold text-center text-white">
        Frequently Asked Questions
      </h2>

      <p className="text-center text-zinc-400 mt-4 mb-10">
        Everything you need to know about our AI PDF Summarizer.
      </p>

      <div className="space-y-4">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="rounded-2xl border border-violet-500/20 bg-zinc-900/70 backdrop-blur-xl overflow-hidden"
          >

            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full flex justify-between items-center px-6 py-5 text-left text-white font-semibold hover:bg-violet-500/10 transition"
            >

              {faq.question}

              <span className="text-violet-300 text-xl">
                {open === index ? "−" : "+"}
              </span>

            </button>

            {open === index && (

              <div className="px-6 pb-6 text-zinc-400 leading-7">

                {faq.answer}

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}