import { db } from "@/lib/db";

export async function getJobs() {
  // Prisma automatically fetches and sorts by date
  const jobs = await db.jobApplication.findMany({
    orderBy: {
      dateApplied: "desc",
    },
  });

  return jobs;
}

export async function addJob(job: any) {
  // Prisma handles the ID creation (uuid) automatically
  await db.jobApplication.create({
    data: {
      companyName: job.companyName,
      role: job.role,
      status: job.status,
      aiAnalysis: job.aiAnalysis,
      dateApplied: new Date(), // Set current timestamp
    },
  });
}
