"use client";

import { useState } from "react";

export default function DraftButton({ company, role }: { company: string, role: string }) {
  const [isDrafting, setIsDrafting] = useState(false);

  const handleDraft = () => {
    setIsDrafting(true);
    // Simulate AI "Thinking" delay
    setTimeout(() => {
      setIsDrafting(false);
      alert(
        `>> PULSE AGENT LOG [${new Date().toLocaleTimeString()}]\n\nACTION: GENERATE_DRAFT_EMAIL\nTARGET: ${company}\n----------------------------------\n\nSubject: Follow-up on ${role} application\n\n"Dear Hiring Team,\n\nI am writing to reiterate my strong interest in the ${role} position. Having reviewed your recent shipping cadence, I believe my background in Next.js Server Actions and rapid prototyping aligns perfectly with your engineering culture..."\n\n[STATUS: Draft saved to Outbox]`
      );
    }, 1500);
  };

  return (
    <button 
      onClick={handleDraft}
      disabled={isDrafting}
      className={`
        group flex items-center gap-2 px-3 py-1.5 rounded-md border transition-all text-xs font-medium
        ${isDrafting 
          ? "bg-purple-900/20 border-purple-500/50 text-purple-400" 
          : "bg-[#111] border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900"
        }
      `}
    >
      {isDrafting ? (
        <>
          <svg className="animate-spin -ml-1 mr-1 h-3 w-3 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Drafting...</span>
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
          </svg>
          <span>Draft Follow-up</span>
        </>
      )}
    </button>
  );
}