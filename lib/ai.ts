// lib/ai.ts
import { createOpenAI } from "@ai-sdk/openai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

// 1. Setup OpenAI (Works for OpenRouter too!)
const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  // If using OpenRouter, uncomment this:
  // baseURL: "https://openrouter.ai/api/v1",
});

// 2. Setup Google (Gemini)
const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

// 3. Setup Local (Ollama via OpenAI compatibility)
const local = createOpenAI({
  baseURL: "http://localhost:11434/v1", // Standard Ollama port
  apiKey: "not-needed",
});

// Export a helper to pick the model based on ENV
export function getModel() {
  const provider = process.env.AI_PROVIDER || "openai";

  if (provider === "google") return google("gemini-2.5-flash");
  if (provider === "local") return local("llama3"); // Make sure you pulled this model

  // Default to OpenAI (or OpenRouter)
  return openai("gpt-5o-mini");
}
