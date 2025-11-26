"use client";

import { createJob } from "../actions";
import Link from "next/link";

export default function CreateJobPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">Add Target</h1>
          <p className="text-neutral-500 text-sm mt-1">Initialize a new career operation.</p>
        </div>
        
        <form action={createJob} className="space-y-5">
          
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-2">Company</label>
              <input 
                type="text" 
                name="company"
                className="w-full bg-[#111] border border-neutral-800 rounded-md p-3 text-sm text-white focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none placeholder-neutral-700 transition-all"
                placeholder="e.g. Pulse"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-2">Role</label>
              <input 
                type="text" 
                name="role"
                className="w-full bg-[#111] border border-neutral-800 rounded-md p-3 text-sm text-white focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none placeholder-neutral-700 transition-all"
                placeholder="e.g. Founding Engineer"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-2">Current Stage</label>
              <div className="relative">
                <select 
                  name="status"
                  className="w-full appearance-none bg-[#111] border border-neutral-800 rounded-md p-3 text-sm text-white focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none cursor-pointer"
                >
                  <option value="Applied">Applied</option>
                  <option value="Interviewing">Interviewing</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <Link 
              href="/" 
              className="flex-1 py-2.5 text-center rounded-md border border-neutral-800 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all text-xs font-bold uppercase tracking-wide"
            >
              Cancel
            </Link>
            <button 
              type="submit"
              className="flex-[2] py-2.5 rounded-md bg-white text-black text-xs font-bold uppercase tracking-wide hover:bg-neutral-200 transition-all"
            >
              Initialize Target
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}