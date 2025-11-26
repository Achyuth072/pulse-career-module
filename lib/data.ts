import { JobApplication } from "@/types/job";
import fs from "fs/promises"; // Node.js File System (Promise version)
import path from "path";

// Define the path to our JSON file
// process.cwd() gets the root folder of your project
const DB_PATH = path.join(process.cwd(), "jobs.json");

// 1. FETCH JOBS (Read from file)
export async function getJobs(): Promise<JobApplication[]> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    // We need to parse the dates back from strings to Date objects
    const jobs = JSON.parse(data);
    
    // Fix Date objects (JSON stores dates as strings)
    return jobs.map((job: any) => ({
      ...job,
      dateApplied: new Date(job.dateApplied)
    }));
  } catch (error) {
    // If file doesn't exist, return empty array
    return [];
  }
}

// 2. ADD JOB (Write to file)
export async function addJob(newJob: JobApplication) {
  // Get current jobs
  const jobs = await getJobs();
  
  // Add new job to the list
  jobs.push(newJob);
  
  // Save back to file (pretty print with 2 spaces)
  await fs.writeFile(DB_PATH, JSON.stringify(jobs, null, 2));
}