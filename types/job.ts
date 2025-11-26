export interface JobApplication {
  id: string;
  companyName: string;
  role: string;
  status: "Applied" | "Interviewing" | "Offer" | "Rejected" | "Ghosted";
  dateApplied: Date;
  aiAnalysis?: string;
}