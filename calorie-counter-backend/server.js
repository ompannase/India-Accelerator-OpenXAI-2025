import express from "express";
import multer from "multer"; // for handling image uploads
import cors from "cors";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/api/analyze", upload.single("image"), async (req, res) => {
  try {
    const base64Image = req.file.buffer.toString("base64");

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini", // vision-capable model
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "Estimate calories for this meal" },
            {
              type: "image_url",
              image_url: `data:image/jpeg;base64,${base64Image}`,
            },
          ],
        },
      ],
    });

    res.json({ result: response.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI analysis failed" });
  }
});

const app = express();
const PORT = 5000;

app.use(cors());

 
// Test route
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});
const upload = multer({ storage: multer.memoryStorage() });

// AI route
app.post("/api/analyze", upload.single("image"), async (req, res) => {
  try {
    const fileBuffer = req.file.buffer;

    // Here you will send fileBuffer to AI model/API
    // For now, mock response:
    res.json({
      food: "Pasta",
      calories: 420,
      confidence: 0.88,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI analysis failed" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
