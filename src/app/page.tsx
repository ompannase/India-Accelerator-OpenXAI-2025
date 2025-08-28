 "use client";

import { useState } from "react";
import UploadForm from "./components/UploadForm";
import ResultCard from "./components/ResultCard";
import InputFileUpload from './components/InputFileUpload'; // adjust path

export default function Home() {
  const [result, setResult] = useState<any>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6"></h1>
      <InputFileUpload />
      <UploadForm onResult={setResult} />
      <ResultCard result={result} />
    </main>
  );
}
