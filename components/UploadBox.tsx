"use client";

import { useState, useCallback } from "react";
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

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
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
      alert("Please upload a PDF first.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const response = await fetch(
        "https://krishaiworks.app.n8n.cloud/webhook/pdf-summary",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.summary) {
        setSummary(data.summary);
      } else {
        alert("No summary received.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };return (
    <div className="max-w-3xl mx-auto">
      <div
        {...getRootProps()}
        className={`rounded-3xl border backdrop-blur-xl cursor-pointer p-10 transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-violet-900/20 ${
          isDragActive
            ? "border-violet-500 bg-violet-500/10 scale-[1.02]"
            : "border-zinc-800 bg-zinc-900/60 hover:border-violet-500"
        }`}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-5xl transition-all duration-300 hover:scale-110">
            📄
          </div>

          <h2 className="mt-8 text-3xl font-bold text-white">
            Upload your PDF
          </h2>

          <p className="text-zinc-400 mt-3">
            Drag & Drop or Click to Upload
          </p>

          <button
            type="button"
            className="mt-8 bg-violet-600 hover:bg-violet-700 active:scale-95 transition-all duration-300 px-8 py-3 rounded-xl font-semibold text-white shadow-xl shadow-violet-700/30"
          >
            Choose PDF
          </button>
        </div>
      </div>

      {file && (
        <div className="mt-8 rounded-3xl border border-violet-500/20 bg-zinc-900/80 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-violet-900/20">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-white break-all">
                📄 {file.name}
              </p>

              <p className="text-zinc-400 mt-2">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>

            <button
              onClick={() => setFile(null)}
              className="bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-300 px-5 py-2 rounded-xl text-white font-medium"
            >
              Remove
            </button>
          </div>

          <button
            onClick={handleSummarize}
            className="mt-6 w-full bg-violet-600 hover:bg-violet-700 active:scale-95 transition-all duration-300 px-5 py-3 rounded-xl text-white font-semibold shadow-xl shadow-violet-700/30"
          >
            ✨ Summarize PDF
          </button>
        </div>
      )}
    </div>
  );
}