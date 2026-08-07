"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

type UploadBoxProps = {
  setSummary: (summary: string) => void;
  setLoading: (loading: boolean) => void;
};

export default function UploadBox({
  setSummary,
  setLoading,
}: UploadBoxProps) {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setError("");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });

  const handleSummarize = async () => {
    if (!file) {
      setError("Please upload a PDF first.");
      return;
    }

    setLoading(true);
    setSummary("");
    setError("");

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to generate smart notes."
        );
      }

      if (!data.summary) {
        throw new Error("No summary received.");
      }

      setSummary(data.summary);
    } catch (error) {
      console.error("PDF summarization error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong while generating the summary."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-0">

      {/* Upload Box */}
      <div
        {...getRootProps()}
        className={`rounded-3xl border backdrop-blur-xl cursor-pointer p-6 sm:p-10 transition-all duration-300 shadow-2xl shadow-violet-900/20 ${
          isDragActive
            ? "border-violet-500 bg-violet-500/10 scale-[1.01]"
            : "border-zinc-800 bg-zinc-900/60 hover:border-violet-500"
        }`}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center text-center">

          {/* Icon */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-4xl sm:text-5xl transition-all duration-300 hover:scale-110">
            📄
          </div>

          <h2 className="mt-6 sm:mt-8 text-2xl sm:text-3xl font-bold text-white">
            Upload your PDF
          </h2>

          <p className="text-zinc-400 mt-3 text-sm sm:text-base">
            Drag & Drop or Click to Upload
          </p>

          <p className="text-zinc-600 text-xs mt-2">
            PDF files only
          </p>

          {/* Choose Button */}
          <button
            type="button"
            className="mt-7 sm:mt-8 bg-violet-600 hover:bg-violet-700 active:scale-95 transition-all duration-300 px-7 sm:px-8 py-3 rounded-xl font-semibold text-white shadow-xl shadow-violet-700/30"
          >
            Choose PDF
          </button>

        </div>
      </div>

      {/* Selected File */}
      {file && (
        <div className="mt-6 sm:mt-8 rounded-3xl border border-violet-500/20 bg-zinc-900/80 backdrop-blur-xl p-5 sm:p-6 shadow-2xl shadow-violet-900/20">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="min-w-0">
              <p className="font-semibold text-white break-all">
                📄 {file.name}
              </p>

              <p className="text-zinc-400 mt-2 text-sm">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setFile(null);
                setError("");
                setSummary("");
              }}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-300 px-5 py-2.5 rounded-xl text-white font-medium"
            >
              Remove
            </button>

          </div>

          {/* Generate Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleSummarize();
            }}
            className="mt-6 w-full bg-violet-600 hover:bg-violet-700 active:scale-[0.99] transition-all duration-300 px-5 py-3.5 rounded-xl text-white font-semibold shadow-xl shadow-violet-700/30"
          >
            ✨ Generate Smart Notes
          </button>

        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-5 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300 text-sm sm:text-base">
          ❌ {error}
        </div>
      )}

    </div>
  );
}