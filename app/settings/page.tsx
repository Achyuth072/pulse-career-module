"use client";
import { saveResumeContext } from "./actions";
import { useState } from "react";
import Link from "next/link"; // 1. Import Link

export default function SettingsPage() {
  const [status, setStatus] = useState("Idle");

  async function handleSave(formData: FormData) {
    setStatus("Saving...");
    await saveResumeContext(formData);
    setStatus("Context Updated!");
    setTimeout(() => setStatus("Idle"), 2000);
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto">
        
        {/* 2. NEW: Back Button Row */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm font-medium group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Dashboard
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-2 tracking-tight">Agent Context</h1>
        <p className="text-neutral-500 mb-8">
          Paste your resume text here. The AI Agent uses this to personalize your emails.
        </p>
        
        <div className="bg-[#111] p-6 rounded-xl border border-neutral-800">
          <form action={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                Resume / Bio Text
              </label>
              <textarea 
                name="resumeText"
                rows={15}
                className="w-full bg-black border border-neutral-800 rounded-lg p-4 text-sm text-neutral-300 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none resize-none font-mono"
                placeholder="Paste your full resume content here..."
                required
              />
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="bg-white text-black px-6 py-2.5 rounded-md font-bold text-sm hover:bg-neutral-200 transition-colors"
              >
                {status === "Idle" ? "Save Context" : status}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}