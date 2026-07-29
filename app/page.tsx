"use client";

import { useState } from "react";

import Header from "../components/Header";
import UploadBox from "../components/UploadBox";
import LoadingCard from "../components/LoadingCard";
import SummaryCard from "../components/SummaryCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhyChoose from "../components/WhyChoose";
import HowToUse from "../components/HowToUse";
import FAQ from "../components/FAQ";

export default function Home() {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-violet-950 via-zinc-950 to-black">
      {/* Floating Background */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <Navbar />

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <Header />

        <UploadBox
          setSummary={setSummary}
          setLoading={setLoading}
        />

        {loading && <LoadingCard />}

        <SummaryCard summary={summary} />

        <WhyChoose />

        <HowToUse />

        <FAQ />

        <Footer />
      </section>
    </main>
  );
}