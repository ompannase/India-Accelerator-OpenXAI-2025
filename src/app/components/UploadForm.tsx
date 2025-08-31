"use client";
import { useState } from "react";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("http://localhost:5000/api/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button type="submit">Analyze</button>
      </form>

      {result && (
        <div>
          <h2>Predictions:</h2>
          {result.map((item: any, idx: number) => (
            <div key={idx}>
              {item.name} — Confidence: {(item.value * 100).toFixed(2)}%
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
