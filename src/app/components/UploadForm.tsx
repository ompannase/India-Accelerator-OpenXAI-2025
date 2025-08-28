"use client";
import { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";

type Props = { onResult: (data: any) => void };

export default function UploadForm({ onResult }: Props) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

 const handleUpload = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

    try {
      const res = await fetch("http://localhost:5000/api/analyze", {
    method: "POST",
    body: formData,
  });
    const data = await res.json();
  console.log("AI result:", data);
     } catch (err) {
      console.error(err);
      alert("Backend not running");
    }
  };

  return (
    <div className="flex flex-col items-center">
      
    </div>
  );
  

}
