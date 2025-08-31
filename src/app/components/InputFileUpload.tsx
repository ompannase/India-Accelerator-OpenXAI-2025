"use client";
import React, { useState } from "react";

export default function InputFileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [predictions, setPredictions] = useState<any[]>([]);
  const [status, setStatus] = useState("");

  // Handle file selection
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setPredictions([]);
      setStatus("");
    }
  };

  // Analyze image via backend
  const handleAnalyze = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    setStatus("Analyzing...");

    try {
      const res = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Analysis failed");

      const data = await res.json();
      setPredictions([data]); // backend returns {food, confidence}
      setStatus("Analysis complete ✅");
    } catch (err: any) {
      console.error(err);
      setStatus("Error: " + err.message);
    }
  };

  return (
    <div className="max-w-md w-full bg-gray-800 text-white rounded-xl shadow-lg p-6 border border-gray-700 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Upload & Analyze Meal</h2>

      {/* Image Preview */}
      {file && (
        <div className="mb-4 w-full flex justify-center">
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            className="max-h-40 rounded-lg border border-gray-600"
          />
        </div>
      )}

      {/* File input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="mb-4 w-full text-black"
      />

      {/* Analyze Button */}
      <button
        onClick={handleAnalyze}
        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-colors"
      >
        Analyze
      </button>

      {/* Status */}
      {status && <p className="mt-4">{status}</p>}

      {/* Predictions */}
      {predictions.length > 0 && (
        <div className="mt-6 bg-gray-700 p-4 rounded-lg w-full">
          <h3 className="text-xl font-semibold mb-2">Predictions:</h3>
          <ul className="list-disc list-inside">
            {predictions.map((item, idx) => (
              <li key={idx}>
                {item.food} — Confidence: {(item.confidence * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
