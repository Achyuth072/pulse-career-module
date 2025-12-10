"use client";

import { useState } from "react";
import { generateDraft } from "../actions"; // Import the real Server Action

export default function DraftButton({ company, role }: { company: string, role: string }) {
  const [isDrafting, setIsDrafting] = useState(false);

  const handleDraft = async () => {
    setIsDrafting(true);
    
    try {
      // 1. Call the Server Action (Real AI)
      const result = await generateDraft(role, company);

      if (result.success && result.message) {
        // 2. Show the Real AI Response
        alert(
          `>> PULSE AGENT LOG [${new Date().toLocaleTimeString()}]\n\nACTION: GENERATE_DRAFT_EMAIL\nTARGET: ${company}\n----------------------------------\n\n${result.message}\n\n[STATUS: Draft saved to Outbox]`
        );
      } else {
        alert("Error: AI could not generate a draft at this time.");
      }
    } catch (error) {
      console.error("Draft failed", error);
      alert("System Error: Failed to connect to Agent.");
    } finally {
      setIsDrafting(false);
    }
  };

  return (
    <button 
      onClick={handleDraft}
      disabled={isDrafting}
      className={`
        group flex items-center gap-2 px-3 py-1.5 rounded-md border transition-all text-xs font-medium
        ${isDrafting 
          ? "bg-purple-900/20 border-purple-500/50 text-purple-400 cursor-not-allowed" 
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
          <span>Agent Thinking...</span>
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