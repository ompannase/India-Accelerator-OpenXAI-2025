import express from "express";
import multer from "multer";
import cors from "cors";
import { ClarifaiStub, grpc } from "clarifai-nodejs-grpc";

const app = express();
const PORT = 5000;

// Enable CORS for frontend
app.use(cors());

// Configure multer to store uploaded image in memory
const upload = multer({ storage: multer.memoryStorage() });

// Clarifai API credentials
const PAT = "045c5b6882c642dcb66e31285881f76a"; // your API key
const USER_ID = "clarifai";
const APP_ID = "main";
const MODEL_ID = "food-item-v1-recognition";

// Initialize Clarifai gRPC stub
const stub = ClarifaiStub.grpc();

// Metadata for authentication
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// Image analyze endpoint
app.post("/api/analyze", upload.single("image"), async (req, res) => {
  try {
    // Convert image buffer to base64
    const base64Image = req.file.buffer.toString("base64");

    // Send to Clarifai
    stub.PostModelOutputs(
      {
        user_app_id: { user_id: USER_ID, app_id: APP_ID },
        model_id: MODEL_ID,
        inputs: [
          {
            data: {
              image: { base64: base64Image },
            },
          },
        ],
      },
      metadata,
      (err, response) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "AI analysis failed" });
        }

        if (response.status.code !== 10000) {
          return res
            .status(500)
            .json({ error: "Post model outputs failed: " + response.status.description });
        }

        // Return top concepts
        const concepts = response.outputs[0].data.concepts;
        res.json(concepts);
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI analysis failed" });
  }
});

// Start backend server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
