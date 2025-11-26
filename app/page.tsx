import { getJobs } from "@/lib/data";
import Link from "next/link";
import DraftButton from "./components/DraftButton";

export default async function Home() {
  const jobs = await getJobs();

  return (
    <main className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER: Minimalist & Clean */}
        <div className="flex justify-between items-end mb-12 pb-6 border-b border-neutral-900">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Career Operations</h1>
            <p className="text-neutral-500 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Pulse Agent Active
            </p>
          </div>
          <Link 
            href="/create-job"
            className="group flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-semibold text-sm hover:bg-neutral-200 transition-all"
          >
            <span>Add Target</span>
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>

        {/* JOB GRID */}
        <div className="grid gap-4">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-[#0A0A0A] p-6 rounded-lg border border-neutral-900 hover:border-neutral-700 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg font-bold text-white tracking-wide">
                      {job.role}
                    </h2>
                    {/* STATUS PILL */}
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm ${
                      job.status === "Interviewing" ? "bg-purple-900/30 text-purple-400 border border-purple-900" :
                      job.status === "Offer" ? "bg-emerald-900/30 text-emerald-400 border border-emerald-900" :
                      job.status === "Rejected" ? "bg-red-900/30 text-red-400 border border-red-900" :
                      "bg-neutral-900 text-neutral-500 border border-neutral-800"
                    }`}>
                      {job.status}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-sm font-medium">{job.companyName}</p>
                </div>

                <DraftButton company={job.companyName} role={job.role} />
              </div>

              {/* DATA ROW */}
              <div className="flex items-center gap-6 text-xs text-neutral-600 font-mono border-t border-neutral-900/50 pt-4 mt-2">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span>{job.dateApplied.toLocaleDateString("en-US", { month: 'short', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  <span>{job.id.slice(0, 4)}...</span>
                </div>
              </div>

              {/* AI INSIGHT SECTION */}
              {job.aiAnalysis && (
                <div className="mt-4 pt-4 border-t border-neutral-900">
                  <div className="flex gap-3 text-sm">
                    <div className="mt-0.5 shrink-0">
                      {/* Pulse Icon */}
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-purple-500 font-bold block mb-1">Pulse Insight</span>
                      <p className="text-neutral-300 leading-relaxed text-xs">{job.aiAnalysis}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}