"use server"; // It tells Next.js "This runs on the server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addJob } from "@/lib/data";
import { JobApplication } from "@/types/job";

export async function createJob(formData: FormData) {
  // Extract data directly from the form
  const rawFormData = {
    company: formData.get("company") as string,
    role: formData.get("role") as string,
    status: formData.get("status"),
  };

  // Create the new Job object
  const newJob: JobApplication = {
    id: Date.now().toString(), // Simple unique ID
    companyName: rawFormData.company,
    role: rawFormData.role,
    status: rawFormData.status as JobApplication["status"], // Type casting
    dateApplied: new Date(),
  };

  await addJob(newJob);

  revalidatePath("/");

  redirect("/");
}