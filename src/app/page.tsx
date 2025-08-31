"use client";
import React from "react";
import InputFileUpload from "./components/InputFileUpload";
 
 


export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center pt-24">
      <h1 className="text-5xl font-bold mb-6">Calorie Counter</h1>
      <p className="text-center max-w-xl mb-10">
        Upload a photo of your meal and get calorie predictions instantly!
      </p>

      <InputFileUpload />
    </main>
  );
}
